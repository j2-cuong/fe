import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { GameNavigation } from "@/components/game-navigation";

// Sample article data - in a real app this would come from a database
const articles = {
  "hoat-dong-bach-ho-duong": {
    title: "Hoạt động Bạch hổ đường",
    author: "Administrator",
    publishedAt: "01/08/2025",
    category: "Sự kiện",
    content: `
      <h2>Thời gian hoạt động</h2>
      <ul>
        <li><strong>Đợt 1:</strong> từ 0h00 đến 7h00 sáng</li>
        <li><strong>Đợt 2:</strong> 9h00 đến 18h00 chiều</li>
        <li><strong>Đợt 3:</strong> 22h00 – 23h00</li>
      </ul>

      <h2>Phần thưởng khi qua tầng</h2>
      <ul>
        <li>1,000,000 điểm Kinh nghiệm</li>
        <li>1 Huyền tinh 5 (khóa)</li>
        <li>5 vạn Đồng khóa</li>
        <li>10 vạn Bạc khóa</li>
        <li>Mốc nạp 5 vạn</li>
        <li>2 uy danh</li>
        <li>1 mảnh huy chương khóa</li>
        <li>1 mảnh ghép Uẩn Linh khóa</li>
        <li>50 điểm công trạng</li>
      </ul>

      <h2>Lưu ý đặc biệt</h2>
      <p><strong>Nhân đôi phần thưởng</strong> cho trận 22h và trận 15h</p>

      <h2>Cách tham gia</h2>
      <p>Người chơi cần đạt level tối thiểu 30 để có thể tham gia hoạt động Bạch hổ đường. Hãy chuẩn bị trang bị và kỹ năng tốt nhất để vượt qua các thử thách khó khăn.</p>
    `,
  },
};

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const article = articles[params.slug as keyof typeof articles];

  if (!article) {
    return {
      title: "Bài viết không tồn tại",
    };
  }

  return {
    title: `${article.title} - Thiên Tử Kiếm`,
    description: `Đọc bài viết ${article.title} với thông tin chi tiết về sự kiện và hoạt động trong game.`,
  };
}

export default function ArticlePage({ params }: PageProps) {
  const article = articles[params.slug as keyof typeof articles];

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <GameNavigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        {/* Back Button */}
        <Button
          variant="ghost"
          asChild
          className="mb-6 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
        >
          <Link href="/tin-tuc">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại tin tức
          </Link>
        </Button>

        {/* Article Header */}
        <div className="mb-8">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-sm font-medium rounded-full shadow-lg">
              {article.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-gray-800 to-emerald-700 bg-clip-text text-transparent mb-4">
            {article.title}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-3 sm:space-y-0 text-gray-600">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-blue-500" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-orange-500" />
              <span>
                {new Date(article.publishedAt).toLocaleDateString("vi-VN")}
              </span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <Card className="bg-white/95 backdrop-blur-sm border-emerald-200 shadow-xl shadow-emerald-100/50">
          <CardContent className="p-8">
            <div
              className="prose prose-gray max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </CardContent>
        </Card>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-serif font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent mb-6">
            Bài viết liên quan
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/90 backdrop-blur-sm border-gray-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-200 transform hover:scale-105">
              <CardContent className="p-6">
                <h3 className="font-serif font-semibold text-lg mb-2 text-gray-800">
                  Hoạt động Tiêu Dao Cốc
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Khám phá bí mật của Tiêu Dao Cốc và nhận những phần thưởng giá
                  trị
                </p>
                <div className="mt-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                    asChild
                  >
                    <Link href="/tin-tuc/hoat-dong-tieu-dao-coc">Đọc thêm</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/90 backdrop-blur-sm border-gray-200 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-200 transform hover:scale-105">
              <CardContent className="p-6">
                <h3 className="font-serif font-semibold text-lg mb-2 text-gray-800">
                  Hoạt động Tống kim
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Tham gia cuộc chiến Tống kim với những trận đấu kịch tính
                </p>
                <div className="mt-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                    asChild
                  >
                    <Link href="/tin-tuc/hoat-dong-tong-kim">Đọc thêm</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
