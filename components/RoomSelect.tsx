import { ROOMS } from "@/lib/constants";

export default function RoomSelect({
  value,
  onChange,
  className = "",
}: {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full rounded-lg border border-white/10 bg-black/30 px-2 py-2 text-sm text-white/90 outline-none focus:border-brand-purple ${className}`}
    >
      <option value="">— wybierz salę —</option>
      {ROOMS.map((room) => (
        <option key={room} value={room}>
          {room}
        </option>
      ))}
    </select>
  );
}
