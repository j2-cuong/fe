"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { User, Clock, Star, Sparkles, ArrowRight } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { getFeaturedArticles } from "@/data/news";


export function GameHomepage() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const featuredArticles = getFeaturedArticles();

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
      className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8"
      aria-label="Nội dung chính trang chủ"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          {/* Header */}
          <div className="mb-12 text-center animate-fade-in-up">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gradient">
                Tin Tức Nổi Bật
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cập nhật những tin tức và sự kiện mới nhất
            </p>
          </div>

          {/* Articles Grid */}
          <div className="w-full max-w-6xl grid gap-6 mb-12">
            {featuredArticles.map((article, index) => (
              <div
                key={article.id}
                className={`card-modern p-6 hover-lift cursor-pointer group ${
                  isVisible
                    ? "animate-fade-in-up"
                    : "opacity-0 translate-y-[20px]"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleArticleClick(article.slug)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-purple-400 group-hover:text-white transition-colors" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-blue-400" />
                      <span className={article.author.includes("Admin") || article.author.includes("GM") ? "text-red-400" : "text-orange-400"}>
                        {article.author}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-purple-400" />
                      <span>
                        {formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })}
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">
                    {article.timeLife}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Button
              variant="outline"
              size="lg"
              className="btn-modern text-white px-8 py-4 rounded-xl text-lg font-semibold hover-glow border-white/20 hover:border-purple-400"
              aria-label="Xem tất cả tin tức game"
              onClick={() => router.push("/tin-tuc")}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Xem Tất Cả Tin Tức
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
