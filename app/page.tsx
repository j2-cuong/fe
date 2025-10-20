"use client";

import { useState } from "react";
import { GameNavigation } from "@/components/game-navigation";
import { ScrollingNews } from "@/components/scrolling-news";
import { getFeaturedArticles } from "@/data/news";
import DownloadPage from "@/components/game-download";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Kiếm Thế Thần Kiếm - Kiếm thế PC 2009",
  description:
    "Trang chủ Kiếm Thế Thần Kiếm - Kiếm thế PC 2009 với tin tức, sự kiện và hoạt động mới nhất",
  url: "https://ktthankiem.com",
  mainEntity: {
    "@type": "VideoGame",
    name: "Kiếm Thế",
    description:
      "Game võ hiệp online hấp dẫn với thế giới kiếm hiệp huyền thoại",
    genre: ["MMORPG", "Adventure"],
    gamePlatform: ["PC"],
    operatingSystem: ["Windows"],
  },
};

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0" 
        style={{
          backgroundImage: 'url(/home.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <GameNavigation />
        <ScrollingNews />
        <main className="pt-35">
          {/* Content Container */}
          <div className="container mx-auto px-4 ">
            {/* Two Column Layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch h-full">
                {/* Left Column - Action Buttons */}
                <div className="animate-slide-in-left h-full">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-200 flex flex-col justify-between h-full">
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-gradient mb-3">
                        Bắt Đầu Chơi Game
                      </h2>
                      <p className="text-gray-600 text-base">
                        Tải game, tạo tài khoản và bắt đầu cuộc phiêu lưu
                      </p>
                    </div>

                    <div className="space-y-4">
                      <button
                        onClick={() => window.location.href = "http://taikhoan.ktthankiem.com/register.html"}
                        className="w-full bg-gradient-to-r from-indigo-600 to-blue-700 hover:from-indigo-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg text-base font-semibold hover-glow flex items-center justify-center gap-3 transition-all duration-300"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                        ĐĂNG KÝ TÀI KHOẢN
                      </button>

                      <button
                        onClick={() => window.location.href = "http://taikhoan.ktthankiem.com/login.html"}
                        className="w-full bg-gradient-to-r from-cyan-600 to-teal-700 hover:from-cyan-700 hover:to-teal-800 text-white px-6 py-3 rounded-lg text-base font-semibold hover-glow flex items-center justify-center gap-3 transition-all duration-300"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        ĐĂNG NHẬP
                      </button>

                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-6 py-3 rounded-lg text-base font-semibold hover-glow flex items-center justify-center gap-3 transition-all duration-300"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        TẢI GAME
                      </button>
                    </div>

                    <div className="mt-6 pt-4 border-t border-blue-200">
                      <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          <span>Miễn phí</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                          <span>An toàn</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                          <span>Cập nhật liên tục</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - News Section */}
                <div className="animate-slide-in-right h-full">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-200 overflow-hidden flex flex-col h-full">
                    {/* Section Header */}
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                          </div>
                          <div>
                            <h2 className="text-lg font-bold">Tin Tức Nổi Bật</h2>
                            <p className="text-blue-100 text-xs">5 bài viết mới nhất</p>
                          </div>
                        </div>
                        <button
                          onClick={() => window.location.href = '/tin-tuc'}
                          className="bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-lg transition-all duration-300 flex items-center gap-1 text-xs"
                        >
                          <span>Xem tất cả</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* News Grid */}
                    <div className="grid gap-2 p-3">
                      {getFeaturedArticles().slice(0, 5).map((article, index) => (
                        <div 
                          key={article.id}
                          onClick={() => window.location.href = `/tin-tuc/${article.slug}`}
                          className="group bg-gradient-to-br from-white to-blue-50/50 rounded-lg p-2 border border-blue-100 hover:border-blue-300 transition-all duration-300 cursor-pointer hover:shadow-md"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className="flex gap-3 items-start">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-bold text-gray-800 text-sm group-hover:text-blue-600 transition-colors mb-1 line-clamp-1">
                                {article.title}
                              </h3>
                              <p className="text-gray-600 text-xs mb-1.5 line-clamp-2">
                                {article.excerpt}
                              </p>
                              <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                                <div className="flex items-center gap-1">
                                  <svg className="w-3 h-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                  </svg>
                                  <span>{article.author}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <svg className="w-3 h-3 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  <span>{article.timeLife}</span>
                                </div>
                                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs bg-blue-50 text-blue-600">
                                  {article.category}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <DownloadPage
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
