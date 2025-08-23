import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { GameNavigation } from "@/components/game-navigation";

export const metadata: Metadata = {
  title: "Hoạt động Săn Hải Tặc - Kiếm Thế Thần Kiếm",
  description:
    "Tham gia hoạt động Săn Hải Tặc với nhiều phần thưởng hấp dẫn và thử thách thú vị",
};

export default function HaiTacPage() {
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
              Hoạt động Hải Tặc
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
              Hoạt động Hải Tặc là nơi các cao thủ giang hồ có thể thu thập Danh
              Bổ Lệnh để đổi lấy những vật phẩm giá trị.
            </p>

            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Thời gian diễn ra
            </h2>
            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
              <li>Thời gian: Diễn ra cả ngày</li>
              <li>
                Giới hạn:
                <ul className="pl-6 mt-2 space-y-1">
                  <li>Mỗi ngày tối đa: 6 lần</li>
                  <li>Mỗi tuần tối đa: 36 lần</li>
                </ul>
              </li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Phần thưởng theo cấp độ Hải Tặc
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-primary/5 p-4 rounded-lg">
                <ul className="space-y-2 text-gray-900">
                  <li>⚔️ Hải Tặc 50: 1 Danh Bổ Lệnh</li>
                  <li>⚔️ Hải Tặc 60: 2 Danh Bổ Lệnh</li>
                  <li>⚔️ Hải Tặc 70: 3 Danh Bổ Lệnh</li>
                </ul>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg">
                <ul className="space-y-2 text-gray-900">
                  <li>⚔️ Hải Tặc 80: 4 Danh Bổ Lệnh</li>
                  <li>⚔️ Hải Tặc 90: 5 Danh Bổ Lệnh</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold text-yellow-700 mb-2">
                ⚠️ Lưu ý quan trọng:
              </h3>
              <ul className="space-y-2 text-yellow-700">
                <li>
                  • Tất cả Huyền Tinh rơi từ Hải Tặc đều ở trạng thái khóa
                </li>
                <li>
                  • Đổi Danh Bổ Lệnh:
                  <ul className="pl-6 mt-2 space-y-1">
                    <li>
                      - 500 Danh Bổ Lệnh = 1 Võ Lâm Mật Tịch (Sơ) hoặc 1 Tẩy Tủy
                      Kinh (Sơ)
                    </li>
                    <li>
                      - 1000 Danh Bổ Lệnh = 1 Võ Lâm Mật Tịch (Trung) hoặc 1 Tẩy
                      Tủy Kinh (Trung)
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <p className="text-center mt-8 font-bold text-blue-700">
              Hãy tham gia ngay để thu thập Danh Bổ Lệnh và đổi lấy những phần
              thưởng giá trị! 🎮
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
