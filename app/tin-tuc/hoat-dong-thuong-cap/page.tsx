import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { GameNavigation } from "@/components/game-navigation";
import "./page.css";

export const metadata: Metadata = {
  title: "Hoạt động Thưởng Cấp - Thiên Tử Kiếm",
  // description:
  //   "Tham gia cuộc chiến Tống kim khốc liệt với những trận đấu PvP hấp dẫn",
};

export default function ShopCongTrangPage() {
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
            {/* <p className="text-lg text-gray-700 mb-6">
              Bạch Hổ Đường là hoạt động đặc biệt dành cho các game thủ từ cấp
              25 trở lên, diễn ra hàng ngày với nhiều phần thưởng hấp dẫn.
            </p> */}

            {/* <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Thời gian diễn ra
            </h2>
            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
              <li>Đợt 1: 11:00 sáng</li>
              <li>Đợt 2: 21:00 tối</li>
              <li>Đợt 3: 23:00 tối</li>
            </ul> */}

            {/* <div className="bg-cyan-200 p-4 rounded-lg mb-6">
              <p className=" font-medium text-red-500">⚠️ Lưu ý quan trọng:</p>
              <p className="text-red-500">
                Bên thắng được thưởng 1.200, bên thua được thưởng 600 (điểm tích lũy nhận thưởng)
              </p>
            </div> */}

            {/* <h2 className="text-2xl font-serif font-bold !text-gray-900 mb-4">
              Điều kiện tham gia
            </h2>
            <ul className="mb-6 space-y-2 text-gray-900">
              <li>🎯 Yêu cầu cấp độ: 25 trở lên</li>
              <li>🕒 Số lần tham gia: 1 lần/ngày</li>
              <li>👥 Hình thức: Bang Hội/Gia Tộc/Tự do</li>
            </ul> */}

            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Phần thưởng 
            </h2>
            <div className="reward-blocks">
              <div className="milestones-noneactive">Cấp 89</div>
              <div className="rewardss">
                <div className="items badges">3 huyền tinh 8</div>
                <div className="items currencys">100 tiền du long</div>
                <div className="items currencys">400 vạn bạc khoá</div>
                <div className="items currencys">100 vạn đồng khoá</div>
              </div>
            </div>

            <div className="reward-blocks">
              <div className="milestones-noneactive">Cấp 99</div>
              <div className="rewardss">
                <div className="items badges">4 huyền tinh 8</div>
                <div className="items highlights">200 tiền du long</div>
                <div className="items currencys">500 vạn bạc khoá</div>
                <div className="items currencys">150 vạn đồng khoá</div>
              </div>
            </div>

            <div className="reward-blocks">
              <div className="milestones-noneactive">Cấp 109</div>
              <div className="rewardss">
                <div className="items badges">9 huyền tinh 8</div>
                <div className="items highlights">400 tiền du long</div>
                <div className="items currencys">700 vạn bạc khoá</div>
                <div className="items currencys">250 vạn đồng khoá</div>
              </div>
            </div>

            <div className="reward-blocks">
              <div className="milestones-noneactive">Cấp 119</div>
              <div className="rewardss">
                <div className="items badges">5 huyền tinh 9</div>
                <div className="items highlights">600 tiền du long</div>
                <div className="items currencys">1000 vạn bạc khoá</div>
                <div className="items currencys">400 vạn đồng khoá</div>
              </div>
            </div>

            <div className="reward-blocks">
              <div className="milestones-noneactive">Cấp 129</div>
              <div className="rewardss">
                <div className="items badges">10 huyền tinh 9</div>
                <div className="items highlights">1000 tiền du long</div>
                <div className="items currencys">1500 vạn bạc khoá</div>
                <div className="items currencys">600 vạn đồng khoá</div>
              </div>
            </div>

            <div className="reward-blocks">
              <div className="milestones-noneactive">Cấp 139</div>
              <div className="rewardss">
                <div className="items badges">5 huyền tinh 10</div>
                <div className="items highlights">2000 tiền du long</div>
                <div className="items currencys">2500 vạn bạc khoá</div>
                <div className="items currencys">1000 vạn đồng khoá</div>
              </div>
            </div>

            {/* <div className="bg-primary/5 p-6 rounded-xl mb-6">
              <ul className="list-none space-y-2 text-gray-900">
                <li>💰 1,000,000 điểm Kinh nghiệm</li>
                <li>💎 1 Huyền tinh 5 (khóa)</li>
                <li>🪙 5 vạn Đồng khóa</li>
                <li>💵 10 vạn Bạc khóa</li>
                <li>🎁 Mốc nạp 5 vạn</li>
                <li>🏆 2 uy danh</li>
                <li>🎖️ 1 mảnh huy chương khóa</li>
                <li>🔮 1 mảnh ghép Uẩn Linh khóa</li>
                <li>⭐ 50 điểm công trạng</li>
              </ul>
            </div> */}

            {/* <div className="  p-4 rounded-lg mb-6 text-blue-700">
              <p className=" ont-medium">✨ Thông tin đặc biệt:</p>
              <p className="">
                Phần thưởng sẽ được nhân đôi vào trận 21h!
              </p>
            </div> */}

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
