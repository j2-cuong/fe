import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  User,
  Tag,
  Clock,
  Star,
  Trophy,
} from "lucide-react";
import { GameNavigation } from "@/components/game-navigation";
import { levelOpeningRoadmap } from "@/data/roadmap";

export const metadata: Metadata = {
  title: "Lộ Trình mở cấp - Kiếm Thế Thần Kiếm",
  description:
    "Lộ trình mở cấp và giới hạn nâng cấp Ngũ Hành Ấn + Lôi Đình Ấn trong Kiếm Thế Thần Kiếm",
};

export default function LoTrinhMoCapPage() {
  const { serverOpenDate, phases, sealUpgrades } = levelOpeningRoadmap;

  const determinedPhases = phases.filter((phase) => phase.isDetermined);
  const undeterminedPhases = phases.filter((phase) => !phase.isDetermined);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <GameNavigation />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/tin-tuc">
          <Button variant="ghost" className="mb-6 group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Quay lại tin tức
          </Button>
        </Link>

        <article className="rounded-2xl p-8 shadow-lg bg-white">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl  font-bold text-gray-900 mb-4">
              Lộ Trình mở cấp
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-blue-500" />
                <span className="text-red-500">Administrator</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-red-500" />
                <span>{serverOpenDate} (Ngày mở máy chủ)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tag className="h-4 w-4 text-yellow-500" />
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                  Lộ trình
                </span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-8">
              <h3 className="font-bold text-blue-800 flex items-center gap-2 mb-2">
                <span className="text-xl">📅</span> Thông tin quan trọng:
              </h3>
              <p className="text-blue-700">
                Ngày mở máy chủ: <strong>{serverOpenDate}</strong> - Tất cả thời
                gian được tính toán dựa trên ngày này
              </p>
              <p className="text-blue-600 text-sm mt-2">
                {determinedPhases.map((phase) => (
                  <span key={phase.id}>
                    • {phase.levelLimit}: {phase.date}{" "}
                    {phase.daysAfterServerOpen !== undefined &&
                      `(${phase.daysAfterServerOpen} ngày sau)`}
                    <br />
                  </span>
                ))}
              </p>
            </div>

            <h2 className="text-2xl  font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Trophy className="h-6 w-6 text-yellow-500" />
              GIỚI HẠN MỞ CẤP ĐỘ
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300 bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      THỜI GIAN
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      LỘ TRÌNH MỞ CẤP
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      HỖ TRỢ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {phases.map((phase) => (
                    <tr
                      key={phase.id}
                      className={`hover:${
                        phase.isDetermined ? "bg-emerald-50" : "bg-gray-50"
                      } transition-colors`}
                    >
                      <td className="border border-gray-300 px-4 py-3 font-medium text-emerald-700">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {phase.isDetermined
                            ? `${phase.time} Ngày ${phase.date}`
                            : phase.date}
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        <span
                          className={`px-2 py-1 rounded-full text-sm font-medium ${
                            phase.isDetermined
                              ? "bg-emerald-100 text-emerald-800"
                              : phase.levelLimit.includes("150")
                              ? "bg-purple-100 text-purple-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {phase.levelLimit}
                        </span>
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        <span
                          className={`px-2 py-1 rounded-full text-sm ${
                            phase.isDetermined
                              ? "bg-blue-100 text-blue-800"
                              : phase.levelLimit.includes("150")
                              ? "bg-purple-100 text-purple-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {phase.support}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl  font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Star className="h-6 w-6 text-yellow-500" />
              Giới hạn nâng cấp Ngũ Hành Ấn + Lôi Đình Ấn
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300 bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      Giới hạn cấp
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      Giới hạn nâng cấp
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sealUpgrades.map((seal, index) => (
                    <tr
                      key={index}
                      className="hover:bg-orange-50 transition-colors"
                    >
                      <td className="border border-gray-300 px-4 py-3 font-medium text-orange-700">
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-sm font-medium">
                          {seal.level}
                        </span>
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        {seal.maxUpgrade && (
                          <>
                            Nâng cấp tối đa{" "}
                            <strong className="text-orange-600">
                              {seal.maxUpgrade}
                            </strong>
                          </>
                        )}
                        {seal.additionalInfo && (
                          <>
                            {seal.maxUpgrade && <br />}
                            <span className="text-sm text-blue-600">
                              {seal.additionalInfo}
                            </span>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg mb-6">
              <h3 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                <span className="text-xl">💡</span> Lưu ý quan trọng:
              </h3>
              <ul className="text-yellow-700 space-y-1">
                <li>
                  • Thời gian mở cấp có thể thay đổi tùy theo tình hình máy chủ
                </li>
                <li>
                  • Hãy chuẩn bị sẵn sàng để tận dụng tối đa các giai đoạn hỗ
                  trợ
                </li>
                <li>
                  • Theo dõi thông báo chính thức để cập nhật thời gian chính
                  xác
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
