"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { User, Clock } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

const featuredArticles = [
  {
    id: 0,
    title: "Phúc lợi nạp thẻ",
    slug: "phuc-loi-nap-the",
    author: "Administrator",
    publishedAt: "01/08/2025",
    time: "Mới cập nhật",
    excerpt: "Ưu đãi đặc biệt khi nạp thẻ game...",
  },
  {
    id: 1,
    title: "Hoạt động Bạch hổ đường",
    slug: "hoat-dong-bach-ho-duong",
    author: "Administrator",
    publishedAt: "01/08/2025",
    time: "3 ngày trước",
    excerpt: "Sự kiện đặc biệt với phần thưởng hấp dẫn...",
  },
  {
    id: 2,
    title: "Hoạt động Tiêu Dao Cốc",
    slug: "hoat-dong-tieu-dao-coc",
    author: "Mod Sự kiện",
    publishedAt: "01/08/2025",
    time: "8 ngày trước",
    excerpt: "Khám phá bí mật của Tiêu Dao Cốc...",
  },
  {
    id: 3,
    title: "Hoạt động Tống kim",
    slug: "hoat-dong-tong-kim",
    author: "Administrator",
    publishedAt: "01/08/2025",
    time: "13 ngày trước",
    excerpt: "Cuộc chiến tranh kim khốc liệt...",
  },
  {
    id: 4,
    title: "Hoạt động Tần thủy hoàng",
    slug: "hoat-dong-tan-thuy-hoang",
    author: "Administrator",
    publishedAt: "01/08/2025",
    time: "21 ngày trước",
    excerpt: "Thử thách từ hoàng đế Tần...",
  },
];

export function GameHomepage() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleArticleClick = (slug: string) => {
    router.push(`/tin-tuc/${slug}`);
  };

  const handleDownloadClick = () => {
    router.push("/tai-game");
  };

  return (
    <section
      ref={sectionRef}
      id="events-section"
      className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8"
      aria-label="Nội dung chính trang chủ"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-blue-300 text-center shadow-xl">
            <h2 className="text-3xl font-serif font-bold text-blue-600 mb-3">
              Tin Tức Nổi Bật
            </h2>
            <p className="text-base text-gray-600">
              Cập nhật những tin tức và sự kiện mới nhất
            </p>
          </div>

          <div className="w-full max-w-6xl bg-white/95 backdrop-blur-md rounded-2xl border border-blue-300 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-blue-200 bg-blue-50">
                    <th className="text-left p-4 font-serif font-semibold text-gray-800 text-base">
                      Hoạt động
                    </th>
                    <th className="text-left p-4 font-serif font-semibold text-gray-800 text-base hidden sm:table-cell">
                      Tác giả
                    </th>
                    <th className="text-left p-4 font-serif font-semibold text-gray-800 text-base">
                      Thời gian
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {featuredArticles.map((article, index) => (
                    <tr
                      key={article.id}
                      className={`border-b border-blue-100 hover:bg-blue-50 transition-all duration-300 cursor-pointer group ${
                        isVisible
                          ? "animate-slide-up"
                          : "opacity-0 translate-y-[20px]"
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                      role="row"
                      aria-label={`Bài viết: ${article.title}`}
                      onClick={() => handleArticleClick(article.slug)}
                    >
                      <td className="p-4">
                        <div className="flex flex-col">
                          <span className="font-serif font-medium text-gray-800 group-hover:text-emerald-600 transition-colors duration-200 text-base sm:text-base line-clamp-1">
                            {article.title}
                          </span>
                          <span className="text-sm text-gray-500 mt-2 line-clamp-1">
                            {article.excerpt}
                          </span>
                        </div>
                      </td>
                      <td className="p-4 hidden sm:table-cell">
                        <div className="flex items-center space-x-2 text-sm text-gray-500 group-hover:text-blue-600 transition-colors">
                          <User className="w-6 h-6 flex-shrink-0" />
                          <span
                            className={`truncate ${
                              article.author.includes("Admin") ||
                              article.author.includes("GM")
                                ? "text-red-500"
                                : "text-orange-500"
                            }`}
                          >
                            {article.author}
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-500 group-hover:text-orange-500 transition-colors">
                          <Clock className="w-6 h-6 flex-shrink-0" />
                          <span className="whitespace-nowrap">
                            {formatDistanceToNow(
                              new Date(article.publishedAt),
                              { addSuffix: true }
                            )}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button
              variant="outline"
              size="lg"
              className="font-serif bg-white/95 backdrop-blur-md hover:bg-emerald-50 hover:border-emerald-500 hover:text-emerald-600 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto border-emerald-300 text-gray-700 px-8 py-4 shadow-lg"
              aria-label="Xem tất cả tin tức game"
              onClick={() => router.push("/tin-tuc")}
            >
              Xem Tất Cả Tin Tức
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
