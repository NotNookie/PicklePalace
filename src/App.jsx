import logoSrc from "./assets/logo-removebg-preview (1).png";
import groupie1Src from "./assets/groupie.png";
import groupie2Src from "./assets/groupie2.png";
import bookingPolicySrc from "./assets/booking_policy.png";

const FB_URL = "https://www.facebook.com/people/Pickle-Palace/61564498558275/";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Pickle+Palace+Panganiban+Compound+Santa+Cruz+Laguna";

const courtRates = [
  { time: "12:00 AM – 6:00 AM", price: "₱500", tag: "Late Night" },
  { time: "6:00 AM – 2:00 PM", price: "₱200", tag: "Morning" },
  { time: "2:00 PM – 5:00 PM", price: "₱300", tag: "Afternoon" },
  { time: "5:00 PM – 12:00 AM", price: "₱350", tag: "Prime Time" },
];

const otherFees = [
  { label: "Open Play", price: "₱150", unit: "per head" },
  { label: "Paddle Rental", price: "₱50", unit: "per hour (up to 6 paddles)" },
  { label: "Ball Machine Rental", price: "₱500", unit: "per hour" },
];

const amenities = [
  { icon: <IconClubhouse />, label: "Clubhouse / Tambayan" },
  { icon: <IconKubo />, label: "Kubo Area" },
  { icon: <IconSnackBar />, label: "Snack Bar" },
  { icon: <IconCoffee />, label: "Coffee Shop" },
  { icon: <IconRestroom />, label: "Restroom Access" },
];

const reviews = [
  {
    text: "Had a really good experience! Welcoming and friendly environment. The vibe was super casual in a good way.",
    author: "Verified player",
  },
  {
    text: "Super saya maglaro sa Pickle Palace, ang ganda ng vibe at okay din yung place. Mukhang mapapadalas na rin paglalaro namin dun.",
    author: "Returning player",
  },
  {
    text: "Ang linis at ganda ng court, parang every game nakakagana laruin. Swak pa sa chill at magandang bonding vibes.",
    author: "Weekend regular",
  },
  {
    text: "Maayos ang pagkaka-maintain ng court, malinis at masayang paglaruan. Maganda rin yung surface, makapit. May enough space din para makagalaw ng komportable.",
    author: "Tournament guest",
  },
];

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden pt-16">
      <Header />
      <Hero />
      <Rates />
      <Amenities />
      <Community />
      <Reviews />
      <Policy />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="mx-auto max-w-7xl px-5 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logoSrc} alt="Pickle Palace logo" className="h-10 w-10 object-contain" />
          <span className="font-display text-2xl tracking-wider">PICKLE PALACE</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          <a href="#rates" className="hover:text-primary transition-colors">Rates</a>
          <a href="#amenities" className="hover:text-primary transition-colors">Amenities</a>
          <a href="#reviews" className="hover:text-primary transition-colors">Reviews</a>
          <a href="#visit" className="hover:text-primary transition-colors">Visit</a>
        </nav>
        <a
          href={FB_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground hover:opacity-90 transition shadow-glow"
        >
          Book a Court
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative bg-hero overflow-hidden">
      <div className="absolute inset-0 court-lines pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:py-28 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-glow">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Santa Cruz, Laguna
          </span>
          <h1 className="mt-6 font-display text-6xl md:text-8xl leading-[0.9]">
            Where every<br />
            <span className="text-primary">dink</span> rules.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Pickle Palace is Laguna's home for pickleball — open courts day and night,
            paddles & ball machine rentals, a clubhouse to hang out, and a coffee shop
            for the post-game wind down.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={FB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground hover:opacity-90 transition shadow-glow"
            >
              Reserve now
            </a>
            <a
              href="#rates"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card/50 px-7 py-3.5 text-base font-bold hover:bg-card transition"
            >
              See court rates
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Open</dt>
              <dd className="font-display text-2xl text-primary">24/7</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">From</dt>
              <dd className="font-display text-2xl text-primary">₱200/hr</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Open Play</dt>
              <dd className="font-display text-2xl text-primary">₱150</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 bg-primary/20 blur-3xl rounded-full" />
          <img
            src={logoSrc}
            alt="Pickle Palace"
            className="relative w-full max-w-md mx-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

function Rates() {
  return (
    <section id="rates" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader eyebrow="Court Rates" title="Pick your time. Grab the court." />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {courtRates.map((r) => (
            <div
              key={r.time}
              className="group relative rounded-2xl border border-border bg-card p-6 shadow-card hover:border-primary/60 hover:-translate-y-1 transition"
            >
              <div className="text-xs uppercase tracking-[0.2em] font-bold text-primary">{r.tag}</div>
              <div className="mt-3 font-display text-4xl">
                {r.price}
                <span className="text-base text-muted-foreground font-sans font-semibold">/hr</span>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{r.time}</div>
              <div className="absolute inset-x-6 bottom-0 h-1 rounded-full bg-court opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {otherFees.map((f) => (
            <div
              key={f.label}
              className="rounded-2xl bg-primary/10 border border-primary/30 p-6 flex items-center justify-between"
            >
              <div>
                <div className="font-display text-2xl">{f.label}</div>
                <div className="text-sm text-muted-foreground">{f.unit}</div>
              </div>
              <div className="font-display text-3xl text-primary">{f.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ICON_PROPS = {
  width: 48,
  height: 48,
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "var(--color-primary)",
  strokeWidth: 2.2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function IconClubhouse() {
  return (
    <svg {...ICON_PROPS} aria-hidden="true">
      {/* walls */}
      <rect x="8" y="22" width="32" height="20" rx="1" />
      {/* roof */}
      <polyline points="4,24 24,8 44,24" />
      {/* door */}
      <rect x="20" y="30" width="7" height="12" rx="1" />
      {/* left window */}
      <rect x="10" y="27" width="7" height="6" rx="0.5" />
      {/* right window */}
      <rect x="31" y="27" width="7" height="6" rx="0.5" />
    </svg>
  );
}

function IconKubo() {
  return (
    <svg {...ICON_PROPS} aria-hidden="true">
      {/* walls */}
      <rect x="10" y="26" width="28" height="16" rx="1" />
      {/* thatched roof layers */}
      <polyline points="6,28 24,10 42,28" />
      <polyline points="9,24 24,13 39,24" />
      {/* door */}
      <rect x="19" y="31" width="10" height="11" rx="1" />
      {/* roof ridge post */}
      <line x1="24" y1="10" x2="24" y2="7" />
      <circle cx="24" cy="6" r="1.5" fill="var(--color-primary)" stroke="none" />
    </svg>
  );
}

function IconSnackBar() {
  return (
    <svg {...ICON_PROPS} aria-hidden="true">
      {/* cup */}
      <path d="M13 14 L15 38 Q15 40 17 40 L31 40 Q33 40 33 38 L35 14 Z" />
      {/* straw */}
      <line x1="26" y1="14" x2="29" y2="4" />
    </svg>
  );
}

function IconCoffee() {
  return (
    <svg {...ICON_PROPS} aria-hidden="true">
      {/* steam lines */}
      <path d="M16 10 Q18 7 16 4" />
      <path d="M24 10 Q26 7 24 4" />
      <path d="M32 10 Q34 7 32 4" />
      {/* cup body */}
      <path d="M10 14 L13 40 Q13 42 15 42 L33 42 Q35 42 35 40 L38 14 Z" />
      {/* handle */}
      <path d="M38 20 Q46 20 46 28 Q46 36 38 36" />
      {/* saucer */}
      <ellipse cx="24" cy="42" rx="16" ry="3" />
    </svg>
  );
}

function IconRestroom() {
  return (
    <svg {...ICON_PROPS} aria-hidden="true">
      {/* female head */}
      <circle cx="14" cy="8" r="4" />
      {/* female dress body */}
      <path d="M8 14 Q14 12 20 14 L22 30 Q22 32 20 32 L8 32 Q6 32 6 30 Z" />
      {/* female legs */}
      <line x1="11" y1="32" x2="10" y2="42" />
      <line x1="17" y1="32" x2="18" y2="42" />

      {/* divider */}
      <line x1="24" y1="4" x2="24" y2="44" strokeOpacity="0.35" />

      {/* male head */}
      <circle cx="34" cy="8" r="4" />
      {/* male torso */}
      <rect x="28" y="14" width="12" height="14" rx="2" />
      {/* male legs */}
      <line x1="31" y1="28" x2="30" y2="42" />
      <line x1="37" y1="28" x2="38" y2="42" />
    </svg>
  );
}

function Amenities() {
  return (
    <section id="amenities" className="py-20 md:py-28 bg-card/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader eyebrow="Amenities" title="More than just a court." />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
          {amenities.map((a) => (
            <div
              key={a.label}
              className="rounded-2xl border border-border bg-background p-6 text-center hover:border-primary/60 transition"
            >
              <div className="flex justify-center">{a.icon}</div>
              <div className="mt-3 font-semibold">{a.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section className="py-20 md:py-28 bg-card/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader eyebrow="The Community" title="A palace built for players." />
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          <img
            src={groupie1Src}
            alt="Pickle Palace players group photo on the court — daytime"
            loading="lazy"
            className="w-full h-72 md:h-96 object-cover rounded-2xl border border-border"
          />
          <img
            src={groupie2Src}
            alt="Pickle Palace community gathered for evening play"
            loading="lazy"
            className="w-full h-72 md:h-96 object-cover rounded-2xl border border-border"
          />
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader eyebrow="Player Feedback" title="Five-star vibes, every session." />
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {reviews.map((r, i) => (
            <figure key={i} className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <div className="flex gap-0.5 text-primary text-lg">★★★★★</div>
              <blockquote className="mt-4 text-lg leading-relaxed">"{r.text}"</blockquote>
              <figcaption className="mt-4 text-sm uppercase tracking-wider text-muted-foreground">
                — {r.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Policy() {
  return (
    <section className="py-20 md:py-28 bg-card/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
        <img
          src={bookingPolicySrc}
          alt="Pickle Palace cancellation policy card"
          loading="lazy"
          className="w-full max-w-md mx-auto rounded-2xl border border-border shadow-card"
        />
        <div>
          <SectionHeader eyebrow="Booking Schedule" title="Cancellation policy." align="left" />
          <ul className="mt-8 space-y-5">
            <PolicyRow when="2+ days before" detail="No penalty fee." good />
            <PolicyRow when="1 day before" detail="50% of court payment charged." />
            <PolicyRow when="Same day" detail="100% of court payment charged." bad />
          </ul>
        </div>
      </div>
    </section>
  );
}

function PolicyRow({ when, detail, good, bad }) {
  const accent = good ? "text-primary" : bad ? "text-destructive" : "text-foreground";
  return (
    <li className="flex items-start gap-4 rounded-xl border border-border bg-background p-5">
      <div className={`font-display text-3xl ${accent} shrink-0 w-40`}>{when}</div>
      <div className="text-base text-muted-foreground pt-1">{detail}</div>
    </li>
  );
}

function Footer() {
  return (
    <footer id="visit" className="bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr] gap-12">
          <div>
            <div className="flex items-center gap-3">
              <img src={logoSrc} alt="Pickle Palace" className="h-12 w-12 object-contain" />
              <span className="font-display text-3xl tracking-wider">PICKLE PALACE</span>
            </div>
            <p className="mt-4 text-muted-foreground max-w-md">
              Laguna's home court. Open 24/7 for players of all levels — book a slot,
              join open play, or just drop by.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-bold">Find Us</div>
            <address className="mt-4 not-italic text-base leading-relaxed">
              Panganiban Compound,<br />
              Brgy. Calios, National Highway,<br />
              Santa Cruz, Laguna 4009
            </address>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-bold">Connect</div>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={FB_URL} target="_blank" rel="noreferrer" className="hover:text-primary transition">
                  Pickle Palace · Facebook
                </a>
              </li>
              <li className="text-muted-foreground">0976 326 4334</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row gap-2 justify-between text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Pickle Palace. All rights reserved.</span>
          <span>Long live the dink.</span>
        </div>
      </div>
    </footer>
  );
}

function SectionHeader({ eyebrow, title, align = "center" }) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : ""}>
      <div className="text-xs uppercase tracking-[0.3em] text-primary font-bold">{eyebrow}</div>
      <h2 className="mt-3 font-display text-4xl md:text-5xl">{title}</h2>
    </div>
  );
}
