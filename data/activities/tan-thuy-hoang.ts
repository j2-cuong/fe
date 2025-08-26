import { ActivityPageData } from "./types";

export const tanThuyHoangData: ActivityPageData = {
    meta: {
        title: "Tần Lăng & Tần Thủy Hoàng - Kiếm Thế Thần Kiếm",
        description:
            "Lịch và phần thưởng Tần Lăng & Tần Thủy Hoàng trong Kiếm Thế Thần Kiếm",
    },
    headerTitle: "Tần Lăng & Tần Thủy Hoàng",
    scheduleTitle: "Thời gian & Quy định",
    schedule: [
        "Đẳng cấp tối thiểu 100 (Trong top 500 tài phú)",
        "Mỗi ngày tối đa 2 tiếng trong Tần Lăng, không cộng dồn",
        "Tần Thủy Hoàng (mở giới hạn 109)",
        "Mỗi bang hội tham gia tối đa 102 thành viên",
        "Riêng thứ 2: báo danh HKL là TTH chung, báo danh 150 thành viên",
        "Thời gian Tần Thủy Hoàng 22:00 – 23:30: chỉ thành viên đã đăng ký mới được vào Tần Lăng",
        "22:00: tất cả nhân vật đang ở Tần Lăng sẽ được đưa về thành",
        "Tần Thủy Hoàng xuất hiện lúc 22:40 mỗi ngày tại Tần Lăng 5",
        "Cổng Tần Lăng 5 đóng lúc 23:30",
        "Nếu TTH chưa bị tiêu diệt, thành viên đang ở tầng 5 tiếp tục tham gia đến khi TTH bị tiêu diệt; ngoài tầng 5 không thể vào lại",
        "Phần trăm sát thương sẽ reset về 0 nếu 30s-1 phút không gây sát thương lên TTH",
        "Bảng xếp hạng sát thương cập nhật mỗi khi TTH thay đổi 1% HP; thay đổi xếp hạng sẽ thông báo trên Kênh Hệ Thống",
    ],
    rewardTiers: [
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
    ],
};


