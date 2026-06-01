export function Footer() {
  const marqueeText = "© STAY LOUD // NOISE ONLY // 2024 // CHAOS_GEN // © STAY LOUD // NOISE ONLY // 2024 // CHAOS_GEN // © STAY LOUD // NOISE ONLY // 2024 // CHAOS_GEN";

  return (
    <footer
      className="fixed bottom-0 w-full z-40 bg-primary text-on-primary py-3 border-t-4 border-primary lg:pl-80 overflow-hidden"
      style={{ fontFamily: "'Space Mono', monospace" }}
    >
      <div className="marquee-container">
        <div className="marquee-content gap-8">
          <span className="font-annotation text-annotation tracking-widest italic">
            {marqueeText}
          </span>
          <span className="font-annotation text-annotation tracking-widest italic">
            {marqueeText}
          </span>
        </div>
      </div>
    </footer>
  );
}
