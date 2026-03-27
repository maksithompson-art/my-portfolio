import { ArrowUpRight } from 'lucide-react'

interface ContactDict {
  available: string
  headline1: string
  headline2: string
  description: string
  directContactLabel: string
  labelName: string
  placeholderName: string
  labelEmail: string
  placeholderEmail: string
  labelService: string
  option1: string
  option2: string
  option3: string
  option4: string
  option5: string
  labelMessage: string
  placeholderMessage: string
  submitBtn: string
}

export default function Contact({ dict }: { dict: ContactDict }) {
  return (
    <section id="contact" className="relative w-full bg-[#0A0A0A] text-white py-32 px-8 md:px-12 lg:px-24 rounded-t-[3rem] -mt-10 z-20">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

        {/* LEFT: Typography & Info */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-[#CCFF00] text-sm font-bold tracking-widest uppercase mb-6 flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
              {dict.available}
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-medium tracking-tighter leading-[0.9] mb-8">
              {dict.headline1} <br /> {dict.headline2}
            </h2>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed">{dict.description}</p>
          </div>
          <div className="mt-16 lg:mt-0 hidden lg:block">
            <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">{dict.directContactLabel}</p>
            <a href="mailto:hello@maksithompson.com" className="text-2xl font-medium hover:text-[#CCFF00] transition-colors">
              maksithompson50@gmail.com
            </a>
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        <div className="w-full bg-[#111111] p-8 md:p-12 rounded-[2rem] border border-white/5">
          <form action="https://formspree.io/f/xkgbpjpl" method="POST" className="flex flex-col gap-8">

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[10px] font-bold tracking-widest uppercase text-gray-400">{dict.labelName}</label>
              <input
                type="text" name="name" id="name" required
                className="w-full bg-transparent border-b border-white/20 pb-4 text-white focus:outline-none focus:border-[#CCFF00] transition-colors placeholder:text-white/20 text-lg"
                placeholder={dict.placeholderName}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[10px] font-bold tracking-widest uppercase text-gray-400">{dict.labelEmail}</label>
              <input
                type="email" name="email" id="email" required
                className="w-full bg-transparent border-b border-white/20 pb-4 text-white focus:outline-none focus:border-[#CCFF00] transition-colors placeholder:text-white/20 text-lg"
                placeholder={dict.placeholderEmail}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="service" className="text-[10px] font-bold tracking-widest uppercase text-gray-400">{dict.labelService}</label>
              <select
                name="service" id="service"
                className="w-full bg-transparent border-b border-white/20 pb-4 text-white focus:outline-none focus:border-[#CCFF00] transition-colors appearance-none text-lg cursor-pointer [&>option]:bg-[#111111]"
              >
                <option value="web">{dict.option1}</option>
                <option value="photo">{dict.option2}</option>
                <option value="video">{dict.option3}</option>
                <option value="3d">{dict.option4}</option>
                <option value="other">{dict.option5}</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-[10px] font-bold tracking-widest uppercase text-gray-400">{dict.labelMessage}</label>
              <textarea
                name="message" id="message" required rows={4}
                className="w-full bg-transparent border-b border-white/20 pb-4 text-white focus:outline-none focus:border-[#CCFF00] transition-colors placeholder:text-white/20 text-lg resize-none"
                placeholder={dict.placeholderMessage}
              />
            </div>

            <button
              type="submit"
              className="mt-4 flex items-center justify-center gap-3 bg-white text-black w-full py-5 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#CCFF00] transition-colors group"
            >
              {dict.submitBtn} <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </button>

          </form>
        </div>

      </div>
    </section>
  )
}
