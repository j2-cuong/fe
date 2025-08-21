import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { GameNavigation } from "@/components/game-navigation";
import "./page.css";

export const metadata: Metadata = {
  title: "Hoạt động Thương Hội - Thiên Tử Kiếm",
  // description:
  //   "Tham gia cuộc chiến Tống kim khốc liệt với những trận đấu PvP hấp dẫn",
};

export default function ThuongHoiPage() {
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
              Hoạt động Thương Hội
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
              <h3 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                <span className="text-xl">⚠️</span> Lưu ý quan trọng:
              </h3>
              <ul className="space-y-2 text-yellow-700">
                <li>
                  • Có shop mua vật phẩm thu thập hoặc lệnh bài TK, BHD (2000
                  đồng/1 lần, đủ số lượng yêu cầu)
                </li>
                <li>• Đã nhận nhiệm vụ không thể hoàn thành nhanh</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 rounded-xl border border-emerald-100 shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-emerald-500">🎁</span>
                Phần thưởng
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-emerald-500">•</span> 2 Huyền tinh 8
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-emerald-500">•</span> 20 điểm Uy danh
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-emerald-500">•</span> 50 mảnh huy chương
                  khóa
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-emerald-500">•</span> 50 mảnh ghép Uẩn
                  Linh khóa
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-emerald-500">•</span> 350 điểm công
                  trạng
                </li>
              </ul>
            </div>

            <div className="text-center mt-12">
              <p className="inline-block bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent text-lg font-bold">
                Hãy tham gia ngay để không bỏ lỡ cơ hội nhận những phần thưởng
                giá trị! 🎮
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
