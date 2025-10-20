import { GameNavigation } from "@/components/game-navigation";
import EventRenderer from "@/components/newComponent/event-renderer";
import { hoanhThanhTranhBa } from "@/data/tongkim";

export default function HoangThanhTranhBaPage() {
     return (
             <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
               <GameNavigation />
               <div className="max-w-5xl mx-auto px-4 py-26">
                 <EventRenderer eventData={hoanhThanhTranhBa} />
               </div>
             </div>
           );
  }
  