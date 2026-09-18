const EVENT_DURATION_HOURS = 2;

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

function formatIcsDateTime(dateId: string, time: string): string {
  const [y, m, d] = dateId.split("-").map(Number);
  const [h, min] = time.split(":").map(Number);
  return `${y}${pad(m)}${pad(d)}T${pad(h)}${pad(min)}00`;
}

function addHours(dateId: string, time: string, hours: number): string {
  const [y, m, d] = dateId.split("-").map(Number);
  const [h, min] = time.split(":").map(Number);
  const date = new Date(y, m - 1, d, h, min);
  date.setHours(date.getHours() + hours);
  return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}T${pad(
    date.getHours()
  )}${pad(date.getMinutes())}00`;
}

function escapeIcsText(text: string): string {
  return text.replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\\;");
}

export function buildIcsContent({
  dateId,
  time,
  room,
  memberNames,
}: {
  dateId: string;
  time: string;
  room: string;
  memberNames: string[];
}): string {
  const start = formatIcsDateTime(dateId, time);
  const end = addHours(dateId, time, EVENT_DURATION_HOURS);
  const now = new Date();
  const stamp = `${now.getUTCFullYear()}${pad(now.getUTCMonth() + 1)}${pad(
    now.getUTCDate()
  )}T${pad(now.getUTCHours())}${pad(now.getUTCMinutes())}${pad(now.getUTCSeconds())}Z`;

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//NBTC//Kalendarz prob//PL",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:proba-${dateId}-${time.replace(":", "")}@nbtc-kalendarz`,
    `DTSTAMP:${stamp}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${escapeIcsText("Próba NBTC")}`,
    `LOCATION:${escapeIcsText(room)}`,
    `DESCRIPTION:${escapeIcsText(`Skład: ${memberNames.join(", ")}`)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  return lines.join("\r\n");
}

export function downloadIcs(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
