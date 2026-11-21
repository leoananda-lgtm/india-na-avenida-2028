import { useMemo, useState } from "react";
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
  ["quotas", "Quotas"],
  ["sponsor", "Sponsorship"],
  ["media", "Media"],
  ["travel", "Travel"],
];

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Story />
      <Carnival />
      <IndiaSection />
      <Camarote />
      <GuestKit />
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
      <div className="wrap hero-grid">
        <div className="hero-text reveal">
          <p className="eyebrow">Carnival of Rio 2028 · Marquês de Sapucaí</p>
          <h1>
            Eighty years of friendship, <em>on the greatest stage on Earth.</em>
          </h1>
          <p className="lead">
            A private camarote and a samba school tribute that celebrate 80 years of diplomatic relations
            between Brazil and India, with flavours, knowledge and connections crossing the ocean.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#quotas">See the quotas</a>
            <a className="btn btn-ghost" href="#sponsor">Sponsor the tribute</a>
          </div>
        </div>
        <div className="hero-art reveal delay">
          <img src="img/logo-stacked.png" alt="80 Years of Diplomatic Relations Brazil India 1948–2028" />
        </div>
      </div>
      <div className="flagbar" aria-hidden="true"><span /><span /><span /></div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="section">
      <div className="wrap">
        <p className="eyebrow">Two products, one celebration</p>
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
          <Pillar n="01" title="Private Camarote" text={`${TOTAL_INVITES} invitations across 8 quotas, Sector 9, Global Hospitality.`} />
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

function Carnival() {
  return (
    <section id="carnival" className="section dark">
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
    ["Today", "A strategic partnership with trade near US$ 15 bn, targeting US$ 20–30 bn by 2030."],
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
        <p className="eyebrow">Roots that crossed the ocean</p>
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
    ["Structure", ["1,800 m² air-conditioned", "Furnishing and décor by a designer", "Licences and insurance", "Sector 9, odd side, central position"]],
    ["Experience", ["Luxury concierge on demand", "Bilingual reception", "Exclusive meeting point from 9 pm", "Guest T-shirts customised for the tribute"]],
    ["Food & drinks", ["Indian kitchen by renowned chefs", "Japanese cuisine and continental breakfast", "Premium open bar and champagne", "Five bars with bartenders"]],
    ["Entertainment", ["Samba and passistas among the schools", "Indian dances", "Carnival King and Queen", "National and international DJs"]],
  ];
  return (
    <section id="camarote" className="section light">
      <div className="wrap">
        <p className="eyebrow">Private Camarote · Global Hospitality</p>
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
    <section id="kit" className="section dark">
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

function Quotas() {
  const [sponsor, setSponsor] = useState(true);
  const [selected, setSelected] = useState(3);
  const q = QUOTAS.find((x) => x.id === selected) ?? QUOTAS[2];
  const perGuest = sponsor ? PRICE_FULL : PRICE_CAMAROTE;
  const total = quotaPrice(q, sponsor);
  const totalAll = useMemo(() => QUOTAS.reduce((a, x) => a + quotaPrice(x, sponsor), 0), [sponsor]);

  return (
    <section id="quotas" className="section">
      <div className="wrap">
        <p className="eyebrow">Quotas and pricing</p>
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
            <p className="eyebrow">{q.label}</p>
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
              <tr className="total">
                <td>Total</td>
                <td colSpan={4} />
                <td>{TOTAL_INVITES}</td>
                <td>{usd(QUOTAS.reduce((a, x) => a + quotaPrice(x, false), 0))}<small>{brl(QUOTAS.reduce((a, x) => a + quotaPrice(x, false), 0))}</small></td>
                <td>{usd(QUOTAS.reduce((a, x) => a + quotaPrice(x, true), 0))}<small>{brl(QUOTAS.reduce((a, x) => a + quotaPrice(x, true), 0))}</small></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="small muted">
          Showing the {sponsor ? "full" : "camarote-only"} total of {usd(totalAll)} ({brl(totalAll)}) for all quotas.
          US$ values are indicative at R$ {USD_RATE.toFixed(2)} per US$ 1 (commercial dollar, 18 Nov 2026) and are converted from the BRL spreadsheet.
        </p>
      </div>
    </section>
  );
}

function Sponsorship() {
  const pct = (v: number) => ((v / TOTAL_PROJECT) * 100).toFixed(1) + "%";
  return (
    <section id="sponsor" className="section dark">
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
    <section className="section light tight">
      <div className="wrap">
        <p className="eyebrow">Additional activations</p>
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
        <p className="eyebrow">Why it matters</p>
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
    ["Golden Triangle trip", "A 10-day India programme covering New Delhi, Agra and Jaipur, for sponsors and guests."],
    ["Insurance & visas", "Travel insurance and guidance on Brazilian visa requirements for each nationality."],
  ];
  return (
    <section id="travel" className="section light">
      <div className="wrap">
        <p className="eyebrow">Travel Hub</p>
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
    <section className="section dark cta">
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
