import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { GameNavigation } from "@/components/game-navigation";

export const metadata: Metadata = {
    title: "Tần Lăng & Tần Thủy Hoàng - Kiếm Thế Thần Kiếm",
    description:
        "Lịch và phần thưởng Tần Lăng & Tần Thủy Hoàng trong Kiếm Thế Thần Kiếm",
};

// Dữ liệu phần thưởng (Tần Thủy Hoàng)
const rewardTiers = [
    {
        milestone: "Kết Liễu",
        rewards: [
            { type: "special", text: "2 Hòa Thị Ngọc" },
            { type: "currency", text: "100 vạn đồng" },
            { type: "currency", text: "3 viên Huyền tinh 8" },
        ],
        active: true,
    },
    {
        milestone: "Mức 80%",
        rewards: [
            { type: "special", text: "1 viên Hòa Thị Ngọc" },
            { type: "currency", text: "50 vạn đồng" },
            { type: "currency", text: "2 viên Huyền tinh 8" },
        ],
        active: false,
    },
    {
        milestone: "Mức 50%",
        rewards: [
            { type: "special", text: "1 viên Hòa Thị Ngọc" },
            { type: "currency", text: "50 vạn đồng" },
            { type: "currency", text: "1 viên Huyền tinh 8" },
        ],
        active: false,
    },
    {
        milestone: "Mức 20%",
        rewards: [
            { type: "special", text: "1 viên Hòa Thị Ngọc" },
            { type: "currency", text: "50 vạn đồng" },
            { type: "currency", text: "1 viên Huyền tinh 8" },
        ],
        active: false,
    },
];

export default function TanThuyHoangPage() {
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
                            Tần Lăng & Tần Thủy Hoàng
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
                        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Thời gian & Quy định</h2>
                        <div className="bg-blue-50 p-4 rounded-lg mb-6">
                            <ul className="space-y-2 text-blue-700">
                                <li>Đẳng cấp tối thiểu 100 (Trong top 500 tài phú)</li>
                                <li>Mỗi ngày tối đa 2 tiếng trong Tần Lăng, không cộng dồn</li>
                                <li>Tần Thủy Hoàng (mở giới hạn 109)</li>
                                <li>Mỗi bang hội tham gia tối đa 102 thành viên</li>
                                <li>Riêng thứ 2: báo danh HKL là TTH chung, báo danh 150 thành viên</li>
                                <li>Thời gian Tần Thủy Hoàng 22:00 – 23:30: chỉ thành viên đã đăng ký mới được vào Tần Lăng</li>
                                <li>22:00: tất cả nhân vật đang ở Tần Lăng sẽ được đưa về thành</li>
                                <li>Tần Thủy Hoàng xuất hiện lúc 22:40 mỗi ngày tại Tần Lăng 5</li>
                                <li>Cổng Tần Lăng 5 đóng lúc 23:30</li>
                                <li>Nếu TTH chưa bị tiêu diệt, thành viên đang ở tầng 5 tiếp tục tham gia đến khi TTH bị tiêu diệt; ngoài tầng 5 không thể vào lại</li>
                                <li>Phần trăm sát thương sẽ reset về 0 nếu 30s-1 phút không gây sát thương lên TTH</li>
                                <li>Bảng xếp hạng sát thương cập nhật mỗi khi TTH thay đổi 1% HP; thay đổi xếp hạng sẽ thông báo trên Kênh Hệ Thống</li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            {rewardTiers.map((tier, index) => (
                                <div
                                    key={index}
                                    className={`bg-white rounded-xl border ${tier.active ? "border-emerald-200" : "border-gray-200"}
                    shadow-sm overflow-hidden`}
                                >
                                    <div
                                        className={`px-4 py-3 font-medium ${tier.active ? "bg-emerald-50 text-emerald-800" : "bg-gray-50 text-gray-800"}`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span>{tier.milestone}</span>
                                        </div>
                                    </div>

                                    <div className="p-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {tier.rewards.map((reward: any, rewardIndex: number) => (
                                                <div
                                                    key={rewardIndex}
                                                    className={`flex items-start gap-2 ${reward.type === "special"
                                                        ? "text-purple-600"
                                                        : reward.type === "currency"
                                                            ? "text-emerald-600"
                                                            : "text-blue-600"
                                                        }`}
                                                >
                                                    <span>•</span>
                                                    <span>{reward.text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}


