export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-primary py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold gradient-text mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/Callmeamps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://blog.callmeamps.one"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold gradient-text mb-4">About</h3>
            <p className="text-slate-400 text-sm">
              Full-stack developer and AI engineer building open-source projects
              and intelligent systems.
            </p>
          </div>
          <div>
            <h3 className="font-bold gradient-text mb-4">Stack</h3>
            <ul className="space-y-1 text-slate-400 text-sm">
              <li>TypeScript · JavaScript</li>
              <li>Python · GDScript</li>
              <li>React · Svelte · Astro</li>
              <li>Next.js · Tailwind</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            © {currentYear} Ntokozo Mthimunye. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
