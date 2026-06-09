import { marqueeItems } from "@/content/site";

export function MarqueeStrip() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="overflow-hidden bg-maroon py-4 whitespace-nowrap" aria-hidden>
      <div className="inline-flex animate-marquee">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex items-center px-6 font-sans text-sm font-semibold tracking-[0.12em] text-white uppercase"
          >
            {item}
            <span className="ml-6 text-white/70">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
