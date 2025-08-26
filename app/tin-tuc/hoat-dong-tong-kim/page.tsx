import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { GameNavigation } from "@/components/game-navigation";
import { tongKimData } from "@/data/activities/tong-kim";

export const metadata: Metadata = tongKimData.meta;

export default function TongKimPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <GameNavigation />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/tin-tuc">
          <Button variant="ghost" className="mb-6 group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Quay lại tin tức
          </Button>
        </Link>

        <article className="rounded-2xl p-8 shadow-lg bg-white">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              {tongKimData.headerTitle}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-blue-500" />
                <span className="text-red-500">Administrator</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-red-500" />
                <span>01/08/2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tag className="h-4 w-4 text-yellow-500" />
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                  Sự kiện
                </span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            {tongKimData.schedule?.length ? (
              <>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  {tongKimData.scheduleTitle || "Thời gian diễn ra"}
                </h2>
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <ul className="space-y-2 text-blue-700">
                    {tongKimData.schedule.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              </>
            ) : null}

            {tongKimData.notes?.length ? (
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg mb-6">
                <h3 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                  <span className="text-xl">⚠️</span> Lưu ý quan trọng:
                </h3>
                {tongKimData.notes.map((n, i) => (
                  <p key={i} className="text-yellow-700">{n}</p>
                ))}
              </div>
            ) : null}

            <div className="space-y-6">
              {tongKimData.rewardTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl border ${tier.active ? "border-emerald-200" : "border-gray-200"
                    } shadow-sm overflow-hidden`}
                >
                  <div
                    className={`px-4 py-3 font-medium ${tier.active
                      ? "bg-emerald-50 text-emerald-800"
                      : "bg-gray-50 text-gray-800"
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{tier.milestone}</span>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {tier.rewards.map((reward, rewardIndex) => (
                        reward.type === "stats" ? (
                          <ul key={rewardIndex} className="text-red-600 list-disc pl-6 space-y-1">
                            {reward.stats.map((s, i) => (<li key={i}>{s}</li>))}
                          </ul>
                        ) : (
                          <div
                            key={rewardIndex}
                            className={`flex items-start gap-2 ${reward.type === "special"
                              ? "text-purple-600"
                              : reward.type === "currency"
                                ? "text-emerald-600"
                                : "text-blue-600"
                              }`}
                          >
                            <span>•</span>
                            <span>{reward.text}</span>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="inline-block bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent text-lg font-bold">
                Hãy tham gia ngay để nhận những phần thưởng giá trị! 🎮
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

