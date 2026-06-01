"use client";

export function Hero() {
  return (
    <section className="lg:pl-80 min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden pt-40 lg:pt-0 pb-40">
      {/* Background floating elements */}
      <div className="absolute top-1/4 left-1/4 -rotate-12 opacity-30 select-none pointer-events-none">
        <span className="font-headline-xl text-headline-xl text-primary-fixed-dim">*</span>
      </div>
      <div className="absolute bottom-1/3 right-[10%] rotate-45 opacity-30 select-none pointer-events-none">
        <span className="font-headline-xl text-headline-xl text-primary-fixed-dim">+</span>
      </div>

      {/* Backdrop glitch text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <h2 className="font-headline-xl text-headline-xl text-primary tracking-tighter whitespace-nowrap text-[150px] lg:text-[200px]">
          CHAOS GEN
        </h2>
      </div>

      {/* Central composition */}
      <div className="relative z-20 max-w-4xl text-center">
        {/* Primary Hero Text */}
        <h2 className="font-headline-xl text-headline-xl lg:text-[180px] text-primary tracking-tighter leading-none mb-6 glitch-hover -rotate-1" style={{textShadow: "8px 8px 0px #b22a23"}}>
          NTOKOZO
        </h2>

        {/* Annotation */}
        <div className="bg-primary text-on-primary font-annotation text-annotation px-4 py-2 mb-12 inline-block -rotate-tilt-primary border-2 border-primary" style={{boxShadow: "4px 4px 0px 0px #b22a23"}}>
          <p>FULL-STACK ENGINEER // AI ARCHITECT</p>
        </div>

        {/* Subheading */}
        <p className="text-body-lg font-bold text-on-surface mb-12 max-w-2xl mx-auto">
          Building intelligent systems, design tools, and agent orchestration platforms with punk-tech chaos
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap mb-12">
          <a
            href="#featured"
            className="sticker-btn sticker-btn-secondary -rotate-1"
          >
            ENTER THE VOID
          </a>
          <a
            href="https://github.com/Callmeamps"
            target="_blank"
            rel="noopener noreferrer"
            className="sticker-btn sticker-btn-primary rotate-2"
          >
            GITHUB
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mt-12">
          <div className="chaos-card tilt-1">
            <p className="font-headline-lg text-headline-lg-mobile text-primary">64</p>
            <p className="font-annotation text-annotation text-secondary">PUBLIC REPOS</p>
          </div>
          <div className="chaos-card tilt-2">
            <p className="font-headline-lg text-headline-lg-mobile text-primary">100%</p>
            <p className="font-annotation text-annotation text-secondary">OPEN SOURCE</p>
          </div>
          <div className="chaos-card tilt-3">
            <p className="font-headline-lg text-headline-lg-mobile text-primary">∞</p>
            <p className="font-annotation text-annotation text-secondary">PASSION</p>
          </div>
        </div>
      </div>
    </section>
  );
}
