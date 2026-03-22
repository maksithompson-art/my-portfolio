"use client";

import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
        <div className="bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-10 md:p-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Got an idea?<br/>Let's build it.</h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
            Whether you need a scalable web application or a compelling brand video, I'm currently accepting new freelance projects.
          </p>
          
          <form className="max-w-md mx-auto space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="sr-only">Name</label>
              <input type="text" placeholder="Your Name" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-5 py-4 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-zinc-50" required />
            </div>
            <div>
              <label className="sr-only">Email</label>
              <input type="email" placeholder="Your Email" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-5 py-4 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-zinc-50" required />
            </div>
            <div>
              <label className="sr-only">Message</label>
              <textarea placeholder="Tell me about your project..." rows={4} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-5 py-4 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-zinc-50 resize-none" required></textarea>
            </div>
            <button type="submit" className="w-full bg-zinc-50 text-zinc-950 font-bold text-lg rounded-xl px-5 py-4 hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
              Send Message <ArrowUpRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}