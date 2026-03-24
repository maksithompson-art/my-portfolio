import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Maksi Thompson',
  description: 'Informativa sulla privacy e gestione dei dati personali.',
};

export default function PrivacyPolicy() {
  const lastUpdate = "24 Marzo 2026"; // Aggiorna con la data di pubblicazione reale

  return (
    <main className="min-h-screen bg-zinc-950 py-32 selection:bg-emerald-500/30">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        
        {/* Pulsante Indietro */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Torna alla Home
        </Link>

        {/* Intestazione */}
        <div className="mb-16">
          <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-50 tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-zinc-400">Ultimo aggiornamento: {lastUpdate}</p>
        </div>

        {/* Contenuto Legale Formattato */}
        <div className="space-y-12 text-zinc-300 leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-bold text-zinc-100 mb-4">1. Titolare del Trattamento</h2>
            <p className="mb-4">
              Il Titolare del trattamento dei dati raccolti attraverso questo sito web è:<br />
              <strong>Maksimilian Thompson</strong><br />
              Sviluppatore Web e Fotografo Commerciale (Torino, Italia).<br />
              Email di contatto: <a href="m.thompson@sailingstudios.com" className="text-emerald-400 hover:underline">m.thompson@sailingstudios.com</a> 
              {/* Sostituisci con la tua vera email! */}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-100 mb-4">2. Quali dati raccogliamo e perché</h2>
            <p className="mb-4">
              Questo sito è stato progettato nel rispetto della privacy ("Privacy by Design"). Attualmente <strong>non utilizziamo strumenti di tracciamento invasivi, né software di profilazione pubblicitaria</strong> (es. Google Analytics o Meta Pixel).
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4 text-zinc-400">
              <li><strong className="text-zinc-300">Dati forniti volontariamente:</strong> Se decidi di contattarmi tramite i moduli presenti sul sito o via email, raccoglierò il tuo nome, indirizzo email e il contenuto del messaggio al solo scopo di rispondere alla tua richiesta lavorativa o di preventivo.</li>
              <li><strong className="text-zinc-300">Dati di navigazione tecnici:</strong> I sistemi informatici che fanno funzionare questo sito (Hosting) acquisiscono automaticamente alcuni dati (es. indirizzi IP, orari di visita). Si tratta di informazioni necessarie per la sicurezza informatica e il corretto caricamento delle pagine, che non vengono usate per identificarti.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-100 mb-4">3. Servizi di Terze Parti</h2>
            <p className="mb-4">
              Per garantire un sito web veloce, sicuro e all'avanguardia, mi avvalgo di infrastrutture tecniche di terze parti di livello globale, che potrebbero processare i dati in conformità alle loro policy:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4 text-zinc-400">
              <li>
                <strong className="text-zinc-300">Cloudflare Pages:</strong> Utilizzato come hosting e Content Delivery Network (CDN). Cloudflare elabora i dati di traffico in forma aggregata per proteggere il sito da attacchi informatici (DDoS) e garantire prestazioni ottimali.
              </li>
              <li>
                <strong className="text-zinc-300">Sanity.io:</strong> Il sistema di gestione dei contenuti (CMS) e database. Eventuali dati inviati tramite moduli di contatto potrebbero essere archiviati in modo sicuro sui loro server per permettermi di gestire le tue richieste.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-100 mb-4">4. Informativa sui Cookie (Nessun Banner Necessario)</h2>
            <p className="mb-4">
              In ottemperanza alla normativa europea e ai provvedimenti del Garante della Privacy italiano, ti informo che questo sito <strong>utilizza esclusivamente Cookie Tecnici strettamente necessari</strong>.
            </p>
            <p className="text-zinc-400">
              Non utilizzando cookie di profilazione o di terze parti per finalità di marketing o statistiche avanzate, <strong>non è richiesta l'esposizione di un banner per il preventivo consenso</strong>. La tua navigazione è libera e privata.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-100 mb-4">5. I tuoi Diritti (GDPR)</h2>
            <p className="mb-4">
              In qualità di utente, hai il diritto in qualunque momento di conoscere quali sono i tuoi dati in mio possesso, chiederne la modifica o pretendere la loro totale cancellazione ("Diritto all'oblio").
            </p>
            <p className="text-zinc-400">
              Per esercitare questi diritti, è sufficiente inviare una richiesta via email all'indirizzo indicato nella sezione 1 di questa pagina. Risponderò nel minor tempo possibile e comunque entro i termini di legge.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}