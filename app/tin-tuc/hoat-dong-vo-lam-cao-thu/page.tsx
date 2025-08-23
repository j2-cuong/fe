import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { GameNavigation } from "@/components/game-navigation";

export const metadata: Metadata = {
  title: "Hoạt động Săn boss Võ Lâm Cao Thủ - Kiếm Thế Thần Kiếm",
  description:
    "Tham gia cuộc chiến Săn boss Võ Lâm Cao Thủ với những trận đấu PvP hấp dẫn và phân thưởng giá trị",
};

export default function VoLamCaoThuPage() {
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
              Hoạt động Võ Lâm Cao Thủ
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
              Thời gian xuất hiện
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-700 mb-2">VLCT 45:</h3>
                <ul className="space-y-1 text-blue-600">
                  <li>• 09:30</li>
                  <li>• 15:30</li>
                  <li>• 19:30</li>
                  <li>• 22:30</li>
                  <li>• 02:00</li>
                </ul>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h3 className="font-bold text-indigo-700 mb-2">VLCT 75:</h3>
                <ul className="space-y-1 text-indigo-600">
                  <li>• 09:32</li>
                  <li>• 15:32</li>
                  <li>• 19:32</li>
                  <li>• 22:32</li>
                  <li>• 02:02</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-bold text-purple-700 mb-2">VLCT 95:</h3>
                <ul className="space-y-1 text-purple-600">
                  <li>• 15:35</li>
                  <li>• 22:35</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold text-yellow-700 mb-2">⚠️ Lưu ý:</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>• Khi hạ gục VLCT, phần thưởng rơi hoàn toàn không khóa</li>
                <li>• Trong vòng 1 phút không gây dame, boss sẽ tự mất dame</li>
              </ul>
            </div>

            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Phần thưởng theo cấp độ
            </h2>

            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-bold text-green-700 mb-4">VLCT 5x:</h3>
                <ul className="space-y-2 text-green-600">
                  <li>• 6 Huyền Tinh 4</li>
                  <li>• 2 Huyền Tinh 5</li>
                  <li>• Điểm VLCT sơ theo hệ boss</li>
                  <li>• 2 vạn đồng cho mỗi thành viên team kết liễu</li>
                  <li>• 5 vạn mốc nạp cho mỗi thành viên team kết liễu</li>
                  <li>• 2 mảnh huy chương không khóa</li>
                  <li>• 2 mảnh ghép Uẩn Linh khóa</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-blue-700 mb-4">VLCT 7x:</h3>
                <ul className="space-y-2 text-blue-600">
                  <li>• 6 Huyền Tinh 5</li>
                  <li>• 2 Huyền Tinh 6</li>
                  <li>• Điểm VLCT Trung theo hệ boss</li>
                  <li>• Lệnh bài liên đấu (random có/không)</li>
                  <li>• 5 vạn đồng cho mỗi thành viên team kết liễu</li>
                  <li>• 7 vạn mốc nạp cho mỗi thành viên team kết liễu</li>
                  <li>• 5 mảnh huy chương không khóa</li>
                  <li>• 5 mảnh ghép Uẩn Linh không khóa</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-bold text-purple-700 mb-4">VLCT 9x:</h3>
                <ul className="space-y-2 text-purple-600">
                  <li>• 6 Huyền Tinh 6</li>
                  <li>• 2 Huyền Tinh 7</li>
                  <li>• Điểm VLCT Cao theo hệ boss</li>
                  <li>• Lệnh bài liên đấu (100 điểm)</li>
                  <li>• 7 vạn đồng cho mỗi thành viên</li>
                  <li>• 10 vạn mốc nạp cho mỗi thành viên team kết liễu</li>
                  <li>• 10 mảnh huy chương không khóa</li>
                  <li>• 10 Rương đồng hành (cấp 100 mở)</li>
                  <li>• 10 Mảnh ghép ấn (cấp 100 mở)</li>
                  <li>• 10 mảnh ghép Uẩn Linh không khóa</li>
                </ul>
              </div>
            </div>

            <p className="text-center mt-8 font-bold text-blue-700">
              Tham gia săn VLCT ngay để nhận những phần thưởng giá trị! 🎮
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
