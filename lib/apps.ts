export const playDeveloperUrl = "https://play.google.com/store/apps/dev?id=5939793804547402778";

export const playApps = [
  {
    slug: "vault",
    packageName: "com.vaultapp.savelinks",
    name: "Vault — Save Links for Later",
    shortName: "Vault",
    category: "Productivity",
    description: "Save links from any app and find them again with tags, collections, and full-text search.",
  },
  {
    slug: "bassride",
    packageName: "com.velcuri.bassride",
    name: "BassRide – Car Equalizer",
    shortName: "BassRide",
    category: "Music & audio",
    description: "Tune your car audio and automatically load a saved EQ profile when you connect over Bluetooth.",
  },
  {
    slug: "8k-iptv-player",
    packageName: "store.strong8k.iptv",
    name: "8K IPTV Player: M3U & Xtream",
    shortName: "8K IPTV",
    category: "Video player",
    description: "Bring your own playlists and browse live TV, movies, series, and programme guides in one player.",
  },
  {
    slug: "cricket-tournament-manager",
    packageName: "com.velcuri.cricketapp",
    name: "Cricket Tournament Manager",
    shortName: "Cricket",
    category: "Sports",
    description: "Run local tournaments, score matches ball by ball, and share scorecards with your team.",
  },
  {
    slug: "cobalt-vpn",
    packageName: "com.velcuri.cobaltvpn",
    name: "Cobalt VPN",
    shortName: "Cobalt",
    category: "Privacy & security",
    description: "Connect to Cloudflare WARP in one tap with an Android VPN built on WireGuard.",
  },
  {
    slug: "pirlo-tv",
    packageName: "com.pirlotv.app",
    name: "Pirlo TV",
    shortName: "Pirlo TV",
    category: "Sports & entertainment",
    description: "Find upcoming sports events, browse channels, and keep your favorite matches close.",
  },
] as const;

export const upcomingApps = [
  {
    slug: "tarjeta-roja",
    name: "Tarjeta Roja",
    category: "Football fixtures",
    description: "See who plays today. Browse football fixtures by date or competition and check kickoff times and available scores.",
  },
  {
    slug: "roja-directa",
    name: "Roja Directa",
    category: "Football scores",
    description: "Follow your favorite teams and check their fixtures, results, and league standings.",
  },
  {
    slug: "futbol-libre",
    name: "Fútbol Libre",
    category: "Football match centre",
    description: "Open a match to see the kickoff time, score, and status, plus venue and referee details when available.",
  },
] as const;

export const apps = [...playApps, ...upcomingApps] as const;
export type VelcuriApp = (typeof apps)[number];

export function playAppUrl(packageName: string) {
  return `https://play.google.com/store/apps/details?id=${packageName}`;
}
