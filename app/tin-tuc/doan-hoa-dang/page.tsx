import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { GameNavigation } from "@/components/game-navigation";

export const metadata: Metadata = {
  title: "Hoạt động Đoán Hoa Đăng - Kiếm Thế Thần Kiếm",
  description: "Tham gia hoạt động Đoán Hoa Đăng với nhiều phần thưởng hấp dẫn",
};

export default function DoanHoaDangPage() {
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
            <h1 className="text-3xl md:text-4xl  font-bold text-gray-900 mb-4">
              Hoạt động Đoán Hoa Đăng
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
            <p className="text-lg text-gray-700 mb-6">
              Hoạt động Đoán Hoa Đăng là mini-game giải đố thú vị, người chơi
              cần đoán đúng câu để nhận phần thưởng giá trị.
            </p>

            <h2 className="text-2xl  font-bold text-gray-900 mb-4">
              Thời gian diễn ra
            </h2>
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <ul className="space-y-2 text-blue-700">
                <li>• Diễn ra vào thứ 2 và thứ 4 hàng tuần</li>
                <li>• Thời gian: 00:00 - 22:00</li>
              </ul>
            </div>

            <h2 className="text-2xl  font-bold text-gray-900 mb-4">
              Phần thưởng khi đoán đúng
            </h2>
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <ul className="space-y-2 text-green-700">
                <li>• 1 Huyền Tinh 4</li>
                <li>• 1 điểm Uy Danh</li>
                <li>• 1 vạn Mốc nạp</li>
                <li>• 1 Mảnh huy chương (khóa)</li>
                <li>• 1 Mảnh ghép Uẩn Linh (khóa)</li>
              </ul>
            </div>

            <p className="text-center mt-8 font-bold text-blue-700">
              Hãy tham gia Đoán Hoa Đăng để thử tài thông minh và nhận thưởng
              hấp dẫn! 🎮
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
