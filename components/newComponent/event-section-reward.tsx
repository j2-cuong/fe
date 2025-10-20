export default function EventSectionReward({ data }: { data: any[] }) {
  console.log("Reward Data1232:", data);
  return (
    <section>
      <div className="space-y-6">
        {data.map((tier, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-transform hover:scale-[1.01]"
          >
            {/* Header */}
            <div
              className={`px-4 py-3 font-semibold text-lg ${
                tier.color ?? "text-emerald-700"
              } bg-gray-50`}
            >
              {tier.title}
            </div>

            {/* Nội dung phần thưởng */}
            <div className="p-4">
              <ul className="list-disc list-inside text-gray-700 leading-relaxed grid md:grid-cols-2 gap-x-6">
                {tier.rewards.map((r: any, i: number) => {
                  if (typeof r === "string") {
                    return <li key={i}>{r}</li>;
                  }
                  return (
                    <li
                      key={i}
                      className={r.color ?? ""}
                      style={{
                        fontSize: r.fontSize ? `${r.fontSize}px` : undefined,
                        fontWeight: r.fontWeight ?? undefined,
                      }}
                    >
                      {r.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
