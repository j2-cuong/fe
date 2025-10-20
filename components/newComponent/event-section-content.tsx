export default function EventSectionContent({ data }: { data: any[] }) {
  return (
    <section className="mb-10 space-y-2">
      {data.map((item, i) => (
        <p
          key={i}
          style={{
            color: "blue",
            fontSize: `${item.fontSize || 18}px`,
            fontWeight: item.fontWeight || "normal",
          }}
        >
          {item.title}
        </p>
      ))}
    </section>
  );
}
