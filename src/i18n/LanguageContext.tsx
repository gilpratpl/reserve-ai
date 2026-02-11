import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

export type Language = "es" | "en" | "ca" | "it";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = "reserbot.language";

const isLanguage = (value: string | null): value is Language => {
  return value === "es" || value === "en" || value === "ca" || value === "it";
};

const detectBrowserLanguage = (): Language => {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return "es";
  }

  const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (isLanguage(stored)) {
    return stored;
  }

  const rawLangs = (navigator.languages && navigator.languages.length > 0
    ? navigator.languages
    : [navigator.language]
  ).filter(Boolean) as string[];

  const candidates = rawLangs
    .map((l) => l.toLowerCase())
    .flatMap((l) => [l, l.split("-")[0]]);

  for (const code of candidates) {
    if (code.startsWith("es")) return "es";
    if (code.startsWith("en")) return "en";
    if (code.startsWith("ca")) return "ca";
    if (code.startsWith("it")) return "it";
  }

  return "es";
};

export const LANGUAGE_OPTIONS: { code: Language; short: string; label: string }[] = [
  { code: "es", short: "ES", label: "Español" },
  { code: "en", short: "EN", label: "English" },
  { code: "ca", short: "CA", label: "Català" },
  { code: "it", short: "IT", label: "Italiano" },
];

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => detectBrowserLanguage());

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, next);
    }
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language, setLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
};

