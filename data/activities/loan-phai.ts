import { ActivityPageData } from "./types";

export const loanPhaiData: ActivityPageData = {
    meta: {
        title: "Hoạt động Loạn Phái - Kiếm Thế Thần Kiếm",
        description:
            "Thời gian và phần thưởng hoạt động Loạn Phái trong Kiếm Thế Thần Kiếm",
    },
    headerTitle: "Hoạt động Loạn Phái",
    scheduleTitle: "Thời gian diễn ra",
    schedule: [
        "Diễn ra vào thứ 6 hàng tuần",
        "Báo danh từ 19:50",
        "Tham gia hoạt động từ 20:00 đến 20:45",
    ],
    notes: ["Không diễn ra hoạt động tìm cờ"],
    rewardTiers: [
        {
            milestone: "Quán Quân",
            rewards: [
                { type: "special", text: "Danh hiệu Quán Quân" },
                { type: "special", text: "Mốc nạp 150 vạn" },
                { type: "currency", text: "150 vạn đồng" },
                { type: "currency", text: "24 viên Huyền tinh 6 (không khóa)" },
                { type: "currency", text: "30 điểm Uy Danh" },
                { type: "special", text: "300 điểm công trạng" },
            ],
            active: true,
        },
        {
            milestone: "Á Quân",
            rewards: [
                { type: "special", text: "Danh hiệu Á Quân" },
                { type: "special", text: "Mốc nạp 100 vạn" },
                { type: "currency", text: "100 vạn đồng" },
                { type: "currency", text: "18 viên Huyền tinh 6 (không khóa)" },
                { type: "currency", text: "20 điểm Uy Danh" },
                { type: "special", text: "240 điểm công trạng" },
            ],
            active: true,
        },
        {
            milestone: "Top 4",
            rewards: [
                { type: "special", text: "Mốc nạp 50 vạn" },
                { type: "currency", text: "50 vạn đồng" },
                { type: "currency", text: "12 huyền tinh 6 (không khóa)" },
                { type: "currency", text: "15 điểm Uy Danh" },
                { type: "special", text: "180 điểm công trạng" },
            ],
            active: false,
        },
        {
            milestone: "Top 8",
            rewards: [
                { type: "special", text: "Mốc nạp 30 vạn" },
                { type: "currency", text: "30 vạn đồng" },
                { type: "currency", text: "8 huyền tinh 6 (không khóa)" },
                { type: "currency", text: "10 điểm Uy Danh" },
                { type: "special", text: "120 điểm công trạng" },
            ],
            active: false,
        },
        {
            milestone: "Top 16",
            rewards: [
                { type: "special", text: "Mốc nạp 20 vạn" },
                { type: "currency", text: "20 vạn Đồng" },
                { type: "currency", text: "5 Huyền tinh 6 (không khóa)" },
                { type: "currency", text: "6 điểm Uy Danh" },
                { type: "special", text: "60 điểm công trạng" },
            ],
            active: false,
        },
        {
            milestone: "Khuyến khích tham gia",
            rewards: [
                { type: "special", text: "Yêu cầu tham gia hết vòng loạn chiến" },
                { type: "special", text: "Mốc nạp 10 vạn" },
                { type: "currency", text: "2 Huyền tinh 6 (khóa)" },
                { type: "currency", text: "2 điểm Uy Danh" },
            ],
            active: false,
        },
    ],
};


