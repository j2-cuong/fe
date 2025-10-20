import type { Metadata } from "next";
import { GameNavigation } from "@/components/game-navigation";
import EventRenderer from "@/components/newComponent/event-renderer";
import { baoVanDong } from "@/data/tongkim";

export const metadata: Metadata = {
  title: "Hoạt động Bao Vạn Đồng - Kiếm Thế Thần Kiếm",
  description: "Tham gia hoạt động Bao Vạn Đồng với nhiều phần thưởng hấp dẫn",
};

export default function BVDPage() {
   return (
           <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
             <GameNavigation />
             <div className="max-w-5xl mx-auto px-4 py-26">
               <EventRenderer eventData={baoVanDong} />
             </div>
           </div>
         );
}

