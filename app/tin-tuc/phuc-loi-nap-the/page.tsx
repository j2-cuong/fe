import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { GameNavigation } from "@/components/game-navigation";
import { time } from "console";

export const metadata: Metadata = {
  title: "Phúc lợi nạp thẻ - Kiếm Thế Thần Kiếm",
  description: "Phúc lợi nạp thẻ - Kiếm Thế Thần Kiếm",
};

export default function PhucLoiNapThePage() {
  const splitText = (text: string) => {
    const words = text.split(" - ");
    if (words.length !== 2) {
      return <span className="text-xl text-red-600">{text} vạn đồng</span>;
    }
    return (
      <>
        <span className="text-base text-blue-600">{words[0]}</span>
        {" - "}
        <span className="text-xl text-red-600">{words[1]} vạn đồng</span>
      </>
    );
  };

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
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg mb-6">
              <h3 className="font-bold text-yellow-800 text-lg mb-2">
                Tỷ lệ quy đổi:
              </h3>
              <p className="text-yellow-700">
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
                      <span>{splitText(tier.milestone)}</span>
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

                    {tier.stats && (
                      <div className="mt-4 bg-red-50 rounded-lg p-4">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-red-600 text-sm">
                          {tier.stats.map((stat, statIndex) => (
                            <li
                              key={statIndex}
                              className="flex items-center gap-2"
                            >
                              <span>•</span>
                              <span>{stat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
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

// Định nghĩa dữ liệu phần thưởng
const rewardTiers = [
  {
    milestone: "1000",
    rewards: [
      {
        type: "special",
        text: "Tu luyện mật tịch nhanh (10 vạn đồng/lượt)",
      },
      { type: "currency", text: "20 vạn đồng khoá" },
      { type: "currency", text: "70 vạn bạc khoá" },
      { type: "currency", text: "1 lệnh bài mở rộng rương (2)" },
      { type: "currency", text: "1 lệnh bài mở rộng rương (3)" },
      { type: "currency", text: "1 lệnh bài mở rộng rương (4)" },
      { type: "special", text: "Mặt Nạ Tài Phú Ngất Trời" },
    ],
    stats: ["15 điểm tài phú", "Chí Mạng +10"],
    active: false,
  },
  {
    milestone: "2000",
    rewards: [
      { type: "special", text: "Danh Hiệu Thành Viên Thân Thiết + Vòng Sáng" },
      { type: "currency", text: "1 Lệnh Bài Uy Danh Giang Hồ" },
      { type: "currency", text: "3 Túi 24 ô" },
      { type: "currency", text: "30 vạn đồng khoá" },
      { type: "currency", text: "90 vạn bạc khoá" },
      { type: "special", text: "Mã Bài Bôn Tiêu" },
    ],
    stats: [
      "100 điểm tài phú",
      "Tốc độ di chuyển +90%",
      "Kháng tất cả +5",
      "Né tránh +5",
      "Thể lực tối đa +90 điểm",
      "Sinh lực tối đa +800 điểm",
    ],
    active: false,
  },
  {
    milestone: "4000",
    rewards: [
      { type: "currency", text: "1000 tiền du long (khóa)" },
      { type: "currency", text: "40 vạn đồng khoá" },
      { type: "currency", text: "100 vạn bạc khoá" },
      { type: "currency", text: "2000 NHHT (khoá)" },
      { type: "currency", text: "3 lần chuyển cường hóa" },
      { type: "special", text: "Mặt Nạ Hàng Long Phục Hổ – Thường" },
    ],
    stats: [
      "1000 điểm tài phú",
      "Phát huy lực tấn công cơ bản +2%",
      "Phát huy lực tấn công kỹ năng +2%",
      "Chí mạng +15",
    ],
    active: false,
  },
  {
    milestone: "Open máy chủ - 6000",
    rewards: [
      { type: "special", text: "Danh Hiệu Nhà Tài Trợ Đồng + Vòng Sáng" },
      { type: "special", text: "Mở khóa thú cưới mốc nạp 2000 vạn" },
      { type: "currency", text: "50 vạn đồng khoá" },
      { type: "currency", text: "110 vạn bạc khoá" },
      { type: "currency", text: "3000 NHHT (khoá)" },
      { type: "currency", text: "3 lần chuyển cường hóa" },
      { type: "special", text: "Mã Bài Tuyệt Thế Tuyết Vũ" },
    ],
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
    active: false,
  },
  {
    milestone: "Open máy chủ 10 ngày - 10000",
    rewards: [
      { type: "special", text: "Đặc quyền nhận mật tịch trung miễn phí" },
      { type: "special", text: "Mở khóa mặt nạ mốc 4000" },
      { type: "currency", text: "1000 tiền du long (khóa)" },
      { type: "currency", text: "80 vạn đồng khoá" },
      { type: "currency", text: "150 vạn bạc khoá" },
      { type: "currency", text: "4000 NHHT (khoá)" },
      { type: "currency", text: "3 lần chuyển cường hóa" },
      { type: "special", text: "Mặt Nạ Hàng Long Phục Hổ – Quý" },
    ],
    stats: [
      "3000 điểm tài phú",
      "Phát huy lực tấn công cơ bản +5%",
      "Phát huy lực tấn công kỹ năng +5%",
      "Tấn công khi đánh chí mạng +5%",
      "Chí mạng +25",
    ],
    active: false,
  },
  {
    milestone: "Open máy chủ 17 ngày - 14000",
    rewards: [
      { type: "special", text: "Danh Hiệu Nhà Tài Trợ Bạc + Vòng Sáng" },
      { type: "special", text: "Đặc quyền nhận mật tịch cao miễn phí" },
      { type: "special", text: "Mở khóa thú cưỡi mốc 6000 vạn" },
      { type: "currency", text: "1000 tiền du long (khóa)" },
      { type: "currency", text: "100 vạn đồng khoá" },
      { type: "currency", text: "150 vạn bạc khoá" },
      { type: "currency", text: "5000 NHHT (khoá)" },
      { type: "currency", text: "3 lần chuyển cường hóa" },
      { type: "special", text: "Mã Bài Trục Nhật" },
    ],
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
    active: false,
  },
  {
    milestone: "Open máy chủ 24 ngày - 18000",
    rewards: [
      { type: "special", text: "Mở khóa mặt nạ mốc 10.000 vạn" },
      { type: "currency", text: "2000 tiền du long (khóa)" },
      { type: "currency", text: "150 vạn đồng khoá" },
      { type: "currency", text: "170 vạn bạc khoá" },
      { type: "currency", text: "6000 NHHT (khoá)" },
      { type: "currency", text: "3 lần chuyển cường hóa" },
      { type: "special", text: "Mặt Nạ Hàng Long Phục Hổ – Hiếm" },
    ],
    stats: [
      "5000 điểm tài phú",
      "Phát huy lực tấn công cơ bản +8%",
      "Phát huy lực tấn công kỹ năng +8%",
      "Tấn công khi đánh chí mạng +8%",
      "Thiên hạ vô song +1",
      "Chí mạng +40",
      "Kỹ năng phái +1 cấp",
    ],
    active: false,
  },
  {
    milestone: "Open máy chủ 31 ngày - 23000",
    rewards: [
      { type: "special", text: "Danh Hiệu Nhà Tài Trợ Vàng + Vòng Sáng" },
      { type: "special", text: "Đặc quyền nhận phi phong miễn phí" },
      { type: "special", text: "Mở khóa thú cưỡi mốc nạp 14.000 vạn" },
      { type: "currency", text: "2000 tiền du long (khóa)" },
      { type: "currency", text: "170 vạn đồng khoá" },
      { type: "currency", text: "200 vạn bạc khoá" },
      { type: "currency", text: "7000 NHHT (khoá)" },
      { type: "currency", text: "3 lần chuyển cường hóa" },
      { type: "special", text: "Mã Bài Phiên Vũ" },
    ],
    stats: [
      "3320 điểm tài phú",
      "Tốc độ di chuyển +100%",
      "Kháng tất cả + 30",
      "Né tránh + 30",
      "Thể lực tối đa +120 điểm",
      "Sinh lực tối đa +800 điểm",
      "Di hình hoán ảnh cấp +1",
      "Phát huy lực tấn công cơ bản +8%",
      "Chịu sát thương chí mạng -6%",
    ],
    active: false,
  },
  {
    milestone: "Open máy chủ 38 ngày - 28000",
    rewards: [
      { type: "special", text: "Danh Hiệu Nhà Tài Trợ Bạch Kim + Vòng Sáng" },
      { type: "special", text: "Mở khóa mặt nạ mốc 19.000 vạn" },
      { type: "currency", text: "2000 tiền du long (khóa)" },
      { type: "currency", text: "200 vạn đồng khoá" },
      { type: "currency", text: "250 vạn bạc khoá" },
      { type: "currency", text: "8000 NHHT (khoá)" },
      { type: "currency", text: "3 lần chuyển cường hóa" },
      { type: "special", text: "Mặt Nạ Hàng Long Phục Hổ – tuyệt" },
    ],
    stats: [
      "6000 điểm tài phú",
      "Phát huy lực tấn công cơ bản +11%",
      "Phát huy lực tấn công kỹ năng +11%",
      "Tấn công khi đánh chí mạng +11%",
      "Thiên hạ vô song +1",
      "Chí mạng +60",
      "Kỹ năng phái +1",
      "Phát huy lực tấn công cơ bản +8%",
      "Kỹ năng bí kíp +1",
    ],
    active: false,
  },
  {
    milestone: "Open máy chủ 45 ngày - 34000",
    rewards: [
      { type: "special", text: "Mở khóa thú cưỡi mốc 23.000 vạn" },
      { type: "currency", text: "2000 tiền du long (khóa)" },
      { type: "currency", text: "230 vạn đồng khoá" },
      { type: "currency", text: "250 vạn bạc khoá" },
      { type: "currency", text: "9000 NHHT (khoá)" },
      { type: "currency", text: "3 lần chuyển cường hóa" },
      { type: "special", text: "Mã Bài Ức Vân" },
    ],
    stats: [
      "5000 điểm tài phú",
      "Tốc độ di chuyển +110%",
      "Kháng tất cả +45",
      "Né tránh + 45",
      "Thể lực tối đa +120 điểm",
      "Sinh lực tối đa +800 điểm",
      "Di hình hoán ảnh cấp + 1",
      "Phát huy lực tấn công cơ bản +11%",
      "Chịu sát thương chí mạng -9%",
      "Hiệu Suất Phục hồi sinh lực +3%",
      "Kỹ năng đồng hành + 1",
    ],
    active: false,
  },
  {
    milestone: "Open máy chủ 53 ngày - 40000",
    rewards: [
      { type: "special", text: "Danh Hiệu Nhà Tài Trợ Kim Cương + Vòng Sáng" },
      { type: "special", text: "Mở khóa mặt nạ mốc nạp 28.000 vạn" },
      { type: "currency", text: "2000 tiền du long (khóa)" },
      { type: "currency", text: "250 vạn đông khoá" },
      { type: "currency", text: "300 vạn bạc khoá" },
      { type: "currency", text: "10.000 NHHT (khoá)" },
      { type: "currency", text: "3 lần chuyển cường hóa" },
      { type: "special", text: "Mặt Hàng Long Phục Hổ – Cực" },
    ],
    stats: [
      "7000 điểm tài phú",
      "Phát huy lực tấn công cơ bản +14%",
      "Phát huy lực tấn công kỹ năng +14%",
      "Tấn công khi đánh chí mạng +14%",
      "Chí mạng +80",
      "Thiên hạ vô song +1",
      "Kỹ năng phái +1",
      "Kỹ năng đồng hành +1",
      "Kỹ năng bí kíp +1",
    ],
    active: false,
  },
  {
    milestone: "Open máy chủ 60 ngày - 46000",
    rewards: [
      { type: "special", text: "Mở khoá ngựa mốc nạp 34.000 vạn" },
      { type: "currency", text: "2000 tiền du long (khóa)" },
      { type: "currency", text: "300 vạn đông khoá" },
      { type: "currency", text: "500 vạn bạc khoá" },
      { type: "currency", text: "10.000 NHHT (khoá)" },
      { type: "currency", text: "3 lần chuyển cường hóa" },
      { type: "special", text: "Mã Bài" },
    ],
    stats: [
      "6000 điểm tài phú",
      "Tốc độ di chuyển + 110%",
      "Kháng tất cả +60",
      "Né tránh + 60",
      "Thể lực tối đa +120 điểm",
      "Sinh lực tối đa +800 điểm",
      "Di hình hoán ảnh cấp +1",
      "Phát huy lực tấn công cơ bản +14%",
      "Chịu sát thương chí mạng -12%",
      "Hiệu suất phục hồi sinh lực +5%",
      "Kỹ năng đồng hành +1",
      "Kỹ năng bí kiếp +1",
    ],
    active: false,
  },
  {
    milestone: "Open máy chủ 67 ngày - 52000",
    rewards: [
      {
        type: "special",
        text: "Danh Hiệu Nhà Tài Trợ Kim Cương 2 + Vòng Sáng",
      },
      { type: "special", text: "Mở khoá mặt nạ mốc 40.000 vạn" },
      { type: "currency", text: "2500 tiền du long (khóa)" },
      { type: "currency", text: "400 vạn đồng khoá" },
      { type: "currency", text: "600 vạn bạc khoá" },
      { type: "currency", text: "10.000 NHHT (khoá)" },
      { type: "currency", text: "3 lần chuyển cường hóa" },
      { type: "special", text: "Mặt Nạ Hàng Long Phục Hổ – Siêu Phẩm" },
    ],
    stats: [
      "8000 điểm tài phú",
      "Phát huy lực tấn công cơ bản +17%",
      "Phát huy lực tấn công kỹ năng +17%",
      "Tấn công khi đánh chí mạng +17%",
      "Chí mạng +100",
      "Thiên hạ vô song +1",
      "Kỹ năng phái +2",
      "Kỹ năng đồng hành +1",
      "Kỹ năng bí kíp + 1",
    ],
    active: false,
  },
  {
    milestone: "Open máy chủ 74 ngày - 58000",
    rewards: [
      { type: "special", text: "Mở khoá ngựa mốc 46.000 vạn" },
      { type: "currency", text: "2500 tiền du long (khóa)" },
      { type: "currency", text: "400 vạn đồng khoá" },
      { type: "currency", text: "600 vạn bạc khoá" },
      { type: "currency", text: "10.000 NHHT (khoá)" },
      { type: "currency", text: "3 lần chuyển cường hóa" },
      { type: "special", text: "Mã Bài" },
    ],
    stats: [
      "7000 điểm tài phú",
      "Tốc độ di chuyển +110%",
      "Kháng tất cả +75 điểm",
      "Né tránh +75 điểm",
      "Sinh lực tối đa +800 điểm",
      "Thể lực tối đa +120 điểm",
      "Di hình hoán ảnh +1 cấp",
      "Phát huy lực tấn công cơ bản +17%",
      "Chịu sát thương chí mạng -15%",
      "Hiệu suất phục hồi sinh lực +5%",
      "Kỹ năng đồng hành +1",
      "Kỹ năng bí kíp +1",
      "Kỹ năng phái +1",
    ],
    active: false,
  },
  {
    milestone: "Open máy chủ 81 ngày - 64000",
    rewards: [
      {
        type: "special",
        text: "Danh Hiệu Nhà Tài Trợ Kim Cương 3 + vòng sáng",
      },
      { type: "special", text: "Mở khoá mặt nạ mốc 52.000 vạn" },
      { type: "currency", text: "3000 tiền du long (khóa)" },
      { type: "currency", text: "600 vạn đồng khoá" },
      { type: "currency", text: "800 vạn bạc khoá" },
      { type: "currency", text: "10.000 NHHT (khoá)" },
      { type: "currency", text: "3 lần chuyển cường hóa" },
      { type: "special", text: "Mặt Nạ Hàng Long Phục Hổ – Cực Phẩm" },
    ],
    stats: [
      "9000 điểm tài phú",
      "Phát huy lực tấn công cơ bản +20%",
      "Phát huy lực tấn công kỹ năng +20%",
      "Tấn công khi đánh chí mạng +20%",
      "Chí mạng +120",
      "Thiên hạ vô song +1",
      "Kỹ năng phái +2",
      "Kỹ năng đồng hành +1",
      "Kỹ năng bí kíp + 2",
    ],
    active: false,
  },
  {
    milestone: "Open máy chủ 88 ngày - 72000",
    rewards: [
      {
        type: "special",
        text: "Danh Hiệu Nhà Trài Trợ Kim Cương 4 + Vòng Sáng",
      },
      { type: "special", text: "Mở khoá ngựa mốc nạp 58.000 vạn" },
      { type: "currency", text: "4000 tiền du long (khóa)" },
      { type: "currency", text: "700 vạn đồng khoá" },
      { type: "currency", text: "800 vạn bạc khoá" },
      { type: "currency", text: "10.000 NHHT (khoá)" },
      { type: "currency", text: "5 lần chuyển cường hóa" },
      { type: "special", text: "Mã Bài" },
    ],
    stats: [
      "8000 điểm tài phú",
      "Tốc độ di chuyển 110%",
      "Kháng Tất cả +95 điểm",
      "Né tránh + 95 điểm",
      "Sinh lực tối đa +800 điểm",
      "Thể lực tối đa + 120 điểm",
      "Di hình hoán ảnh + 1 cấp",
      "Phát huy lực tấn công cơ bản +20%",
      "Chịu sát thương chí mạng -18%",
      "Hiệu suất phục hồi sinh lực +10%",
      "Kỹ năng đồng hành +2",
      "Kỹ năng bí kíp +1",
      "Kỹ năng phái +1",
    ],
    active: false,
  },
  {
    milestone: "Open máy chủ 97 ngày - 80000",
    rewards: [
      { type: "special", text: "Danh Hiệu Tuyệt ĐỈnh Đại Phú Hào + Vòng Sáng" },
      { type: "special", text: "Mở khoá mật nạ mốc 64.000 vạn" },
      { type: "currency", text: "20 HTB khóa" },
      { type: "currency", text: "4000 tiền du long (khóa)" },
      { type: "currency", text: "700 vạn đồng khoá" },
      { type: "currency", text: "1000 vạn bạc khoá" },
      { type: "currency", text: "10.000 NHHT (khoá)" },
      { type: "currency", text: "5 lần chuyển cường hóa" },
      { type: "special", text: "Mặt Nạ Thiên Hạ Chí Tôn" },
    ],
    stats: [
      "10.000 điểm tài phú",
      "Phát huy lực tấn công cơ bản +24%",
      "Phát huy lực tấn công cơ bản +24%",
      "Tấn công khi đánh chí mạng +24%",
      "Chí mạng +150",
      "Thiên hạ vô song +1",
      "Kỹ năng phái +2",
      "Kỹ năng đồng hành +2",
      "Kỹ năng bí kíp +2",
    ],
    active: false,
  },
  {
    milestone: "Open máy chủ 104 ngày - 90000",
    rewards: [
      { type: "special", text: "Danh Hiệu CỬu Ngũ Chí Tôn + Vòng Sáng" },
      { type: "special", text: "Mở khoá ngựa mốc 72.000 vạn" },
      { type: "currency", text: "30 HTB khóa" },
      { type: "currency", text: "5000 tiền du long (khóa)" },
      { type: "currency", text: "700 vạn đồng khoá" },
      { type: "currency", text: "1000 vạn bạc khoá" },
      { type: "currency", text: "10.000 NHHT (khoá)" },
      { type: "currency", text: "10 lần chuyển cường hóa" },
      { type: "special", text: "Mã Bài " },
    ],
    stats: [
      "9.000 điểm tài phú",
      "Tốc độ di chuyển 110%",
      "Kháng tất cả +115 điểm",
      "Né tránh +115 điểm",
      "Sinh lực tối đa +1000 điểm",
      "Thể lực tối đa +120 điểm",
      "Di hình hoán ảnh +1 cấp",
      "Phát huy lực tấn công cơ bản +24%",
      "Chịu sát thương chí mạng -22%",
      "Hiệu suất phục hồi sinh lực +15%",
      "Kỹ năng đồng hành +2",
      "Kỹ năng bí kíp +2",
      "Kỹ năng phái +1",
    ],
    active: false,
  },
  {
    milestone: "Open máy chủ 111 ngày - 100000",
    rewards: [
      { type: "special", text: "Mở khoá ngựa mốc 90.000" },
      { type: "currency", text: "50 HTB khóa" },
      { type: "currency", text: "5000 tiền du long (khóa)" },
      { type: "currency", text: "700 vạn đồng khoá" },
      { type: "currency", text: "1000 vạn bạc khoá" },
      { type: "currency", text: "10.000 NHHT (khoá)" },
      { type: "currency", text: "10 lần chuyển cường hóa" },
      { type: "special", text: "Mã Bài " },
    ],
    stats: [
      "10.000 điểm tài phú",
      "Tốc độ di chuyển 110%",
      "Kháng tất cả +130 điểm",
      "Né tránh +130 điểm",
      "Sinh lực tối đa +1000 điểm",
      "Thể lực tối đa +120 điểm",
      "Di hình hoán ảnh +1 cấp",
      "Phát huy lực tấn công cơ bản +28%",
      "Chịu sát thương chí mạng -26%",
      "Hiệu suất phục hồi sinh lực +20%",
      "Kỹ năng đồng hành +2",
      "Kỹ năng bí kíp +2",
      "Kỹ năng phái +2",
    ],
    active: false,
  },
];
