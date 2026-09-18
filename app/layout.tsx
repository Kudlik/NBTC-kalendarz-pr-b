import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NBTC — Kalendarz prób",
  description: "Kalendarz prób zespołu NBTC",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0b0c0e",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="h-dvh overflow-hidden bg-graphite-950 bg-frost-gradient bg-fixed text-white">
        {children}
      </body>
    </html>
  );
}
