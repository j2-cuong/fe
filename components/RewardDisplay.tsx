"use client";
import React from "react";

type RewardItem = {
  name: string;
  order: number;
  highlight?: boolean;
  color?: string;
  fontSize?: string;
  animation?: string | null;
};

type RewardGroup = {
  title: string;
  order: number;
  highlight?: boolean;
  color?: string;
  fontSize?: string;
  animation?: string | null;
  rewards: RewardItem[];
};

interface RewardDisplayProps {
  data: any[];
}

export function RewardDisplay({ data }: RewardDisplayProps) {
  // Chuẩn hóa 2 loại JSON khác nhau về cùng format
  const normalizeData = (input: any[]): RewardGroup[] =>
    input.map((item) => ({
      title: item.title || item.milestone || "Không rõ tiêu đề",
      order: item.order ?? 0,
      highlight: item.highlight ?? false,
      color: item.color || "#333",
      fontSize: item.fontSize || "18px",
      animation: item.animation || null,
      rewards:
        item.rewards?.map((r: any) => ({
          name: r.name || r.text || "",
          order: r.order ?? 0,
          highlight: r.highlight ?? false,
          color: r.color,
          fontSize: r.fontSize,
          animation: r.animation,
        })) || [],
    }));

  const groups = normalizeData(data);

  return (
    <div className="space-y-6">
      {groups.map((group, i) => (
        <div
          key={i}
          className={`rounded-xl border overflow-hidden shadow-sm ${
            group.highlight ? "border-emerald-300" : "border-gray-200"
          }`}
        >
          <div
            className="px-4 py-3 font-semibold"
            style={{
              color: group.color,
              fontSize: group.fontSize,
              animation: group.animation
                ? `${group.animation} 1.2s infinite`
                : undefined,
            }}
          >
            {group.title}
          </div>

          <ul className="divide-y divide-gray-100 bg-white">
            {group.rewards.map((r, idx) => (
              <li
                key={idx}
                className={`px-4 py-2 ${
                  r.highlight ? "bg-yellow-50 font-semibold" : ""
                }`}
                style={{
                  color: r.color,
                  fontSize: r.fontSize,
                  animation: r.animation
                    ? `${r.animation} 1.2s infinite`
                    : undefined,
                }}
              >
                {r.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
