import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { GameNavigation } from "@/components/game-navigation";

export const metadata: Metadata = {
    title: "Hỏa Kỳ Lân - Kiếm Thế Thần Kiếm",
    description: "Lịch và phần thưởng Hỏa Kỳ Lân trong Kiếm Thế Thần Kiếm",
};

// Dữ liệu phần thưởng (Hỏa Kỳ Lân)
const rewardTiers = [
    {
        milestone: "Kết Liễu",
        rewards: [
            { type: "special", text: "Danh hiệu + Vòng sáng: Kết Liễu BOSS (7 Ngày)" },
            { type: "special", text: "5 Hòa Thị Ngọc (Không Khóa)" },
            { type: "currency", text: "200 vạn đồng" },
            { type: "special", text: "100 vạn mốc nạp" },
            { type: "currency", text: "7 Huyền Tinh Cấp 8 (Không khóa)" },
            { type: "currency", text: "7 Huyền Cấp 7 (Không khóa)" },
            { type: "currency", text: "15 Huyền Tinh Cấp 6 (Không khóa)" },
            { type: "special", text: "1 Thú cưỡi Tử Hà Phong Tôn – Huyễn (Không khóa, HSD 7 ngày)" },
            {
                type: "stats", stats: [
                    "+10.000 điểm tài phú",
                    "Tốc độ di chuyển +150%",
                    "Kháng tất cả +100 điểm",
                    "Né tránh +100",
                    "Sinh lực tối đa +1000 điểm",
                    "Thể lực tối đa +150 điểm",
                    "Di hình hoán ảnh cấp +1",
                    "Phát huy lực tấn công cơ bản +10%",
                    "Chịu sát thương chí mạng -10%",
                    "Hiệu suất phục hồi sinh lực +10%",
                    "Kỹ năng đồng hành, Kỹ năng phái +1",
                ]
            },
        ],
        active: true,
    },
    {
        milestone: "Bang Hội",
        rewards: [
            { type: "currency", text: "200 Tiền Du Long" },
            { type: "currency", text: "200 vạn Bạc Khóa" },
            { type: "special", text: "100 vạn mốc nạp" },
            { type: "currency", text: "100 vạn Đồng Khóa" },
            { type: "currency", text: "2 Huyền Tinh Cấp 8 (khoá)" },
        ],
        active: false,
    },
];

export default function HoaKyLanPage() {
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
                            Hỏa Kỳ Lân
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
                                <li>Hỏa Kỳ Lân (mở giới hạn 109)</li>
                                <li>Đẳng cấp tối thiểu 100 (Trong top 500 tài phú)</li>
                                <li>Thứ 2 hàng tuần, Boss xuất hiện ở cuối Tần Lăng 1</li>
                                <li>Mỗi ngày người chơi có tối đa 2 tiếng trong Tần Lăng, không cộng dồn</li>
                                <li>Mỗi bang hội được phép tham gia tối đa 150 thành viên</li>
                                <li>Trong thời gian HKL 22:00 – 23:30: chỉ thành viên đã đăng ký mới có thể vào Tần Lăng</li>
                                <li>22:00: tất cả nhân vật đang ở Tần Lăng sẽ được đưa về thành</li>
                                <li>Nếu 30s-1 phút không gây sát thương lên HKL, phần trăm sát thương sẽ reset về 0</li>
                                <li>Bảng xếp hạng sát thương cập nhật mỗi khi HKL thay đổi 1% HP; thay đổi xếp hạng sẽ thông báo trên Kênh Hệ Thống</li>
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
                                                reward.type === "stats" ? (
                                                    <ul key={rewardIndex} className="text-red-600 list-disc pl-6 space-y-1">
                                                        {reward.stats?.map((s: string, i: number) => (<li key={i}>{s}</li>))}
                                                    </ul>
                                                ) : (
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
                                                )
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


