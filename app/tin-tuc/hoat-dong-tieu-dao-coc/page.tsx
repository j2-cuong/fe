import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { GameNavigation } from "@/components/game-navigation";

export const metadata: Metadata = {
  title: "Hoạt động Tiêu Dao Cốc - Thiên Tử Kiếm",
  description:
    "Khám phá bí mật của Tiêu Dao Cốc trong hoạt động đặc biệt với nhiều thử thách hấp dẫn",
};

// Định nghĩa dữ liệu phần thưởng
const rewards = [
  { type: "exp", text: "1,000,000 điểm Kinh nghiệm", icon: "💰" },
  { type: "item", text: "1 Huyền tinh 5 (khóa)", icon: "💎" },
  { type: "currency", text: "2 vạn Đồng khóa", icon: "🪙" },
  { type: "currency", text: "5 vạn Bạc khóa", icon: "💵" },
  {
    type: "special",
    text: "5 vạn mốc nạp (mỗi ngày tối đa 25 vạn)",
    icon: "🎁",
  },
  {
    type: "honor",
    text: "2 Điểm Uy Danh (tối đa mỗi ngày nhận 10 Uy Danh)",
    icon: "🏆",
  },
  { type: "item", text: "1 mảnh huy chương khóa", icon: "🎖️" },
  { type: "item", text: "1 mảnh ghép Uẩn Linh khóa", icon: "🔮" },
  { type: "honor", text: "30 điểm công trạng", icon: "⭐" },
];

// Định nghĩa các lưu ý
const notices = [
  "Vật phẩm Tiêu Dao Cốc sau khi dùng kỹ năng sống gia công sẽ sử dụng trực tiếp",
  "Vật phẩm Tiêu Dao Cốc: Giới hạn mỗi ngày sử dụng 60 vật phẩm (Có cộng dồn mỗi ngày)",
  "Thu thập thẻ TDC xếp hạng hàng tháng có cơ hội mở ra huyền tinh 7 8 9",
];

export default function TieuDaoCocPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <GameNavigation />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/tin-tuc">
          <Button variant="ghost" className="mb-6 group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Quay lại tin tức
          </Button>
        </Link>

        <article className="rounded-2xl p-8 shadow-lg bg-white">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Hoạt động Tiêu Dao Cốc
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-blue-500" />
                <span className="text-red-500">Administrator</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-red-500" />
                <span>01/08/2025</span>
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
            <p className="text-lg text-gray-700 mb-6">
              Tiêu Dao Cốc - một nơi thần bí. Đồn rằng, nơi này chôn giấu rất
              nhiều Kỳ Trân Dị Bảo. Không những thế, Tiêu Dao Cốc còn là nơi ẩn
              cư của một nhóm Kỳ Nhân Dị Sĩ. Từ khi Cửu Thiên Đạo Nhân công bố
              tấm bản đồ Tiêu Dao Cốc, võ lâm cao thủ trong thiên hạ đã tranh
              nhau đến thử vận may.
            </p>

            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Thời gian & Địa điểm
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Từ 00h00 đến 02h00 sáng và từ 12h00 đến 23h00</li>
                <li>
                  00h00 bắt đầu cho báo danh 00h30 bắt đầu chuyến đầu tiên
                </li>
                <li>Chuyến cuối cùng là chuyến 23h00</li>
                <li>Cứ 30 phút thì có 1 chuyến</li>
                <li>
                  Đến thành Biện Kinh gặp NPC Hướng Dẫn Tiêu Dao Cốc Triệu Khàn
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50 rounded-xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Điều kiện tham gia
              </h2>
              <ul className="space-y-2 text-gray-900">
                <li>🎯 Yêu cầu cấp độ: 80 trở lên</li>
                <li>🕒 Số lần tham gia: 1 lần/ngày</li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Lưu ý quan trọng
              </h2>
              <ul className="list-decimal list-inside space-y-2 text-gray-700">
                {notices.map((notice, index) => (
                  <li key={index}>{notice}</li>
                ))}
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Phần thưởng mỗi ải
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {rewards.map((reward, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 ${
                      reward.type === "special"
                        ? "text-purple-600"
                        : reward.type === "currency"
                        ? "text-emerald-600"
                        : reward.type === "honor"
                        ? "text-blue-600"
                        : "text-gray-700"
                    }`}
                  >
                    <span>{reward.icon}</span>
                    <span>{reward.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center mt-8 font-bold text-blue-700">
              Hãy tham gia ngay để không bỏ lỡ cơ hội nhận những phần thưởng giá
              trị! 🎮
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
