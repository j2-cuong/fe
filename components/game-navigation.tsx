"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Newspaper, Users, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNavigation } from "@/data/navigation";

export function GameNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const getIcon = (iconName: string) => {
    const icons = {
      Home,
      Newspaper,
      Users,
      MessageCircle,
    };
    return icons[iconName as keyof typeof icons] || Home;
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-200"
      role="navigation"
      aria-label="Menu điều hướng chính"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link
            href="/"
            className="flex items-center space-x-3 group hover-lift"
            aria-label="Về trang chủ Kiếm Thế Thần Kiếm"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-600 p-1">
              <img
                src="/logo.png"
                alt="Kiếm Thế Thần Kiếm - Kiếm Thế PC 2009"
                className="w-full h-full object-cover object-center rounded-full"
              />
            </div>
            <span className="font-bold text-lg sm:text-xl text-gradient group-hover:scale-105 transition-transform">
              Kiếm Thế Thần Kiếm
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            {mainNavigation.map((item) => {
              const Icon = getIcon(item.icon);
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={cn(
                    "flex items-center space-x-2 transition-all duration-300 py-3 px-4 rounded-xl hover-lift",
                    isActive
                      ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-600 border border-blue-400/30"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Đóng menu" : "Mở menu"}
          >
            {isOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </Button>
        </div>

        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden py-4 border-t border-blue-200"
            role="menu"
            aria-label="Menu di động"
          >
            <div className="flex flex-col space-y-2">
              {mainNavigation.map((item) => {
                const Icon = getIcon(item.icon);
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className={cn(
                      "flex items-center space-x-2 transition-all duration-300 px-4 py-3 rounded-xl hover-lift",
                      isActive
                        ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-600 border border-blue-400/30"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    )}
                    onClick={() => setIsOpen(false)}
                    role="menuitem"
                    aria-current={isActive ? "page" : undefined}
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
