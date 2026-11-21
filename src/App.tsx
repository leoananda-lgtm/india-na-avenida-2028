import { useEffect, useRef, useState, type ChangeEvent } from "react";
import {
  QUOTAS, DAYS, PRICE_FULL, PRICE_CAMAROTE, TOTAL_INVITES,
  SCHOOL_SHARE, CAMAROTE_SHARE, EXPERIENCE_SHARE, TOTAL_PROJECT,
  quotaInvites, quotaPrice, brl, brl2, usd, usd2, USD_RATE, CONTACT_EMAIL, SITE,
} from "./data";

const NAV: [string, string][] = [
  ["story", "Story"],
  ["carnival", "Carnival"],
  ["india", "India"],
  ["camarote", "Camarote"],
  ["lounge", "Your brand"],
  ["quotas", "Quotas"],
  ["sponsor", "Sponsorship"],
  ["travel", "Travel"],
];

const QUOTES: { text: string; source: string }[] = [
  { text: "The largest carnival in the world.", source: "Guinness World Records" },
  { text: "More than 6.4 million revellers in Rio de Janeiro alone.", source: "Government of Brazil" },
  { text: "Rio de Janeiro breaks tourist records during Carnival 2025 and generates BRL 6.5 billion.", source: "Rio de Janeiro State Tourism" },
  { text: "Rio's Carnival is the greatest stage in the world, and the Sapucaí is its most coveted showcase.", source: "Marquês de Sapucaí" },
];

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Quotes />
      <Organisers />
      <Story />
      <Carnival />
      <Mocidade2018 />
      <IndiaSection />
      <Camarote />
      <GuestKit />
      <LoungeBrand />
      <Quotas />
      <Sponsorship />
      <Activations />
      <Media />
      <Travel />
      <Contact />
      <footer className="footer">
        <div className="wrap">
          <p>India na Avenida 2028 · 80 Years of Diplomatic Relations Brazil · India (1948–2028)</p>
          <p className="muted">
            Prices are set in Brazilian reais (BRL) and shown in US dollars at an indicative rate of R$ {USD_RATE.toFixed(2)} per US$ 1; the final amount is fixed at the rate on the date of contract. Subject to final confirmation. Tax incentives depend on each
            company's situation; consult your advisor.
          </p>
        </div>
      </footer>
    </>
  );
}

function Header() {
  return (
    <header className="topbar">
      <div className="wrap topbar-inner">
        <a href="#top" className="brand">India na Avenida 2028</a>
        <nav className="nav">
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <img className="hero-bg" src="img/hero-party.jpg" alt="" aria-hidden="true" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-text reveal">
          <p className="eyebrow gold">Carnival of Rio 2028 · Marquês de Sapucaí</p>
          <h1>
            Eighty years of friendship, <em>on the greatest stage on Earth.</em>
          </h1>
          <p className="lead">
            A private camarote and a samba school tribute that celebrate 80 years of diplomatic relations
            between Brazil and India.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#quotas">See the quotas</a>
            <a className="btn btn-ghost" href="#sponsor">Sponsor the tribute</a>
          </div>
        </div>
        <div className="hero-mark reveal delay">
          <img className="mark-logo" src="img/logo-80-icon.png" alt="80 Years of Diplomatic Relations Brazil India, 1948–2028" />
          <p className="mark-caption">Brazil · India · 1948 – 2028</p>
        </div>
      </div>
      <div className="flagbar" aria-hidden="true"><span /><span /><span /></div>
    </section>
  );
}

function Quotes() {
  return (
    <section className="quotes" aria-label="What is said about Carnival">
      <div className="wrap quote-grid">
        {QUOTES.map((q, i) => (
          <figure key={q.text} className={`quote-card reveal ${i % 2 ? "delay" : ""}`}>
            <blockquote>“{q.text}”</blockquote>
            <figcaption>— {q.source}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Organisers() {
  return (
    <section className="organisers" aria-label="Organisers">
      <div className="wrap organisers-inner">
        <p className="eyebrow gold">Organised by</p>
        <div className="org-logos">
          <div className="org-logo reveal">
            <img src="img/logo-camara.png" alt="India Brazil Chamber of Commerce, since 2003" />
          </div>
          <div className="org-logo reveal delay">
            <img src="img/logo-frances.png" alt="Experiences do Francês" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="section">
      <div className="wrap">
        <p className="eyebrow gold">Two products, one celebration</p>
        <h2>A bridge between two cultures and two great economies.</h2>
        <div className="two-col">
          <p>
            In 2028, Brazil and India complete 80 years of diplomatic relations. Two products celebrate the
            milestone on the Sapucaí, the most visible stage of Brazilian culture.
          </p>
          <p>
            The <strong>Private Camarote</strong> brings guests to Sector 9 of the avenue for the parade nights,
            with hospitality, service and an India–Brazil programme. The <strong>Samba School Tribute</strong>
            puts India on the avenue itself, with a theme that runs from Cabral's voyage to zebu cattle, spices,
            Holi, Diwali and the gems of Jaipur.
          </p>
        </div>
        <div className="pillars">
          <Pillar n="01" title="Private Camarote" text={`${TOTAL_INVITES} invitations in packages of 20, 40, 60 and 80, Sector 9, Global Hospitality.`} />
          <Pillar n="02" title="Samba School Tribute" text="A parade section dedicated to India, with sponsor visibility on the avenue." />
          <Pillar n="03" title="Travel Hub" text="Hotels, transfers and experiences organised for every guest coming to Rio." />
        </div>
      </div>
    </section>
  );
}

function Pillar({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="pillar reveal">
      <span className="pillar-n">{n}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Mocidade2018() {
  return (
    <section id="mocidade" className="section tight">
      <div className="wrap">
        <p className="eyebrow gold">Carnival in pictures</p>
        <div className="mocidade-gallery">
          <figure className="reveal"><img src="img/mocidade-2018-sunrise.jpg" alt="A Mocidade reveller performs as the sun rises after the first night of Carnival at the Sambadrome, 2018" loading="lazy" /><figcaption>Photo: AFP / Mauro Pimentel</figcaption></figure>
          <figure className="reveal delay"><img src="img/mocidade-2018-parade-1.jpg" alt="Mocidade Independente de Padre Miguel parading at the Sambadrome, February 2018" loading="lazy" /><figcaption>Photo: AFP · Mocidade Independente, Carnival 2018</figcaption></figure>
          <figure className="reveal delay2"><img src="img/mocidade-2018-parade-2.jpg" alt="Mocidade Independente de Padre Miguel members on the avenue, February 2018" loading="lazy" /><figcaption>Photo: AFP · Mocidade Independente, Carnival 2018</figcaption></figure>
        </div>
        <p className="note">Photos: AFP, credited on each image. Permission to publish should be confirmed with the agency.</p>
      </div>
    </section>
  );
}

function Carnival() {
  return (
    <section id="carnival" className="section alt">
      <div className="wrap">
        <p className="eyebrow gold">The greatest show on Earth</p>
        <h2>Carnival is Brazil's stage for culture, music and sponsorship.</h2>
        <div className="stats">
          <Stat big="R$ 6.5 bn" label="moved in the Rio economy during Carnival 2025" note="Rio de Janeiro state tourism" />
          <Stat big="6.4 mi" label="revellers in Rio de Janeiro alone" note="Government of Brazil" />
          <Stat big="No. 1" label="largest carnival in the world" note="Guinness World Records" />
          <Stat big="800" label="invitations for the India–Brazil camarote" note="Global Hospitality" />
        </div>
        <p className="quote">
          The Sapucaí is the most desired showcase of Carnival: a live, emotional platform that reaches Brazilians
          of every social class, and a global audience through broadcast and media.
        </p>
        <div className="gallery">
          <figure className="reveal"><img src="img/camarote-party.jpg" alt="Guests celebrating in the camarote during a samba performance" loading="lazy" /></figure>
          <figure className="reveal delay"><img src="img/camarote-show.jpg" alt="Dance performance on stage with guests" loading="lazy" /></figure>
        </div>
      </div>
    </section>
  );
}

function Stat({ big, label, note }: { big: string; label: string; note: string }) {
  return (
    <div className="stat reveal">
      <div className="stat-big">{big}</div>
      <div className="stat-label">{label}</div>
      <div className="stat-note">{note}</div>
    </div>
  );
}

function IndiaSection() {
  const timeline: [string, string][] = [
    ["1500", "Cabral's fleet sails for the Indies and finds Brazil instead."],
    ["19th c.", "Zebu cattle from India cross the ocean and transform Brazilian livestock."],
    ["1948", "Diplomatic relations are established between Brazil and India."],
    ["2009", "Caminho das Índias brings Indian culture into millions of Brazilian homes."],
    ["Today", "A strategic partnership across trade, technology and culture."],
  ];
  const themes: [string, string][] = [
    ["Roots & discovery", "Cabral's voyage, spices, mango, jackfruit and coconut."],
    ["Land & cattle", "Gir, Nelore and Guzerá: the zebu that became Brazilian."],
    ["Flavours & trade", "Spice markets, silks, and Brazilian coffee travelling to India."],
    ["Wisdom & wellbeing", "Yoga and Ayurveda, and the balance of body and mind."],
    ["Holi & Diwali", "Festivals of colour and light taking over the avenue."],
    ["Silks & peacock", "Saris, Jaipur prints and the iridescent peacock in the floats."],
    ["Precious stones", "Rubies, emeralds and sapphires meeting the glitter of Carnival."],
    ["The future", "Health, technology and investment: the connection is now."],
  ];
  return (
    <section id="india" className="section">
      <div className="wrap">
        <p className="eyebrow gold">Roots that crossed the ocean</p>
        <h2>More than 500 years of connection.</h2>
        <ol className="timeline">
          {timeline.map(([y, t]) => (
            <li key={y} className="reveal">
              <span className="tl-year">{y}</span>
              <span className="tl-text">{t}</span>
            </li>
          ))}
        </ol>
        <div className="themes">
          {themes.map(([t, d]) => (
            <div key={t} className="theme reveal">
              <h4>{t}</h4>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Camarote() {
  const groups: [string, string[]][] = [
    ["Structure", ["Air-conditioned camarote", "Furnishing and décor by a designer", "Licences and insurance", "Sector 9, odd side, central position"]],
    ["Experience", ["Luxury concierge on demand", "Bilingual reception", "Exclusive meeting point from 9 pm", "Guest T-shirts customised for the tribute"]],
    ["Food & drinks", ["Indian kitchen by renowned chefs", "Japanese cuisine and continental breakfast", "Premium open bar and champagne", "Five bars with bartenders"]],
    ["Entertainment", ["Samba and passistas among the schools", "Indian dances", "Carnival King and Queen", "National and international DJs"]],
  ];
  return (
    <section id="camarote" className="section alt">
      <div className="wrap">
        <p className="eyebrow gold">Private Camarote · Global Hospitality</p>
        <h2>Premium hospitality on the avenue, with India on the guest list.</h2>
        <div className="gallery three">
          <figure className="reveal"><img src="img/camarote-buffet.jpg" alt="Buffet with Brazil and India themed decoration" loading="lazy" /></figure>
          <figure className="reveal delay"><img src="img/camarote-lounge.jpg" alt="Lounge area of the camarote" loading="lazy" /></figure>
          <figure className="reveal delay2"><img src="img/camarote-bar.jpg" alt="Bar of the camarote with the 80 years logo" loading="lazy" /></figure>
        </div>
        <div className="features">
          {groups.map(([k, list]) => (
            <div key={k} className="feature reveal">
              <h4>{k}</h4>
              <ul>{list.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          ))}
        </div>
        <p className="note">Camarote details reflect the Global Hospitality 2027 standard and will be confirmed for 2028.</p>
      </div>
    </section>
  );
}

function GuestKit() {
  return (
    <section id="kit" className="section">
      <div className="wrap">
        <p className="eyebrow gold">Guest kit</p>
        <h2>Dressed for the avenue, and a gift to take home.</h2>
        <p className="lead-small kit-lead">
          Every guest wears the Brazil–India 80 Years abada, designed for the camarote, and receives a gift box
          with Brazilian and Indian specialties. Illustrative renders; final pieces to be confirmed.
        </p>
        <div className="kit-grid">
          <figure className="reveal kit-wide"><img src="img/abada-collection.jpg" alt="Abada Premium collection in navy with the 80 years emblem" loading="lazy" /><figcaption>Abada Premium: the camarote collection</figcaption></figure>
          <figure className="reveal delay"><img src="img/abada-couple.jpg" alt="Two guests wearing the camarote abadas" loading="lazy" /><figcaption>Camarote abadas for every guest</figcaption></figure>
          <figure className="reveal delay2"><img src="img/abada-camarote-look.jpg" alt="Guest wearing the abada inside the camarote" loading="lazy" /><figcaption>Worn on the avenue, inside the camarote</figcaption></figure>
          <figure className="reveal"><img src="img/abada-camarote-group.jpg" alt="Guests in abadas at the camarote on the parade night" loading="lazy" /><figcaption>Parade night, all guests in the same colours</figcaption></figure>
          <figure className="reveal delay"><img src="img/brindes-kit.jpg" alt="Gift box with a bottle, teas, coffee, a scarf and a crystal keepsake" loading="lazy" /><figcaption>Gift box: Brazilian specialty coffee and Indian tea, scarf, crystal keepsake</figcaption></figure>
          <figure className="reveal delay2"><img src="img/brindes-detail.jpg" alt="Close-up of the gift box with the 80 years pin and crystal keepsake" loading="lazy" /><figcaption>Gift box detail: 80 years pin and keepsake</figcaption></figure>
        </div>
        <p className="note">Images are illustrative mock-ups of the camarote kit.</p>
      </div>
    </section>
  );
}

type Plate = "ivory" | "navy";
type Preset = { id: string; label: string; src: string | null; plate: Plate; alt: string };

const PRESETS: Preset[] = [
  { id: "camara", label: "Câmara", src: "img/logo-camara-color.png", plate: "ivory", alt: "India Brazil Chamber of Commerce" },
  { id: "frances", label: "Experiences do Francês", src: "img/logo-frances.png", plate: "navy", alt: "Experiences do Francês" },
];

function LoungeBrand() {
  const [preset, setPreset] = useState<Preset>(PRESETS[0]);
  const [uploaded, setUploaded] = useState<string | null>(null);
  const [plate, setPlate] = useState<Plate>(preset.plate);
  const [fileName, setFileName] = useState<string>("");
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => { if (uploaded) URL.revokeObjectURL(uploaded); };
  }, [uploaded]);

  const logoSrc = uploaded ?? preset.src ?? "";
  const logoAlt = uploaded ? (fileName || "Uploaded brand") : preset.alt;

  function pickPreset(p: Preset) {
    setPreset(p);
    setPlate(p.plate);
    setUploaded(null);
    setFileName("");
    if (fileRef.current) fileRef.current.value = "";
  }

  function onUpload(e: ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    const url = URL.createObjectURL(f);
    setUploaded((old) => { if (old) URL.revokeObjectURL(old); return url; });
    setFileName(f.name);
    setPlate("ivory");
  }

  return (
    <section id="lounge" className="section lounge-section">
      <div className="wrap">
        <p className="eyebrow gold">Your brand in the lounge</p>
        <h2>See your logo on the camarote wall.</h2>
        <p className="lead-small">
          Choose a logo or upload your own file (PNG with transparent background works best). The preview
          updates on the lounge render. Files stay in this browser and are not saved.
        </p>

        <div className="lounge-grid">
          <div className="lounge-controls">
            <h4>1 · Choose a logo</h4>
            <div className="preset-row" role="group" aria-label="Logo presets">
              {PRESETS.map((p) => (
                <button
                  key={p.id}
                  className={`preset ${!uploaded && preset.id === p.id ? "on" : ""}`}
                  onClick={() => pickPreset(p)}
                >
                  {p.label}
                </button>
              ))}
            </div>

            <h4>2 · Upload your logo</h4>
            <label className="upload">
              <input ref={fileRef} type="file" accept="image/png,image/jpeg,image/svg+xml,image/webp" onChange={onUpload} />
              <span>{fileName ? `Using: ${fileName}` : "Choose a file (PNG, JPG, SVG or WEBP)"}</span>
            </label>

            <h4>3 · Wall colour</h4>
            <div className="plate-row" role="group" aria-label="Wall colour">
              <button className={`plate-btn ${plate === "ivory" ? "on" : ""}`} onClick={() => setPlate("ivory")}>
                <span className="swatch ivory" /> Ivory
              </button>
              <button className={`plate-btn ${plate === "navy" ? "on" : ""}`} onClick={() => setPlate("navy")}>
                <span className="swatch navy" /> Navy
              </button>
            </div>
            <p className="small muted">Use Ivory for coloured logos and Navy for white logos.</p>
          </div>

          <div className="lounge-stage">
            <img className="lounge-img" src="img/lounge-wall.jpg" alt="Camarote lounge render with a brand wall" loading="lazy" />
            <div className={`lounge-wall ${plate}`}>
              <div className="wall-logos">
              <img className="wall-80" src="img/logo-80-icon.png" alt="80 Years of Diplomatic Relations Brazil India" />
              <span className="wall-divider" aria-hidden="true" />
              {logoSrc ? <img className="wall-brand" src={logoSrc} alt={logoAlt} /> : <span className="wall-empty">Your logo here</span>}
            </div>
            </div>
          </div>
        </div>
        <p className="note">Illustrative render. The final lounge wall will be designed for the selected brand.</p>
      </div>
    </section>
  );
}

function Quotas() {
  const [sponsor, setSponsor] = useState(true);
  const [selected, setSelected] = useState(2);
  const q = QUOTAS.find((x) => x.id === selected) ?? QUOTAS[1];
  const perGuest = sponsor ? PRICE_FULL : PRICE_CAMAROTE;
  const total = quotaPrice(q, sponsor);

  return (
    <section id="quotas" className="section alt">
      <div className="wrap">
        <p className="eyebrow gold">Quotas and pricing</p>
        <h2>Choose your quota. Price scales with the number of guests.</h2>

        <div className="toggle" role="tablist" aria-label="Product">
          <button className={!sponsor ? "on" : ""} onClick={() => setSponsor(false)}>Camarote only</button>
          <button className={sponsor ? "on" : ""} onClick={() => setSponsor(true)}>Camarote + Samba School Tribute</button>
        </div>
        <p className="muted small">
          {sponsor
            ? `Includes the camarote and the sponsorship of the samba school tribute to India (${usd2(PRICE_FULL)} per invitation, ${brl2(PRICE_FULL)}).`
            : `Camarote and services only (${usd2(PRICE_CAMAROTE)} per invitation, ${brl2(PRICE_CAMAROTE)}). The samba school tribute is not included.`}
        </p>

        <div className="calc">
          <div className="calc-pick">
            {QUOTAS.map((x) => (
              <button key={x.id} className={`chip ${x.id === selected ? "on" : ""}`} onClick={() => setSelected(x.id)}>
                {x.label}
                <small>{quotaInvites(x)} guests</small>
              </button>
            ))}
          </div>
          <div className="calc-out">
            <p className="eyebrow gold">{q.label}</p>
            <div className="big-price">{usd(total)}</div>
            <p className="muted">{brl(total)} · {quotaInvites(q)} invitations × {usd2(perGuest)} ({brl2(perGuest)})</p>
            <table className="days">
              <thead><tr>{DAYS.map((d) => <th key={d}>{d}</th>)}</tr></thead>
              <tbody><tr>{q.days.map((n, i) => <td key={i}>{n}</td>)}</tr></tbody>
            </table>
            <p className="small muted">Invitations per parade night.</p>
          </div>
        </div>

        <div className="table-wrap">
          <table className="quota-table">
            <thead>
              <tr>
                <th>Quota</th>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Sat</th>
                <th>Guests</th>
                <th>Camarote only</th>
                <th>Camarote + Tribute</th>
              </tr>
            </thead>
            <tbody>
              {QUOTAS.map((x) => (
                <tr key={x.id} className={x.id === selected ? "row-on" : ""} onClick={() => setSelected(x.id)}>
                  <td>{x.label}</td>
                  {x.days.map((n, i) => <td key={i}>{n}</td>)}
                  <td><strong>{quotaInvites(x)}</strong></td>
                  <td>{usd(quotaPrice(x, false))}<small>{brl(quotaPrice(x, false))}</small></td>
                  <td>{usd(quotaPrice(x, true))}<small>{brl(quotaPrice(x, true))}</small></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="small muted">
          Packages of {QUOTAS.map((x) => quotaInvites(x)).join(", ")} invitations. The project offers {TOTAL_INVITES} invitations in total.
          US$ values are indicative at R$ {USD_RATE.toFixed(2)} per US$ 1 and are converted from the BRL spreadsheet.
        </p>
      </div>
    </section>
  );
}

function Sponsorship() {
  const pct = (v: number) => ((v / TOTAL_PROJECT) * 100).toFixed(1) + "%";
  return (
    <section id="sponsor" className="section">
      <div className="wrap">
        <p className="eyebrow gold">Samba School Tribute</p>
        <h2>Put India on the avenue, and your brand with it.</h2>
        <div className="two-col">
          <p>
            The sponsorship funds the samba school's parade in honour of India. The school tells the story in its
            samba-enredo, costumes and floats, and sponsors are recognised in the tribute.
          </p>
          <p>
            Of the total project, the parade sponsorship represents {brl(SCHOOL_SHARE)} ({pct(SCHOOL_SHARE)}),
            the camarote and its services {brl(CAMAROTE_SHARE)} ({pct(CAMAROTE_SHARE)}), and travel, taxes,
            the commemorative book and operations {brl(EXPERIENCE_SHARE)} ({pct(EXPERIENCE_SHARE)}).
          </p>
        </div>
        <div className="benefits">
          <div className="benefit reveal"><h4>Pre-Carnival</h4><p>Guest access to the school's quadra during rehearsals, brand displayed in the quadra, invitations to school events.</p></div>
          <div className="benefit reveal delay"><h4>Carnival</h4><p>Brand on the shirts of the float pushers, costumes for guests to parade in, and a video wall and film inside the camarote.</p></div>
          <div className="benefit reveal delay2"><h4>After the parade</h4><p>Recognition in the 80 Years commemorative book and visibility with both countries' trade and cultural networks.</p></div>
        </div>
        <div className="incentive reveal">
          <h4>Tax incentives</h4>
          <p>
            Sponsorship may qualify under the federal Rouanet Law (up to 4% of income tax, once the project is
            approved by the Ministry of Culture) and Rio de Janeiro State ICMS incentives. Eligibility and timing must
            be confirmed with your tax advisor.
          </p>
        </div>
      </div>
    </section>
  );
}

function Activations() {
  const items = [
    "Naming rights", "Sampling and check-in", "Brand on camarote shirts", "Vans wrap",
    "LED ad at the camarote", "Adhesive column", "Corner / shops", "Influencer marketing",
  ];
  return (
    <section className="section alt tight">
      <div className="wrap">
        <p className="eyebrow gold">Additional activations</p>
        <h2>Extra visibility, on request.</h2>
        <div className="chips-static">
          {items.map((x) => <span key={x} className="tag">{x}</span>)}
        </div>
        <p className="note">Pricing for each activation is available on request.</p>
      </div>
    </section>
  );
}

function Media() {
  const links: [string, string, string, string][] = [
    ["CNN Travel", "Rio de Janeiro's epic samba parade", "https://www.cnn.com/travel/gallery/rio-samba-parade/index.html", "Read the feature"],
    ["CNN Travel", "The world's most colourful carnival celebrations", "https://www.cnn.com/travel/article/most-colorful-carnivals/index.html", "Read the article"],
    ["Forbes · 2025", "Top carnival celebrations around the world", "https://www.forbes.com/sites/ramseyqubein/2025/02/22/top-carnival-celebrations-around-the-world/", "Read the article"],
    ["Al Jazeera · 2023", "Brazil celebrates its return to full-scale Carnival", "https://www.aljazeera.com/gallery/2023/2/18/brazil-celebrates-its-return-to-full-scale-carnival-festivities", "Read the gallery"],
  ];
  return (
    <section id="media" className="section">
      <div className="wrap">
        <p className="eyebrow gold">Why it matters</p>
        <h2>The world looks at Rio in February.</h2>
        <div className="media-grid">
          {links.map(([src, title, href, cta], i) => (
            <a key={href} className={`media reveal ${i % 2 ? "delay" : ""}`} href={href} target="_blank" rel="noreferrer">
              <span className="media-src">{src}</span>
              <strong>{title}</strong>
              <span className="media-go">{cta} →</span>
            </a>
          ))}
        </div>
        <p className="small muted">
          Figures on this page come from Rio de Janeiro and Brazilian official sources and the Global Hospitality
          2027 reference; they will be checked again before the final version.
        </p>
      </div>
    </section>
  );
}

function Travel() {
  const hotels: [string, string][] = [
    ["Leme & Copacabana", "Closest to the camarote's credential point and the transfer route. Beachfront luxury and classic hotels."],
    ["Ipanema & Leblon", "Upscale neighbourhoods with restaurants and shopping, a short private transfer away."],
    ["Centro & Porto", "Near the Sambadrome and the avenue. Good for cultural visitors and the samba school experience."],
  ];
  const services: [string, string][] = [
    ["Airport transfers", "Private transfers from GIG and SDU airports, arranged for arrival and departure."],
    ["Camarote-day transfers", "Luxury vans from the hotel to the meeting point and back, for camarote guests."],
    ["Christ the Redeemer & Sugarloaf", "Guided tours of Rio's landmarks, scheduled around the parade nights."],
    ["Samba school rehearsal visit", "Access to the school's quadra and rehearsals, with a tribute performance preview."],
    ["Costume fitting", "Fitting and delivery of costumes for guests who parade with the school."],
    ["India & Brazil dinner", "A curated gastronomic evening bridging Indian and Brazilian flavours."],
    ["Insurance & visas", "Travel insurance and guidance on Brazilian visa requirements for each nationality."],
  ];
  return (
    <section id="travel" className="section alt">
      <div className="wrap">
        <p className="eyebrow gold">Travel Hub</p>
        <h2>Plan the whole trip to the Sapucaí.</h2>
        <p className="lead-small">
          Camarote guests can book accommodation, transfers and experiences in one place. Rates are quoted on
          request by partners and confirmed at booking.
        </p>

        <h3 className="sub">Where to stay</h3>
        <div className="cards">
          {hotels.map(([t, d]) => (
            <div key={t} className="card reveal"><h4>{t}</h4><p>{d}</p><span className="tag">Rates on request</span></div>
          ))}
        </div>

        <h3 className="sub">Transfers & services</h3>
        <div className="cards four">
          {services.map(([t, d]) => (
            <div key={t} className="card reveal"><h4>{t}</h4><p>{d}</p></div>
          ))}
        </div>

        <h3 className="sub">Golden Triangle</h3>
        <div className="triangle-grid">
          <div className="triangle-card reveal">
            <span className="tri-tag">For Brazilians</span>
            <h4>Get into the spirit before the big moment.</h4>
            <p>
              Discover India before the celebration, on a leisure trip or a roadshow, with the support of the
              India Brazil Chamber of Commerce. New Delhi, Agra and Jaipur await.
            </p>
            <a className="btn btn-ghost" href="#contact">Learn more →</a>
          </div>
          <div className="triangle-card reveal delay">
            <span className="tri-tag">For Indian guests</span>
            <h4>Make the most of your stay in Brazil.</h4>
            <p>
              Explore Rio and other regions of Brazil, and close major business deals with the support of the
              India Brazil Chamber of Commerce.
            </p>
            <a className="btn btn-ghost" href="#contact">Learn more →</a>
          </div>
        </div>

        <div className="calendar reveal">
          <h4>Carnival 2028 calendar</h4>
          <p>
            Friday 25 February to Wednesday 1 March 2028. Parade nights are set by LIESA. The reference schedule
            is Sat 26, Sun 27, Mon 28 and Tue 29 February, with the Champions' Parade on 4 March (to be confirmed).
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section cta">
      <div className="wrap">
        <p className="eyebrow gold">Next steps</p>
        <h2>Let's bring India to the Sapucaí in 2028.</h2>
        <ol className="steps">
          <li>Choose your quota and product</li>
          <li>Confirm the camarote and sponsorship terms</li>
          <li>Book your travel through the hub</li>
        </ol>
        <div className="cta-row">
          {CONTACT_EMAIL ? (
            <a className="btn btn-primary" href={`mailto:${CONTACT_EMAIL}?subject=India na Avenida 2028`}>Request a proposal</a>
          ) : (
            <p className="muted">Contact the team at {SITE}.</p>
          )}
          <button className="btn btn-ghost" onClick={() => window.print()}>Print / save as PDF</button>
        </div>
      </div>
    </section>
  );
}
