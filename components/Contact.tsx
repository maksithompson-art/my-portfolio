"use client";

import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  // Gestiamo lo stato del bottone (normale, caricamento, inviato, errore)
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);

    try {
      // INCOLLA QUI IL TUO LINK FORMSPREE
      const response = await fetch("https://formspree.io/f/xdapneqv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset(); // Svuota i campi del form
        
        // Riporta il bottone allo stato normale dopo 3 secondi
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
        <div className="bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-10 md:p-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Got an idea?<br/>Let's build it.</h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
            Whether you need a scalable web application or a compelling brand video, I'm currently accepting new freelance projects.
          </p>
          
          {/* Ho collegato la funzione handleSubmit qui */}
          <form className="max-w-md mx-auto space-y-4 text-left" onSubmit={handleSubmit}>
            <div>
              <label className="sr-only">Name</label>
              {/* NOTA: Ho aggiunto name="name" */}
              <input type="text" name="name" placeholder="Your Name" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-5 py-4 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-zinc-50" required />
            </div>
            <div>
              <label className="sr-only">Email</label>
              {/* NOTA: Ho aggiunto name="email" */}
              <input type="email" name="email" placeholder="Your Email" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-5 py-4 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-zinc-50" required />
            </div>
            <div>
              <label className="sr-only">Message</label>
              {/* NOTA: Ho aggiunto name="message" */}
              <textarea name="message" placeholder="Tell me about your project..." rows={4} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-5 py-4 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-zinc-50 resize-none" required></textarea>
            </div>
            
            {/* Bottone dinamico basato sullo stato */}
            <button 
              type="submit" 
              disabled={status === "submitting" || status === "success"}
              className="w-full bg-zinc-50 text-zinc-950 font-bold text-lg rounded-xl px-5 py-4 hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "idle" && <>Send Message <ArrowUpRight className="w-5 h-5" /></>}
              {status === "submitting" && "Sending..."}
              {status === "success" && <>Message Sent! <CheckCircle2 className="w-5 h-5 text-emerald-600" /></>}
              {status === "error" && "Error. Try again."}
            </button>
            
            {status === "error" && (
              <p className="text-red-400 text-sm text-center mt-2">Oops! Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}