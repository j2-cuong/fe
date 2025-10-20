import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { GameNavigation } from "@/components/game-navigation";

export const metadata: Metadata = {
  title: "Tranh Đoạt Lãnh Thổ - Kiếm Thế Thần Kiếm",
  description:
    "Tham gia PK Bang Hội, Tranh đoạt lãnh thổ trong Kiếm Thế Thần Kiếm",
};

export default function TranhDoatLanhThoPage() {
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
              Tranh Đoạt Lãnh Thổ
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
            <h2 className="text-2xl  font-bold text-gray-900 mb-4">
              Thời gian diễn ra
            </h2>
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <ul className="space-y-2 text-blue-700">
                <li>Diễn ra vào thứ 7 và chủ nhật hàng tuần</li>
                <li>Thủ lĩnh tiến hành tuyên chuyến từ 19:30</li>
                <li>Tham gia hoạt động từ 20:00 đến 20:59</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg mb-6">
              <h3 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                <span className="text-xl">⚠️</span> Lưu ý quan trọng:
              </h3>
              <p className="text-yellow-700">
                Tuỳ vào giới hạn mở cấp của máy chủ mà lever quái sẽ thay đổi.
                (ví dụ máy chủ giới hạn cấp 89 thì quái TĐLT sẽ là cấp 99),
                người chơi lưu ý nâng cấp trang bị trước khi tham gia !
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
