"use client";

export function Navigation() {
  return (
    <>
      {/* DESKTOP SIDENAV */}
      <aside className="hidden lg:flex flex-col p-4 gap-4 bg-surface h-screen w-80 fixed left-0 top-0 border-r-4 border-primary z-40" style={{boxShadow: "8px 0px 0px 0px rgba(4,13,27,1)"}}>
        <div className="mb-8 pt-4">
          <h1 className="font-headline-xl text-headline-xl text-primary leading-[0.8] mb-2 tracking-tighter">
            STAY<br />LOUD
          </h1>
          <p className="font-annotation text-annotation text-secondary uppercase border-b-2 border-primary pb-2 inline-block -rotate-1">
            NOISE ONLY
          </p>
        </div>

        <nav className="flex flex-col gap-3">
          <a
            className="sticker-btn sticker-btn-secondary -rotate-1"
            href="/"
          >
            WORKS
          </a>
          <a
            className="sticker-btn bg-surface-container text-on-surface rotate-2"
            href="#about"
          >
            ABOUT
          </a>
          <a
            className="sticker-btn bg-surface-container text-on-surface -rotate-2"
            href="#contact"
          >
            CONTACT
          </a>
        </nav>

        <div className="mt-auto pb-8">
          <button className="sticker-btn sticker-btn-primary w-full">
            GET IN TOUCH
          </button>
        </div>
      </aside>

      {/* MOBILE STICKER CLUSTER */}
      <nav className="lg:hidden flex flex-col items-end gap-2 fixed top-8 right-8 z-50">
        <a
          className="sticker-btn sticker-btn-secondary -rotate-1"
          href="/"
        >
          WORKS
        </a>
        <a
          className="sticker-btn bg-surface-container text-on-surface rotate-2"
          href="#about"
        >
          ABOUT
        </a>
        <a
          className="sticker-btn bg-surface-container text-on-surface -rotate-2"
          href="#contact"
        >
          CONTACT
        </a>
      </nav>
    </>
  );
}
