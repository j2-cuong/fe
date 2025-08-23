import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { GameNavigation } from "@/components/game-navigation";

export const metadata: Metadata = {
  title: "Hoạt động Bạch hổ đường - Kiếm Thế Thần Kiếm",
  description:
    "Tham gia hoạt động Bạch hổ đường với nhiều phần thưởng hấp dẫn và thử thách thú vị",
};

export default function BachHoDuongPage() {
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
              Hoạt động Bạch hổ đường
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
                <li>• Đợt 1: 00:00 - 07:00 sáng</li>
                <li>• Đợt 2: 09:00 - 18:00 chiều</li>
                <li>• Đợt 3: 22:00 - 23:00 tối</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg mb-6">
              <h3 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                <span className="text-xl">⚠️</span> Lưu ý quan trọng:
              </h3>
              <p className="text-yellow-700">
                Ngày đầu tiên mở máy chủ sẽ không mở Bạch Hổ Đường lúc 11:00
              </p>
            </div>

            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Điều kiện tham gia
            </h2>
            <div className="bg-emerald-50 p-4 rounded-lg mb-6">
              <ul className="space-y-2 text-emerald-700">
                <li>• Yêu cầu cấp độ: 25 trở lên</li>
                <li>• Số lần tham gia: 1 lần/ngày</li>
                <li>• Hình thức: Bang Hội/Gia Tộc/Tự do</li>
              </ul>
            </div>

            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Phần thưởng mỗi tầng
            </h2>
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 rounded-xl border border-emerald-100 shadow-sm">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-emerald-500">•</span>
                  1,000,000 điểm Kinh nghiệm
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-emerald-500">•</span>1 Huyền tinh 5
                  (khóa)
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-emerald-500">•</span>5 vạn Đồng khóa
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-emerald-500">•</span>
                  10 vạn Bạc khóa
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-emerald-500">•</span>
                  Mốc nạp 5 vạn
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-emerald-500">•</span>2 uy danh
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-emerald-500">•</span>1 mảnh huy chương
                  khóa
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-emerald-500">•</span>1 mảnh ghép Uẩn
                  Linh khóa
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-emerald-500">•</span>
                  50 điểm công trạng
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mt-6 mb-6">
              <h3 className="font-bold text-blue-700 flex items-center gap-2 mb-2">
                <span className="text-xl">✨</span> Thông tin đặc biệt:
              </h3>
              <p className="text-blue-700">
                Phần thưởng sẽ được nhân đôi vào các trận 15h và 22h!
              </p>
            </div>

            <p className="text-center mt-8">
              <span className="inline-block bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent text-lg font-bold">
                Hãy tham gia ngay để không bỏ lỡ cơ hội nhận những phần thưởng
                giá trị! 🎮
              </span>
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
