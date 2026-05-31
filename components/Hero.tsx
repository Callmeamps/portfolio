"use client";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="gradient-text">Ntokozo Mthimunye</span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-slate-300 mb-6">
          Full-Stack Developer • AI Engineer • Open Source Contributor
        </h2>

        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
          Building intelligent systems, design tools, and agent orchestration
          platforms. Passionate about open-source and pushing the boundaries of
          what's possible with modern tech.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#featured"
            className="btn btn-primary"
          >
            View Featured Projects
          </a>
          <a
            href="https://github.com/Callmeamps"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            GitHub Profile
          </a>
          <a
            href="https://blog.callmeamps.one"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Blog
          </a>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-3xl font-bold gradient-text">64</p>
            <p className="text-sm text-slate-400">Public Repos</p>
          </div>
          <div>
            <p className="text-3xl font-bold gradient-text">100%</p>
            <p className="text-sm text-slate-400">Open Source</p>
          </div>
          <div>
            <p className="text-3xl font-bold gradient-text">∞</p>
            <p className="text-sm text-slate-400">Passion</p>
          </div>
        </div>
      </div>
    </section>
  );
}
