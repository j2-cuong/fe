"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import DownloadPage from "@/components/game-download";
import { BadgePlus, Bell, Download, User } from "lucide-react";

export function GameBanner() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToEvents = () => {
    const eventsSection = document.getElementById("events-section");
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        aria-label="Banner chính của Kiếm Thế Thần Kiếm"
        role="banner"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          <img
            src="1.png"
            alt="Kiếm sĩ trong thế giới võ hiệp"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="relative z-20 text-center text-white px-3 sm:px-6 lg:px-8 lg:mt-16 w-full">
          <div className="max-w-sm mx-auto">
            <div className="space-y-4 relative w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/30 to-blue-200/30 rounded-2xl blur-xl animate-pulse backdrop-blur-sm"></div>

              <div className="relative z-10 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl mt-[80%]">
                <h2 className="text-2xl font-serif font-bold text-white mb-3 text-shadow-lg">
                  Tải Game Ngay
                </h2>
                <div className="flex flex-col gap-3 justify-center items-center mb-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 py-3 rounded-lg text-base font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 border border-emerald-500 w-full"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Download className="animate-bounce" /> TẢI GAME
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      window.location.href =
                        "http://taikhoan.ktthankiem.com/register.html";
                    }}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg text-base font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 border border-blue-500 w-full"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <BadgePlus className="animate-bounce" /> ĐĂNG KÝ
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      window.location.href =
                        "http://taikhoan.ktthankiem.com/login.html";
                    }}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg text-base font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 border border-blue-500 w-full"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <User className="animate-bounce" /> TÀI KHOẢN
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      router.push("/tin-tuc");
                    }}
                    className="border-none bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white px-6 py-3 rounded-lg text-base font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 border  w-full"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Bell className="animate-bounce" /> TIN TỨC
                    </span>
                  </button>
                </div>
                <div className="flex items-center justify-center space-y-1 text-xs text-yellow-400 gap-3">
                  <span className="animate-fade-in">✓ Miễn phí</span>
                  <span
                    className="animate-fade-in"
                    style={{ animationDelay: "0.2s" }}
                  >
                    ✓ An toàn
                  </span>
                  <span
                    className="animate-fade-in"
                    style={{ animationDelay: "0.4s" }}
                  >
                    ✓ Cập nhật liên tục
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DownloadPage
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
