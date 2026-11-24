import { createContext, useContext, useEffect, useState } from "react";
import {
  QUOTAS, DAYS, PRICE_FULL, PRICE_CAMAROTE, TOTAL_INVITES,
  SCHOOL_SHARE, CAMAROTE_SHARE, EXPERIENCE_SHARE, TOTAL_PROJECT,
  quotaInvites, quotaPrice, usd, usd2, CONTACT_EMAIL, SITE,
} from "./data";
import { en, pt, type Lang } from "./i18n";

type Copy = typeof en;
const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: "en", setLang: () => {} });
const useLang = () => useContext(LangContext);
const useT = (): Copy => (useLang().lang === "pt" ? pt : en);

const MEDIA_URLS = [
  "https://www.cnn.com/travel/gallery/rio-samba-parade/index.html",
  "https://www.cnn.com/travel/article/most-colorful-carnivals/index.html",
  "https://www.forbes.com/sites/ramseyqubein/2025/02/22/top-carnival-celebrations-around-the-world/",
  "https://www.aljazeera.com/gallery/2023/2/18/brazil-celebrates-its-return-to-full-scale-carnival-festivities",
];

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const t = lang === "pt" ? pt : en;

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = lang === "pt"
      ? "Índia no Carnaval do Rio de Janeiro - Brasil 2028 | 80 Anos"
      : "India at the Rio de Janeiro Carnival - Brazil 2028 | 80 Years India-Brazil";
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
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
      <Legacy />
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
          <p>{t.footer.line}</p>
          <p className="muted">{t.footer.note}</p>
        </div>
      </footer>
    </LangContext.Provider>
  );
}

function Header() {
  const { lang, setLang } = useLang();
  const t = useT();
  const nav: [string, string][] = [
    ["story", t.nav.story], ["carnival", t.nav.carnival], ["india", t.nav.india], ["camarote", t.nav.camarote],
    ["lounge", t.nav.lounge], ["quotas", t.nav.quotas], ["sponsor", t.nav.sponsor], ["travel", t.nav.travel],
  ];
  return (
    <header className="topbar">
      <div className="wrap topbar-inner">
        <a href="#top" className="brand">{t.brand}</a>
        <nav className="nav">
          {nav.map(([id, label]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>
        <div className="lang" role="group" aria-label="Language">
          <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
          <button className={lang === "pt" ? "on" : ""} onClick={() => setLang("pt")}>PT</button>
        </div>
      </div>
    </header>
  );
}

function Countdown() {
  const t = useT();
  const target = new Date("2028-02-25T00:00:00-03:00").getTime();
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target - now);
  const parts = [
    [Math.floor(diff / 86400000), t.hero.countdown.days],
    [Math.floor((diff / 3600000) % 24), t.hero.countdown.hours],
    [Math.floor((diff / 60000) % 60), t.hero.countdown.minutes],
    [Math.floor((diff / 1000) % 60), t.hero.countdown.seconds],
  ] as [number, string][];
  return (
    <div className="countdown" aria-label={t.hero.countdown.title}>
      <p className="countdown-title">{t.hero.countdown.title}</p>
      <div className="countdown-grid">
        {parts.map(([n, label]) => (
          <div key={label} className="countdown-item"><span>{n}</span><small>{label}</small></div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  const t = useT();
  return (
    <section id="top" className="hero">
      <img className="hero-bg" src="img/hero-party.jpg" alt="" aria-hidden="true" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-text reveal">
          <p className="project-title">{t.brand}</p>
          <p className="project-title-hi" lang="hi">{t.hindi}</p>
          <p className="eyebrow gold">{t.hero.eyebrow}</p>
          <h1>
            {t.hero.h1a} <em>{t.hero.h1b}</em>
          </h1>
          <p className="lead">{t.hero.lead}</p>
          <p className="hero-live">{t.hero.live}</p>
          <Countdown />
          <div className="cta-row">
            <a className="btn btn-primary" href="#quotas">{t.hero.cta1}</a>
            <a className="btn btn-ghost" href="#sponsor">{t.hero.cta2}</a>
          </div>
        </div>
        <div className="hero-mark reveal delay">
          <img className="mark-logo" src="img/logo-80-icon.png" alt={t.hero.logoAlt} />
          <p className="mark-caption">{t.hero.caption}</p>
        </div>
      </div>
      <div className="flagbar" aria-hidden="true"><span /><span /><span /></div>
    </section>
  );
}

function Quotes() {
  const t = useT();
  return (
    <section className="quotes" aria-label="Quotes">
      <div className="wrap quote-grid">
        {t.quotes.map((q, i) => (
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
  const t = useT();
  return (
    <section className="organisers" aria-label="Organisers">
      <div className="wrap organisers-inner">
        <p className="eyebrow gold">{t.organisers.eyebrow}</p>
        <div className="org-logos">
          <div className="org-logo reveal">
            <img src="img/logo-camara.png" alt={t.organisers.camara} />
          </div>
          <div className="org-logo reveal delay">
            <img src="img/logo-frances.png" alt={t.organisers.frances} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Story() {
  const t = useT();
  return (
    <section id="story" className="section">
      <div className="wrap">
        <p className="eyebrow gold">{t.story.eyebrow}</p>
        <h2>{t.story.h2}</h2>
        <div className="two-col">
          <p>{t.story.p1}</p>
          <p>
            {t.story.p2[0]} <strong>{t.story.p2[1]}</strong> {t.story.p2[2]} <strong>{t.story.p2[3]}</strong> {t.story.p2[4]}
          </p>
        </div>
        <p className="lead-small">{t.story.skip1}</p>
        <p className="lead-small">{t.story.skip2}</p>
        <div className="family reveal proposal">
          <p className="eyebrow gold">{t.story.proposalEyebrow}</p>
          <p>{t.story.proposal1}</p>
          <p><strong>{t.story.proposal2a}</strong> {t.story.proposal2b}</p>
        </div>
        <div className="pillars">
          {t.story.pillars.map((p, i) => (
            <Pillar key={p.title} n={`0${i + 1}`} title={p.title} text={p.text.replace("{n}", String(TOTAL_INVITES))} />
          ))}
        </div>
        <div className="pillars">
          {t.story.skipPillars.map((p, i) => (
            <Pillar key={p.title} n={`0${i + 1}`} title={p.title} text={p.text} />
          ))}
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
  const t = useT();
  return (
    <section id="carnival" className="section alt">
      <div className="wrap">
        <p className="eyebrow gold">{t.carnival.eyebrow}</p>
        <h2>{t.carnival.h2}</h2>
        <p className="lead-small"><strong>{t.carnival.nights}</strong></p>
        <div className="stats">
          {t.carnival.stats.map((s) => (
            <Stat key={s.big} big={s.big} label={s.label} note={s.note} />
          ))}
        </div>
        <p className="eyebrow gold">{t.carnival.stageEyebrow}</p>
        <p className="lead-small">{t.carnival.stageQuote}</p>
        <div className="stats">
          {t.carnival.stageItems.map((s) => (
            <Stat key={s.big} big={s.big} label={s.label} note={s.note} />
          ))}
        </div>
        <p className="quote">{t.carnival.quote}</p>
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

function Mocidade2018() {
  const t = useT();
  return (
    <section id="mocidade" className="section tight">
      <div className="wrap">
        <p className="eyebrow gold">{t.carnival.picsEyebrow}</p>
        <p className="lead-small">{t.carnival.picsLead}</p>
        <div className="carnival-gallery">
          <figure className="reveal"><img src="img/carnival-1.jpg" alt={t.carnival.alt1} loading="lazy" /></figure>
          <figure className="reveal delay"><img src="img/carnival-2.jpg" alt={t.carnival.alt2} loading="lazy" /></figure>
          <figure className="reveal"><img src="img/carnival-3.jpg" alt={t.carnival.alt3} loading="lazy" /></figure>
        </div>
        <p className="note">{t.carnival.picsNote}</p>
      </div>
    </section>
  );
}

function IndiaSection() {
  const t = useT();
  return (
    <section id="india" className="section">
      <div className="wrap">
        <p className="eyebrow gold">{t.india.eyebrow}</p>
        <h2>{t.india.h2}</h2>
        <div className="family reveal">
          <p className="family-motto">{t.india.familyMotto}</p>
          <p>{t.india.family}</p>
        </div>
        <p className="lead-small">{t.india.proposalLead}</p>
        <ol className="timeline">
          {t.india.timeline.map(([y, x]) => (
            <li key={y} className="reveal">
              <span className="tl-year">{y}</span>
              <span className="tl-text">{x}</span>
            </li>
          ))}
        </ol>
        <div className="blocks">
          {t.india.blocks.map(([h, d]) => (
            <div key={h} className="block reveal"><h4>{h}</h4><p>{d}</p></div>
          ))}
        </div>
        <div className="themes">
          {t.india.themes.map(([h, d]) => (
            <div key={h} className="theme reveal">
              <h4>{h}</h4>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Camarote() {
  const t = useT();
  return (
    <section id="camarote" className="section alt">
      <div className="wrap">
        <p className="eyebrow gold">{t.camarote.eyebrow}</p>
        <h2>{t.camarote.h2}</h2>
        <p className="lead-small">{t.camarote.lead}</p>
        <div className="gallery pair">
          <figure className="reveal"><img src="img/camarote-buffet.jpg" alt={t.camarote.alts[0]} loading="lazy" /></figure>
          <figure className="reveal delay"><img src="img/camarote-lounge.jpg" alt={t.camarote.alts[1]} loading="lazy" /></figure>
          <figure className="reveal"><img src="img/camarote-bar.jpg" alt={t.camarote.alts[2]} loading="lazy" /></figure>
          <figure className="reveal delay"><img src="img/camarote-terrace.jpg" alt={t.camarote.alts[3]} loading="lazy" /></figure>
          <figure className="reveal"><img src="img/camarote-beauty.jpg" alt={t.camarote.alts[4]} loading="lazy" /></figure>
          <figure className="reveal delay"><img src="img/camarote-empty.jpg" alt={t.camarote.alts[5]} loading="lazy" /></figure>
        </div>
        <div className="features">
          {t.camarote.groups.map(([k, list]) => (
            <div key={k} className="feature reveal">
              <h4>{k}</h4>
              <ul>{list.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          ))}
        </div>
        <p className="note">{t.camarote.note}</p>
      </div>
    </section>
  );
}

function GuestKit() {
  const t = useT();
  const imgs: [string, string][] = [
    ["img/abada-collection.jpg", "kit-wide"],
    ["img/abada-couple.jpg", "delay"],
    ["img/abada-camarote-look.jpg", "delay2"],
    ["img/abada-camarote-group.jpg", ""],
    ["img/brindes-kit.jpg", "delay"],
    ["img/brindes-detail.jpg", "delay2"],
  ];
  return (
    <section id="kit" className="section">
      <div className="wrap">
        <p className="eyebrow gold">{t.kit.eyebrow}</p>
        <h2>{t.kit.h2}</h2>
        <p className="lead-small kit-lead">{t.kit.skipLead}</p>
        <p className="lead-small kit-lead">{t.kit.lead}</p>
        <p className="lead-small">{t.kit.costume}</p>
        <div className="kit-grid">
          {imgs.map(([src, cls], i) => (
            <figure key={src} className={`reveal ${cls}`}>
              <img src={src} alt={t.kit.caps[i]} loading="lazy" />
              <figcaption>{t.kit.caps[i]}</figcaption>
            </figure>
          ))}
        </div>
        <p className="note">{t.kit.note}</p>
      </div>
    </section>
  );
}

function LoungeBrand() {
  const t = useT();
  return (
    <section id="lounge" className="section lounge-section">
      <div className="wrap">
        <p className="eyebrow gold">{t.lounge.eyebrow}</p>
        <h2>{t.lounge.h2}</h2>
        <p className="lead-small">{t.lounge.p0}</p>
        <p className="lead-small">{t.lounge.p1}</p>
        <p className="lead-small">{t.lounge.p2}</p>
        <figure className="lounge-example reveal">
          <img src="img/lounge-reference.jpg" alt={t.lounge.alt} loading="lazy" />
          <figcaption>{t.lounge.cap}</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Partners() {
  const t = useT();
  return (
    <section id="partners" className="section">
      <div className="wrap">
        <p className="eyebrow gold">{t.partners.eyebrow}</p>
        <h2>{t.partners.h2}</h2>
        <p className="lead-small">{t.partners.skipLead}</p>
        <p className="lead-small">{t.partners.lead}</p>
        <div className="partner-grid">
          <div className="partner-card reveal">
            <img src="img/logo-camara-h.png" alt={t.organisers.camara} />
          </div>
          <div className="partner-card reveal delay">
            <img src="img/logo-tcs.png" alt="TCS, Tata Consultancy Services" />
          </div>
          <div className="partner-card partner-dark reveal delay2">
            <img src="img/logo-frances.png" alt={t.organisers.frances} />
          </div>
          <div className="partner-card reveal delay3">
            <span className="partner-tag">{t.partners.transporterTag}</span>
            <img src="img/logo-transporter.png" alt={t.partners.transporterAlt} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Finale() {
  const t = useT();
  return (
    <section className="section alt finale">
      <div className="wrap">
        <p className="eyebrow gold">{t.finale.eyebrow}</p>
        <h2>{t.finale.h2}</h2>
        <p className="lead-small">{t.finale.lead}</p>
        <div className="finale-grid">
          <figure className="reveal"><img src="img/carnival-powder.jpg" alt={t.finale.alt1} loading="lazy" /></figure>
          <figure className="reveal delay"><img src="img/carnival-aerial.jpg" alt={t.finale.alt2} loading="lazy" /></figure>
        </div>
        <p className="note">{t.finale.note}</p>
      </div>
    </section>
  );
}

function Invitation() {
  const t = useT();
  return (
    <section className="invite" aria-label="Invitation">
      <img className="invite-bg" src="img/carnival-flags.jpg" alt="" aria-hidden="true" loading="lazy" />
      <div className="invite-shade" aria-hidden="true" />
      <div className="wrap invite-inner">
        <p className="eyebrow gold">{t.invite.eyebrow}</p>
        <h2 className="invite-title">{t.invite.title1} <em>{t.invite.title2}</em></h2>
        <p className="invite-pt">{t.invite.text}</p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#quotas">{t.invite.cta1}</a>
          <a className="btn btn-ghost" href="#travel">{t.invite.cta2}</a>
        </div>
      </div>
    </section>
  );
}

function Legacy() {
  const t = useT();
  return (
    <section id="legacy" className="section legacy">
      <div className="wrap legacy-grid">
        <figure className="legacy-cover reveal">
          <img src="img/livro-comemorativo.jpg" alt={t.legacy.alt} loading="lazy" />
          <span className="legacy-seal">
            <img src="img/logo-80-icon.png" alt="" aria-hidden="true" />
            <span>{t.legacy.seal}</span>
          </span>
        </figure>
        <div className="legacy-text reveal delay">
          <p className="eyebrow gold">{t.legacy.eyebrow}</p>
          <h2>{t.legacy.h2}</h2>
          <p className="legacy-sub">{t.legacy.subtitle}</p>
          <p>{t.legacy.p1}</p>
          <p>{t.legacy.p2}</p>
          <p>{t.legacy.p3}</p>
          <h4 className="legacy-h4">{t.legacy.sponsorTitle}</h4>
          <p>{t.legacy.sponsorLead}</p>
          <p className="muted">{t.legacy.recognitionLead}</p>
          <ul className="legacy-list">
            {t.legacy.recognition.map((x) => <li key={x}>{x}</li>)}
          </ul>
          <p className="legacy-tagline"><strong>{t.legacy.tagline}</strong><br />{t.legacy.taglineText}</p>
          <a className="btn btn-primary" href="#quotas">{t.legacy.cta}</a>
        </div>
      </div>
    </section>
  );
}

function Quotas() {
  const t = useT();
  const [sponsor, setSponsor] = useState(true);
  const [selected, setSelected] = useState(2);
  const q = QUOTAS.find((x) => x.id === selected) ?? QUOTAS[1];
  const perGuest = sponsor ? PRICE_FULL : PRICE_CAMAROTE;
  const total = quotaPrice(q, sponsor);
  const label = (n: number) => `${t.quotas.quota} ${n}`;

  return (
    <section id="quotas" className="section alt">
      <div className="wrap">
        <p className="eyebrow gold">{t.quotas.eyebrow}</p>
        <h2>{t.quotas.h2}</h2>

        <div className="toggle" role="tablist">
          <button className={sponsor ? "on" : ""} onClick={() => setSponsor(true)}>{t.quotas.tabSponsor}</button>
          <button className={!sponsor ? "on" : ""} onClick={() => setSponsor(false)}>{t.quotas.tabCamarote}</button>
        </div>
        <p className="muted small">
          {sponsor ? t.quotas.descSponsor(usd2(PRICE_FULL)) : t.quotas.descCamarote(usd2(PRICE_CAMAROTE))}
        </p>

        <div className="calc">
          <div className="calc-pick">
            {QUOTAS.map((x) => (
              <button key={x.id} className={`chip ${x.id === selected ? "on" : ""}`} onClick={() => setSelected(x.id)}>
                {label(quotaInvites(x))}
                <small>{quotaInvites(x)} {t.quotas.guests}</small>
              </button>
            ))}
          </div>
          <div className="calc-out">
            <p className="eyebrow">{label(quotaInvites(q))}</p>
            <div className="big-price">{usd(total)}</div>
            <p className="muted">{quotaInvites(q)} {t.quotas.invitations} × {usd2(perGuest)} {t.quotas.perInv}</p>
            <table className="days">
              <thead><tr>{DAYS.map((d) => <th key={d}>{d}</th>)}</tr></thead>
              <tbody><tr>{q.days.map((n, i) => <td key={i}>{n}</td>)}</tr></tbody>
            </table>
            <p className="small muted">{t.quotas.perNight}</p>
          </div>
        </div>

        <div className="table-wrap">
          <table className="quota-table">
            <thead>
              <tr>
                {t.quotas.cols.map((c) => <th key={c}>{c}</th>)}
                <th>{sponsor ? t.quotas.colSponsor : t.quotas.colCamarote}</th>
              </tr>
            </thead>
            <tbody>
              {QUOTAS.map((x) => (
                <tr key={x.id} className={x.id === selected ? "row-on" : ""} onClick={() => setSelected(x.id)}>
                  <td>{label(quotaInvites(x))}</td>
                  {x.days.map((n, i) => <td key={i}>{n}</td>)}
                  <td><strong>{quotaInvites(x)}</strong></td>
                  <td><strong>{usd(quotaPrice(x, sponsor))}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="small muted">{t.quotas.note}</p>
      </div>
    </section>
  );
}

function Sponsorship() {
  const t = useT();
  const pct = (v: number) => ((v / TOTAL_PROJECT) * 100).toFixed(1) + "%";
  const p2 = t.sponsorship.p2
    .replace("{school}", usd(SCHOOL_SHARE)).replace("{schoolPct}", pct(SCHOOL_SHARE))
    .replace("{cam}", usd(CAMAROTE_SHARE)).replace("{camPct}", pct(CAMAROTE_SHARE))
    .replace("{exp}", usd(EXPERIENCE_SHARE)).replace("{expPct}", pct(EXPERIENCE_SHARE));
  return (
    <section id="sponsor" className="section">
      <div className="wrap">
        <p className="eyebrow gold">{t.sponsorship.eyebrow}</p>
        <h2>{t.sponsorship.h2}</h2>
        <div className="two-col">
          <p>{t.sponsorship.p1}</p>
          <p>{p2}</p>
        </div>
        <div className="family reveal">
          <p className="eyebrow gold">{t.sponsorship.whereEyebrow}</p>
          <p><strong>{t.sponsorship.where}</strong> {t.sponsorship.whereText}</p>
        </div>
        <div className="family reveal">
          <p>{t.sponsorship.budget}</p>
        </div>
        <div className="benefits">
          {t.sponsorship.items.map(([h, p], i) => (
            <div key={h} className={`benefit reveal ${i === 1 ? "delay" : i === 2 ? "delay2" : ""}`}><h4>{h}</h4><p>{p}</p></div>
          ))}
        </div>
        <div className="benefits">
          {t.sponsorship.benefits.map(([h, p], i) => (
            <div key={h} className={`benefit reveal ${i === 1 ? "delay" : i === 2 ? "delay2" : ""}`}><h4>{h}</h4><p>{p}</p></div>
          ))}
        </div>
        <div className="incentive reveal">
          <h4>{t.sponsorship.incentiveTitle}</h4>
          <p>{t.sponsorship.incentive}</p>
        </div>
      </div>
    </section>
  );
}

function Activations() {
  const t = useT();
  return (
    <section className="section alt tight">
      <div className="wrap">
        <p className="eyebrow gold">{t.activations.eyebrow}</p>
        <h2>{t.activations.h2}</h2>
        <h4 className="sub">{t.activations.guest}</h4>
        <div className="chips-static">
          {t.activations.guestItems.map((x) => <span key={x} className="tag">{x}</span>)}
        </div>
        <h4 className="sub">{t.activations.camarote}</h4>
        <div className="chips-static">
          {t.activations.camaroteItems.map((x) => <span key={x} className="tag">{x}</span>)}
        </div>
        <h4 className="sub">{t.activations.parade}</h4>
        <div className="chips-static">
          {t.activations.paradeItems.map((x) => <span key={x} className="tag">{x}</span>)}
        </div>
        <h4 className="sub">{t.activations.moreTitle}</h4>
        <div className="chips-static">
          {t.activations.more.map((x) => <span key={x} className="tag">{x}</span>)}
        </div>
        <p className="note">{t.activations.note}</p>
      </div>
    </section>
  );
}

function Media() {
  const t = useT();
  return (
    <section id="media" className="section">
      <div className="wrap">
        <p className="eyebrow gold">{t.media.eyebrow}</p>
        <h2>{t.media.h2}</h2>
        <div className="media-grid">
          {t.media.links.map(([src, title, cta], i) => (
            <a key={MEDIA_URLS[i]} className={`media reveal ${i % 2 ? "delay" : ""}`} href={MEDIA_URLS[i]} target="_blank" rel="noreferrer">
              <span className="media-src">{src}</span>
              <strong>{title}</strong>
              <span className="media-go">{cta} →</span>
            </a>
          ))}
        </div>
        <p className="small muted">{t.media.note}</p>
      </div>
    </section>
  );
}

function Travel() {
  const t = useT();
  return (
    <section id="travel" className="section alt">
      <div className="wrap">
        <p className="eyebrow gold">{t.travel.eyebrow}</p>
        <h2>{t.travel.h2}</h2>
        <p className="lead-small">{t.travel.lead}</p>

        <h3 className="sub">{t.travel.stay}</h3>
        <div className="cards">
          {t.travel.hotels.map(([h, d]) => (
            <div key={h} className="card reveal"><h4>{h}</h4><p>{d}</p><span className="tag">{t.travel.rates}</span></div>
          ))}
        </div>

        <h3 className="sub">{t.travel.services}</h3>
        <div className="cards four">
          {t.travel.serviceItems.map(([h, d]) => (
            <div key={h} className="card reveal"><h4>{h}</h4><p>{d}</p></div>
          ))}
        </div>

        <h3 className="sub">{t.travel.triangle}</h3>
        <div className="triangle-grid">
          {t.travel.triCards.map((c, i) => (
            <div key={c.h} className={`triangle-card reveal ${i ? "delay" : ""}`}>
              <span className="tri-tag">{c.tag}</span>
              <h4>{c.h}</h4>
              <p>{c.p}</p>
              <a className="btn btn-ghost" href="#contact">{t.travel.learn}</a>
            </div>
          ))}
        </div>

        <div className="calendar reveal">
          <h4>{t.travel.calEyebrow}</h4>
          <p><strong>{t.travel.calLive}</strong> {t.travel.calLiveText}</p>
          <p>{t.travel.calText}</p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const t = useT();
  return (
    <section id="contact" className="section cta">
      <div className="wrap">
        <p className="eyebrow gold">{t.contact.eyebrow}</p>
        <h2>{t.contact.h2}</h2>
        <ol className="steps">
          {t.contact.steps.map((s) => <li key={s}>{s}</li>)}
        </ol>
        <div className="cta-row">
          {CONTACT_EMAIL ? (
            <a className="btn btn-primary" href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t.brand)}`}>{t.contact.request}</a>
          ) : (
            <p className="muted">{t.contact.contactAt} {SITE}.</p>
          )}
          <button className="btn btn-ghost" onClick={() => window.print()}>{t.contact.print}</button>
        </div>
      </div>
    </section>
  );
}
