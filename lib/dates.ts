import { DAYS_FUTURE, DAYS_PAST, POLISH_DAYS } from "./constants";

export function toDateId(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function polishDayName(date: Date): string {
  return POLISH_DAYS[date.getDay()];
}

export function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6;
}

export interface CalendarDay {
  id: string;
  date: Date;
  dayName: string;
  isWeekend: boolean;
  isToday: boolean;
  isPast: boolean;
}

export function buildCalendarRange(daysPast = DAYS_PAST, daysFuture = DAYS_FUTURE): CalendarDay[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const days: CalendarDay[] = [];
  for (let offset = -daysPast; offset <= daysFuture; offset++) {
    const date = new Date(today);
    date.setDate(today.getDate() + offset);
    days.push({
      id: toDateId(date),
      date,
      dayName: polishDayName(date),
      isWeekend: isWeekend(date),
      isToday: offset === 0,
      isPast: offset < 0,
    });
  }
  return days;
}
