"use client";

import { GameNavigation } from "@/components/game-navigation";
import { GameBanner } from "@/components/game-banner";
import { GameHomepage } from "@/components/game-homepage";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Kiếm Thế Thần Kiếm - Kiếm thế PC 2009",
  description:
    "Trang chủ Kiếm Thế Thần Kiếm - Kiếm thế PC 2009 với tin tức, sự kiện và hoạt động mới nhất",
  url: "https://thientukiem.com",
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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="bg-background">
        <GameNavigation />
        <main>
          {/* Full-screen banner section */}
          <GameBanner />
          {/* Scrollable content section */}
          {/* <GameHomepage /> */}
        </main>
      </div>
    </>
  );
}
