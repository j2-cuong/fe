"use client";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Download,
  FileText,
  Calendar,
  Hash,
  Star,
  Shield,
  Zap,
} from "lucide-react";
import { useEffect } from "react";
import { gameDownloads, gameInfo } from "@/data/game";

interface DownloadPageProps {
  isOpen: boolean;
  onClose: () => void;
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Kiếm Thế Thần Kiếm - Kiếm Thế PC 2009",
  description: "Tải game và các bản cập nhật mới nhất",
  url: "https://ktthankiem.com/tai-game",
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

  const handleDownload = (downloadLink: string, fileName: string) => {
    // Tạo một thẻ a ẩn để download
    const link = document.createElement("a");
    link.href = downloadLink;
    link.download = fileName; // Tên file khi download
    link.target = "_blank"; // Mở trong tab mới
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="relative w-full max-w-5xl bg-white rounded-3xl border border-blue-200 p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute right-6 top-6 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Đóng"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                <Download className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gradient">Tải Game</h1>
            </div>
            <p className="text-gray-600 text-lg">
              Tải xuống phiên bản mới nhất và các bản cập nhật
            </p>
          </div>

          {/* Game Info Cards */}
          <div className="grid gap-6 mb-8">
            {gameDownloads.map((download, index) => (
              <div
                key={download.id}
                className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {download.name}
                      </h3>
                      {download.description && (
                        <p className="text-gray-600 text-sm">
                          {download.description}
                        </p>
                      )}
                    </div>
                  </div>
                  {download.isRequired && (
                    <div className="flex items-center gap-1 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                      <Star className="w-4 h-4" />
                      <span>Bắt buộc</span>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Shield className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">
                      Dung lượng:{" "}
                      <span className="text-blue-600 font-medium">
                        {download.size}
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4 text-cyan-500" />
                    <span className="text-sm">
                      Cập nhật:{" "}
                      <span className="text-cyan-600 font-medium">
                        {download.updateDate}
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Zap className="w-4 h-4 text-amber-500" />
                    <span className="text-sm">
                      Phiên bản:{" "}
                      <span className="text-amber-600 font-medium">
                        {download.version}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Hash className="w-3 h-3" />
                    <code className="">{download.md5.substring(0, 16)}...</code>
                  </div>
                  <Button
                    onClick={() =>
                      handleDownload(download.downloadLink, download.name)
                    }
                    className="btn-modern text-white px-6 py-3 rounded-xl font-semibold hover-glow flex items-center gap-2"
                    aria-label={`Tải ${download.name}`}
                  >
                    <Download className="w-4 h-4" />
                    Tải xuống
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Game Features */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              Tính năng nổi bật
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {gameInfo.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-600"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
