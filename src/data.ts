// Source: "PROJETO INDIA NA AVENIDA 2028.xlsx" (Planilha1).
// Edit the cost lines here if the spreadsheet changes; all prices are derived from them.

export const TOTAL_INVITES = 800;

// Cost lines (BRL) from the spreadsheet
export const SCHOOL_SHARE = 7_850_000;          // Escola: parade sponsorship (desfile)
export const EXPERIENCE_SHARE = 2_275_500;      // Experience: travel, taxes, commemorative book, fee
export const CAMAROTE_SHARE = 6_000_000;        // Global Hospitality: private camarote

export const TOTAL_PROJECT = SCHOOL_SHARE + EXPERIENCE_SHARE + CAMAROTE_SHARE; // 16,125,500
export const PRICE_FULL = TOTAL_PROJECT / TOTAL_INVITES;                       // 20,156.875
export const PRICE_SPONSOR = SCHOOL_SHARE / TOTAL_INVITES;                     //  9,812.50
export const PRICE_CAMAROTE = (EXPERIENCE_SHARE + CAMAROTE_SHARE) / TOTAL_INVITES; // 10,344.375

export const DAYS = ["Sun 27 Feb", "Mon 28 Feb", "Tue 29 Feb", "Sat 4 Mar"] as const;

export type Quota = {
  id: number;
  label: string;
  days: [number, number, number, number]; // Sun, Mon, Tue, Sat (order as in spreadsheet: DOM, SEG, TER, SAB)
};

// Quota packages: each package is split equally across the four parade nights.
export const QUOTAS: Quota[] = [
  { id: 1, label: "Quota 24", days: [6, 6, 6, 6] },
  { id: 2, label: "Quota 40", days: [10, 10, 10, 10] },
  { id: 3, label: "Quota 64", days: [16, 16, 16, 16] },
  { id: 4, label: "Quota 80", days: [20, 20, 20, 20] },
];

export function quotaInvites(q: Quota) {
  return q.days.reduce((a, b) => a + b, 0);
}

export function quotaPrice(q: Quota, withSponsorship: boolean) {
  const per = withSponsorship ? PRICE_FULL : PRICE_CAMAROTE;
  return quotaInvites(q) * per;
}

export const brl = (v: number) =>
  "R$ " + v.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

// Reference BRL/USD exchange rate set by the project owner (R$ 5.50 per US$ 1).
export const USD_RATE = 5.5;

export const usd = (brlValue: number) =>
  "US$ " + (brlValue / USD_RATE).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

export const usd2 = (brlValue: number) =>
  "US$ " + (brlValue / USD_RATE).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const brl2 = (v: number) =>
  "R$ " + v.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const CONTACT_EMAIL = ""; // fill in the team's public email before publishing
export const SITE = "indiabrazilchamber.org";
