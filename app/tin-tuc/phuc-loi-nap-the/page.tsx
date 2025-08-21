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
              <li>
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
                  (Open máy chủ)
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
          </div>
        </article>
      </div>
    </div>
  );
}
