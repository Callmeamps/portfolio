"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon, type IconProps } from "@/components/Icon";

type Page = "home" | "about" | "works" | "contact" | "connect";

interface PageNavProps {
  activePage?: Page;
}

const navItems: { label: string; href: string; page: Page; icon: IconProps["name"] }[] = [
  { label: "WORKS", href: "/works", page: "works", icon: "grid" as const },
  { label: "ABOUT", href: "/about", page: "about", icon: "person" as const },
  { label: "CONTACT", href: "/contact", page: "contact", icon: "mail" as const },

  { label: "CONNECT", href: "/connect", page: "connect", icon: "star" as const },
];

export function PageNav({ activePage = "home" }: PageNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── DESKTOP SIDENAV (≥1024px) ── */}
      <aside
        className="hidden lg:flex flex-col p-3 gap-3 bg-surface h-screen w-56 fixed left-0 top-0 border-r-4 border-primary z-40 overflow-y-auto"
        style={{ boxShadow: "6px 0px 0px 0px rgba(4,13,27,1)" }}
      >
        <Link href="/" className="pt-3 pb-2">
          <h1 className="font-['Anton'] text-[48px] leading-[0.8] tracking-tighter text-primary">
            CALLMEAMPS
          </h1>
          <p className="font-annotation text-[11px] text-secondary uppercase border-b-2 border-primary pb-1 inline-block -rotate-1 mt-1">
            BUILDING IN PUBLIC
          </p>
        </Link>

        <nav className="flex flex-col gap-2 flex-1">
          {navItems.map((item) => {
            const isActive = activePage === item.page;
            return (
              <Link
                key={item.page}
                href={item.href}
                className={
                  isActive
                    ? "sticker-btn sticker-btn-secondary flex items-center gap-2 py-1.5 px-3"
                    : "sticker-btn sticker-btn-ghost flex items-center gap-2 py-1.5 px-3"
                }
              >
                <Icon name={item.icon} size={16} />
                <span className="font-['Anton'] text-[14px] uppercase tracking-tight">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        
      </aside>

      {/* ── MOBILE + TABLET TOP BAR (<1024px) ── */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-surface border-b-4 border-primary px-4 py-2 flex items-center justify-between">
        <Link href="/">
          <span className="font-['Anton'] text-[20px] text-primary tracking-tight leading-none">
            CALLMEAMPS
          </span>
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="sticker-btn sticker-btn-primary py-1 px-3 text-[14px] flex items-center gap-1.5"
        >
          {open ? <Icon name="close" size={14} /> : <Icon name="grid" size={14} />}
          {open ? "CLOSE" : "MENU"}
        </button>
      </nav>

      {/* ── MOBILE/TABLET DROPDOWN ── */}
      {open && (
        <div className="lg:hidden fixed top-12 left-0 right-0 z-40 bg-surface border-b-4 border-primary p-4 flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = activePage === item.page;
            return (
              <Link
                key={item.page}
                href={item.href}
                onClick={() => setOpen(false)}
                className={
                  isActive
                    ? "sticker-btn sticker-btn-secondary flex items-center justify-center gap-2"
                    : "sticker-btn sticker-btn-ghost flex items-center justify-center gap-2"
                }
              >
                <Icon name={item.icon} size={16} />
                <span className="font-['Anton'] text-[16px] uppercase tracking-tight">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
