"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, User, Clock, ArrowRight, Star, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getFeaturedArticles } from "@/data/news";
import { formatDistanceToNow } from "date-fns";

export function FeaturedNewsTable() {
  const featuredArticles = getFeaturedArticles().slice(0, 5); // Lấy 5 bài viết nổi bật

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              Tin Tức Nổi Bật
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Những bài viết và sự kiện quan trọng nhất trong cộng đồng Kiếm Thế Thần Kiếm
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="bg-white rounded-2xl shadow-lg border border-blue-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-lg">Bài viết</th>
                    <th className="px-6 py-4 text-left font-semibold text-lg">Tác giả</th>
                    <th className="px-6 py-4 text-left font-semibold text-lg">Thời gian</th>
                    <th className="px-6 py-4 text-left font-semibold text-lg">Danh mục</th>
                    <th className="px-6 py-4 text-center font-semibold text-lg">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-100">
                  {featuredArticles.map((article, index) => (
                    <tr 
                      key={article.id} 
                      className="hover:bg-blue-50 transition-all duration-300 group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-6 h-6 text-white" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-bold text-gray-800 text-lg group-hover:text-blue-600 transition-colors mb-2">
                              {article.title}
                            </h3>
                            <p className="text-gray-600 text-sm line-clamp-2">
                              {article.excerpt}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <User className="w-4 h-4 text-blue-500" />
                          <span className="font-medium">{article.author}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-4 h-4 text-cyan-500" />
                          <span className="text-sm">{article.timeLife}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                          {article.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="text-blue-600 hover:text-white hover:bg-blue-500 rounded-xl px-4 py-2 transition-all duration-300"
                        >
                          <Link href={`/tin-tuc/${article.slug}`}>
                            <Eye className="w-4 h-4 mr-2" />
                            Xem chi tiết
                          </Link>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden space-y-4">
          {featuredArticles.map((article, index) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl p-6 shadow-lg border border-blue-200 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-800 text-lg mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-blue-500" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-500" />
                  <span>{article.timeLife}</span>
                </div>
                <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                  {article.category}
                </span>
              </div>

              <Button
                variant="ghost"
                size="sm"
                asChild
                className="w-full text-blue-600 hover:text-white hover:bg-blue-500 rounded-xl py-3 transition-all duration-300"
              >
                <Link href={`/tin-tuc/${article.slug}`}>
                  <Eye className="w-4 h-4 mr-2" />
                  Xem chi tiết
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <Button
            asChild
            className="btn-modern text-white px-8 py-4 rounded-xl text-lg font-semibold hover-glow"
          >
            <Link href="/tin-tuc">
              <Star className="w-5 h-5 mr-2" />
              Xem Tất Cả Tin Tức
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
