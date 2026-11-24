import { useState } from "react";
import {
  QUOTAS, DAYS, PRICE_FULL, PRICE_CAMAROTE, TOTAL_INVITES,
  SCHOOL_SHARE, CAMAROTE_SHARE, EXPERIENCE_SHARE, TOTAL_PROJECT,
  quotaInvites, quotaPrice, usd, usd2, USD_RATE, CONTACT_EMAIL, SITE,
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
  { text: "Rio de Janeiro breaks tourist records during Carnival 2025 and generates US$ 1.2 billion.", source: "Rio de Janeiro State Tourism" },
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
      <Partners />
      <Finale />
      <Invitation />
      <Contact />
      <footer className="footer">
        <div className="wrap">
          <p>India at the Rio de Janeiro Carnival - Brazil 2028 · 80 Years of Diplomatic Relations Brazil · India (1948–2028)</p>
          <p className="muted">
            All prices are shown in US dollars at an indicative rate of R$ {USD_RATE.toFixed(2)} per US$ 1; the final amount is fixed at the rate on the date of contract. Subject to final confirmation. Tax incentives depend on each
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
        <a href="#top" className="brand">India at the Rio de Janeiro Carnival - Brazil 2028</a>
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
          <p className="project-title">India at the Rio de Janeiro Carnival - Brazil 2028</p>
          <p className="project-title-hi" lang="hi">रियो डी जनेरो कार्निवल में भारत - ब्राज़ील 2028</p>
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
            India at the Rio de Janeiro Carnival (Brazil) is a project by Experiences do Francês, run together with the
            India Brazil Chamber of Commerce, honouring India alongside a samba school from Rio's Special Group.
          </p>
          <p>
            The <strong>Private Camarote</strong> brings guests to Sector 9 of the avenue for the parade nights,
            with hospitality, service and an India–Brazil programme. The <strong>Samba School Tribute</strong>
            puts India on the avenue itself, with a theme that runs from Cabral's voyage to zebu cattle, spices,
            Holi, Diwali and the gems of Jaipur.
          </p>
        </div>
        <div className="family reveal proposal">
          <p className="eyebrow gold">The proposal</p>
          <p>In 2028, India parades on the Sapucaí between 27 February and 4 March.</p>
          <p><strong>Music:</strong> meeting the percussion section (bateria) of the Samba School.</p>
        </div>
        <div className="pillars">
          <Pillar n="01" title="Private Camarote" text={`${TOTAL_INVITES} invitations in packages of 24, 40, 64 and 80, Sector 9, Global Hospitality.`} />
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
        <div className="carnival-gallery">
          <figure className="reveal wide"><img src="img/carnival-1.jpg" alt="Samba school float with golden elephants and a Hindu deity in the Sambadrome, illustrative" loading="lazy" /></figure>
          <figure className="reveal delay"><img src="img/carnival-2.jpg" alt="Dancers and a Shiva float on the avenue, illustrative" loading="lazy" /></figure>
          <figure className="reveal"><img src="img/carnival-3.jpg" alt="Dragon float with the crowd filling the Sambadrome, illustrative" loading="lazy" /></figure>
        </div>
        <p className="note">Illustrative images of the 80 Years Carnival tribute.</p>
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
        <p className="lead-small"><strong>6 parade nights</strong>, from Friday 25 February to Saturday 4 March 2028.</p>
        <div className="stats">
          <Stat big="US$ 1.2 bn" label="moved in the Rio economy during Carnival 2025" note="Rio de Janeiro state tourism" />
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
    ["16th c.", "Sugar cane, of Asian origin, becomes the first great Brazilian economic cycle, with the trade routes of the Indian Ocean behind it."],
    ["18th c.", "The gold cycle links Brazil to Portuguese Asia and the Indian Ocean trade network."],
    ["19th c.", "Zebu cattle from India cross the ocean and transform Brazilian livestock."],
    ["1948", "Diplomatic relations are established between Brazil and India."],
    ["2009", "Caminho das Índias brings Indian culture into millions of Brazilian homes."],
    ["21st c.", "Technology and biotechnology: research, innovation and investment between the two countries."],
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
        <div className="family reveal">
          <p className="family-motto">Vasudhaiva Kutumbakam · The world is one family</p>
          <p>
            India's foreign policy is guided by the idea that the world is one family. Brazil and India are brothers,
            and the tribute to India at Carnival is the Brazilian people's way of saying thank you for that brotherhood
            and for the partnership built over the years.
          </p>
        </div>
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
        <div className="gallery pair">
          <figure className="reveal"><img src="img/camarote-buffet.jpg" alt="Buffet with Brazil and India themed decoration" loading="lazy" /></figure>
          <figure className="reveal delay"><img src="img/camarote-lounge.jpg" alt="Lounge area of the camarote" loading="lazy" /></figure>
          <figure className="reveal"><img src="img/camarote-bar.jpg" alt="Bar of the camarote with the 80 years logo" loading="lazy" /></figure>
          <figure className="reveal delay"><img src="img/camarote-terrace.jpg" alt="Terrace of the camarote overlooking the avenue" loading="lazy" /></figure>
          <figure className="reveal"><img src="img/camarote-beauty.jpg" alt="Beauty area of the camarote with illuminated mirrors" loading="lazy" /></figure>
          <figure className="reveal delay"><img src="img/camarote-empty.jpg" alt="Empty camarote lounge with the 80 years logo on the wall" loading="lazy" /></figure>
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

function LoungeBrand() {
  return (
    <section id="lounge" className="section lounge-section">
      <div className="wrap">
        <p className="eyebrow gold">Your brand in the lounge</p>
        <h2>See how your brand can look on the camarote wall.</h2>
        <p className="lead-small">
          The final design of the India–Brazil private camarote is developed according to the packages acquired with the sponsor quotas.
        </p>
        <p className="lead-small">
          This illustrative render shows a partner's logo beside the 80 Years emblem on the camarote wall. For each
          company we present, we create a similar image with its own logo.
        </p>
        <figure className="lounge-example reveal">
          <img src="img/lounge-reference.jpg" alt="Illustrative camarote lounge with the 80 Years logo and a partner logo on the wall" loading="lazy" />
          <figcaption>Illustrative example · partner logo shown for reference</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section id="partners" className="section">
      <div className="wrap">
        <p className="eyebrow gold">Partners and institutions</p>
        <h2>Who is already with us.</h2>
        <p className="lead-small">
          Companies and institutions already part of this project of closeness and brotherhood between Brazil and India.
          More partners will be added as they confirm.
        </p>
        <div className="partner-grid">
          <div className="partner-card reveal">
            <img src="img/logo-camara-h.png" alt="India Brazil Chamber of Commerce" />
          </div>
          <div className="partner-card reveal delay">
            <img src="img/logo-tcs.png" alt="TCS, Tata Consultancy Services" />
          </div>
          <div className="partner-card partner-dark reveal delay2">
            <img src="img/logo-frances.png" alt="Experiences do Francês" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Finale() {
  return (
    <section className="section alt finale">
      <div className="wrap">
        <p className="eyebrow gold">Holi · होली · The festival of colours</p>
        <h2>Holi meets Carnival.</h2>
        <p className="lead-small">
          Holi, India's festival of colours, comes to Brazil's Carnival: a magical encounter of two great cultures,
          celebrated with colour, rhythm and joy on the Sapucaí.
        </p>
        <div className="finale-grid">
          <figure className="reveal"><img src="img/carnival-powder.jpg" alt="A float covered in colourful powder with dancers from Brazil and India" loading="lazy" /></figure>
          <figure className="reveal delay"><img src="img/carnival-aerial.jpg" alt="Aerial view of a golden elephant float on the Sambadrome avenue" loading="lazy" /></figure>
        </div>
        <p className="note">Illustrative images.</p>
      </div>
    </section>
  );
}

function Invitation() {
  return (
    <section className="invite" aria-label="Invitation">
      <img className="invite-bg" src="img/carnival-flags.jpg" alt="" aria-hidden="true" loading="lazy" />
      <div className="invite-shade" aria-hidden="true" />
      <div className="wrap invite-inner">
        <p className="eyebrow gold">An invitation</p>
        <h2 className="invite-title">Two flags. One rhythm. <em>One family.</em></h2>
        <p className="invite-pt">
          Brazil and India: 80 years of brotherhood, celebrated at the heart of Carnival. Come dance with us at the Sapucaí in 2028.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#quotas">Reserve your quota</a>
          <a className="btn btn-ghost" href="#travel">Plan your trip</a>
        </div>
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
          <button className={sponsor ? "on" : ""} onClick={() => setSponsor(true)}>With the samba school tribute</button>
          <button className={!sponsor ? "on" : ""} onClick={() => setSponsor(false)}>Camarote only</button>
        </div>
        <p className="muted small">
          {sponsor
            ? `Includes the camarote and the sponsorship of the samba school tribute to India (${usd2(PRICE_FULL)} per invitation).`
            : `Camarote and services only (${usd2(PRICE_CAMAROTE)} per invitation). The samba school tribute is not included.`}
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
            <p className="muted">{quotaInvites(q)} invitations × {usd2(perGuest)} per invitation</p>
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
                <th>Sun 27 Feb</th>
                <th>Mon 28 Feb</th>
                <th>Tue 29 Feb</th>
                <th>Sat 26 Feb</th>
                <th>Guests</th>
                <th>{sponsor ? "With the tribute (US$)" : "Camarote only (US$)"}</th>
              </tr>
            </thead>
            <tbody>
              {QUOTAS.map((x) => (
                <tr key={x.id} className={x.id === selected ? "row-on" : ""} onClick={() => setSelected(x.id)}>
                  <td>{x.label}</td>
                  {x.days.map((n, i) => <td key={i}>{n}</td>)}
                  <td><strong>{quotaInvites(x)}</strong></td>
                  <td><strong>{usd(quotaPrice(x, sponsor))}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="small muted">
          Each quota is split evenly into even numbers per parade night. Values are indicative at R$ {USD_RATE.toFixed(2)} per US$ 1.
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
            Of the total project, the parade sponsorship represents {usd(SCHOOL_SHARE)} ({pct(SCHOOL_SHARE)}),
            the camarote and its services {usd(CAMAROTE_SHARE)} ({pct(CAMAROTE_SHARE)}), and travel, taxes,
            the commemorative book and operations {usd(EXPERIENCE_SHARE)} ({pct(EXPERIENCE_SHARE)}).
          </p>
        </div>
        <div className="benefits">
          <div className="benefit reveal"><h4>Pre-Carnival</h4><p>Guest access to the school's quadra during rehearsals, brand displayed in the quadra, invitations to school events.</p></div>
          <div className="benefit reveal delay"><h4>Carnival</h4><p>Brand on the shirts of the float pushers, costumes for guests to parade in, and a video wall and film inside the camarote.</p></div>
          <div className="benefit reveal delay2"><h4>After the parade</h4><p>Recognition in the 80 Years commemorative book and visibility with both countries' trade and cultural networks.</p></div>
        </div>
        <div className="family reveal">
          <p className="eyebrow gold">Where the investment goes</p>
          <p><strong>Brand on the parade:</strong> the sponsor's identity appears on the parade, according to the activation package and the quota chosen.</p>
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
    "Sampling at check-in",
    "Brand activation at check-in",
    "Guest bag",
    "Brand on the guest's shirt",
    "Vehicle wraps for guest transport",
  ];
  const camarote = [
    "Product advertising", "LED panel", "Advertising", "Wraps", "Influencers", "Wrapped column",
    "Beauty area", "Showcases", "Corner", "Boutiques",
  ];
  const parade = ["Shirts", "Floats"];
  return (
    <section className="section alt tight">
      <div className="wrap">
        <p className="eyebrow gold">Activations</p>
        <h2>Visibility at every step of the night.</h2>
        <h4 className="sub">Guest experience</h4>
        <div className="chips-static">
          {items.map((x) => <span key={x} className="tag">{x}</span>)}
        </div>
        <h4 className="sub">Branding in the camarote</h4>
        <div className="chips-static">
          {camarote.map((x) => <span key={x} className="tag">{x}</span>)}
        </div>
        <h4 className="sub">Branding on the parade</h4>
        <div className="chips-static">
          {parade.map((x) => <span key={x} className="tag">{x}</span>)}
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
          <p><strong>Live:</strong> the Samba School parades begin on Friday, 25 February 2028.</p>
          <p>Sunday 27 February to Saturday 4 March: Special Group and Champions parades, 4 parade nights.</p>
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
            <a className="btn btn-primary" href={`mailto:${CONTACT_EMAIL}?subject=India at the Rio de Janeiro Carnival - Brazil 2028`}>Request a proposal</a>
          ) : (
            <p className="muted">Contact the team at {SITE}.</p>
          )}
          <button className="btn btn-ghost" onClick={() => window.print()}>Print / save as PDF</button>
        </div>
      </div>
    </section>
  );
}
