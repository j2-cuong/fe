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

            <div className="bg-cyan-200 p-4 rounded-lg mb-6">
              <p className=" font-medium text-red-500">⚠️ Lưu ý quan trọng:</p>
              <p className="text-red-500">
                Có shop mua vật phẩm thu thập hoặc lệnh bài TK, BHD ( 2000 đồng / 1 lần , đủ số lượng yêu cầu )
              </p>
              <p className="text-red-500">
                Đã Nhận NHiệm Vụ Không Thể Hoàn Thành Nhanh
              </p>
            </div>

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
            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
              <li>2 viên 8</li>
              <li>20 Uy danh</li>
              <li>50 mảnh huy chương khóa</li>
              <li>50 mảnh ghép Uẩn Linh khóa</li>
              <li>350 điểm công trạng</li>
            </ul>

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
