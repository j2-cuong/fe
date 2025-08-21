import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { GameNavigation } from "@/components/game-navigation";
import "./page.css";

export const metadata: Metadata = {
  title: "Hoạt động Quà Open - Thiên Tử Kiếm",
  // description:
  //   "Tham gia cuộc chiến Tống kim khốc liệt với những trận đấu PvP hấp dẫn",
};

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
              Hoạt động Quà Open
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 " />
                <span className="text-red-500">Administrator</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>01/08/2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tag className="h-4 w-4" />
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
            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
              <li>Thăng cấp 80</li>
              <li>1 Bộ trang bị cấp 8x tùy chọn (Loại 4% - Cường hóa + 10)</li>
              <li>Kỹ năng sống cấp 80</li>
              <li>5 Huyền tinh 6 (khóa)</li>
              <li>3 túi 15 Ô</li>
              <li>Vô hạn truyền tống phù vĩnh viễn</li>
              <li>1 Ngựa xích thố</li>
              <li>5 bình Tu luyện đơn</li>
              <li>Thức ăn 30 ngày</li>
              <li>5 lần luyện mật tịch miễn phí</li>
              <li>10 lần chuyển cường hóa</li>
              <li>1 lệnh bài 20 uy danh</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Các Loại Code
            </h2>
            <div className="reward-blocks">
              <div className="milestones-noneactive">Code Báo Danh</div>
              <div className="rewardss">
                <div className="items badges">mốc nạp 1000 vạn </div>
              </div>
            </div>

            <div className="reward-blocks">
              <div className="milestones-noneactive">Code Tân Thủ</div>
              <div className="rewardss">
                <div className="items badges">Lệnh bài mở rộng rương (1)</div>
                <div className="items highlights">3 huyền tinh 7</div>
                <div className="items currencys">200 vạn bạc khóa</div>
                <div className="items currencys">100 vạn đồng khóa</div>
                <div className="items currencys">100 tiền du long</div>
                <div className="items currencys">2000 NHHT </div>
              </div>
            </div>

            <div className="reward-blocks">
              <div className="milestones-noneactive">Code Fan Cứng</div>
              <div className="rewardss">
                <div className="items badges">1 huyền tinh 9</div>
                <div className="items highlights">200 vạn đồng khóa</div>
                <div className="items currencys">500 vạn bạc khóa</div>
                <div className="items currencys">Mốc nạp 200k</div>
                <div className="items currencys">700 tiền du long</div>
              </div>
            </div>

            <div className="reward-blocks">
              <div className="milestones-noneactive">
                Code Like Share Cmt bài viết
              </div>
              <div className="rewardss">
                <div className="items badges">Mốc nạp 200k</div>
                <div className="items highlights">2 huyền tinh 7</div>
                <div className="items currencys">200 vạn đồng khoá</div>
                <div className="items currencys">500 vạn bạc khoá</div>
                <div className="items currencys">300 tiền du long</div>
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
