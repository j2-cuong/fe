export interface LevelOpeningPhase {
    id: number;
    date: string;
    time: string;
    levelLimit: string;
    support: string;
    isDetermined: boolean;
    daysAfterServerOpen?: number;
}

export interface SealUpgradeLimit {
    level: string;
    maxUpgrade: string;
    additionalInfo?: string;
}

export interface LevelOpeningRoadmap {
    serverOpenDate: string;
    phases: LevelOpeningPhase[];
    sealUpgrades: SealUpgradeLimit[];
}

export const levelOpeningRoadmap: LevelOpeningRoadmap = {
    serverOpenDate: "13/09/2025",
    phases: [
        {
            id: 1,
            date: "13/09/2025",
            time: "10:00",
            levelLimit: "Open chính thức cấp 80 giới hạn cấp 89",
            support: "Tân thủ cấp 80",
            isDetermined: true,
            daysAfterServerOpen: 0,
        },
        {
            id: 2,
            date: "25/09/2025",
            time: "00:00",
            levelLimit: "Mở giới hạn cấp 99",
            support: "Hỗ trợ toàn máy chủ cấp 90",
            isDetermined: true,
            daysAfterServerOpen: 12,
        },
        {
            id: 3,
            date: "12/10/2025",
            time: "00:00",
            levelLimit: "Mở giới hạn cấp 109",
            support: "Hỗ trợ toàn máy chủ cấp 100",
            isDetermined: true,
            daysAfterServerOpen: 29,
        },
        {
            id: 4,
            date: "03/11/2025",
            time: "00:00",
            levelLimit: "Mở giới hạn cấp 119",
            support: "Hỗ trợ toàn máy chủ cấp 110",
            isDetermined: true,
            daysAfterServerOpen: 51,
        },
        {
            id: 5,
            date: "CHƯA XÁC ĐỊNH",
            time: "",
            levelLimit: "Mở giới hạn cấp 129",
            support: "Hỗ trợ toàn máy chủ cấp 120",
            isDetermined: false,
        },
        {
            id: 6,
            date: "CHƯA XÁC ĐỊNH",
            time: "",
            levelLimit: "Mở giới hạn cấp 139",
            support: "Hỗ trợ toàn máy chủ cấp 130",
            isDetermined: false,
        },
        {
            id: 7,
            date: "CHƯA XÁC ĐỊNH",
            time: "",
            levelLimit: "Mở cấp 150 cấp tối đa",
            support: "Hỗ trợ toàn máy chủ cấp 140",
            isDetermined: false,
        },
    ],
    sealUpgrades: [
        {
            level: "Cấp 80",
            maxUpgrade: "300 điểm",
        },
        {
            level: "Cấp 90",
            maxUpgrade: "600 điểm",
        },
        {
            level: "Cấp 100",
            maxUpgrade: "1,000 điểm",
            additionalInfo: "Mở lôi đình ấn - thường 1.100 điểm",
        },
        {
            level: "Cấp 110",
            maxUpgrade: "",
            additionalInfo: "Mở lôi đình ấn - quý 1.200 điểm, lôi đình ấn - hiếm 1.300 điểm",
        },
        {
            level: "Cấp 120",
            maxUpgrade: "",
            additionalInfo: "Mở lôi đình ấn - tuyệt 1.400 điểm",
        },
        {
            level: "Cấp 130 trở lên",
            maxUpgrade: "",
            additionalInfo: "Mở lôi đình ấn - cực 1.500 điểm",
        },
    ],
};
