"use client";

import { useState, useEffect } from "react";
import { ChevronRight, Newspaper } from "lucide-react";
import { newsArticles } from "@/data/news";

export function ScrollingNews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const latestArticles = newsArticles.slice(0, 5); // Lấy 5 bài viết mới nhất

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === latestArticles.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Thay đổi mỗi 4 giây

    return () => clearInterval(interval);
  }, [latestArticles.length]);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center gap-4">
        <div className="flex items-center gap-2 flex-shrink-0">
          <Newspaper className="w-5 h-5" />
          <span className="font-semibold text-sm">Tin mới:</span>
        </div>
        
        <div className="flex-1 overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {latestArticles.map((article, index) => (
              <div
                key={article.id}
                className="w-full flex-shrink-0 flex items-center gap-2"
              >
                <span className="text-sm font-medium truncate">
                  {article.title}
                </span>
                <ChevronRight className="w-4 h-4 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1 flex-shrink-0">
          {latestArticles.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
