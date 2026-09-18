import CalendarTable from "@/components/CalendarTable";
import CtaBar from "@/components/CtaBar";
import Legend from "@/components/Legend";
import PasswordGate from "@/components/PasswordGate";

export default function Home() {
  return (
    <PasswordGate>
      <main className="mx-auto max-w-5xl px-3 py-6 sm:px-6 sm:py-10">
        <header className="mb-6 flex flex-col gap-1">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">NBTC — Kalendarz prób</h1>
          <p className="text-sm text-white/50">Ostatnie 5 dni i najbliższe 30 dni</p>
        </header>

        <section className="mb-6">
          <CtaBar />
        </section>

        <section className="mb-3">
          <Legend />
        </section>

        <section>
          <CalendarTable />
        </section>
      </main>
    </PasswordGate>
  );
}
