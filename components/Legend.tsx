export default function Legend() {
  const items = [
    { color: "bg-brand-green", label: "4 osoby — jest próba" },
    { color: "bg-brand-yellow", label: "3 osoby — może być" },
    { color: "bg-brand-red", label: "2/1 — nie uda się" },
  ];
  return (
    <div className="flex flex-wrap gap-3 text-xs text-white/60">
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-1.5">
          <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
          {item.label}
        </span>
      ))}
    </div>
  );
}
