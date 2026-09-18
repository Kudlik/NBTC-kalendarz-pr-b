"use client";

import { useEffect, useState, type ReactNode } from "react";

const STORAGE_KEY = "nbtc-kalendarz-unlocked";

export default function PasswordGate({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "1") {
        setUnlocked(true);
      }
    } catch {
      // localStorage niedostępny (np. tryb prywatny) — poproś o hasło ponownie
    }
    setChecked(true);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const expected = process.env.NEXT_PUBLIC_TEAM_PASSWORD;
    if (expected && value === expected) {
      setUnlocked(true);
      setError(false);
      try {
        localStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // ignore
      }
    } else {
      setError(true);
    }
  }

  if (!checked) return null;

  if (!unlocked) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="glass-panel shadow-glass w-full max-w-sm rounded-2xl p-6"
        >
          <h1 className="mb-1 text-xl font-semibold">NBTC</h1>
          <p className="mb-5 text-sm text-white/60">Podaj hasło zespołu, żeby wejść do kalendarza prób.</p>
          <input
            type="password"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setError(false);
            }}
            placeholder="Hasło"
            autoFocus
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-base outline-none focus:border-brand-purple"
          />
          {error && <p className="mt-2 text-sm text-brand-red">Błędne hasło, spróbuj ponownie.</p>}
          <button
            type="submit"
            className="mt-4 w-full rounded-xl bg-brand-purple px-4 py-3 font-medium transition hover:brightness-110 active:brightness-95"
          >
            Wejdź
          </button>
        </form>
      </div>
    );
  }

  return <>{children}</>;
}
