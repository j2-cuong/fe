"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, User, Clock, ArrowRight, Search, ChevronLeft, ChevronRight, Star, Sparkles, Filter } from "lucide-react";
import { GameNavigation } from "@/components/game-navigation";
import { newsArticles, newsCategories, getArticlesByCategory, searchArticles } from "@/data/news";

const metadata: Metadata = {
  title: "Tin Tức Game - Cập nhật sự kiện và hoạt động mới nhất",
  description:
    "Theo dõi tin tức game, sự kiện và hoạt động mới nhất trong cộng đồng Kiếm Thế Thần Kiếm",
  keywords: "tin tức game, sự kiện game, hoạt động game, cập nhật game",
};


const ITEMS_PER_PAGE = 10;

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredArticles = useMemo(() => {
    let filtered = newsArticles;
    
    if (searchTerm) {
      filtered = searchArticles(searchTerm);
    }
    
    if (activeFilter !== "all") {
      filtered = getArticlesByCategory(activeFilter);
    }

    // Prioritize recharge articles
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

  // Pagination logic
  const totalPages = Math.ceil(regularArticles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentArticles = regularArticles.slice(startIndex, endIndex);

  // Reset to page 1 when filter changes
  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Sự kiện":
        return "bg-emerald-100 text-emerald-700";
      case "PvP":
        return "bg-red-100 text-red-700";
      case "Boss":
        return "bg-orange-100 text-orange-700";
      case "Guild":
        return "bg-purple-100 text-purple-700";
      case "Lộ trình":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-blue-100 text-blue-700";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <GameNavigation />
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gradient">
                Tin Tức Game
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cập nhật những tin tức, sự kiện và hoạt động mới nhất trong cộng
              đồng Kiếm Thế Thần Kiếm
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-12 space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {/* Search Bar */}
            <div className="max-w-lg mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-500" />
                <Input
                  type="text"
                  placeholder="Tìm kiếm bài viết hoặc thời gian..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="pl-12 pr-4 py-4 w-full bg-white border-blue-200 text-gray-800 placeholder-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 rounded-xl shadow-sm"
                />
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {newsCategories.map((category) => (
                <Button
                  key={category.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => handleFilterChange(category.id)}
                  className={`transition-all duration-300 hover-lift ${
                    activeFilter === category.id
                      ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-600 border border-blue-400/30 shadow-lg"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50 border border-gray-200"
                  } rounded-xl px-6 py-3`}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {category.label}
                </Button>
              ))}
            </div>

            {/* Results Count */}
            <div className="text-center text-sm text-gray-600">
              {searchTerm || activeFilter !== "all" ? (
                <span>Tìm thấy <span className="text-blue-600 font-semibold">{filteredArticles.length}</span> bài viết</span>
              ) : (
                <span>Tổng cộng <span className="text-blue-600 font-semibold">{newsArticles.length}</span> bài viết</span>
              )}
            </div>
          </div>

          {/* Featured Article */}
          {featuredArticle && (
            <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-200 hover-lift">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Bài viết nổi bật</h2>
                    <p className="text-gray-600">Được đề xuất cho bạn</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center">
                    <Calendar className="w-20 h-20 text-blue-500" />
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-4">
                        {featuredArticle.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {featuredArticle.excerpt}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-blue-500" />
                        <span>{featuredArticle.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-cyan-500" />
                        <span>{featuredArticle.timeLife}</span>
                      </div>
                    </div>
                    
                    <Button
                      asChild
                      className="btn-modern text-white px-8 py-4 rounded-xl text-lg font-semibold hover-glow"
                    >
                      <Link href={`/tin-tuc/${featuredArticle.slug}`}>
                        Đọc thêm
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Articles Grid */}
          <div className="grid gap-6">
            {currentArticles.length > 0 ? (
              currentArticles.map((article, index) => (
                <div
                  key={article.id}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-blue-200 hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>
                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-blue-500" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-cyan-500" />
                        <span>{article.timeLife}</span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="text-blue-600 hover:text-white hover:bg-blue-500 rounded-xl px-6 py-2"
                    >
                      <Link href={`/tin-tuc/${article.slug}`}>
                        Đọc thêm
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16 animate-fade-in-up">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Không tìm thấy bài viết
                </h3>
                <p className="text-gray-600 text-lg">
                  Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc khác
                </p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-3 mt-12 animate-fade-in-up">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl px-4 py-2"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Trước</span>
              </Button>

              <div className="flex items-center space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-xl ${
                      currentPage === page
                        ? "bg-gradient-to-r from-blue-500 to-cyan-600 text-white"
                        : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl px-4 py-2"
              >
                <span>Sau</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
