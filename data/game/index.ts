export interface GameDownload {
  id: number;
  name: string;
  size: string;
  updateDate: string;
  md5: string;
  downloadLink: string;
  description?: string;
  version?: string;
  isRequired?: boolean;
}

export interface GameInfo {
  name: string;
  version: string;
  description: string;
  features: string[];
  systemRequirements: {
    minimum: string[];
    recommended: string[];
  };
}

export const gameInfo: GameInfo = {
  name: "Kiếm Thế Thần Kiếm",
  version: "2.0.1",
  description: "Game võ hiệp online hấp dẫn với thế giới kiếm hiệp huyền thoại",
  features: [
    "Hệ thống võ công phong phú và đa dạng",
    "PvP và PvE với nhiều thử thách",
    "Hệ thống bang hội và liên minh",
    "Nhiều hoạt động và sự kiện đặc biệt"
  ],
  systemRequirements: {
    minimum: [
      "OS: Windows 7/8/10 (64-bit)",
      "Processor: Intel Core i3-2100 / AMD FX-6300",
      "Memory: 4 GB RAM",
      "Graphics: NVIDIA GeForce GTX 750 Ti / AMD Radeon R7 260X",
      "DirectX: Version 11",
      "Network: Broadband Internet connection",
      "Storage: 8 GB available space"
    ],
    recommended: [
      "OS: Windows 10 (64-bit)",
      "Processor: Intel Core i5-8400 / AMD Ryzen 5 2600",
      "Memory: 8 GB RAM",
      "Graphics: NVIDIA GeForce GTX 1060 / AMD Radeon RX 580",
      "DirectX: Version 11",
      "Network: Broadband Internet connection",
      "Storage: 12 GB available space"
    ]
  }
};

export const gameDownloads: GameDownload[] = [
  {
    id: 1,
    name: "Game Client Chính Thức",
    size: "7.3 GB",
    updateDate: "20/10/2025",
    md5: "a1b2c3d4e5f6789012345678901234567890abcd",
    downloadLink: "https://drive.google.com/file/d/1bBzwDz5o44RY0laPfC64mNxIPpmy7h8Y/view?usp=sharing",
    description: "Bản game chính thức với đầy đủ tính năng",
    version: "2.1.1",
    isRequired: true
  },
  {
    id: 3,
    name: "UltraViewer 6.6.124",
    size: "3,5 MB",
    updateDate: "07/02/2025",
    md5: "d4e5f6789012345678901234567890abcde12f3g",
    downloadLink: "https://www.ultraviewer.net/vi/UltraViewer_setup_6.6_vi.exe",
    description: "Công cụ hỗ trợ từ xa",
    version: "6.6.124",
    isRequired: false
  }
];

export const getRequiredDownloads = () => {
  return gameDownloads.filter(download => download.isRequired);
};

export const getOptionalDownloads = () => {
  return gameDownloads.filter(download => !download.isRequired);
};
