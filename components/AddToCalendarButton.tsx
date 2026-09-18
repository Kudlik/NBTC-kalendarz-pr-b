import { buildIcsContent, downloadIcs } from "@/lib/ics";

export default function AddToCalendarButton({
  dateId,
  time,
  room,
  memberNames,
  className = "",
}: {
  dateId: string;
  time: string;
  room: string;
  memberNames: string[];
  className?: string;
}) {
  function handleClick() {
    const content = buildIcsContent({ dateId, time, room, memberNames });
    downloadIcs(`proba-${dateId}.ics`, content);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`flex items-center justify-center gap-1.5 rounded-lg border border-brand-green/50 bg-brand-green/10 px-2 py-2 text-xs font-medium text-brand-green transition hover:bg-brand-green/20 ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4 shrink-0">
        <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
        <path d="M3 9.5h18M8 3v3M16 3v3" />
        <path d="M12 13v4M10 15h4" />
      </svg>
      Dodaj do kalendarza
    </button>
  );
}
