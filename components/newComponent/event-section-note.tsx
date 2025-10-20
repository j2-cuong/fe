export default function EventSectionNote({ data }: { data: any[] }) {
  return (
    <section className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg mt-8">
      <h3 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
        <span className="text-xl">⚠️</span> Lưu ý:
      </h3>
      {data.map((n, i) => (
        <p
          key={i}
          className={`${n.color ?? "text-yellow-700"} ${n.animation ?? ""}`}
          style={{
            fontSize: `${n.fontSize || 16}px`,
            fontWeight: n.fontWeight || "normal",
          }}
        >
          {n.title}
        </p>
      ))}
    </section>
  );
}
