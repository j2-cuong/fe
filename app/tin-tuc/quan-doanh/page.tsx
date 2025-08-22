import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { GameNavigation } from "@/components/game-navigation";

export const metadata: Metadata = {
  title: "Hoạt động Quân Doanh - Thiên Tử Kiếm",
  description: "Tham gia phó bản Quân Doanh với những phần thưởng hấp dẫn",
};

export default function QuanDoanhPage() {
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
              Phó Bản Quân Doanh
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
                <li>• Mỗi ngày tham gia 1 lần</li>
                <li>• Hoàn thành nhiệm vụ chính tuyến được 6 điểm uy danh</li>
                <li>• Khuyến khích tham gia bách man sơn</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 rounded-xl border border-emerald-100 shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-emerald-500">🎁</span>
                Phần thưởng khi hoàn thành phó bản
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-emerald-500">•</span>
                  5.000.000 kinh nghiệm
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-emerald-500">•</span>
                  15 vạn Đồng khóa
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-emerald-500">•</span>
                  50 vạn Bạc khóa
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-emerald-500">•</span>5 Huyền tinh 6
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-emerald-500">•</span>
                  Mốc nạp 50 vạn
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-emerald-500">•</span>
                  100 điểm công trạng
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
