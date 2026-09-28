"use client";

import { useMemo } from "react";
import { buildCalendarRange } from "@/lib/dates";
import { usePractices } from "@/lib/usePractices";

export default function NextScheduledPractice() {
  const days = useMemo(() => buildCalendarRange(), []);
  const { entries, loading } = usePractices();

  if (loading) return null;

  const candidate = days.find((day) => {
    if (day.isPast) return false;
    const entry = entries[day.id];
    return Boolean(entry?.room) && Boolean(entry?.time);
  });

  if (!candidate) return null;

  const entry = entries[candidate.id];

  return (
    <p className="text-sm font-semibold text-white">
      Najbliższa próba: <span className="capitalize">{candidate.dayName}</span>, {candidate.id} —{" "}
      {entry.time} @ {entry.room}
    </p>
  );
}
