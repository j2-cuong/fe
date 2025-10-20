import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  User,
  Tag,
  Gift,
  Star,
  GiftIcon,
  Coins,
  Users,
  AlertCircle,
  Info,
} from "lucide-react";
import { GameNavigation } from "@/components/game-navigation";

export const metadata: Metadata = {
  title: "Thông Báo Chính Sách Hỗ Trợ Người Chơi - Kiếm Thế Thần Kiếm",
  description:
    "Chính sách hỗ trợ đặc biệt dành cho người chơi mới và cũ trong Kiếm Thế Thần Kiếm",
};

export default function ChinhSachHoTroPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <GameNavigation />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/tin-tuc">
          <Button variant="ghost" className="mb-6 group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Quay lại tin tức
          </Button>
        </Link>

        <article className="rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg bg-white">
          <header className="mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl  font-bold text-gray-900 mb-4 leading-tight">
              🎉 KIẾM THẾ THẦN KIẾM - THÔNG BÁO CHÍNH SÁCH HỖ TRỢ NGƯỜI CHƠI 🎉
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-blue-500" />
                <span className="text-red-500">Administrator</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-red-500" />
                <span>05/10/2025 trở đi</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tag className="h-4 w-4 text-yellow-500" />
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                  Chính sách
                </span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            {/* Giới thiệu */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-8">
              <h3 className="font-bold text-blue-800 flex items-center gap-2 mb-2">
                <Info className="h-5 w-5" /> Thông báo:
              </h3>
              <p className="text-blue-700">
                📢 Nhằm tạo điều kiện cho tân thủ dễ dàng tham gia trải nghiệm,
                đồng thời đảm bảo công bằng cho cộng đồng game thủ cũ, BQT Kiếm
                Thế Thần Kiếm chính thức công bố chính sách hỗ trợ đặc biệt:
              </p>
            </div>

            {/* Đối tượng áp dụng */}
            <h2 className="text-xl sm:text-2xl  font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Users className="h-6 w-6 text-blue-500 flex-shrink-0" />
              ĐỐI TƯỢNG ÁP DỤNG
            </h2>

            <div className="grid gap-6 mb-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                <ul className="space-y-3 !text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✅</span>
                    <span>Áp dụng cho toàn bộ Tài khoản (mới & cũ)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 font-bold mr-2">❌</span>
                    <span>
                      Loại bỏ toàn bộ code cũ: Code FC, Code Báo Danh, Code
                      LikeShare, Code Đền Bù, Hỗ Trợ...
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Hỗ trợ Tài khoản cũ */}
            <h2 className="text-xl sm:text-2xl  font-bold text-gray-900 mb-6 flex flex-wrap items-center gap-2">
              <Gift className="h-6 w-6 text-pink-500 flex-shrink-0" />
              <span>HỖ TRỢ DÀNH CHO TÀI KHOẢN CŨ</span>{" "}
              <span className="text-sm sm:text-base">
                (Liên hệ{" "}
                <span className="text-red-500 font-bold">Administrator</span> để
                nhận code)
              </span>
            </h2>

            <div className="grid gap-6 mb-8">
              {/* Tài khoản cũ mốc nạp dưới 5k */}
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl border border-pink-200">
                <h3 className="font-bold text-lg text-pink-800 mb-4">
                  1. Tài khoản cũ có mốc nạp dưới 5k
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <ul className="space-y-2 !text-gray-700">
                      <li>💰 1.000 Tiền Du Long</li>
                      <li>🏅 800 mảnh Huy Chương (khóa)</li>
                      <li>🔮 800 mảnh Uẩn Linh (khóa)</li>
                      <li>📜 1.200 danh bổ lệnh (khóa)</li>
                      <li>🎁 4 rương vừa đẹp vừa cao quý (khóa)</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2 !text-gray-700">
                      <li>⬆️ Nâng trực tiếp lên mốc 5k</li>
                      <li>💎 2 Huyền Tinh 10 (khóa)</li>
                      <li>⚔️ 100 vật phẩm TDC (đã chế sẵn - khóa)</li>
                      <li>🔥 100 vật phẩm TDLT (đã chế sẵn - khóa)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Tài khoản cũ mốc nạp dưới 10k */}
              <div className="bg-gradient-to-r from-violet-50 to-indigo-50 p-6 rounded-xl border border-violet-200">
                <h3 className="font-bold text-lg text-violet-800 mb-4">
                  2. Tài khoản cũ có mốc nạp dưới 10k
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <ul className="space-y-2 !text-gray-700">
                      <li>💰 800 Tiền Du Long</li>
                      <li>🏅 600 mảnh Huy Chương (khóa)</li>
                      <li>🔮 600 mảnh Uẩn Linh (khóa)</li>
                      <li>📜 1.200 danh bổ lệnh (khóa)</li>
                      <li>🎁 3 rương vừa đẹp vừa cao quý (khóa)</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2 !text-gray-700">
                      <li>➕ Cộng thêm 1k mốc nạp</li>
                      <li>💎 5 Huyền Tinh 9 (khóa)</li>
                      <li>⚔️ 70 vật phẩm TDC (đã chế sẵn - khóa)</li>
                      <li>🔥 70 vật phẩm TDLT (đã chế sẵn - khóa)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Tài khoản cũ mốc nạp trên 10k */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                <h3 className="font-bold text-lg text-blue-800 mb-4">
                  3. Tài khoản cũ có mốc nạp trên 10k
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <ul className="space-y-2 !text-gray-700">
                      <li>💰 500 Tiền Du Long</li>
                      <li>🏅 300 mảnh Huy Chương (khóa)</li>
                      <li>🔮 300 mảnh Uẩn Linh (khóa)</li>
                      <li>📜 1000 danh bổ lệnh (khóa)</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2 !text-gray-700">
                      <li>🎁 2 rương vừa đẹp vừa cao quý (khóa)</li>
                      <li>💎 4 Huyền Tinh 9 (khóa)</li>
                      <li>⚔️ 50 vật phẩm TDC (đã chế sẵn - khóa)</li>
                      <li>🔥 50 vật phẩm TDLT (đã chế sẵn - khóa)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Hỗ trợ Tài khoản mới */}
            <h2 className="text-xl sm:text-2xl  font-bold text-gray-900 mb-6 flex flex-wrap items-center gap-2">
              <GiftIcon className="h-6 w-6 text-red-500 flex-shrink-0" />
              <span>HỖ TRỢ DÀNH CHO TÀI KHOẢN MỚI</span>{" "}
              <span className="text-sm sm:text-base">
                (LẬP TỪ 00H NGÀY 05/10/2025 TRỞ ĐI)
              </span>
            </h2>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 mb-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <ul className="space-y-2 !text-gray-700">
                    <li>💎 25 Huyền Tinh 8 (khóa)</li>
                    <li>🔮 10 Lak 10 (khóa)</li>
                    <li>💰 4.000 Tiền Du Long</li>
                    <li>🏹 1.000 chiến thư Du Long (khóa)</li>
                    <li>🏅 1.200 mảnh Huy Chương (khóa)</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2 !text-gray-700">
                    <li>🔮 1.200 mảnh Uẩn Linh (khóa)</li>
                    <li>📜 1.200 danh bổ lệnh (khóa)</li>
                    <li>🎁 6 rương vừa đẹp vừa cao quý (khóa)</li>
                    <li>⚔️ 300 vật phẩm TDC (đã chế sẵn - khóa)</li>
                    <li>🔥 100 vật phẩm TDLT (đã chế sẵn - khóa)</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2 !text-gray-700">
                    <li>💵 2.500 vạn đồng khoá</li>
                    <li>🪙 3.000 vạn bạc khoá</li>
                    <li>🌟 4.000 NHHT</li>
                    <li>⬆️ Mốc nạp 5.000</li>
                    <li>👗 Set đồ cấp 90 – 99 +0</li>
                    <li>🗡️ Vũ khí cấp 90 +0</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mở bán set đồ */}
            <h2 className="text-xl sm:text-2xl  font-bold text-gray-900 mb-6 flex flex-wrap items-center gap-2">
              <Star className="h-6 w-6 text-yellow-500 flex-shrink-0" />
              <span>
                Mở bán set đồ 91-99, vũ khí cấp 100 tại NPC: Cổ Phong Hà
              </span>
            </h2>

            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border border-yellow-200 mb-8">
              <p className="text-amber-800 font-medium">
                Từ ngày 05/10/2025, hệ thống sẽ mở bán các trang bị cao cấp giúp
                người chơi nhanh chóng nâng cao sức mạnh:
              </p>
              <ul className="mt-4 space-y-2 !text-gray-700">
                <li>• Set đồ cấp 91-99</li>
                <li>• Vũ khí cấp 100</li>
              </ul>
            </div>

            {/* Lưu ý */}
            <h2 className="text-xl sm:text-2xl  font-bold text-gray-900 mb-6 flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
              LƯU Ý QUAN TRỌNG
            </h2>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg mb-6">
              <h3 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                <span className="text-xl">💡</span> Lưu ý:
              </h3>
              <ul className="text-yellow-700 space-y-2">
                <li>• Mỗi Tài khoản chỉ nhận hỗ trợ 1 lần duy nhất</li>
                <li>• Các loại code tân thủ cũ không còn hiệu lực</li>
                <li>
                  • Gian lận / tạo acc clone để nhận quà sẽ bị xử lý nghiêm khắc
                </li>
              </ul>
            </div>

            {/* Kết luận */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl border border-red-200 mb-6">
              <p className="font-bold text-red-700 mb-2">
                🔥 Đây chính là cơ hội vàng để game thủ nhận loạt quà tặng cực
                khủng!
              </p>
              <p className="text-red-600">
                👉 Hãy nhanh tay tham gia và tag bạn bè để cùng trải nghiệm Kiếm
                Thế Thần Kiếm ngay hôm nay!
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
