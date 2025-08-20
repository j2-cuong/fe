"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Newspaper, Users, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function GameNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Trang chủ", icon: Home },
    { href: "/tin-tuc", label: "Tin tức", icon: Newspaper },
    {
      href: "https://facebook.com/gamevietnam",
      label: "Cộng đồng",
      icon: Users,
      external: true,
    },
    { href: "/group", label: "Group", icon: MessageCircle },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-emerald-200"
      role="navigation"
      aria-label="Menu điều hướng chính"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link
            href="/"
            className="flex items-center space-x-2 group"
            aria-label="Về trang chủ Thiên Tử Kiếm"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center">
              <img
                src="website_logo.png"
                alt="Thiên Tử Kiếm - Kiếm Thế PC 2009"
                className="w-full h-full object-cover object-center !bg-transparent"
              />
            </div>
            <span className="font-serif font-bold text-lg sm:text-xl text-gray-800 group-hover:text-emerald-600 transition-colors">
              Thiên Tử Kiếm
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={cn(
                    "flex items-center space-x-2 transition-colors duration-200 py-2 px-3 rounded-md",
                    isActive
                      ? "text-emerald-600 bg-emerald-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-700" // Thêm text-gray-700 để chỉ định màu cho icon
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
            className="md:hidden py-4 border-t border-emerald-200"
            role="menu"
            aria-label="Menu di động"
          >
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className={cn(
                      "flex items-center space-x-2 transition-colors duration-200 px-3 py-2 rounded-md",
                      isActive
                        ? "text-emerald-600 bg-emerald-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    )}
                    onClick={() => setIsOpen(false)}
                    role="menuitem"
                    aria-current={isActive ? "page" : undefined}
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                    <span>{item.label}</span>
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
