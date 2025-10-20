import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-6xl  font-bold text-emerald-600 mb-4">404</h1>
          <h2 className="text-2xl  font-semibold text-gray-800 mb-2">
            Trang không tồn tại
          </h2>
          <p className="text-gray-600">
            Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
          </p>
        </div>

        <div className="space-y-4">
          <Button
            asChild
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-600 text-white w-full"
          >
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Về trang chủ
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            size="lg"
            className="w-full bg-white hover:bg-blue-50 border-blue-300 text-blue-600 hover:text-blue-700"
          >
            <Link href="/tin-tuc">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Xem tin tức
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
