@echo off
setlocal enabledelayedexpansion

:: ====================================================================
:: === Cấu hình và Logging
:: ====================================================================

set "LOGFILE=deploy.log"
set "NODE_ENV=production"

:: Hàm để ghi log
:log_message
echo [%time%] %~1
echo [%time%] %~1 >> "%LOGFILE%"
goto :eof

:: Hàm để kiểm tra quyền admin
:check_admin
net session >nul 2>&1
if %errorlevel% neq 0 (
    call :log_message "Cảnh báo: Script không chạy với quyền Admin. Một số lệnh có thể thất bại."
    call :log_message "Ví dụ: 'pm2 startup' cần quyền Admin để tự động khởi động cùng Windows."
    set "HAS_ADMIN=false"
) else (
    set "HAS_ADMIN=true"
)
goto :eof

call :log_message "Bắt đầu quá trình triển khai Next.js..."
call :log_message "Ghi log vào %LOGFILE%"

set "START_TIME=%time%"
call :check_admin

:: ====================================================================
:: === Bước 1: Lấy thông tin từ file .env và package.json
:: ====================================================================

call :log_message "=== Bước 1: Lấy thông tin từ file .env và package.json ==="

:: Lấy tên domain từ file .env và xử lý BOM, CRLF, spaces, quotes
set "DOMAIN="
for /f "tokens=1,* delims==" %%i in ('findstr /r "^DOMAIN=" .env 2^>nul') do (
    set "DOMAIN=%%j"
    set "DOMAIN=!DOMAIN:ï»¿=!"
    for /f "tokens=* delims= " %%k in ("!DOMAIN!") do set "DOMAIN=%%k"
    set "DOMAIN=!DOMAIN:^"!=!"
    if defined DOMAIN set "DOMAIN=!DOMAIN: =!"
    if "!DOMAIN:~-1!" equ "=" set "DOMAIN=!DOMAIN:~0,-1!"
)
if "!DOMAIN!"=="" (
    call :log_message "Lỗi: Không tìm thấy DOMAIN trong file .env hoặc giá trị không hợp lệ."
    exit /b 1
)
call :log_message "Đã tìm thấy DOMAIN: !DOMAIN!"

:: Lấy port từ file .env hoặc package.json
set "PORT="
for /f "tokens=1,* delims==" %%i in ('findstr /r "^PORT=" .env 2^>nul') do (
    set "PORT=%%j"
    set "PORT=!PORT:ï»¿=!"
    for /f "tokens=* delims= " %%k in ("!PORT!") do set "PORT=%%k"
    set "PORT=!PORT:^"!=!"
    if defined PORT set "PORT=!PORT: =!"
)

if "!PORT!"=="" (
    findstr /r "next dev.*-p[0-9]" package.json >nul 2>&1
    if %errorlevel% equ 0 (
        for /f "tokens=*" %%a in ('findstr /r "next dev.*-p" package.json') do (
            set "PORT_LINE=%%a"
            for /f "tokens=2" %%b in ("!PORT_LINE:* -p =!") do (
                set "PORT=%%b"
                goto :port_found
            )
        )
    )
)

:port_found
if "!PORT!"=="" (
    call :log_message "Cảnh báo: Không tìm thấy PORT trong file .env hoặc package.json. Tự động gán port 3000."
    call :log_message "Để đảm bảo, bạn nên thêm PORT=!PORT! vào file .env."
    set "PORT=3000"
)
call :log_message "Đã tìm thấy PORT: !PORT!"

:: Kiểm tra port đã được sử dụng chưa
netstat -an | findstr /c:":!PORT!" >nul 2>&1
if %errorlevel% equ 0 (
    call :log_message "Lỗi: Port !PORT! đã được sử dụng. Vui lòng giải phóng port này và chạy lại script."
    exit /b 1
)

:: Lấy email từ file .env
set "EMAIL="
for /f "tokens=1,* delims==" %%i in ('findstr /r "^EMAIL=" .env 2^>nul') do (
    set "EMAIL=%%j"
    set "EMAIL=!EMAIL:ï»¿=!"
    for /f "tokens=* delims= " %%k in ("!EMAIL!") do set "EMAIL=%%k"
    set "EMAIL=!EMAIL:^"!=!"
    if defined EMAIL set "EMAIL=!EMAIL: =!"
)
if "!EMAIL!"=="" (
    call :log_message "Lỗi: Không tìm thấy EMAIL trong file .env."
    exit /b 1
)
call :log_message "Đã tìm thấy EMAIL: !EMAIL!"

:: ====================================================================
:: === Bước 2: Dọn dẹp và Cài đặt
:: ====================================================================

call :log_message "=== Bước 2: Dọn dẹp và Cài đặt ==="

:: Sử dụng pushd/popd để xử lý các đường dẫn có khoảng trắng
pushd "%~dp0" || (
    call :log_message "Lỗi: Không thể chuyển đến thư mục gốc của script."
    exit /b 1
)

:: Xóa bản sao lưu cũ để tránh xung đột
if exist .next_backup rmdir /s /q .next_backup

:: Sao lưu thư mục .next trước khi xóa
if exist .next (
    call :log_message "Sao lưu thư mục .next thành .next_backup..."
    xcopy /E /I /Y .next .next_backup >nul 2>nul
    if %errorlevel% neq 0 (
        call :log_message "Lỗi: Sao lưu thất bại. Dừng script để tránh mất dữ liệu."
        popd
        exit /b 1
    )
)

:: Xóa .next và node_modules
if exist .next (
    call :log_message "Xóa thư mục .next..."
    rmdir /s /q .next
)
if exist node_modules (
    call :log_message "Xóa thư mục node_modules..."
    rmdir /s /q node_modules
)
call :log_message "Hoàn thành việc dọn dẹp."

:: Cài đặt lại các package
call :log_message "Cài đặt lại các package..."
npm install
if %errorlevel% neq 0 (
    call :log_message "Lỗi: Cài đặt package thất bại. Đang khôi phục từ bản sao lưu..."
    if exist .next_backup (
        xcopy /E /I /Y .next_backup .next >nul 2>nul
        call :log_message "Đã khôi phục thành công."
        rmdir /s /q .next_backup
    )
    popd
    exit /b 1
)

:: ====================================================================
:: === Bước 3: Build và Cấu hình PM2
:: ====================================================================

call :log_message "=== Bước 3: Build và Cấu hình PM2 ==="

:: Build lại project
call :log_message "Build lại project Next.js..."
npm run build
if %errorlevel% neq 0 (
    call :log_message "Lỗi: Build project thất bại. Đang khôi phục từ bản sao lưu..."
    if exist .next_backup (
        xcopy /E /I /Y .next_backup .next >nul 2>nul
        call :log_message "Đã khôi phục thành công."
        rmdir /s /q .next_backup
    )
    popd
    exit /b 1
)

:: Kiểm tra và cài đặt PM2
pm2 --version >nul 2>nul
if %errorlevel% neq 0 (
    call :log_message "PM2 không được cài đặt. Tiến hành cài đặt..."
    npm install -g pm2
    if %errorlevel% neq 0 ( call :log_message "Lỗi: Cài đặt pm2 thất bại." && popd && exit /b 1 )
) else (
    call :log_message "PM2 đã được cài đặt."
)

:: Sử dụng tên ứng dụng PM2 dựa trên domain
set "APP_NAME=!DOMAIN!_nextjs"
call :log_message "Tên ứng dụng PM2: !APP_NAME!"

:: Cấu hình và khởi chạy PM2
if not exist ecosystem.config.js (
    call :log_message "Không tìm thấy file cấu hình pm2, tạo file mặc định..."
    (
    echo module.exports = {
    echo   apps : [{
    echo     name: "!APP_NAME!",
    echo     script: "npm",
    echo     args: ["start", "--", "-p", "!PORT!"],
    echo     env: {
    echo       NODE_ENV: "production"
    echo     }
    echo   }]
    echo };
    ) > ecosystem.config.js
    call :log_message "Đã tạo file ecosystem.config.js."
)

pm2 describe !APP_NAME! >nul 2>nul
if %errorlevel% equ 0 (
    call :log_message "PM2 đã có process cho project này. Đang restart..."
    pm2 restart !APP_NAME!
) else (
    call :log_message "PM2 chưa có process. Đang khởi chạy mới..."
    pm2 start ecosystem.config.js --name !APP_NAME!
)
if %errorlevel% neq 0 ( call :log_message "Lỗi: Khởi chạy project với PM2 thất bại." && popd && exit /b 1 )

:: Cấu hình pm2-windows-startup
call :log_message "Cấu hình pm2-windows-startup..."
if "!HAS_ADMIN!"=="false" (
    call :log_message "CẢNH BÁO NGHIÊM TRỌNG: PM2 startup thất bại!"
    call :log_message "Ứng dụng sẽ KHÔNG tự động khởi động sau khi restart server!"
    call :log_message "Để fix: Chạy script này với quyền Administrator."
    set /p "continue=Bạn có muốn tiếp tục không? (y/N): "
    if /i not "!continue!"=="y" (
        popd
        exit /b 1
    )
) else (
    pm2 startup
    if %errorlevel% neq 0 (
        call :log_message "Cảnh báo: Cấu hình pm2 startup thất bại."
    ) else (
        pm2 save
        call :log_message "Đã lưu cấu hình PM2."
    )
)

:: ====================================================================
:: === Bước 4: Cấu hình và Khởi động Caddy
:: ====================================================================

call :log_message "=== Bước 4: Cấu hình và Khởi động Caddy ==="

pushd "Caddy" || (
    call :log_message "Lỗi: Không tìm thấy thư mục Caddy. Vui lòng tạo thư mục và đặt Caddy.exe vào."
    popd
    exit /b 1
)

:: Kiểm tra Caddy.exe
if not exist Caddy.exe (
    call :log_message "Lỗi: Không tìm thấy Caddy.exe trong thư mục hiện tại."
    popd
    exit /b 1
)

:: Tạo Caddyfile nếu chưa có
if not exist Caddyfile (
    call :log_message "Không tìm thấy Caddyfile. Bắt đầu tạo file..."
    (
    echo {
    echo   email !EMAIL!
    echo }
    echo.
    echo !DOMAIN! {
    echo   redir https://www.!DOMAIN!{uri} permanent
    echo }
    echo.
    echo www.!DOMAIN! {
    echo   encode zstd gzip
    echo   reverse_proxy 127.0.0.1:!PORT!
    echo.
    echo   header {
    echo     Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
    echo     X-Content-Type-Options "nosniff"
    echo     Referrer-Policy "strict-origin-when-cross-origin"
    echo     Permissions-Policy "geolocation=(), microphone=(), camera=()"
    echo   }
    echo }
    ) > Caddyfile
    call :log_message "Đã tạo Caddyfile mới."
)

:: Kiểm tra DNS
call :log_message "Kiểm tra DNS cho !DOMAIN!..."
nslookup !DOMAIN! >nul 2>&1
if %errorlevel% neq 0 (
    call :log_message "Cảnh báo: Lệnh nslookup thất bại, thử lại bằng ping."
    ping -n 1 !DOMAIN! >nul 2>&1
    if %errorlevel% neq 0 (
        call :log_message "Lỗi nghiêm trọng: Không thể resolve domain !DOMAIN!. Vui lòng kiểm tra DNS."
        popd
        exit /b 1
    )
)
call :log_message "DNS đã được cấu hình."

:: Validate Caddyfile
call :log_message "Kiểm tra cú pháp Caddyfile..."
caddy.exe validate --config Caddyfile
if %errorlevel% neq 0 (
    call :log_message "Lỗi: Caddyfile không hợp lệ."
    popd
    exit /b 1
)

:: Kiểm tra và chạy lại Caddy
tasklist | findstr /i "caddy.exe" >nul
if %errorlevel% equ 0 (
    call :log_message "Caddy đang chạy. Dừng tiến trình..."
    taskkill /f /im caddy.exe >nul 2>&1
) else (
    call :log_message "Caddy không chạy. Bắt đầu chạy..."
)

caddy.exe start --config Caddyfile
if %errorlevel% neq 0 (
    call :log_message "Lỗi: Khởi động Caddy thất bại."
    popd
    exit /b 1
)
popd

:: Kiểm tra trạng thái Caddy sau khi khởi động
call :log_message "Kiểm tra trạng thái Caddy và chứng chỉ SSL..."
timeout /t 5 /nobreak >nul
curl -k https://localhost >nul 2>&1
if %errorlevel% neq 0 (
    call :log_message "Cảnh báo: Caddy có thể chưa hoạt động hoặc cấu hình HTTPS gặp vấn đề."
    call :log_message "Vui lòng kiểm tra log Caddy để biết thêm chi tiết."
) else (
    call :log_message "Caddy đã hoạt động thành công."
)

:: ====================================================================
:: === Kết thúc
:: ====================================================================

:: Xóa thư mục sao lưu
if exist .next_backup (
    call :log_message "Xóa thư mục sao lưu .next_backup..."
    rmdir /s /q .next_backup
)

call :log_message "Quá trình triển khai hoàn tất!"
call :log_message "Website của bạn đã được triển khai và Caddy đang chạy."

set "END_TIME=%time%"
call :log_message "Bắt đầu triển khai: %START_TIME%"
call :log_message "Kết thúc triển khai: %END_TIME%"
pause
exit /b 0
