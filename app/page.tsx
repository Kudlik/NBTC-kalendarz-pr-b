import CalendarTable from "@/components/CalendarTable";
import CtaBar from "@/components/CtaBar";
import Legend from "@/components/Legend";
import PasswordGate from "@/components/PasswordGate";

export default function Home() {
  return (
    <PasswordGate>
      <main className="mx-auto flex h-dvh max-w-5xl flex-col px-3 sm:px-6">
        <div className="shrink-0 pt-6 sm:pt-10">
          <header className="mb-6 flex flex-col gap-1">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">NBTC — Kalendarz prób</h1>
          </header>

          <section className="mb-6">
            <CtaBar />
          </section>

          <section className="mb-3">
            <Legend />
          </section>
        </div>

        <section className="min-h-0 flex-1 overflow-y-auto pb-6">
          <CalendarTable />
        </section>
      </main>
    </PasswordGate>
  );
}
