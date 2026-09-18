"use client";

import { useEffect, useState, type ReactNode } from "react";

const STORAGE_KEY = "nbtc-kalendarz-unlocked";

export default function PasswordGate({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setError(false);
              }}
              placeholder="Hasło"
              autoFocus
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 pr-11 text-base outline-none focus:border-brand-purple"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Ukryj hasło" : "Pokaż hasło"}
              className="absolute inset-y-0 right-0 flex w-11 items-center justify-center text-white/50 hover:text-white/90"
            >
              {showPassword ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                  <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                  <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
                  <circle cx="12" cy="12" r="3" />
                  <path d="M3 3l18 18" />
                </svg>
              )}
            </button>
          </div>
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
