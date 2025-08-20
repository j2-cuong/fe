"use client";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Download, FileText, Calendar, Hash } from "lucide-react";
import { useEffect } from "react";

interface DownloadPageProps {
  isOpen: boolean;
  onClose: () => void;
}

const gameDownloads = [
  {
    id: 1,
    name: "Game Client Chính Thức",
    size: "7.3 GB",
    updateDate: "01/08/2025",
    md5: "a1b2c3d4e5f6789012345678901234567890abcd",
    downloadLink: "#",
  },
  {
    id: 2,
    name: "Patch Thiên Tử Kiếm 1.0.1",
    size: "2,4 Gb",
    updateDate: "02/08/2025",
    md5: "b2c3d4e5f6789012345678901234567890abcde1",
    downloadLink: "#",
  },
  {
    id: 3,
    name: "AutoPK",
    size: "2.4 MB",
    updateDate: "02/08/2025",
    md5: "c3d4e5f6789012345678901234567890abcde12f",
    downloadLink: "#",
  },
  {
    id: 4,
    name: "UltraViewer 6.6.124",
    size: "3,5 MB",
    updateDate: "07/02/20254",
    md5: "d4e5f6789012345678901234567890abcde12f3g",
    downloadLink: "https://www.ultraviewer.net/vi/UltraViewer_setup_6.6_vi.exe",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Thiên Tử Kiếm - Kiếm Thế PC 2009",
  description: "Tải game và các bản cập nhật mới nhất",
  url: "https://thientukiem.com/tai-game",
};

export default function DownloadPage({ isOpen, onClose }: DownloadPageProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="relative w-full max-w-4xl bg-white/95 backdrop-blur-sm rounded-2xl border border-emerald-200 p-6 shadow-xl shadow-emerald-100/50 max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Đóng"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="text-center mb-6">
            <h1 className="text-3xl font-serif font-bold text-gray-800 mb-2">
              Tải Game
            </h1>
            <p className="text-gray-600">
              Tải xuống phiên bản mới nhất và các bản cập nhật
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-emerald-200 shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="border-b border-emerald-200 bg-gradient-to-r from-emerald-50 to-blue-50">
                  <th className="text-left p-4 font-serif font-semibold text-gray-800">
                    <div className="flex items-center space-x-2">
                      <FileText className="w-5 h-5 text-emerald-600" />
                      <span>Tên</span>
                    </div>
                  </th>
                  <th className="text-left p-4 font-serif font-semibold text-gray-800 hidden sm:table-cell">
                    Dung lượng
                  </th>
                  <th className="text-left p-4 font-serif font-semibold text-gray-800 hidden md:table-cell">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span>Ngày cập nhật</span>
                    </div>
                  </th>
                  <th className="text-left p-4 font-serif font-semibold text-gray-800 hidden lg:table-cell">
                    <div className="flex items-center space-x-2">
                      <Hash className="w-5 h-5 text-orange-600" />
                      <span>MD5</span>
                    </div>
                  </th>
                  <th className="text-center p-4 font-serif font-semibold text-gray-800">
                    Link Tải
                  </th>
                </tr>
              </thead>
              <tbody>
                {gameDownloads.map((download, index) => (
                  <tr
                    key={download.id}
                    className="border-b border-emerald-100 hover:bg-gradient-to-r hover:from-emerald-50/50 hover:to-blue-50/50 transition-all duration-200"
                  >
                    <td className="p-4">
                      <div className="flex flex-col">
                        <span className="font-serif font-medium text-gray-800 hover:text-emerald-600 transition-colors">
                          {download.name}
                        </span>
                        <div className="flex flex-col sm:hidden text-sm text-gray-600 mt-1 space-y-1">
                          <span>Dung lượng: {download.size}</span>
                          <span>Cập nhật: {download.updateDate}</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 hidden sm:table-cell">
                      <span className="font-medium text-blue-700">
                        {download.size}
                      </span>
                    </td>
                    <td className="p-4 hidden md:table-cell">
                      <span className="text-gray-600">
                        {download.updateDate}
                      </span>
                    </td>
                    <td className="p-4 hidden lg:table-cell">
                      <code className="text-sm bg-orange-50 border border-orange-200 px-3 py-1 rounded font-mono text-orange-700">
                        {download.md5.substring(0, 16)}...
                      </code>
                    </td>
                    <td className="p-4 text-center">
                      <Button
                        className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-serif font-medium px-4 py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-emerald-200 transform hover:scale-105"
                        aria-label={`Tải ${download.name}`}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Tải xuống
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
