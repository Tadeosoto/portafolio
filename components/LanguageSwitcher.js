import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const LOCALES = [
  { code: "en", label: "EN-US", flag: "🇺🇸" },
  { code: "es", label: "ES-MX", flag: "🇲🇽" },
];

const LanguageSwitcher = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  const locale = router.locale || "en";
  const active = LOCALES.find((l) => l.code === locale) || LOCALES[0];

  const switchLocale = useCallback(
    (code) => {
      if (code === locale) {
        setOpen(false);
        return;
      }
      router.push(router.pathname, router.asPath, { locale: code });
      setOpen(false);
    },
    [locale, router]
  );

  useEffect(() => {
    const onDoc = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  return (
    <div className="relative z-40" ref={rootRef}>
      <button
        type="button"
        className="flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-2 py-1.5 text-sm text-white/90 backdrop-blur-sm transition hover:bg-white/10"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        }}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t("locale.switchLanguage")}
      >
        <span className="text-lg leading-none" aria-hidden>
          {active.flag}
        </span>
        <span className="font-medium tracking-wide">{active.label}</span>
        <span className="text-white/50" aria-hidden>
          {open ? "▴" : "▾"}
        </span>
      </button>
      {open && (
        <ul
          className="absolute right-0 mt-1 min-w-[10rem] rounded-md border border-white/15 bg-primary/95 py-1 shadow-lg backdrop-blur-md"
          role="listbox"
        >
          {LOCALES.map((l) => (
            <li key={l.code} role="option" aria-selected={l.code === locale}>
              <button
                type="button"
                className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition hover:bg-white/10 ${
                  l.code === locale ? "text-accent" : "text-white/90"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  switchLocale(l.code);
                }}
              >
                <span className="text-lg" aria-hidden>
                  {l.flag}
                </span>
                <span className="font-medium">{l.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
