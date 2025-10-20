"use client";

import { useEffect, useState } from "react";

export function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center relative">
        {/* Animated background circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 border-2 border-primary/20 rounded-full animate-spin-slow"></div>
          <div className="absolute w-24 h-24 border-2 border-accent/30 rounded-full animate-spin-reverse"></div>
          <div className="absolute w-16 h-16 border-2 border-secondary/40 rounded-full animate-spin"></div>
        </div>

        {/* Main loading spinner */}
        <div className="relative z-10">
          <div className="w-20 h-20 border-4 border-muted rounded-full animate-spin border-t-primary relative">
            <div className="absolute inset-0 w-20 h-20 border-4 border-transparent rounded-full animate-ping border-t-accent"></div>
          </div>
        </div>

        {/* Loading text with typewriter effect */}
        <h2 className="mt-8 text-xl  font-bold text-primary animate-pulse">
          Đang tải game...
        </h2>
        <p className="mt-2 text-sm text-muted-foreground animate-fade-in">
          Chuẩn bị trải nghiệm tuyệt vời
        </p>

        {/* Progress bar */}
        <div className="mt-6 w-64 mx-auto">
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300 animate-pulse-glow"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            {Math.round(Math.min(progress, 100))}%
          </p>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/50 rounded-full animate-float"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
