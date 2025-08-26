import { ActivityPageData } from "./types";

export const hoaKyLanData: ActivityPageData = {
    meta: {
        title: "Hỏa Kỳ Lân - Kiếm Thế Thần Kiếm",
        description: "Lịch và phần thưởng Hỏa Kỳ Lân trong Kiếm Thế Thần Kiếm",
    },
    headerTitle: "Hỏa Kỳ Lân",
    scheduleTitle: "Thời gian & Quy định",
    schedule: [
        "Hỏa Kỳ Lân (mở giới hạn 109)",
        "Đẳng cấp tối thiểu 100 (Trong top 500 tài phú)",
        "Thứ 2 hàng tuần, Boss xuất hiện ở cuối Tần Lăng 1",
        "Mỗi ngày người chơi có tối đa 2 tiếng trong Tần Lăng, không cộng dồn",
        "Mỗi bang hội được phép tham gia tối đa 150 thành viên",
        "Trong thời gian HKL 22:00 – 23:30: chỉ thành viên đã đăng ký mới có thể vào Tần Lăng",
        "22:00: tất cả nhân vật đang ở Tần Lăng sẽ được đưa về thành",
        "Nếu 30s-1 phút không gây sát thương lên HKL, phần trăm sát thương sẽ reset về 0",
        "Bảng xếp hạng sát thương cập nhật mỗi khi HKL thay đổi 1% HP; thay đổi xếp hạng sẽ thông báo trên Kênh Hệ Thống",
    ],
    rewardTiers: [
        {
            milestone: "Kết Liễu",
            rewards: [
                { type: "special", text: "Danh hiệu + Vòng sáng: Kết Liễu BOSS (7 Ngày)" },
                { type: "special", text: "5 Hòa Thị Ngọc (Không Khóa)" },
                { type: "currency", text: "200 vạn đồng" },
                { type: "special", text: "100 vạn mốc nạp" },
                { type: "currency", text: "7 Huyền Tinh Cấp 8 (Không khóa)" },
                { type: "currency", text: "7 Huyền Cấp 7 (Không khóa)" },
                { type: "currency", text: "15 Huyền Tinh Cấp 6 (Không khóa)" },
                { type: "special", text: "1 Thú cưỡi Tử Hà Phong Tôn – Huyễn (Không khóa, HSD 7 ngày)" },
                {
                    type: "stats", stats: [
                        "+10.000 điểm tài phú",
                        "Tốc độ di chuyển +150%",
                        "Kháng tất cả +100 điểm",
                        "Né tránh +100",
                        "Sinh lực tối đa +1000 điểm",
                        "Thể lực tối đa +150 điểm",
                        "Di hình hoán ảnh cấp +1",
                        "Phát huy lực tấn công cơ bản +10%",
                        "Chịu sát thương chí mạng -10%",
                        "Hiệu suất phục hồi sinh lực +10%",
                        "Kỹ năng đồng hành, Kỹ năng phái +1",
                    ]
                },
            ],
            active: true,
        },
        {
            milestone: "Bang Hội",
            rewards: [
                { type: "currency", text: "200 Tiền Du Long" },
                { type: "currency", text: "200 vạn Bạc Khóa" },
                { type: "special", text: "100 vạn mốc nạp" },
                { type: "currency", text: "100 vạn Đồng Khóa" },
                { type: "currency", text: "2 Huyền Tinh Cấp 8 (khoá)" },
            ],
            active: false,
        },
    ],
};


