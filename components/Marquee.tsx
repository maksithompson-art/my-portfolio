import { Sun } from 'lucide-react'

interface MarqueeDict {
  services: string[]
}

export default function Marquee({ dict }: { dict: MarqueeDict }) {
  return (
    <section className="relative w-full bg-[#0A0A0A] py-16 md:py-24 overflow-hidden flex items-center border-y border-white/5">

      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 25s linear infinite;
        }
      `}</style>

      <div className="flex w-full overflow-hidden whitespace-nowrap group">

        {/* FIRST SET */}
        <div className="flex items-center shrink-0 animate-infinite-scroll group-hover:[animation-play-state:paused]">
          {dict.services.map((service, index) => {
            const isOutline = index % 2 !== 0
            return (
              <span key={`set1-${index}`} className="contents">
                <span className={`text-6xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter px-8 md:px-16 transition-all duration-500 ${
                  isOutline
                    ? 'text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.4)] hover:[-webkit-text-stroke:2px_#CCFF00]'
                    : 'text-white hover:text-[#CCFF00]'
                }`}>
                  {service}
                </span>
                <Sun className="w-12 h-12 md:w-20 md:h-20 text-[#CCFF00] shrink-0 animate-[spin_10s_linear_infinite]" />
              </span>
            )
          })}
        </div>

        {/* SECOND SET — duplicate for seamless loop */}
        <div className="flex items-center shrink-0 animate-infinite-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
          {dict.services.map((service, index) => {
            const isOutline = index % 2 !== 0
            return (
              <span key={`set2-${index}`} className="contents">
                <span className={`text-6xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter px-8 md:px-16 transition-all duration-500 ${
                  isOutline
                    ? 'text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.4)] hover:[-webkit-text-stroke:2px_#CCFF00]'
                    : 'text-white hover:text-[#CCFF00]'
                }`}>
                  {service}
                </span>
                <Sun className="w-12 h-12 md:w-20 md:h-20 text-[#CCFF00] shrink-0 animate-[spin_10s_linear_infinite]" />
              </span>
            )
          })}
        </div>

      </div>
    </section>
  )
}
