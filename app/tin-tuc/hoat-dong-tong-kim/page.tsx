import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { GameNavigation } from "@/components/game-navigation";

export const metadata: Metadata = {
  title: "Hoạt động Tống kim - Thiên Tử Kiếm",
  description:
    "Tham gia cuộc chiến Tống kim khốc liệt với những trận đấu PvP hấp dẫn",
};

export default function TongKimPage() {
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
              Hoạt động tống kim
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
              Thời gian diễn ra
            </h2>
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <ul className="space-y-2 text-blue-700">
                <li>Đợt 1: 11:00 sáng</li>
                <li>Đợt 2: 21:00 tối</li>
                <li>Đợt 3: 23:00 tối</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg mb-6">
              <h3 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                <span className="text-xl">⚠️</span> Lưu ý quan trọng:
              </h3>
              <p className="text-yellow-700">
                Bên thắng được thưởng 1.200, bên thua được thưởng 600 (điểm tích
                lũy nhận thưởng)
              </p>
            </div>

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

            <div className="text-center mt-12">
              <p className="inline-block bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent text-lg font-bold">
                Hãy tham gia ngay để nhận những phần thưởng giá trị! 🎮
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

// Định nghĩa dữ liệu phần thưởng
const rewardTiers = [
  {
    milestone: "1.500 - 2.400 điểm",
    rewards: [
      { type: "currency", text: "5 triệu điểm kinh nghiệm" },
      { type: "currency", text: "10 vạn Đồng khóa" },
      { type: "currency", text: "10 vạn Bạc khóa" },
      { type: "currency", text: "3 Huyền tinh 5" },
    ],
    active: false,
  },
  {
    milestone: "2.401 - 5.000 điểm",
    rewards: [
      { type: "currency", text: "5 triệu điểm kinh nghiệm" },
      { type: "currency", text: "20 vạn Đồng khóa" },
      { type: "currency", text: "20 vạn Bạc khóa" },
      { type: "currency", text: "5 Huyền tinh 5" },
      { type: "currency", text: "5 điểm Uy danh" },
      { type: "currency", text: "5 tiền du long" },
      { type: "currency", text: "5 vạn đồng" },
      { type: "special", text: "Mốc nạp 10 vạn Đồng" },
      { type: "special", text: "1 mảnh huy chương ( không khóa )" },
      { type: "special", text: "1 mảnh ghép Uẩn Linh ( khóa )" },
    ],
  },
  {
    milestone: "5.001 - 7.000 điểm",
    rewards: [
      { type: "currency", text: "5 triệu điểm kinh nghiệm" },
      { type: "currency", text: "30 vạn Đồng khóa" },
      { type: "currency", text: "30 vạn Bạc khóa" },
      { type: "currency", text: "7 Huyền tinh 5" },
      { type: "currency", text: "7 điểm Uy danh" },
      { type: "currency", text: "7 tiền du long" },
      { type: "currency", text: "7 vạn đồng" },
      { type: "currency", text: "Mốc nạp 20 vạn Đồng" },
      { type: "special", text: "3 mảnh huy chương ( không khóa )" },
      { type: "special", text: "3 mảnh ghép Uẩn Linh ( khóa )" },
      { type: "special", text: "60 điểm công trạng" },
    ],
  },
  {
    milestone: "7.001 - 10.000 điểm",
    rewards: [
      { type: "currency", text: "5 triệu điểm kinh nghiệm" },
      { type: "currency", text: "40 vạn Đồng khóa" },
      { type: "currency", text: "40 vạn Bạc khóa" },
      { type: "currency", text: "10 Huyền tinh 5" },
      { type: "currency", text: "10 điểm Uy danh" },
      { type: "currency", text: "10 tiền du long" },
      { type: "currency", text: "10 vạn đồng" },
      { type: "currency", text: "Mốc nạp 30 vạn Đồng" },
      { type: "special", text: "5 mảnh huy chương ( không khóa )" },
      { type: "special", text: "5 mảnh ghép Uẩn Linh ( khóa )" },
      { type: "special", text: "90 điểm công trạng" },
    ],
  },
  {
    milestone: "10.001 - 15.000 điểm",
    rewards: [
      { type: "currency", text: "5 triệu điểm kinh nghiệm" },
      { type: "currency", text: "50 vạn Đồng khóa" },
      { type: "currency", text: "50 vạn Bạc khóa" },
      { type: "currency", text: "5 Huyền tinh 6" },
      { type: "currency", text: "15 điểm Uy danh" },
      { type: "currency", text: "15 tiền du long" },
      { type: "currency", text: "15 vạn đồng" },
      { type: "currency", text: "Mốc nạp 50 vạn Đồng" },
      { type: "special", text: "7 mảnh huy chương ( không khóa )" },
      { type: "special", text: "7 mảnh ghép Uẩn Linh ( khóa )" },
      { type: "special", text: "150 điểm công trạng" },
    ],
  },
  {
    milestone: "15.001 - 30.000 điểm",
    rewards: [
      { type: "currency", text: "5 triệu điểm kinh nghiệm" },
      { type: "currency", text: "70 vạn Đồng khóa" },
      { type: "currency", text: "70 vạn Bạc khóa" },
      { type: "currency", text: "8 Huyền tinh 6" },
      { type: "currency", text: "20 điểm Uy danh" },
      { type: "currency", text: "30 tiền du long" },
      { type: "currency", text: "20 vạn đồng" },
      { type: "currency", text: "Mốc nạp 70 vạn Đồng" },
      { type: "special", text: "9 mảnh huy chương ( không khóa )" },
      { type: "special", text: "9 mảnh ghép Uẩn Linh ( khóa )" },
      { type: "special", text: "210 điểm công trạng" },
    ],
  },
  {
    milestone: "trên 30.000 điểm",
    rewards: [
      { type: "currency", text: "5 triệu điểm kinh nghiệm" },
      { type: "currency", text: "100 vạn Đồng khóa" },
      { type: "currency", text: "100 vạn Bạc khóa" },
      { type: "currency", text: "5 Huyền tinh 7" },
      { type: "currency", text: "25 điểm Uy danh" },
      { type: "currency", text: "50 tiền du long" },
      { type: "currency", text: "30 vạn đồng" },
      { type: "currency", text: "Mốc nạp 100 vạn Đồng" },
      { type: "special", text: "12 mảnh huy chương ( không khóa )" },
      { type: "special", text: "12 mảnh ghép Uẩn Linh ( khóa )" },
      { type: "special", text: "300 điểm công trạng" },
    ],
  },
];
