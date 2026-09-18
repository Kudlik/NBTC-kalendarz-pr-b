"use client";

import { useMemo } from "react";
import { buildCalendarRange } from "@/lib/dates";
import { MEMBERS } from "@/lib/constants";
import { usePractices } from "@/lib/usePractices";

export default function NextFullPractice() {
  const days = useMemo(() => buildCalendarRange(), []);
  const { entries, loading } = usePractices();

  if (loading) return null;

  const candidate = days.find((day) => {
    if (day.isPast) return false;
    const entry = entries[day.id];
    if (!entry) return false;
    const count = MEMBERS.filter((m) => entry.members[m.key]).length;
    return count >= 4 && !entry.room && !entry.time;
  });

  if (!candidate) return null;

  return (
    <p className="text-sm text-brand-green">
      Najbliższa możliwa pełna próba: <span className="font-medium capitalize">{candidate.dayName}</span>,{" "}
      {candidate.id}
    </p>
  );
}
