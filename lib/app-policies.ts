import type { VelcuriApp } from "./apps";

export const supportEmail = "albinchristo04@gmail.com";
export const policyUpdated = "November 20, 2026";

type AppPolicy = {
  privacy: string;
  deletion: string;
  terms: string;
  privacyUrl?: string;
  termsUrl?: string;
  deletionPortal?: string;
  deletionContact?: string;
};

const footballAppPolicy: AppPolicy = {
  privacy: "These apps work without an account and keep favorites, preferences, and cached schedules on your device. They request fixtures online and may send your device’s configured region code to show available broadcaster links. If you enable match alerts, DeportesX uses a Firebase Cloud Messaging token to deliver them. Broadcaster links open external sites with their own privacy policies.",
  deletion: "Turn off match alerts in the app’s Settings while connected to the internet to remove its notification registration. You can also email DeportesX to request removal. To remove favorites, preferences, and cached schedules from your device, clear the app’s storage in Android settings.",
  terms: "Football schedules, scores, and other match details depend on third-party coverage and can change. Broadcaster links open external sites with their own terms. These are independent football information apps.",
  privacyUrl: "https://admin.deportesx.sbs/privacy-policy#english",
  deletionContact: "admin@deportesx.sbs",
};

export const appPolicies: Record<VelcuriApp["slug"], AppPolicy> = {
  vault: {
    privacy: "Vault stores saved links, notes, tags, collections, and preferences on your device. If you sign in, Firebase Authentication handles your sign-in and Firebase stores your synced library and related data so you can restore it across devices. Requests for link previews may contact the source site. Firebase can process usage and crash information. Where ads are served, ad providers may process device identifiers, ad interactions, and diagnostics. Google Play handles purchases.",
    deletion: "To delete your Vault account and its synced library, open Profile, select Delete Account, and confirm. If you cannot sign in or no longer have the app, use the email link below. For a library stored only on your device, clear Vault’s storage in Android settings. Delete exported files separately.",
    terms: "Save and share links you have permission to use. The websites you save may change or remove their content. Keep a separate copy of anything you need to retain.",
  },
  bassride: {
    privacy: "BassRide uses Bluetooth device information to match connected devices with saved equalizer presets. It stores presets, device associations, and preferences on your device, and uses Android’s audio-effect controls to apply them. Google Play handles purchases and provides purchase status to the app for the Pro unlock.",
    deletion: "Delete presets and Bluetooth associations in BassRide, or clear BassRide’s storage in Android settings to remove local presets and settings. Remove any exported presets or copies in your Android backup separately.",
    terms: "Set up BassRide while parked and follow local road-safety laws. Audio effects depend on Android, your device, and the connected audio system. Google Play handles the optional one-time Pro upgrade.",
  },
  "8k-iptv-player": {
    privacy: "8K IPTV Player processes device and user identifiers, your email if you register, provider credentials, playlists, connected devices, favorites, and playback history to run the player and sync your library. Provider credentials are stored encrypted. Your device connects directly to your playlist provider and connection security depends on the provider’s URL. Resend delivers verification and recovery emails, Google Play handles purchases, and advertising and diagnostic services may process approximate location, device identifiers, app interactions, and crash logs for advertising, diagnostics, or fraud prevention.",
    deletion: "Sign in to the 8K IPTV Player account portal, open Delete account under My account, enter your password, and confirm deletion. This removes the account and its connected devices, playlists, favorites, and playback history. If you use guest mode or cannot sign in, email support so we can locate the associated data. Include your account email if you have one.",
    terms: "Bring an M3U playlist or Xtream account you’re authorized to use. The player and its optional Lifetime Premium purchase provide playback features. Channel access, stream quality, and programme guides depend on your provider, and purchases are handled through Google Play.",
    privacyUrl: "https://app.8kstrong.store/privacy",
    termsUrl: "https://app.8kstrong.store/terms",
    deletionPortal: "https://app.8kstrong.store/delete-account",
  },
  "cricket-tournament-manager": {
    privacy: "The app uses the tournament, team, player, and scoring information you enter to create fixtures, standings, and scorecards. Scoring works offline. If you share a scorecard or use a sync feature, the content you choose to share or sync leaves your device. The Play listing marks the app as containing ads. Where ads are served, providers may process device information and ad interactions to deliver and measure ads.",
    deletion: "Remove the relevant match, team, or tournament records in the app where available, or clear the app’s storage in Android settings to remove local records. Delete any scorecards you exported or shared from the destination where you sent them. Email support for help with records you synced.",
    terms: "Enter and share player information only when authorized. You are responsible for checking scores, standings, and fixtures before relying on them as official results.",
  },
  "cobalt-vpn": {
    privacy: "Cobalt VPN registers the device with Cloudflare WARP and stores registration information on the device. When connected, your traffic goes through Cloudflare over a WireGuard tunnel. Cobalt VPN doesn’t log your browsing activity. Firebase may process app usage and crash information, and Google AdMob may process device or advertising identifiers and diagnostics. Cloudflare applies its own privacy policy to traffic and registration information it handles.",
    deletion: "Disconnect the VPN and use Clear Registration in Cobalt VPN settings to remove the saved device registration. You can also clear the app’s storage in Android settings. Email support for help with information held by Velcuri Labs. Cloudflare manages information it holds under its own privacy policy.",
    terms: "Use Cobalt VPN lawfully and in accordance with Cloudflare’s application terms. Connection speed and availability can vary with the network, device, and provider.",
  },
  "tarjeta-roja": footballAppPolicy,
  "roja-directa": footballAppPolicy,
  "futbol-libre": footballAppPolicy,
  "pirlo-tv": {
    privacy: "Pirlo TV uses your language preferences and favorites to show schedules and channels. Schedule and stream providers receive standard connection information, such as your IP address, when your device requests their content. The Play listing marks the app as containing ads. Where ads are served, providers may process device information and ad interactions to deliver and measure ads.",
    deletion: "Remove favorites in Pirlo TV or clear the app’s storage in Android settings to remove favorites and preferences stored on your device. For data held by a stream provider, use that provider’s privacy controls. Email support for help with a Velcuri Labs data request.",
    terms: "Use event listings and streams only as permitted by law and by the relevant provider. Providers control stream availability, regional access, and schedule information.",
  },
};
