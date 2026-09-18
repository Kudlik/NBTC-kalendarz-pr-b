import type { CSSProperties } from "react";

export type RowStatus = "none" | "red" | "yellow" | "green";

export function rowStatusForCount(count: number): RowStatus {
  if (count >= 4) return "green";
  if (count === 3) return "yellow";
  if (count === 2 || count === 1) return "red";
  return "none";
}

const STATUS_HEX: Record<Exclude<RowStatus, "none">, string> = {
  red: "226, 57, 77",
  yellow: "255, 245, 0",
  green: "3, 169, 91",
};

export function rowStatusStyle(status: RowStatus): CSSProperties | undefined {
  if (status === "none") return undefined;
  const rgb = STATUS_HEX[status];
  return {
    borderColor: `rgba(${rgb}, 0.7)`,
    backgroundColor: `rgba(${rgb}, 0.12)`,
  };
}

export const ROW_STATUS_DOT: Record<RowStatus, string> = {
  none: "bg-white/20",
  red: "bg-brand-red",
  yellow: "bg-brand-yellow",
  green: "bg-brand-green",
};
