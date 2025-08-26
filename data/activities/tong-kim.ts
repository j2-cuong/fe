import { ActivityPageData } from "./types";

export const tongKimData: ActivityPageData = {
    meta: {
        title: "Hoạt động Tống kim - Kiếm Thế Thần Kiếm",
        description:
            "Tham gia cuộc chiến Tống kim khốc liệt với những trận đấu PvP hấp dẫn",
    },
    headerTitle: "Hoạt động tống kim",
    scheduleTitle: "Thời gian diễn ra",
    schedule: ["Đợt 1: 11:00 sáng", "Đợt 2: 21:00 tối", "Đợt 3: 23:00 tối"],
    notes: [
        "Bên thắng được thưởng 1.200, bên thua được thưởng 600 (điểm tích lũy nhận thưởng)",
    ],
    rewardTiers: [
        {
            milestone: "1.500 - 2.400 điểm",
            rewards: [
                { type: "currency", text: "5 triệu điểm kinh nghiệm" },
                { type: "currency", text: "10 vạn Đồng khóa" },
                { type: "currency", text: "10 vạn Bạc khóa" },
                { type: "currency", text: "3 Huyền tinh 5" },
            ],
            active: false,
        },
        {
            milestone: "2.401 - 5.000 điểm",
            rewards: [
                { type: "currency", text: "5 triệu điểm kinh nghiệm" },
                { type: "currency", text: "20 vạn Đồng khóa" },
                { type: "currency", text: "20 vạn Bạc khóa" },
                { type: "currency", text: "5 Huyền tinh 5" },
                { type: "currency", text: "5 điểm Uy danh" },
                { type: "currency", text: "5 tiền du long" },
                { type: "currency", text: "5 vạn đồng" },
                { type: "special", text: "Mốc nạp 10 vạn Đồng" },
                { type: "special", text: "1 mảnh huy chương ( không khóa )" },
                { type: "special", text: "1 mảnh ghép Uẩn Linh ( khóa )" },
            ],
        },
        {
            milestone: "5.001 - 7.000 điểm",
            rewards: [
                { type: "currency", text: "5 triệu điểm kinh nghiệm" },
                { type: "currency", text: "30 vạn Đồng khóa" },
                { type: "currency", text: "30 vạn Bạc khóa" },
                { type: "currency", text: "7 Huyền tinh 5" },
                { type: "currency", text: "7 điểm Uy danh" },
                { type: "currency", text: "7 tiền du long" },
                { type: "currency", text: "7 vạn đồng" },
                { type: "currency", text: "Mốc nạp 20 vạn Đồng" },
                { type: "special", text: "3 mảnh huy chương ( không khóa )" },
                { type: "special", text: "3 mảnh ghép Uẩn Linh ( khóa )" },
                { type: "special", text: "60 điểm công trạng" },
            ],
        },
        {
            milestone: "7.001 - 10.000 điểm",
            rewards: [
                { type: "currency", text: "5 triệu điểm kinh nghiệm" },
                { type: "currency", text: "40 vạn Đồng khóa" },
                { type: "currency", text: "40 vạn Bạc khóa" },
                { type: "currency", text: "10 Huyền tinh 5" },
                { type: "currency", text: "10 điểm Uy danh" },
                { type: "currency", text: "10 tiền du long" },
                { type: "currency", text: "10 vạn đồng" },
                { type: "currency", text: "Mốc nạp 30 vạn Đồng" },
                { type: "special", text: "5 mảnh huy chương ( không khóa )" },
                { type: "special", text: "5 mảnh ghép Uẩn Linh ( khóa )" },
                { type: "special", text: "90 điểm công trạng" },
            ],
        },
        {
            milestone: "10.001 - 15.000 điểm",
            rewards: [
                { type: "currency", text: "5 triệu điểm kinh nghiệm" },
                { type: "currency", text: "50 vạn Đồng khóa" },
                { type: "currency", text: "50 vạn Bạc khóa" },
                { type: "currency", text: "5 Huyền tinh 6" },
                { type: "currency", text: "15 điểm Uy danh" },
                { type: "currency", text: "15 tiền du long" },
                { type: "currency", text: "15 vạn đồng" },
                { type: "currency", text: "Mốc nạp 50 vạn Đồng" },
                { type: "special", text: "7 mảnh huy chương ( không khóa )" },
                { type: "special", text: "7 mảnh ghép Uẩn Linh ( khóa )" },
                { type: "special", text: "150 điểm công trạng" },
            ],
        },
        {
            milestone: "15.001 - 30.000 điểm",
            rewards: [
                { type: "currency", text: "5 triệu điểm kinh nghiệm" },
                { type: "currency", text: "70 vạn Đồng khóa" },
                { type: "currency", text: "70 vạn Bạc khóa" },
                { type: "currency", text: "8 Huyền tinh 6" },
                { type: "currency", text: "20 điểm Uy danh" },
                { type: "currency", text: "30 tiền du long" },
                { type: "currency", text: "20 vạn đồng" },
                { type: "currency", text: "Mốc nạp 70 vạn Đồng" },
                { type: "special", text: "9 mảnh huy chương ( không khóa )" },
                { type: "special", text: "9 mảnh ghép Uẩn Linh ( khóa )" },
                { type: "special", text: "210 điểm công trạng" },
            ],
        },
        {
            milestone: "trên 30.000 điểm",
            rewards: [
                { type: "currency", text: "5 triệu điểm kinh nghiệm" },
                { type: "currency", text: "100 vạn Đồng khóa" },
                { type: "currency", text: "100 vạn Bạc khóa" },
                { type: "currency", text: "5 Huyền tinh 7" },
                { type: "currency", text: "25 điểm Uy danh" },
                { type: "currency", text: "50 tiền du long" },
                { type: "currency", text: "30 vạn đồng" },
                { type: "currency", text: "Mốc nạp 100 vạn Đồng" },
                { type: "special", text: "12 mảnh huy chương ( không khóa )" },
                { type: "special", text: "12 mảnh ghép Uẩn Linh ( khóa )" },
                { type: "special", text: "300 điểm công trạng" },
            ],
        },
    ],
};


