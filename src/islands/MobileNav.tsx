import { useState } from "react";
import { nav } from "../data/site";

type Props = { current: string };

export default function MobileNav({ current }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center text-white"
        aria-expanded={open}
        aria-controls="menu-movil"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
        <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
          {open ? (
            <path d="M2 2l18 12M20 2L2 14" stroke="currentColor" strokeWidth="1.6" />
          ) : (
            <path d="M1 1.5h20M1 8h20M1 14.5h20" stroke="currentColor" strokeWidth="1.6" />
          )}
        </svg>
      </button>
      {open ? (
        <nav
          id="menu-movil"
          className="absolute inset-x-0 top-full bg-footer/95 px-5 py-4"
        >
          <ul className="flex flex-col gap-3">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? current === "/"
                  : current.startsWith(item.href);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`block py-1 text-sm uppercase tracking-wide ${
                      active ? "text-white" : "text-white/70"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
