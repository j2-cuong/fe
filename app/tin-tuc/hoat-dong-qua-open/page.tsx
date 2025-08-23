import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { GameNavigation } from "@/components/game-navigation";

export const metadata: Metadata = {
  title: "Hoạt động Quà Open - Kiếm Thế Thần Kiếm",
  description:
    "Nhận quà hỗ trợ tân thủ khi tham gia Open server và các loại code trong game Kiếm Thế Thần Kiếm",
};

// Định nghĩa dữ liệu quà open
const openRewards = [
  { text: "Thăng cấp 80" },
  { text: "1 Bộ trang bị cấp 8x tùy chọn (Loại 4% - Cường hóa + 10)" },
  { text: "Kỹ năng sống cấp 80" },
  { text: "5 Huyền tinh 6 (khóa)" },
  { text: "3 túi 15 Ô" },
  { text: "Vô hạn truyền tống phù vĩnh viễn" },
  { text: "1 Ngựa xích thố" },
  { text: "5 bình Tu luyện đơn" },
  { text: "Thức ăn 30 ngày" },
  { text: "5 lần luyện mật tịch miễn phí" },
  { text: "10 lần chuyển cường hóa" },
  { text: "1 lệnh bài 20 uy danh" },
];

// Định nghĩa dữ liệu code
const codeRewards = [
  {
    name: "Code Báo Danh",
    rewards: [{ type: "badge", text: "mốc nạp 1000 vạn" }],
  },
  {
    name: "Code Tân Thủ",
    rewards: [
      { type: "badge", text: "Lệnh bài mở rộng rương (1)" },
      { type: "special", text: "3 huyền tinh 7" },
      { type: "currency", text: "200 vạn bạc khóa" },
      { type: "currency", text: "100 vạn đồng khóa" },
      { type: "currency", text: "100 tiền du long" },
      { type: "currency", text: "2000 NHHT" },
    ],
  },
  {
    name: "Code Fan Cứng",
    rewards: [
      { type: "badge", text: "1 huyền tinh 9" },
      { type: "special", text: "200 vạn đồng khóa" },
      { type: "currency", text: "500 vạn bạc khóa" },
      { type: "currency", text: "Mốc nạp 200k" },
      { type: "currency", text: "700 tiền du long" },
    ],
  },
  {
    name: "Code Like Share Cmt bài viết",
    rewards: [
      { type: "badge", text: "Mốc nạp 200k" },
      { type: "special", text: "2 huyền tinh 7" },
      { type: "currency", text: "200 vạn đồng khoá" },
      { type: "currency", text: "500 vạn bạc khoá" },
      { type: "currency", text: "300 tiền du long" },
    ],
  },
];

export default function QuaOpenPage() {
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
              Hỗ trợ tân thủ
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
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Quà Open
            </h2>
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {openRewards.map((reward, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-blue-700"
                  >
                    <span>•</span>
                    <span>{reward.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Các Loại Code
            </h2>
            <div className="space-y-6">
              {codeRewards.map((code, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
                >
                  <div className="px-4 py-3 font-medium bg-gray-50 text-gray-800">
                    <div className="flex items-center justify-between">
                      <span>{code.name}</span>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-2">
                      {code.rewards.map((reward, rewardIndex) => (
                        <div
                          key={rewardIndex}
                          className={`flex items-start gap-2 ${
                            reward.type === "special"
                              ? "text-purple-600"
                              : reward.type === "currency"
                              ? "text-emerald-600"
                              : "text-blue-600"
                          }`}
                        >
                          <span>•</span>
                          <span>{reward.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
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
