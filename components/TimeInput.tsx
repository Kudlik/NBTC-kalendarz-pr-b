export default function TimeInput({
  value,
  onChange,
  className = "",
}: {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  return (
    <input
      type="time"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`rounded-lg border border-white/10 bg-black/30 px-2 py-2 text-sm text-white/90 outline-none focus:border-brand-purple [color-scheme:dark] ${className}`}
    />
  );
}
