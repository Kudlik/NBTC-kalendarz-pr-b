export type RowStatus = "none" | "red" | "yellow" | "green";

export function rowStatusForCount(count: number): RowStatus {
  if (count >= 4) return "green";
  if (count === 3) return "yellow";
  if (count === 2) return "red";
  return "none";
}

export const ROW_STATUS_STYLES: Record<RowStatus, string> = {
  none: "border-white/10",
  red: "border-brand-red/70 bg-brand-red/10",
  yellow: "border-brand-yellow/70 bg-brand-yellow/10",
  green: "border-brand-green/70 bg-brand-green/10",
};

export const ROW_STATUS_DOT: Record<RowStatus, string> = {
  none: "bg-white/20",
  red: "bg-brand-red",
  yellow: "bg-brand-yellow",
  green: "bg-brand-green",
};
