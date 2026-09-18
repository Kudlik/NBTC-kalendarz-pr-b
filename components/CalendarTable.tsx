"use client";

import { useMemo } from "react";
import { buildCalendarRange } from "@/lib/dates";
import { MEMBERS } from "@/lib/constants";
import { usePractices } from "@/lib/usePractices";
import { ROW_STATUS_DOT, rowStatusForCount, rowStatusStyle } from "@/lib/rowColor";
import RoomSelect from "./RoomSelect";
import TimeInput from "./TimeInput";

export default function CalendarTable() {
  const days = useMemo(() => buildCalendarRange(), []);
  const { entries, loading, setMember, setRoom, setTime } = usePractices();

  return (
    <div className="space-y-2">
      {loading && (
        <div className="glass-panel rounded-xl px-4 py-3 text-sm text-white/60">Wczytywanie…</div>
      )}

      {/* Mobile: stacked cards */}
      <div className="flex flex-col gap-2 sm:hidden">
        {days.map((day) => {
          const entry = entries[day.id] ?? { room: "", time: "", members: {} };
          const count = MEMBERS.filter((m) => entry.members[m.key]).length;
          const status = rowStatusForCount(count);
          return (
            <div
              key={day.id}
              className={`glass-panel rounded-2xl border p-3 ${
                day.isToday ? "ring-1 ring-brand-purple" : ""
              }`}
              style={rowStatusStyle(status)}
            >
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <span className="font-semibold">{day.id}</span>
                  <span className="ml-2 text-sm capitalize text-white/60">{day.dayName}</span>
                </div>
                <span className={`h-2.5 w-2.5 rounded-full ${ROW_STATUS_DOT[status]}`} />
              </div>
              <div className="flex gap-2">
                <RoomSelect value={entry.room} onChange={(v) => setRoom(day.id, v)} className="flex-1" />
                <TimeInput value={entry.time} onChange={(v) => setTime(day.id, v)} />
              </div>
              <div className="mt-3 grid grid-cols-4 gap-1 text-center">
                {MEMBERS.map((m) => (
                  <label key={m.key} className="flex flex-col items-center gap-1 text-xs text-white/70">
                    <input
                      type="checkbox"
                      className="h-5 w-5"
                      checked={Boolean(entry.members[m.key])}
                      onChange={(e) => setMember(day.id, m.key, e.target.checked)}
                    />
                    {m.label}
                  </label>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop / tablet: table */}
      <div className="glass-panel hidden overflow-x-auto rounded-2xl sm:block">
        <table className="w-full min-w-[720px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-white/10 text-left text-white/60">
              <th className="px-3 py-3 font-medium">Data</th>
              <th className="px-3 py-3 font-medium">Dzień</th>
              <th className="px-3 py-3 font-medium">Salka / godzina</th>
              {MEMBERS.map((m) => (
                <th key={m.key} className="px-3 py-3 text-center font-medium">
                  {m.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {days.map((day) => {
              const entry = entries[day.id] ?? { room: "", time: "", members: {} };
              const count = MEMBERS.filter((m) => entry.members[m.key]).length;
              const status = rowStatusForCount(count);
              return (
                <tr
                  key={day.id}
                  className={`border-b border-white/10 ${
                    day.isToday ? "outline outline-1 outline-brand-purple" : ""
                  }`}
                  style={rowStatusStyle(status)}
                >
                  <td className="whitespace-nowrap px-3 py-2 font-medium">{day.id}</td>
                  <td className="whitespace-nowrap px-3 py-2 capitalize text-white/70">{day.dayName}</td>
                  <td className="min-w-[280px] px-3 py-2">
                    <div className="flex gap-2">
                      <RoomSelect value={entry.room} onChange={(v) => setRoom(day.id, v)} className="flex-1" />
                      <TimeInput value={entry.time} onChange={(v) => setTime(day.id, v)} />
                    </div>
                  </td>
                  {MEMBERS.map((m) => (
                    <td key={m.key} className="px-3 py-2 text-center">
                      <input
                        type="checkbox"
                        className="h-5 w-5"
                        checked={Boolean(entry.members[m.key])}
                        onChange={(e) => setMember(day.id, m.key, e.target.checked)}
                      />
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
