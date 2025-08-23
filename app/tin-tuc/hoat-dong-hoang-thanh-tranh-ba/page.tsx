import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { GameNavigation } from "@/components/game-navigation";

export const metadata: Metadata = {
  title: "Hoạt động Hoàng Thành Tranh Bá - Kiếm Thế Thần Kiếm",
  description:
    "Tham gia Hoạt động Hoàng Thành Tranh Bá với những trận đấu PvP hấp dẫn",
};

export default function HoangThanhTranhBaPage() {
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
              Hoạt động Hoàng Thành Tranh Bá
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
                <li>THỨ 5 HÀNG TUẦN</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg mb-6">
              <h3 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                <span className="text-xl">⚠️</span> Lưu ý quan trọng:
              </h3>
              <p className="text-yellow-700">
                Nhận quà: Từ 20H41 - 20H59 (KHÔNG NHẬN TRONG THỜI GIAN SẼ MẤT
                PHẦN THƯỞNG)
              </p>
            </div>
            <h2 className="text-2xl font-serif font-bold !text-gray-900 mb-4">
              Điều kiện tham gia
            </h2>
            <ul className="mb-6 space-y-2 text-gray-900">
              <li>🎯 Người chơi báo danh từ 19:50</li>
              <li>🕒 Hoạt động từ 20:00 đến 20:40</li>
              <li>👥 Hình thức: Bang Hội</li>
              <li>👥 Tối đa 4 bang hội tham gia</li>
            </ul>

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
    milestone: "HẠNG 1",
    rewards: [
      { type: "special", text: "Danh Hiệu : Thiên Hạ Đệ Nhất Bang (7 NGÀY)" },
      { type: "currency", text: "3 viên Huyền tinh 8 (khoá)" },
      { type: "currency", text: "500 Tiền Du Long (khoá)" },
      { type: "currency", text: "50 vạn Bạc khoá" },
      { type: "currency", text: "50 vạn Đồng khoá" },
      { type: "currency", text: "100 vạn mốc nạp" },
      { type: "currency", text: "300 điểm công trạng" },
      { type: "special", text: " 100 điểm Đoàn Viên Gia Tộc" },
    ],
    active: false,
  },
  {
    milestone: "HẠNG 2",
    rewards: [
      { type: "currency", text: "2 viên Huyền tinh 8 (khoá)" },
      { type: "currency", text: "300 Tiền Du Long (khoá)" },
      { type: "currency", text: "30 vạn Bạc khoá" },
      { type: "currency", text: "30 vạn Đồng khoá" },
      { type: "currency", text: "70 vạn mốc nạp" },
      { type: "currency", text: "200 điểm công trạng" },
      { type: "special", text: " 50 điểm Đoàn Viên Gia Tộc" },
    ],
    active: false,
  },
  {
    milestone: "HẠNG 3",
    rewards: [
      { type: "currency", text: "1 viên Huyền tinh 8 (khoá)" },
      { type: "currency", text: "200 Tiền Du Long (khoá)" },
      { type: "currency", text: "20 vạn Bạc khoá" },
      { type: "currency", text: "20 vạn Đồng khoá" },
      { type: "currency", text: "50 vạn mốc nạp" },
      { type: "currency", text: "100 điểm công trạng" },
      { type: "special", text: " 30 điểm Đoàn Viên Gia Tộc" },
    ],
    active: false,
  },
  {
    milestone: "HẠNG 4",
    rewards: [
      { type: "currency", text: "2 viên Huyền tinh 7 (khoá)" },
      { type: "currency", text: "100 Tiền Du Long (khoá)" },
      { type: "currency", text: "10 vạn Bạc khoá" },
      { type: "currency", text: "10 vạn Đồng khoá" },
      { type: "currency", text: "10 vạn mốc nạp" },
      { type: "currency", text: "50 điểm công trạng" },
      { type: "special", text: " 10 điểm Đoàn Viên Gia Tộc" },
    ],
    active: false,
  },
];
