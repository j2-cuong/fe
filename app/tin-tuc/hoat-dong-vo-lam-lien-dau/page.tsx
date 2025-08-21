import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { GameNavigation } from "@/components/game-navigation";
import "./page.css";

export const metadata: Metadata = {
  title: "Hoạt động Liên Đấu- Thiên Tử Kiếm",
  description:
    "Tham gia cuộc chiến Liên Đấu khốc liệt với những trận đấu PvP hấp dẫn",
};

export default function LienDauPage() {
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
              Hoạt động Võ Lâm Liên Đấu
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
              Thời gian diễn ra
            </h2>
            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
              <li>Diễn ra vào thứ 2 & thứ 4 hàng tuần</li>
              <li>Thời gian: 20:00 - 20:30</li>
              <li>Mỗi ngày diễn ra 7 trận đấu</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Phần thưởng theo trận
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-700 mb-2">Thắng Trận:</h3>
                <ul className="space-y-1 text-green-600">
                  <li>• 3 điểm uy danh</li>
                  <li>• 100 điểm liên đấu</li>
                  <li>• 1 huyền tinh 6</li>
                  <li>• 10 vạn bạc khoá</li>
                  <li>• 10 vạn đồng khoá</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-bold text-red-700 mb-2">Thua Trận:</h3>
                <ul className="space-y-1 text-red-600">
                  <li>• 1 điểm uy danh</li>
                  <li>• 50 điểm liên đấu</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold text-blue-700 mb-2">
                Quy tắc thắng thua:
              </h3>
              <p className="text-blue-600">
                Thứ tự tính điểm: 1. Số lượng người chơi trên võ đài 2. Tổng sát
                thương gây ra
              </p>
            </div>

            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Xếp hạng & Phần thưởng tuần
            </h2>

            <div className="bg-yellow-50 p-4 rounded-lg mb-6">
              <p className="text-yellow-700 font-medium mb-2">⚠️ Lưu ý:</p>
              <ul className="space-y-1 text-yellow-700">
                <li>• Tổng kết vào ngày thứ 7 hàng tuần</li>
                <li>• Nhận thưởng vào Chủ Nhật</li>
                <li>
                  • Không nhận thưởng trong ngày Chủ Nhật sẽ mất phần thưởng
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-bold text-purple-700 mb-2">🏆 Top 1:</h3>
                <ul className="space-y-1 text-purple-600">
                  <li>• Danh hiệu Thiên Hạ Vô Địch (7 ngày)</li>
                  <li>• 300 tiền du long</li>
                  <li>• 1 viên huyền tinh 8</li>
                  <li>• 500 điểm công trạng</li>
                </ul>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg">
                <h3 className="font-bold text-indigo-700 mb-2">🥈 Top 2:</h3>
                <ul className="space-y-1 text-indigo-600">
                  <li>• Danh hiệu Uy Chấn Cửu Châu (7 ngày)</li>
                  <li>• 200 tiền du long</li>
                  <li>• 2 viên huyền tinh 7</li>
                  <li>• 350 điểm công trạng</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-700 mb-2">🥉 Top 3:</h3>
                <ul className="space-y-1 text-blue-600">
                  <li>• Danh hiệu Tứ Hải Dương Danh (7 ngày)</li>
                  <li>• 150 tiền du long</li>
                  <li>• 5 viên huyền tinh 6</li>
                  <li>• 300 điểm công trạng</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-700 mb-2">Top 4-10:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• 100 tiền du long</li>
                  <li>• 3 viên huyền tinh 6</li>
                  <li>• 250 điểm công trạng</li>
                </ul>
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
