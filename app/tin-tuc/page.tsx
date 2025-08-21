"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, User, Clock, ArrowRight, Search } from "lucide-react";
import { GameNavigation } from "@/components/game-navigation";

const metadata: Metadata = {
  title: "Tin Tức Game - Cập nhật sự kiện và hoạt động mới nhất",
  description:
    "Theo dõi tin tức game, sự kiện và hoạt động mới nhất trong cộng đồng Thiên Tử Kiếm",
  keywords: "tin tức game, sự kiện game, hoạt động game, cập nhật game",
};

const newsArticles = [
  {
    id: 16,
    title: "Phúc lợi nạp thẻ ( Active ) ",
    slug: "phuc-loi-nap-the",
    author: "Administrator",
    publishedAt: "01/08/2025",
    excerpt: "Tìm hiểu về các phúc lợi và ưu đãi khi nạp thẻ vào game",
    category: "Nạp thẻ",
    featured: true,
  },
  {
    id: 1,
    title: "Hoạt động Bạch Hổ Đường (Active)",
    slug: "hoat-dong-bach-ho-duong",
    author: "Administrator",
    publishedAt: "01/08/2025",
    excerpt:
      "Khám phá hoạt động Bạch Hổ Đường với phần thưởng hấp dẫn và thử thách khốc liệt",
    category: "Hoạt Động",
    featured: false,
  },
  {
    id: 2,
    title: "Hoạt động Tiêu Dao Cốc(Active)",
    slug: "hoat-dong-tieu-dao-coc",
    author: "Administrator",
    publishedAt: "01/08/2025",
    excerpt:
      "Tham gia hoạt động Tiêu Dao Cốc để nhận được những phần thưởng giá trị",
    category: "Hoạt Động",
  },
  {
    id: 3,
    title: "Hoạt động Tống Kim (Active)",
    slug: "hoat-dong-tong-kim",
    author: "Administrator",
    publishedAt: "01/08/2025",
    excerpt:
      "Cuộc chiến Tống kim với những trận đấu kịch tính và phần thưởng khủng",
    category: "Hoạt Động",
  },
  {
    id: 4,
    title: "Hoạt động Tần thủy hoàng",
    slug: "hoat-dong-tan-thuy-hoang",
    author: "Administrator",
    publishedAt: "01/08/2025",
    excerpt: "Thử thách từ hoàng đế Tần Thủy Hoàng với những nhiệm vụ đặc biệt",
    category: "Hoạt Động",
  },
  {
    id: 5,
    title: "Hoạt động Hỏa kỳ lân",
    slug: "hoat-dong-hoa-ky-lan",
    author: "Administrator",
    publishedAt: "01/08/2025",
    excerpt:
      "Chinh phục linh thú huyền thoại Hỏa kỳ lân để nhận phần thưởng độc quyền",
    category: "Hoạt Động",
  },
  {
    id: 6,
    title: "Hoạt động tranh đoạt lãnh thổ",
    slug: "hoat-dong-tranh-doat-lanh-tho",
    author: "Administrator",
    publishedAt: "01/08/2025",
    excerpt: "Tham gia tranh đoạt lãnh thổ để khẳng định sức mạnh bang hội",
    category: "Hoạt Động",
  },
  {
    id: 7,
    title: "Hoạt động Bao Vạn Đồng (Active)",
    slug: "hoat-dong-bao-van-dong",
    author: "Administrator",
    publishedAt: "01/08/2025",
    excerpt:
      "Sự kiện Bao Vạn Đồng với cơ hội nhận được vô số phần thưởng giá trị",
    category: "Hoạt Động",
  },
  {
    id: 8,
    title: "Hoạt động Võ Lâm liên đấu (song đấu) (Active)",
    slug: "hoat-dong-vo-lam-lien-dau",
    author: "Mod PvP",
    publishedAt: "01/08/2025",
    excerpt:
      "Võ Lâm liên đấu - nơi các cao thủ thể hiện kỹ năng trong những trận song đấu",
    category: "Hoạt Động",
  },
  {
    id: 9,
    title: "Quân Doanh (Active)",
    slug: "quan-doanh",
    author: "Administrator",
    publishedAt: "01/08/2025",
    excerpt:
      "Tham gia Quân Doanh để trải nghiệm chiến thuật và nhận phần thưởng hấp dẫn",
    category: "Hoạt Động",
  },
  {
    id: 11,
    title: "Đoán hoa đăng (Active)",
    slug: "doan-hoa-dang",
    author: "Administrator",
    publishedAt: "01/08/2025",
    excerpt:
      "Tham gia đoán hoa đăng để thử vận may và nhận phần thưởng bất ngờ",
    category: "Mini Game",
  },
  {
    id: 12,
    title: "Thương Hội (Active)",
    slug: "thuong-hoi",
    author: "Administrator",
    publishedAt: "01/08/2025",
    excerpt: "Hoạt động Thương Hội - nơi giao thương và trao đổi vật phẩm",
    category: "Hoạt Động",
  },
  {
    id: 13,
    title: "Hoạt động Môn Phái & Loạn Phái",
    slug: "hoat-dong-mon-phai-loan-phai",
    author: "Administrator",
    publishedAt: "01/08/2025",
    excerpt:
      "Tham gia hoạt động Môn Phái và Loạn Phái để thể hiện sức mạnh phái phái",
    category: "Hoạt Động",
  },
  {
    id: 14,
    title: "Hoạt động Hoàng Thành Tranh Bá (CTC)(Active)",
    slug: "hoat-dong-hoang-thanh-tranh-ba",
    author: "Administrator",
    publishedAt: "01/08/2025",
    excerpt: "Hoàng Thành Tranh Bá - cuộc chiến quyết định ai sẽ là bá chủ",
    category: "Hoạt Động",
  },
  {
    id: 15,
    title: "Các lỗi thường gặp",
    slug: "cac-loi-thuong-gap",
    author: "Administrator",
    publishedAt: "01/08/2025",
    excerpt: "Hướng dẫn khắc phục các lỗi thường gặp khi chơi game",
    category: "Hỗ trợ",
  },
  {
    id: 17,
    title: "Thưởng Cấp (Active)",
    slug: "hoat-dong-thuong-cap",
    author: "Administrator",
    publishedAt: "01/08/2025",
    excerpt: "Thưởng cấp",
    category: "Hoạt Động",
  },
  {
    id: 18,
    title: "Quà Open (Active)",
    slug: "hoat-dong-qua-open",
    author: "Administrator",
    publishedAt: "01/08/2025",
    excerpt: "Hỗ trợ Open",
    category: "Hoạt Động",
  },
  {
    id: 19,
    title: "Săn Hải Tặc (Active)",
    slug: "hoat-dong-hai-tac",
    author: "Administrator",
    publishedAt: "01/08/2025",
    excerpt: "Hỗ trợ Open",
    category: "Hoạt Động",
  },
  {
    id: 20,
    title: "Boss Võ Lâm Cao Thủ (Active)",
    slug: "hoat-dong-vo-lam-cao-thu",
    author: "Administrator",
    publishedAt: "01/08/2025",
    excerpt: "Hỗ trợ Open",
    category: "Hoạt Động",
  },
];

const filterCategories = [
  {
    id: "all",
    label: "Tất cả",
    color: "bg-gray-100 text-gray-700 hover:bg-gray-200",
  },
  {
    id: "Hoạt Động",
    label: "Hoạt Động",
    color: "bg-emerald-100 text-emerald-700 hover:bg-emerald-200",
  },
  {
    id: "PK",
    label: "PK",
    color: "bg-red-100 text-red-700 hover:bg-red-200",
  },
  {
    id: "Event",
    label: "Event",
    color: "bg-orange-100 text-orange-700 hover:bg-orange-200",
  },

  {
    id: "Mini Game",
    label: "Mini Game",
    color: "bg-pink-100 text-pink-700 hover:bg-pink-200",
  },

  {
    id: "Hỗ trợ",
    label: "Hỗ trợ",
    color: "bg-blue-100 text-blue-700 hover:bg-blue-200",
  },
];

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredArticles = useMemo(() => {
    const filtered = newsArticles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter =
        activeFilter === "all" || article.category === activeFilter;

      if (article.category === "Nạp thẻ") {
        return matchesSearch;
      }

      return matchesSearch && matchesFilter;
    });

    const rechargeArticle = filtered.find(
      (article) => article.category === "Nạp thẻ"
    );
    const otherArticles = filtered.filter(
      (article) => article.category !== "Nạp thẻ"
    );

    return rechargeArticle
      ? [rechargeArticle, ...otherArticles]
      : otherArticles;
  }, [searchTerm, activeFilter]);

  const featuredArticle = filteredArticles.find((article) => article.featured);
  const regularArticles = filteredArticles.filter(
    (article) => !article.featured
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <GameNavigation />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Tin Tức Game
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cập nhật những tin tức, sự kiện và hoạt động mới nhất trong cộng
              đồng Thiên Tử Kiếm
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-8 space-y-6">
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Tìm kiếm bài viết..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 w-full border-2 border-gray-200 focus:border-emerald-400 focus:ring-emerald-200 rounded-lg bg-white/90 backdrop-blur-sm"
                />
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2">
              {filterCategories.map((category) => (
                <Button
                  key={category.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => setActiveFilter(category.id)}
                  className={`${
                    category.color
                  } border-2 transition-all duration-200 ${
                    activeFilter === category.id
                      ? "border-emerald-400 shadow-lg transform scale-105"
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  {category.label}
                </Button>
              ))}
            </div>

            {/* Results Count */}
            <div className="text-center text-sm text-gray-600">
              {searchTerm || activeFilter !== "all" ? (
                <span>Tìm thấy {filteredArticles.length} bài viết</span>
              ) : (
                <span>Tổng cộng {newsArticles.length} bài viết</span>
              )}
            </div>
          </div>

          {/* Featured Article */}
          {featuredArticle && (
            <div className="mb-12">
              <Card className="bg-white/90 backdrop-blur-sm border-emerald-200 shadow-xl shadow-emerald-100/50 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-video md:aspect-auto bg-gradient-to-br from-emerald-100 to-blue-100 flex items-center justify-center">
                    <Calendar className="w-16 h-16 text-emerald-600" />
                  </div>
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-sm font-medium rounded-full shadow-lg">
                        Nổi bật
                      </span>
                    </div>
                    <CardTitle className="text-2xl font-serif font-bold mb-4 text-gray-800">
                      {featuredArticle.title}
                    </CardTitle>
                    <p className="text-gray-600 mb-6">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4 text-blue-500" />
                          <span>{featuredArticle.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4 text-orange-500" />
                          <span>{featuredArticle.publishedAt}</span>
                        </div>
                      </div>
                      <Button
                        asChild
                        className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-200 transform hover:scale-105 transition-all duration-200"
                      >
                        <Link href={`/tin-tuc/${featuredArticle.slug}`}>
                          Đọc thêm
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          )}

          {/* Articles Grid */}
          {regularArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularArticles.map((article) => (
                <Card
                  key={article.id}
                  className="bg-white/90 backdrop-blur-sm border-gray-200 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-200 group transform hover:scale-105"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`inline-block px-2 py-1 text-xs font-medium rounded ${
                          article.category === "Sự kiện"
                            ? "bg-emerald-100 text-emerald-700"
                            : article.category === "PvP"
                            ? "bg-red-100 text-red-700"
                            : article.category === "Boss"
                            ? "bg-orange-100 text-orange-700"
                            : article.category === "Guild"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {article.publishedAt}
                      </span>
                    </div>
                    <CardTitle className="text-lg font-serif font-semibold group-hover:text-emerald-600 transition-colors duration-200">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <User className="w-3 h-3 text-blue-500" />
                        <span>{article.author}</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                      >
                        <Link href={`/tin-tuc/${article.slug}`}>
                          Đọc thêm
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Không tìm thấy bài viết
              </h3>
              <p className="text-gray-500">
                Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc khác
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
