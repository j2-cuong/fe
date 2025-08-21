import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { GameNavigation } from "@/components/game-navigation";
import "./page.css";

export const metadata: Metadata = {
  title: "Hoạt động Hoàng Thành Tranh Bá - Thiên Tử Kiếm",
  description:
    "Tham gia hoạt động Hoàng Thành Tranh Bá với nhiều phần thưởng hấp dẫn và thử thách thú vị",
};

export default function HoangThanhTranhBaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <GameNavigation />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/tin-tuc">
          <Button variant="ghost" className="mb-6 group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Quay lại tin tức
          </Button>
        </Link>
        <article className="rounded-2xl p-8 shadow-lg bg-white">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Hoàng Thành Tranh Bá
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-blue-500" />
                <span className="text-red-500">Administrator</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-red-500" />
                <span>01/08/2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tag className="h-4 w-4 text-yellow-500" />
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                  Sự kiện
                </span>
              </div>
            </div>
          </header>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Sự kiện PK Hoàng Thành Tranh Bá ( Bang Hội )
            </p>

            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Thời gian diễn ra
            </h2>
            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
              <li>THỨ 5 HÀNG TUẦN</li>
            </ul>

            <div className="bg-cyan-200 p-4 rounded-lg mb-6">
              <p className=" font-medium text-red-500">⚠️ Lưu ý quan trọng:</p>
              <p className="text-red-500">
                Nhận quà: Từ 20H41 - 20H59 (KHÔNG NHẬN TRONG THỜI GIAN SẼ MẤT
                PHẦN THƯỞNG)
              </p>
            </div>

            <h2 className="text-2xl font-serif font-bold !text-gray-900 mb-4">
              Điều kiện tham gia
            </h2>
            <ul className="mb-6 space-y-2 text-gray-900">
              <li>🎯 Người chơi báo danh từ 19:50</li>
              <li>🕒 Hoạt động từ 20:00 đến 20:40</li>
              <li>👥 Hình thức: Bang Hội</li>
              <li>👥 Tối đa 4 bang hội tham gia</li>
            </ul>
          </div>
          <div className="event-container">
            <div className="reward-blocks">
              <div className="milestones-noneactive">Hạng 1</div>
              <div className="rewardss">
                <div className="items badges">
                  Danh Hiệu : Thiên Hạ Đệ Nhất Bang (7 NGÀY)
                </div>
                <div className="items currencys">
                  3 viên Huyền tinh 8 (khoá)
                </div>
                <div className="items currencys">500 Tiền Du Long (khoá)</div>
                <div className="items currencys">50 vạn Bạc khoá</div>
                <div className="items currencys">50 vạn Đồng khoá</div>
                <div className="items currencys">100 vạn mốc nạp.</div>
                <div className="items currencys">300 điểm công trạng</div>
                <div className="items currencys">
                  100 điểm Đoàn Viên Gia Tộc
                </div>
              </div>
            </div>
            <div className="reward-blocks">
              <div className="milestones-noneactive">Hạng 2</div>
              <div className="rewardss">
                <div className="items currencys">
                  2 viên Huyền tinh 8 (khoá)
                </div>
                <div className="items currencys">300 Tiền Du Long (khoá)</div>
                <div className="items currencys">30 vạn Bạc khoá</div>
                <div className="items currencys">30 vạn Đồng khoá</div>
                <div className="items currencys">70 vạn mốc nạp.</div>
                <div className="items currencys">200 điểm công trạng</div>
                <div className="items currencys">50 điểm Đoàn Viên Gia Tộc</div>
              </div>
            </div>
            <div className="reward-blocks">
              <div className="milestones-noneactive">Hạng 3</div>
              <div className="rewardss">
                <div className="items currencys">
                  1 viên Huyền tinh 8 (khoá)
                </div>
                <div className="items currencys">200 Tiền Du Long (khoá)</div>
                <div className="items currencys">20 vạn Bạc khoá</div>
                <div className="items currencys">20 vạn Đồng khoá</div>
                <div className="items currencys">50 vạn mốc nạp.</div>
                <div className="items currencys">100 điểm công trạng</div>
                <div className="items currencys">30 điểm Đoàn Viên Gia Tộc</div>
              </div>
            </div>
            <div className="reward-blocks">
              <div className="milestones-noneactive">Hạng 4</div>
              <div className="rewardss">
                <div className="items currencys">2 viên Huyền tinh 7(khoá)</div>
                <div className="items currencys">100 Tiền Du Long (khoá)</div>
                <div className="items currencys">10 vạn Bạc khoá</div>
                <div className="items currencys">10 vạn Đồng khoá</div>
                <div className="items currencys">10 vạn mốc nạp.</div>
                <div className="items currencys">50 điểm công trạng</div>
                <div className="items currencys">10 điểm Đoàn Viên Gia Tộc</div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
