import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { GameNavigation } from "@/components/game-navigation";

export const metadata: Metadata = {
  title: "Hoạt động Môn Phái - Kiếm Thế Thần Kiếm",
  description:
    "Phúc lợi nạp thẻ và phần thưởng giá trị trong game Kiếm Thế Thần Kiếm",
};

// Định nghĩa dữ liệu phần thưởng
const rewardTiers = [
  {
    milestone: "1000 vạn đồng",
    rewards: [
      {
        type: "special",
        text: "Đặc quyền tu luyện mật tịch nhanh (10 vạn đồng/lượt)",
      },
      { type: "currency", text: "20 vạn đồng khoá" },
      { type: "currency", text: "70 vạn bạc khoá" },
      { type: "special", text: "1 lệnh bài mở rộng rương (2)" },
      { type: "special", text: "1 lệnh bài mở rộng rương (3)" },
      { type: "special", text: "1 lệnh bài mở rộng rương (4)" },
      { type: "badge", text: "Mặt Nạ Tài Phú Ngất Trời" },
      {
        type: "stats",
        stats: ["15 điểm tài phú", "Chí Mạng +10"],
      },
    ],
    active: false,
  },
  {
    milestone: "2000 vạn đồng",
    rewards: [
      { type: "badge", text: "Danh Hiệu Thành Viên Thân Thiết + Vòng Sáng" },
      { type: "special", text: "1 Lệnh Bài Uy Danh Giang Hồ" },
      { type: "currency", text: "3 Túi 24 ô" },
      { type: "currency", text: "30 vạn đồng khoá" },
      { type: "currency", text: "90 vạn bạc khoá" },
      { type: "badge", text: "Mã Bài Bôn Tiêu" },
      {
        type: "stats",
        stats: [
          "100 điểm tài phú",
          "Tốc độ di chuyển +90%",
          "Kháng tất cả +5",
          "Né tránh +5",
          "Thể lực tối đa +90 điểm",
          "Sinh lực tối đa +800 điểm",
        ],
      },
    ],
    active: false,
  },
  {
    milestone: "4000 vạn đồng",
    rewards: [
      { type: "currency", text: "1000 tiền du long (khóa)" },
      { type: "currency", text: "40 vạn đồng khoá" },
      { type: "currency", text: "100 vạn bạc khoá" },
      { type: "currency", text: "2000 NHHT (khoá)" },
      { type: "currency", text: "3 lần chuyển cường hóa" },
      { type: "badge", text: "Mặt Nạ Hàng Long Phục Hổ – Thường" },
      {
        type: "stats",
        stats: [
          "1000 điểm tài phú",
          "Phát huy lực tấn công cơ bản +2%",
          "Phát huy lực tấn công kỹ năng +2%",
          "Chí mạng +15",
        ],
      },
    ],
    active: false,
  },
  {
    milestone: "6000 vạn đồng",
    rewards: [
      { type: "badge", text: "Danh Hiệu Nhà Tài Trợ Đồng + Vòng Sáng" },
      { type: "badge", text: "Mở khóa thú cưới mốc nạp 2000 vạn" },
      { type: "currency", text: "1000 tiền du long (khóa)" },
      { type: "currency", text: "50 vạn đồng khoá" },
      { type: "currency", text: "110 vạn bạc khoá" },
      { type: "currency", text: "3000 NHHT (khoá)" },
      { type: "currency", text: "3 lần chuyển cường hóa" },
      { type: "badge", text: "Mã Bài Tuyệt Thế Tuyết Vũ" },
      {
        type: "stats",
        stats: [
          "300 điểm tài phú",
          "Tốc độ di chuyển +95%",
          "Kháng tất cả +10",
          "Né tránh +10",
          "Sinh lực tối đa +800 điểm",
          "Thể lực tối đa +90 điểm",
          "Phát huy lực tấn công cơ bản +2%",
          "Chịu sát thương chí mạng –2%",
        ],
      },
    ],
    active: false,
  },
  {
    milestone: "10000 vạn đồng",
    rewards: [
      { type: "badge", text: "Đặc quyền nhận mật tịch trung miễn phí" },
      { type: "badge", text: "Mở khóa mặt nạ mốc 4000" },
      { type: "currency", text: "1000 tiền du long (khóa)" },
      { type: "currency", text: "80 vạn đồng khoá" },
      { type: "currency", text: "150 vạn bạc khoá" },
      { type: "currency", text: "4000 NHHT (khoá)" },
      { type: "currency", text: "3 lần chuyển cường hóa" },
      { type: "badge", text: "Mặt Nạ Hàng Long Phục Hổ – Quý" },
      {
        type: "stats",
        stats: [
          "3000 điểm tài phú",
          "Phát huy lực tấn công cơ bản +5%",
          "Phát huy lực tấn công kỹ năng +5%",
          "Tấn công khi đánh chí mạng +5%",
          "Chí mạng +25",
        ],
      },
    ],
    active: true,
  },
  {
    milestone: "14000 vạn đồng",
    rewards: [
      { type: "badge", text: "Danh Hiệu Nhà Tài Trợ Bạc + Vòng Sáng" },
      { type: "badge", text: "Đặc quyền nhận mật tịch cao miễn phí" },
      { type: "badge", text: "Mở khóa thú cưỡi mốc 6000 vạn" },
      { type: "currency", text: "1000 tiền du long (khóa)" },
      { type: "currency", text: "100 vạn đồng khoá" },
      { type: "currency", text: "150 vạn bạc khoá" },
      { type: "currency", text: "5000 NHHT (khoá)" },
      { type: "currency", text: "3 lần chuyển cường hóa" },
      { type: "badge", text: "Mã Bài Trục Nhật" },
      {
        type: "stats",
        stats: [
          "1000 điểm tài phú",
          "Tốc độ di chuyển +100%",
          "Kháng tất cả +20",
          "Né tránh +20",
          "Sinh lực tối đa +800 điểm",
          "Thể lực tối đa +120 điểm",
          "Kỹ năng di hình hoán ảnh +1",
          "Phát huy lực tấn công cơ bản +5%",
          "Chịu sát thương chí mạng -3%",
        ],
      },
    ],
    active: true,
  },
  {
    milestone: "18000 vạn đồng",
    rewards: [
      { type: "badge", text: "Mở khóa mặt nạ mốc 10.000 vạn" },
      { type: "currency", text: "2000 tiền du long (khóa)" },
      { type: "currency", text: "100 vạn đồng khoá" },
      { type: "currency", text: "150 vạn bạc khoá" },
      { type: "currency", text: "5000 NHHT (khoá)" },
      { type: "currency", text: "3 lần chuyển cường hóa" },
      { type: "badge", text: "Mã Bài Trục Nhật" },
      {
        type: "stats",
        stats: [
          "1000 điểm tài phú",
          "Tốc độ di chuyển +100%",
          "Kháng tất cả +20",
          "Né tránh +20",
          "Sinh lực tối đa +800 điểm",
          "Thể lực tối đa +120 điểm",
          "Kỹ năng di hình hoán ảnh +1",
          "Phát huy lực tấn công cơ bản +5%",
          "Chịu sát thương chí mạng -3%",
        ],
      },
    ],
    active: true,
  },
];

export default function LoanPhaiPage() {
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
              Phúc lợi nạp thẻ
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
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Tỷ lệ nạp thẻ
              </h2>
              <p className="text-blue-700">
                100.000 VNĐ = 100 Xu = 200 Vạn Đồng và 200 Vạn Mốc Tích Luỹ
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
                    <div className="grid grid-cols-1 gap-4">
                      {tier.rewards.map((reward, rewardIndex) =>
                        reward.type === "stats" ? (
                          <ul
                            key={rewardIndex}
                            className="text-red-600 list-disc pl-6 space-y-1"
                          >
                            {reward?.stats?.map((stat, statIndex) => (
                              <li key={statIndex}>{stat}</li>
                            ))}
                          </ul>
                        ) : (
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
                        )
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
