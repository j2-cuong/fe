import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { GameNavigation } from "@/components/game-navigation";

export const metadata: Metadata = {
  title: "Hoạt động Thưởng Cấp - Kiếm Thế Thần Kiếm",
  description:
    "Nhận thưởng khi đạt cấp độ nhất định trong game Kiếm Thế Thần Kiếm",
};

// Định nghĩa dữ liệu phần thưởng
const rewardTiers = [
  {
    milestone: "Cấp 89",
    rewards: [
      { type: "badge", text: "3 huyền tinh 8" },
      { type: "currency", text: "100 tiền du long" },
      { type: "currency", text: "400 vạn bạc khoá" },
      { type: "currency", text: "100 vạn đồng khoá" },
    ],
    active: false,
  },
  {
    milestone: "Cấp 99",
    rewards: [
      { type: "badge", text: "4 huyền tinh 8" },
      { type: "special", text: "200 tiền du long" },
      { type: "currency", text: "500 vạn bạc khoá" },
      { type: "currency", text: "150 vạn đồng khoá" },
    ],
    active: false,
  },
  {
    milestone: "Cấp 109",
    rewards: [
      { type: "badge", text: "9 huyền tinh 8" },
      { type: "special", text: "400 tiền du long" },
      { type: "currency", text: "700 vạn bạc khoá" },
      { type: "currency", text: "250 vạn đồng khoá" },
    ],
    active: false,
  },
  {
    milestone: "Cấp 119",
    rewards: [
      { type: "badge", text: "5 huyền tinh 9" },
      { type: "special", text: "600 tiền du long" },
      { type: "currency", text: "1000 vạn bạc khoá" },
      { type: "currency", text: "400 vạn đồng khoá" },
    ],
    active: false,
  },
  {
    milestone: "Cấp 129",
    rewards: [
      { type: "badge", text: "10 huyền tinh 9" },
      { type: "special", text: "1000 tiền du long" },
      { type: "currency", text: "1500 vạn bạc khoá" },
      { type: "currency", text: "600 vạn đồng khoá" },
    ],
    active: false,
  },
  {
    milestone: "Cấp 139",
    rewards: [
      { type: "badge", text: "5 huyền tinh 10" },
      { type: "special", text: "2000 tiền du long" },
      { type: "currency", text: "2500 vạn bạc khoá" },
      { type: "currency", text: "1000 vạn đồng khoá" },
    ],
    active: false,
  },
];

export default function ThuongCapPage() {
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
              Hoạt động Thưởng Cấp
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
              Phần thưởng
            </h2>

            <div className="space-y-6">
              {rewardTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl border ${
                    tier.active ? "border-emerald-200" : "border-gray-200"
                  } shadow-sm overflow-hidden`}
                >
                  <div
                    className={`px-4 py-3 font-medium ${
                      tier.active
                        ? "bg-emerald-50 text-emerald-800"
                        : "bg-gray-50 text-gray-800"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{tier.milestone}</span>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {tier.rewards.map((reward, rewardIndex) => (
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
