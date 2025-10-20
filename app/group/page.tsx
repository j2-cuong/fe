import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, MessageCircle, Users, ArrowRight } from "lucide-react";
import { GameNavigation } from "@/components/game-navigation";

export const metadata: Metadata = {
  title: "Tham gia Group Zalo - Cộng đồng Kiếm Thế Thần Kiếm",
  description:
    "Tham gia group Zalo để kết nối với Cộng đồng Kiếm Thế Thần Kiếm, chia sẻ kinh nghiệm và nhận thông tin mới nhất",
  keywords: "Cộng đồng Kiếm Thế Thần Kiếm",
};

export default function GroupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <GameNavigation />

      <div className="pt-12 pb-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-5">
            <h1 className="text-4xl md:text-5xl  font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Tham Gia Group Zalo
            </h1>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8 mb-5">
            {/* QR Code Section */}
            <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2 text-slate-800">
                  <QrCode className="w-6 h-6 text-emerald-600" />
                  <span>Quét mã QR</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="!px-0 lg:!px-6 pt-6 lg:pl-8 lg:pr-8">
                <div className="w-80 h-80 mx-auto  rounded-lg flex items-center justify-center mb-6 ">
                  <div className="text-center">
                    <img
                      src="qrCodezl.png"
                      alt="Kiếm sĩ trong thế giới võ hiệp"
                      className="bg-transparent"
                    />
                    <p className="text-sm text-slate-600">QR Code Group Zalo</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Group Info */}
            <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-slate-800">
                  <Users className="w-6 h-6 text-blue-600" />
                  <span>Thông tin Group</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">
                    Kiếm Thế Thần Kiếm Official
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Group chính thức của cộng đồng Kiếm Thế Thần Kiếm
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-600">Hoạt động:</span>
                    <span className="font-semibold text-blue-600">24/7</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-600">Quản trị:</span>
                    <span className="font-semibold text-orange-600">
                      Admin & Mod
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Nội dung Group:
                  </h4>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li>• Thông báo sự kiện và cập nhật game</li>
                    <li>• Chia sẻ kinh nghiệm chơi game</li>
                    <li>• Hỗ trợ kỹ thuật và giải đáp thắc mắc</li>
                    <li>• Giao lưu và kết bạn game thủ</li>
                    <li>• Tổ chức các hoạt động offline</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Benefits */}
          <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 ">
            <CardHeader>
              <CardTitle className="text-center text-slate-800">
                Lợi ích khi tham gia Group
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <MessageCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">
                    Thông tin nhanh
                  </h3>
                  <p className="text-sm text-slate-600">
                    Nhận thông tin cập nhật và sự kiện mới nhất ngay lập tức
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">
                    Cộng đồng lớn
                  </h3>
                  <p className="text-sm text-slate-600">
                    Kết nối với hàng nghìn game thủ có cùng sở thích
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <ArrowRight className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">
                    Hỗ trợ 24/7
                  </h3>
                  <p className="text-sm text-slate-600">
                    Được hỗ trợ và giải đáp thắc mắc bất cứ lúc nào
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
