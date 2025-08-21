import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { GameNavigation } from "@/components/game-navigation";
import "./page.css";

export const metadata: Metadata = {
  title: "Hoạt động Bạch hổ đường - Thiên Tử Kiếm",
  description:
    "Tham gia hoạt động Bạch hổ đường với nhiều phần thưởng hấp dẫn và thử thách thú vị",
};

export default function PhucLoiNapThePage() {
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
            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
              <li className="uppercase font-bold text-lg">
                TỶ LỆ NẠP THẺ: 100.000 VNĐ = 100 Xu = 200 Vạn Đồng và 200 Vạn
                Mốc Tích Luỹ
              </li>
            </ul>
          </div>
          <div className="event-container">
            <div className="reward-blocks">
              <div className="milestones-noneactive">1000 vạn đồng</div>
              <div className="rewardss">
                <div className="items badges">
                  Đặc quyền tu luyện mật tịch nhanh (10 vạn đồng/lượt)
                </div>
                <div className="items currencys">20 vạn đồng khoá</div>
                <div className="items currencys">70 vạn bạc khoá</div>
                <div className="items currencys">
                  1 lệnh bài mở rộng rương (2)
                </div>
                <div className="items currencys">
                  1 lệnh bài mở rộng rương (3)
                </div>
                <div className="items currencys">
                  1 lệnh bài mở rộng rương (4)
                </div>
                <div className="items highlights">Mặt Nạ Tài Phú Ngất Trời</div>
                <ul className="text-red-600 list-disc pl-10">
                  <li>15 điểm tài phú</li>
                  <li>Chí Mạng +10</li>
                </ul>
              </div>
            </div>
            <div className="reward-blocks">
              <div className="milestones-noneactive">2000 vạn đồng</div>
              <div className="rewardss">
                <div className="items badges">
                  Danh Hiệu Thành Viên Thân Thiết + Vòng Sáng
                </div>
                <div className="items highlights">
                  1 Lệnh Bài Uy Danh Giang Hồ
                </div>
                <div className="items currencys">3 Túi 24 ô</div>
                <div className="items currencys">30 vạn đồng khoá</div>
                <div className="items currencys">90 vạn bạc khoá</div>
                <div className="items highlights">Mã Bài Bôn Tiêu</div>
                <ul className="text-red-600 list-disc pl-10">
                  <li>100 điểm tài phú</li>
                  <li>Tốc độ di chuyển +90%</li>
                  <li>Kháng tất cả +5</li>
                  <li>Né tránh +5</li>
                  <li>Thể lực tối đa +90 điểm</li>
                  <li>Sinh lực tối đa +800 điểm</li>
                </ul>
              </div>
            </div>
            <div className="reward-blocks">
              <div className="milestones-noneactive">4000 vạn đồng</div>
              <div className="rewardss">
                <div className="items badges">1000 tiền du long (khóa)</div>
                <div className="items currencys">40 vạn đồng khoá</div>
                <div className="items currencys">100 vạn bạc khoá</div>
                <div className="items currencys">2000 NHHT (khoá)</div>
                <div className="items currencys">3 lần chuyển cường hóa</div>
                <div className="items highlights">
                  Mặt Nạ Hàng Long Phục Hổ – Thường
                </div>
                <ul className="text-red-600 list-disc pl-10">
                  <li>1000 điểm tài phú</li>
                  <li>Phát huy lực tấn công cơ bản +2%</li>
                  <li>Phát huy lực tấn công kỹ năng +2%</li>
                  <li>Chí mạng +15</li>
                </ul>
              </div>
            </div>
            <div className="reward-blocks ">
              <div className="milestones-noneactive text-center">
                <span>
                  {" "}
                  6000 vạn đồng <br />
                  (Đang kích hoạt)
                </span>
              </div>
              <div className="rewardss">
                <div className="items badges">
                  Danh Hiệu Nhà Tài Trợ Đồng + Vòng Sáng
                  <br />
                  Mở khóa thú cưới mốc nạp 2000 vạn
                </div>
                <div className="items badges">1000 tiền du long (khóa)</div>
                <div className="items currencys">50 vạn đồng khoá</div>
                <div className="items currencys">110 vạn bạc khoá</div>
                <div className="items currencys">3000 NHHT (khoá)</div>
                <div className="items currencys">3 lần chuyển cường hóa</div>
                <div className="items highlights">
                  Mã Bài Tuyệt Thế Tuyết Vũ
                </div>
                <ul className="text-red-600 list-disc pl-10">
                  <li>300 điểm tài phú</li>
                  <li>Tốc độ di chuyển +95%</li>
                  <li>Kháng tất cả +10</li>
                  <li>Né tránh +10</li>
                  <li>Sinh lực tối đa +800 điểm</li>
                  <li>Thể lực tối đa +90 điểm</li>
                  <li>Phát huy lực tấn công cơ bản +2%</li>
                  <li>Chịu sát thương chí mạng –2%</li>
                </ul>
              </div>
            </div>
            <div className="reward-blocks ">
              <div className="milestones-active text-center">
                <span>
                  {" "}
                  10000 vạn đồng
                  <br />
                  (10 ngày sau Open)
                </span>
              </div>
              <div className="rewardss">
                <div className="items badges">
                  Đặc quyền nhận mật tịch trung miễn phí
                  <br />
                  Mở khóa mặt nạ mốc 4000
                </div>
                <div className="items badges">1000 tiền du long (khóa)</div>
                <div className="items currencys">80 vạn đồng khoá</div>
                <div className="items currencys">150 vạn bạc khoá</div>
                <div className="items currencys">4000 NHHT (khoá)</div>
                <div className="items currencys">3 lần chuyển cường hóa</div>
                <div className="items highlights">
                  Mặt Nạ Hàng Long Phục Hổ – Quý
                </div>
                <ul className="text-red-600 list-disc pl-10">
                  <li>3000 điểm tài phú</li>
                  <li>Phát huy lực tấn công cơ bản +5%</li>
                  <li>Phát huy lực tấn công kỹ năng +5%</li>
                  <li>Tấn công khi đánh chí mạng +5%</li>
                  <li>Chí mạng +25</li>
                </ul>
              </div>
            </div>
            <div className="reward-blocks ">
              <div className="milestones-active text-center">
                <span>
                  {" "}
                  14000 vạn đồng
                  <br />
                  (17 ngày sau Open)
                </span>
              </div>
              <div className="rewardss">
                <div className="items badges">
                  Danh Hiệu Nhà Tài Trợ Bạc + Vòng Sáng
                  <br />
                  Đặc quyền nhận mật tịch cao miễn phí
                  <br />
                  Mở khóa thú cưỡi mốc 6000 vạn
                </div>
                <div className="items badges">1000 tiền du long (khóa)</div>
                <div className="items currencys">100 vạn đồng khoá</div>
                <div className="items currencys">150 vạn bạc khoá</div>
                <div className="items currencys">5000 NHHT (khoá)</div>
                <div className="items currencys">3 lần chuyển cường hóa</div>
                <div className="items highlights">Mã Bài Trục Nhật</div>
                <ul className="text-red-600 list-disc pl-10">
                  <li>1000 điểm tài phú</li>
                  <li>Tốc độ di chuyển +100%</li>
                  <li>Kháng tất cả +20</li>
                  <li>Né tránh +20</li>
                  <li>Sinh lực tối đa +800 điểm</li>
                  <li>Thể lực tối đa +120 điểm</li>
                  <li>Kỹ năng di hình hoán ảnh +1</li>
                  <li>Phát huy lực tấn công cơ bản +5%</li>
                  <li>Chịu sát thương chí mạng -3%</li>
                </ul>
              </div>
            </div>
            <div className="reward-blocks ">
              <div className="milestones-active text-center">
                <span>
                  {" "}
                  18000 vạn đồng
                  <br />
                  (24 ngày sau Open)
                </span>
              </div>
              <div className="rewardss">
                <div className="items badges">
                  Mở khóa mặt nạ mốc 10.000 vạn
                </div>
                <div className="items badges">2000 tiền du long (khóa)</div>
                <div className="items currencys">150 vạn đồng khoá</div>
                <div className="items currencys">170 vạn bạc khoá</div>
                <div className="items currencys">6000 NHHT (khoá)</div>
                <div className="items currencys">3 lần chuyển cường hóa</div>
                <div className="items highlights">
                  Mặt Nạ Hàng Long Phục Hổ – Hiếm
                </div>
                <ul className="text-red-600 list-disc pl-10">
                  <li>5000 điểm tài phú</li>
                  <li>Phát huy lực tấn công cơ bản +8%</li>
                  <li>Phát huy lực tấn công kỹ năng +8%</li>
                  <li>Tấn công khi đánh chí mạng +8%</li>
                  <li>Thiên hạ vô song +1</li>
                  <li>Chí mạng +40</li>
                  <li>Kỹ năng phái +1 cấp</li>
                </ul>
              </div>
            </div>
            <div className="reward-blocks ">
              <div className="milestones-active text-center">
                <span>
                  {" "}
                  23000 vạn đồng
                  <br />
                  (31 ngày sau Open)
                </span>
              </div>
              <div className="rewardss">
                <div className="items badges">
                  Danh Hiệu Nhà Tài Trợ Vàng + Vòng Sáng
                  <br />
                  Đặc quyền nhận phi phong miễn phí
                  <br />
                  Mở khóa thú cưỡi mốc nạp 14.000 vạn
                </div>
                <div className="items badges">2000 tiền du long (khóa)</div>
                <div className="items currencys">170 vạn đồng khoá</div>
                <div className="items currencys">200 vạn bạc khoá</div>
                <div className="items currencys">7000 NHHT (khoá)</div>
                <div className="items currencys">3 lần chuyển cường hóa</div>
                <div className="items highlights">Mã Bài Phiên Vũ</div>
                <ul className="text-red-600 list-disc pl-10">
                  <li>3320 điểm tài phú</li>
                  <li>Tốc độ di chuyển +100%</li>
                  <li>Kháng tất cả + 30</li>
                  <li>Né tránh + 30</li>
                  <li>Thể lực tối đa +120 điểm</li>
                  <li>Sinh lực tối đa +800 điểm</li>
                  <li>Di hình hoán ảnh cấp +1</li>
                  <li>Phát huy lực tấn công cơ bản +8%</li>
                  <li>Chịu sát thương chí mạng -6%</li>
                </ul>
              </div>
            </div>
            <div className="reward-blocks ">
              <div className="milestones-active text-center">
                <span>
                  {" "}
                  28000 vạn đồng
                  <br />
                  (38 ngày sau Open)
                </span>
              </div>
              <div className="rewardss">
                <div className="items badges">
                  Danh Hiệu Nhà Tài Trợ Bạch Kim + Vòng Sáng
                  <br />
                  Mở khóa mặt nạ mốc 19.000 vạn
                </div>
                <div className="items badges">2000 tiền du long (khóa)</div>
                <div className="items currencys">200 vạn đồng khoá</div>
                <div className="items currencys">250 vạn bạc khoá</div>
                <div className="items currencys">8000 NHHT (khoá)</div>
                <div className="items currencys">3 lần chuyển cường hóa</div>
                <div className="items highlights">
                  Mặt Nạ Hàng Long Phục Hổ – tuyệt
                </div>
                <ul className="text-red-600 list-disc pl-10">
                  <li>6000 điểm tài phú</li>
                  <li>Phát huy lực tấn công cơ bản +11%</li>
                  <li>Phát huy lực tấn công kỹ năng +11%</li>
                  <li>Tấn công khi đánh chí mạng +11%</li>
                  <li>Thiên hạ vô song +1</li>
                  <li>Chí mạng +60</li>
                  <li>Kỹ năng phái +1</li>
                  <li>Phát huy lực tấn công cơ bản +8%</li>
                  <li>Kỹ năng bí kíp +1</li>
                </ul>
              </div>
            </div>
            <div className="reward-blocks ">
              <div className="milestones-active text-center">
                <span>
                  {" "}
                  34000 vạn đồng
                  <br />
                  (45 ngày sau Open)
                </span>
              </div>
              <div className="rewardss">
                <div className="items badges">
                  Mở khóa thú cưỡi mốc 23.000 vạn
                </div>
                <div className="items badges">2000 tiền du long (khóa)</div>
                <div className="items currencys">230 vạn đồng khoá</div>
                <div className="items currencys">250 vạn bạc khoá</div>
                <div className="items currencys">9000 NHHT (khoá)</div>
                <div className="items currencys">3 lần chuyển cường hóa</div>
                <div className="items highlights">Mã Bài Ức Vân</div>
                <ul className="text-red-600 list-disc pl-10">
                  <li>5000 điểm tài phú</li>
                  <li>Tốc độ di chuyển +110%</li>
                  <li>Kháng tất cả +45</li>
                  <li>Né tránh + 45</li>
                  <li>Thể lực tối đa +120 điểm</li>
                  <li>Sinh lực tối đa +800 điểm</li>
                  <li>Di hình hoán ảnh cấp + 1</li>
                  <li>Phát huy lực tấn công cơ bản +11%</li>
                  <li>Chịu sát thương chí mạng -9%</li>
                  <li>Hiệu Suất Phục hồi sinh lực +3%</li>
                  <li>Kỹ năng đồng hành + 1</li>
                </ul>
              </div>
            </div>
            <div className="reward-blocks ">
              <div className="milestones-active text-center">
                <span>
                  {" "}
                  40000 vạn đồng
                  <br />
                  (53 ngày sau Open)
                </span>
              </div>
              <div className="rewardss">
                <div className="items badges">
                  Danh Hiệu Nhà Tài Trợ Kim Cương + Vòng Sáng <br />
                  Mở khóa mặt nạ mốc nạp 28.000 vạn
                </div>
                <div className="items badges">2000 tiền du long (khóa)</div>
                <div className="items currencys">250 vạn đông khoá</div>
                <div className="items currencys">300 vạn bạc khoá</div>
                <div className="items currencys">10.000 NHHT (khoá)</div>
                <div className="items currencys">3 lần chuyển cường hóa</div>
                <div className="items highlights">
                  Mặt Hàng Long Phục Hổ – Cực
                </div>
                <ul className="text-red-600 list-disc pl-10">
                  <li>7000 điểm tài phú</li>
                  <li>Phát huy lực tấn công cơ bản +14%</li>
                  <li>Phát huy lực tấn công kỹ năng +14%</li>
                  <li>Tấn công khi đánh chí mạng +14%</li>
                  <li>Chí mạng +80</li>
                  <li>Thiên hạ vô song +1</li>
                  <li>Kỹ năng phái +1</li>
                  <li>Kỹ năng đồng hành +1</li>
                  <li>Kỹ năng bí kíp +1</li>
                </ul>
              </div>
            </div>
            <div className="reward-blocks ">
              <div className="milestones-active text-center">
                <span>
                  {" "}
                  46000 vạn đồng
                  <br />
                  (61 ngày sau Open)
                </span>
              </div>
              <div className="rewardss">
                <div className="items badges">
                  Mở khoá ngựa mốc nạp 34.000 vạn
                </div>
                <div className="items badges">2000 tiền du long (khóa)</div>
                <div className="items currencys">300 vạn đông khoá</div>
                <div className="items currencys">500 vạn bạc khoá</div>
                <div className="items currencys">10.000 NHHT (khoá)</div>
                <div className="items currencys">3 lần chuyển cường hóa</div>
                <div className="items highlights">Mã Bài</div>
                <ul className="text-red-600 list-disc pl-10">
                  <li>6000 điểm tài phú</li>
                  <li>Tốc độ di chuyển + 110%</li>
                  <li>Kháng tất cả +60</li>
                  <li>Né tránh + 60</li>
                  <li>Thể lực tối đa +120 điểm</li>
                  <li>Sinh lực tối đa +800 điểm</li>
                  <li>Di hình hoán ảnh cấp +1</li>
                  <li>Phát huy lực tấn công cơ bản +14%</li>
                  <li>Chịu sát thương chí mạng -12%</li>
                  <li>Hiệu suất phục hồi sinh lực +5%</li>
                  <li>Kỹ năng đồng hành +1</li>
                  <li>Kỹ năng bí kiếp +1</li>
                </ul>
              </div>
            </div>
            <div className="reward-blocks ">
              <div className="milestones-active text-center">
                <span>
                  {" "}
                  52000 vạn đồng
                  <br />
                  (69 ngày sau Open)
                </span>
              </div>
              <div className="rewardss">
                <div className="items badges">
                  Danh Hiệu Nhà Tài Trợ Kim Cương 2 + Vòng Sáng
                  <br />
                  Mở khoá mặt nạ mốc 40.000 vạn
                </div>
                <div className="items badges">2500 tiền du long (khóa)</div>
                <div className="items currencys">400 vạn đồng khoá</div>
                <div className="items currencys">600 vạn bạc khoá</div>
                <div className="items currencys">10.000 NHHT (khoá)</div>
                <div className="items currencys">3 lần chuyển cường hóa</div>
                <div className="items highlights">
                  Mặt Nạ Hàng Long Phục Hổ – Siêu Phẩm
                </div>
                <ul className="text-red-600 list-disc pl-10">
                  <li>8000 điểm tài phú</li>
                  <li>Phát huy lực tấn công cơ bản +17%</li>
                  <li>Phát huy lực tấn công kỹ năng +17%</li>
                  <li>Tấn công khi đánh chí mạng +17%</li>
                  <li>Chí mạng +100</li>
                  <li>Thiên hạ vô song +1</li>
                  <li>Kỹ năng phái +2</li>
                  <li>Kỹ năng đồng hành +1</li>
                  <li>Kỹ năng bí kíp + 1</li>
                </ul>
              </div>
            </div>
            <div className="reward-blocks ">
              <div className="milestones-active text-center">
                <span>
                  {" "}
                  58000 vạn đồng
                  <br />
                  (77 ngày sau Open)
                </span>
              </div>
              <div className="rewardss">
                <div className="items badges">Mở khoá ngựa mốc 46.000 vạn</div>
                <div className="items badges">2500 tiền du long (khóa)</div>
                <div className="items currencys">400 vạn đồng khoá</div>
                <div className="items currencys">600 vạn bạc khoá</div>
                <div className="items currencys">10.000 NHHT (khoá)</div>
                <div className="items currencys">3 lần chuyển cường hóa</div>
                <div className="items highlights">Mã Bài</div>
                <ul className="text-red-600 list-disc pl-10">
                  <li>7000 điểm tài phú</li>
                  <li>Tốc độ di chuyển +110%</li>
                  <li>Kháng tất cả +75 điểm</li>
                  <li>Né tránh +75 điểm</li>
                  <li>Sinh lực tối đa +800 điểm</li>
                  <li>Thể lực tối đa +120 điểm</li>
                  <li>Di hình hoán ảnh +1 cấp</li>
                  <li>Phát huy lực tấn công cơ bản +17%</li>
                  <li>Chịu sát thương chí mạng -15%</li>
                  <li>Hiệu suất phục hồi sinh lực +5%</li>
                  <li>Kỹ năng đồng hành +1</li>
                  <li>Kỹ năng bí kíp +1</li>
                  <li>Kỹ năng phái +1</li>
                </ul>
              </div>
            </div>
            <div className="reward-blocks ">
              <div className="milestones-active text-center">
                <span>
                  {" "}
                  64000 vạn đồng
                  <br />
                  (85 ngày sau Open)
                </span>
              </div>
              <div className="rewardss">
                <div className="items badges">
                  Danh Hiệu Nhà Tài Trợ Kim Cương 3 + vòng sáng <br />
                  Mở khoá mặt nạ mốc 52.000 vạn
                </div>
                <div className="items badges">3000 tiền du long (khóa)</div>
                <div className="items currencys">600 vạn đồng khoá</div>
                <div className="items currencys">800 vạn bạc khoá</div>
                <div className="items currencys">10.000 NHHT (khoá)</div>
                <div className="items currencys">3 lần chuyển cường hóa</div>
                <div className="items highlights">
                  Mặt Nạ Hàng Long Phục Hổ – Cực Phẩm
                </div>
                <ul className="text-red-600 list-disc pl-10">
                  <li>9000 điểm tài phú</li>
                  <li>Phát huy lực tấn công cơ bản +20%</li>
                  <li>Phát huy lực tấn công kỹ năng +20%</li>
                  <li>Tấn công khi đánh chí mạng +20%</li>
                  <li>Chí mạng +120</li>
                  <li>Thiên hạ vô song +1</li>
                  <li>Kỹ năng phái +2</li>
                  <li>Kỹ năng đồng hành +1</li>
                  <li>Kỹ năng bí kíp + 2</li>
                </ul>
              </div>
            </div>
            <div className="reward-blocks ">
              <div className="milestones-active text-center">
                <span>
                  {" "}
                  72000 vạn đồng
                  <br />
                  (94 ngày sau Open)
                </span>
              </div>
              <div className="rewardss">
                <div className="items badges">
                  Danh Hiệu Nhà Trài Trợ Kim Cương 4 + Vòng Sáng <br />
                  Mở khoá ngựa mốc nạp 58.000 vạn
                </div>
                <div className="items badges">4000 tiền du long (khóa)</div>
                <div className="items currencys">700 vạn đồng khoá</div>
                <div className="items currencys">800 vạn bạc khoá</div>
                <div className="items currencys">10.000 NHHT (khoá)</div>
                <div className="items currencys">5 lần chuyển cường hóa</div>
                <div className="items highlights">Mã Bài</div>
                <ul className="text-red-600 list-disc pl-10">
                  <li>8000 điểm tài phú</li>
                  <li>Tốc độ di chuyển 110%</li>
                  <li>Kháng Tất cả +95 điểm</li>
                  <li>Né tránh + 95 điểm</li>
                  <li>Sinh lực tối đa +800 điểm</li>
                  <li>Thể lực tối đa + 120 điểm</li>
                  <li>Di hình hoán ảnh + 1 cấp</li>
                  <li>Phát huy lực tấn công cơ bản +20%</li>
                  <li>Chịu sát thương chí mạng -18%</li>
                  <li>Hiệu suất phục hồi sinh lực +10%</li>
                  <li>Kỹ năng đồng hành +2</li>
                  <li>Kỹ năng bí kíp +1</li>
                  <li>Kỹ năng phái +1</li>
                </ul>
              </div>
            </div>
            <div className="reward-blocks ">
              <div className="milestones-active text-center">
                <span>
                  {" "}
                  80000 vạn đồng
                  <br />
                  (103 ngày sau Open)
                </span>
              </div>
              <div className="rewardss">
                <div className="items badges">
                  Danh Hiệu Tuyệt ĐỈnh Đại Phú Hào + Vòng Sáng <br />
                  Mở khoá mật nạ mốc 64.000 vạn
                </div>
                <div className="items badges">20 HTB khóa</div>
                <div className="items badges">4000 tiền du long (khóa)</div>
                <div className="items currencys">700 vạn đồng khoá</div>
                <div className="items currencys">1000 vạn bạc khoá</div>
                <div className="items currencys">10.000 NHHT (khoá)</div>
                <div className="items currencys">5 lần chuyển cường hóa</div>
                <div className="items highlights">Mặt Nạ Thiên Hạ Chí Tôn</div>
                <ul className="text-red-600 list-disc pl-10">
                  <li>10.000 điểm tài phú</li>
                  <li>Phát huy lực tấn công cơ bản +24%</li>
                  <li>Phát huy lực tấn công cơ bản +24%</li>
                  <li>Tấn công khi đánh chí mạng +24%</li>
                  <li>Chí mạng +150</li>
                  <li>Thiên hạ vô song +1</li>
                  <li>Kỹ năng phái +2</li>
                  <li>Kỹ năng đồng hành +2</li>
                  <li>Kỹ năng bí kíp +2</li>
                </ul>
              </div>
            </div>
            <div className="reward-blocks ">
              <div className="milestones-active text-center">
                <span>
                  {" "}
                  90000 vạn đồng
                  <br />
                  (113 ngày sau Open)
                </span>
              </div>
              <div className="rewardss">
                <div className="items badges">
                  Danh Hiệu CỬu Ngũ Chí Tôn + Vòng Sáng <br />
                  Mở khoá ngựa mốc 72.000 vạn
                </div>
                <div className="items badges">30 HTB khóa</div>
                <div className="items badges">5000 tiền du long (khóa)</div>
                <div className="items currencys">700 vạn đồng khoá</div>
                <div className="items currencys">1000 vạn bạc khoá</div>
                <div className="items currencys">10.000 NHHT (khoá)</div>
                <div className="items currencys">10 lần chuyển cường hóa</div>
                <div className="items highlights">Mã Bài </div>
                <ul className="text-red-600 list-disc pl-10">
                  <li>9.000 điểm tài phú</li>
                  <li>Tốc độ di chuyển 110%</li>
                  <li>Kháng tất cả +115 điểm</li>
                  <li>Né tránh +115 điểm</li>
                  <li>Sinh lực tối đa +1000 điểm</li>
                  <li>Thể lực tối đa +120 điểm</li>
                  <li>Di hình hoán ảnh +1 cấp</li>
                  <li>Phát huy lực tấn công cơ bản +24%</li>
                  <li>Chịu sát thương chí mạng -22%</li>
                  <li>Hiệu suất phục hồi sinh lực +15%</li>
                  <li>Kỹ năng đồng hành +2</li>
                  <li>Kỹ năng bí kíp +2</li>
                  <li>Kỹ năng phái +1</li>
                </ul>
              </div>
            </div>
            <div className="reward-blocks ">
              <div className="milestones-active text-center">
                <span>
                  {" "}
                  100000 vạn đồng
                  <br />
                  (125 ngày sau Open)
                </span>
              </div>
              <div className="rewardss">
                <div className="items badges">Mở khoá ngựa mốc 90.000</div>
                <div className="items badges">50 HTB khóa</div>
                <div className="items badges">5000 tiền du long (khóa)</div>
                <div className="items currencys">700 vạn đồng khoá</div>
                <div className="items currencys">1000 vạn bạc khoá</div>
                <div className="items currencys">10.000 NHHT (khoá)</div>
                <div className="items currencys">10 lần chuyển cường hóa</div>
                <div className="items highlights">Mã Bài </div>
                <ul className="text-red-600 list-disc pl-10">
                  <li>10.000 điểm tài phú</li>
                  <li>Tốc độ di chuyển 110%</li>
                  <li>Kháng tất cả +130 điểm</li>
                  <li>Né tránh +130 điểm</li>
                  <li>Sinh lực tối đa +1000 điểm</li>
                  <li>Thể lực tối đa +120 điểm</li>
                  <li>Di hình hoán ảnh +1 cấp</li>
                  <li>Phát huy lực tấn công cơ bản +28%</li>
                  <li>Chịu sát thương chí mạng -26%</li>
                  <li>Hiệu suất phục hồi sinh lực +20%</li>
                  <li>Kỹ năng đồng hành +2</li>
                  <li>Kỹ năng bí kíp +2</li>
                  <li>Kỹ năng phái +2</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
