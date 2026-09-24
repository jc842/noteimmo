export interface SiteConfig {
  name: string;
  siteName: string;
  domain: string;
  url: string;
  siteUrl: string;
  description: string;
  siteDescription: string;
  defaultAuthor: string;
  repo: string;
  i18n: { defaultLocale: string; locales: string[]; prefixDefaultLocale: boolean; };
  theme: { style: string; fontFamily: string; colorScheme: string; };
  matomo: { url: string; siteId: string; containerId: string; };
  revive: { reviveId: string; scriptUrl: string; zones: Record<string, { zoneId: number; format: string }>; };
  legal: { editor: string; address: string; contactEmail: string; hostName: string; hostAddress: string; };
  categories: Array<{ id: string; label: string }>;
}

export const siteConfig: SiteConfig = {
  name: "Note Immo — Observatoire de la Valeur et Indices Immobiliers",
  siteName: "noteimmo.com",
  domain: "noteimmo.com",
  url: "https://noteimmo.com",
  siteUrl: "https://noteimmo.com",
  description: "Analyses de marché, indices de valorisation, décotes notariales et baromètres immobiliers indépendants.",
  siteDescription: "Analyses de marché, indices de valorisation, décotes notariales et baromètres immobiliers indépendants.",
  defaultAuthor: "La Rédaction Note Immo",
  repo: "jc842/noteimmo",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "es"],
    prefixDefaultLocale: false,
  },

  theme: {
    style: "lexington-simplexity",
    fontFamily: "Plus Jakarta Sans, JetBrains Mono, sans-serif",
    colorScheme: "blue",
  },

  matomo: {
    url: "https://analytics.les4h.fr/",
    siteId: "109",
    containerId: "OBWwBLzL",
  },

  revive: {
    reviveId: "ac119b122a644588953c74c4c1daee06",
    scriptUrl: "//ads.les4h.fr/www/delivery/asyncjs.php",
    zones: {
      sidebar: { zoneId: 1, format: "300x250" },
      inContent: { zoneId: 2, format: "728x90" },
      stickyMobile: { zoneId: 3, format: "320x100" },
    },
  },

  legal: {
    editor: "Note Immo Media",
    address: "BP 402, 97165 Pointe-à-Pitre Cedex",
    contactEmail: "contact@noteimmo.com",
    hostName: "Cloudflare Pages",
    hostAddress: "101 Townsend St, San Francisco, CA 94107, USA",
  },

  categories: [
    { id: "marche", label: "Marché & Indices" },
    { id: "juridique", label: "Droit & Notaires" },
    { id: "valorisation", label: "Valorisation & Décotes" },
  ],
};
