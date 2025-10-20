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
} from "lucide-react";
import { GameNavigation } from "@/components/game-navigation";

export const metadata: Metadata = {
  title: "Sự Kiện Tháng 9 - Khúc Giao Mùa - Kiếm Thế Thần Kiếm",
  description:
    "Sự kiện tháng 9 - Khúc Giao Mùa với nhiều phần thưởng hấp dẫn trong Kiếm Thế Thần Kiếm",
};

export default function SuKienThang9Page() {
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

        <article className="rounded-2xl p-8 shadow-lg bg-white">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl  font-bold text-gray-900 mb-4">
              🎉 SỰ KIỆN THÁNG 9 – KHÚC GIAO MÙA
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-blue-500" />
                <span className="text-red-500">Administrator</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-red-500" />
                <span>19/09/2025 - 19/10/2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tag className="h-4 w-4 text-yellow-500" />
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                  Sự kiện
                </span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            {/* Thời gian sự kiện */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-8">
              <h3 className="font-bold text-blue-800 flex items-center gap-2 mb-2">
                <Calendar className="h-5 w-5" /> Thời gian diễn ra:
              </h3>
              <p className="text-blue-700">
                Sau bảo trì 00h ngày 19/09/2025 → 19/10/2025
              </p>
              <p className="text-red-500">
                Cập nhật tỷ lệ rơi nguyên liệu, sau bản cập nhật 18h07 ngày
                24/09/2025
              </p>
              <p className="text-red-500">Mọi người nhớ chạy AutoUpdate</p>
            </div>

            {/* Cách nhận vật phẩm */}
            <h2 className="text-2xl  font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Gift className="h-6 w-6 text-pink-500" />
              CÁCH NHẬN VẬT PHẨM
            </h2>

            <div className="grid gap-6 mb-8">
              {/* Tống Kim */}
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl border border-pink-200">
                <h3 className="font-bold text-lg text-pink-800 mb-4">
                  📘 Nhận từ Tống Kim (x2 trận 21h)
                </h3>
                <div className="space-y-2">
                  <p className="font-medium !text-gray-700">
                    Mốc điểm tích lũy:
                  </p>
                  <ul className="list-none space-y-2 pl-4 !text-gray-700">
                    <li>🔷 2.400 điểm → 12 Giọt Nắng Cuối</li>
                    <li>🔷 5.000 điểm → 18 Giọt Nắng Cuối</li>
                    <li>🔷 7.000 điểm → 30 Giọt Nắng Cuối</li>
                    <li>🔷 10.000 điểm → 42 Giọt Nắng Cuối</li>
                    <li>🔷 15.000 điểm → 60 Giọt Nắng Cuối</li>
                  </ul>
                </div>
              </div>

              {/* Các hoạt động khác */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                  <h3 className="font-bold !text-blue-800 mb-3">
                    📍 Bạch Hổ Đường
                  </h3>
                  <p className="!text-gray-700">
                    Qua tầng → 12 Lá Xanh Non (x2 trận 15h & 22h)
                  </p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                  <h3 className="font-bold !text-green-800 mb-3">📍 BVD</h3>
                  <p className="!text-gray-700">12 Lá Xanh Non 1 nhiệm vụ</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                  <h3 className="font-bold !text-blue-800 mb-3">
                    📍 Tiêu Dao Cốc
                  </h3>
                  <p className="!text-gray-700">Qua ải → 12 Giọt Sương Sớm</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                  <h3 className="font-bold !text-green-800 mb-3">
                    📍 Boss VLCT
                  </h3>
                  <p className="!text-gray-700">
                    60 Hương Gió Thu & 30 Gạo Nếp Non
                  </p>
                </div>
              </div>
            </div>

            {/* Công thức ghép */}
            <h2 className="text-2xl  font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Star className="h-6 w-6 text-yellow-500" />
              CÔNG THỨC GHÉP VẬT PHẨM
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Cốm Non */}
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border border-yellow-200">
                <h3 className="font-bold text-xl text-yellow-800 mb-4">
                  CỐM NON
                </h3>
                <ul className="space-y-2 !text-gray-700">
                  <li>🌞 1 Giọt Nắng Cuối</li>
                  <li>🍃 2 Hương Gió Thu</li>
                  <li>🌿 3 Lá Xanh Non</li>
                  <li>🌾 1 Gạo Nếp Non</li>
                  <li>💎 10 KNB</li>
                </ul>
              </div>

              {/* Tinh Túy Mùa Thu */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
                <h3 className="font-bold text-xl text-orange-800 mb-4">
                  TINH TÚY MÙA THU
                </h3>
                <ul className="space-y-2 !text-gray-700">
                  <li>💧 1 Giọt Sương Sớm</li>
                  <li>🍃 2 Hương Gió Thu</li>
                  <li>🪙 20 vạn bạc</li>
                </ul>
              </div>
            </div>

            {/* Phần thưởng */}
            <h2 className="text-2xl  font-bold text-gray-900 mb-6 flex items-center gap-2">
              <GiftIcon className="h-6 w-6 text-red-500" />
              PHẦN THƯỞNG KHI SỬ DỤNG VẬT PHẨM
            </h2>

            {/* Tinh Túy Mùa Thu */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200 mb-6">
              <h3 className="font-bold text-xl text-purple-800 mb-4">
                TINH TÚY MÙA THU
              </h3>
              <p className="text-sm text-purple-600 mb-4">
                (Nhận ngẫu nhiên - tối đa 500 lần)
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <ul className="space-y-2 !text-gray-700">
                    <li>👉 20 vạn đồng khóa</li>
                    <li>👉 1 Huyền Tinh 5 (khóa)</li>
                    <li>👉 1 Huyền Tinh 6 (khóa)</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2 !text-gray-700">
                    <li className="!text-red-500">👉 20 Tiền Du Long</li>
                    <li className="!text-blue-500">
                      👉 10 Sao Chiến Công (khóa)
                    </li>
                    <li className="!text-blue-500">👉 10 Uẩn Linh (khóa)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cốm Non */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-purple-200 mb-6">
              <h3 className="font-bold text-xl text-green-800 mb-4">CỐM NON</h3>
              <p className="text-sm text-green-800 mb-4">
                (Nhận ngẫu nhiên - tối đa 500 lần)
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <ul className="space-y-2 !text-gray-700">
                    <li>👉 30 vạn đồng khóa</li>
                    <li>👉 1 Huyền Tinh 5 (khóa)</li>
                    <li>👉 1 Huyền Tinh 6 (khóa)</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2 !text-gray-700">
                    <li className="!text-red-500">👉 30 Tiền Du Long</li>
                    <li className="!text-blue-500">
                      👉 20 Sao Chiến Công (không khóa)
                    </li>
                    <li className="!text-blue-500">
                      👉 20 Uẩn Linh (không khóa)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mốc nhận thưởng */}
            <h2 className="text-2xl  font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Star className="h-6 w-6 text-red-500" />
              MỐC SỬ DỤNG VẬT PHẨM NHẬN THƯỞNG
            </h2>

            {/* Mốc Cốm Non */}
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border border-yellow-200 mb-6">
              <h3 className="font-bold text-xl text-yellow-800 mb-4">
                🎯 MỐC SỬ DỤNG CỐM NON
              </h3>
              <ul className="space-y-2 !text-gray-700">
                <li>
                  🎁 100 → 1 Huyền Tinh 7(không khóa) + 200 Tiền Du Long + 100
                  vạn mốc nạp
                </li>
                <li>
                  🎁 200 → 2 Huyền Tinh 7(không khóa) + 250 Tiền Du Long + 200
                  vạn mốc nạp
                </li>
                <li>
                  🎁 300 → 3 Huyền Tinh 7(không khóa) + 300 Tiền Du Long + 1
                  Rương Vừa Đẹp Vừa Cao Quý + 300 vạn mốc nạp
                </li>
                <li>
                  🎁 400 → 4 Huyền Tinh 7(không khóa) + 350 Tiền Du Long + 2
                  Rương Vừa Đẹp Vừa Cao Quý + 400 vạn mốc nạp
                </li>
                <li>
                  🎁 500 → 5 Huyền Tinh 7(không khóa) + 500 Tiền Du Long + 3
                  Rương Vừa Đẹp Vừa Cao Quý + 500 vạn mốc nạp
                </li>
              </ul>
            </div>

            {/* Mốc Tinh Túy Mùa Thu */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200 mb-6">
              <h3 className="font-bold text-xl text-orange-800 mb-4">
                🎯 MỐC SỬ DỤNG TINH TÚY MÙA THU
              </h3>
              <ul className="space-y-2 !text-gray-700">
                <li>🎁 100 → 2 Huyền Tinh 6 (khóa) + 100 Tiền Du Long</li>
                <li>🎁 200 → 1 Huyền Tinh 7 (khóa) + 150 Tiền Du Long</li>
                <li>
                  🎁 300 → 2 Huyền Tinh 7 (khóa) + 200 Tiền Du Long + 1 Rương
                  Vừa Đẹp Vừa Cao Quý (khóa)
                </li>
                <li>
                  🎁 400 → 3 Huyền Tinh 7 (khóa) + 250 Tiền Du Long + 2 Rương
                  Vừa Đẹp Vừa Cao Quý (khóa)
                </li>
                <li>
                  🎁 500 → 4 Huyền Tinh 7 (khóa) + 300 Tiền Du Long + 3 Rương
                  Vừa Đẹp Vừa Cao Quý (khóa)
                </li>
              </ul>
            </div>

            {/* Mốc ủng hộ */}
            <h2 className="text-2xl  font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Coins className="h-6 w-6 text-yellow-500" />
              MỐC ỦNG HỘ TRONG THỜI GIAN SỰ KIỆN
            </h2>

            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl border border-amber-200 mb-8">
              <div className="space-y-4">
                <div className="p-4 bg-white/50 rounded-lg">
                  <p className="font-bold text-amber-800">💰 200 vạn</p>
                  <p className="!text-red-500">
                    1 Huyền Tinh 8 (khóa) + 200 Tiền Du Long + 5 Viên Lak 10
                  </p>
                </div>
                <div className="p-4 bg-white/50 rounded-lg">
                  <p className="font-bold text-amber-800">💰 400 vạn</p>
                  <p className="!text-red-500">
                    2 Huyền Tinh 8 (khóa) + 300 Tiền Du Long + 5 Viên Lak 10
                  </p>
                </div>
                <div className="p-4 bg-white/50 rounded-lg">
                  <p className="font-bold text-amber-800">💰 600 vạn</p>
                  <p className="!text-red-500">
                    3 Huyền Tinh 8 (khóa) + 500 Tiền Du Long + 10 Viên Lak 10
                  </p>
                </div>
              </div>
            </div>

            {/* Lưu ý */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg mb-6">
              <h3 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                <span className="text-xl">💡</span> Lưu ý quan trọng:
              </h3>
              <ul className="text-yellow-700 space-y-1">
                <li>• Phần thưởng sẽ được phát ngay khi đạt đủ điều kiện</li>
                <li>• Theo dõi fanpage để cập nhật thông tin mới nhất</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
