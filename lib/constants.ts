export const MEMBERS = [
  { key: "arseniy", label: "Arseniy" },
  { key: "kamil", label: "Kamil" },
  { key: "tomek", label: "Tomek" },
  { key: "maciek", label: "Maciek" },
] as const;

export type MemberKey = (typeof MEMBERS)[number]["key"];

export const ROOMS = [
  "Plug&Play Fabryczna",
  "Plug&Play plac Wróblewskiego",
  "Próbówka Robotnicza",
  "Melodyka Fabryczna",
  "Dźwiękówa Tęczowa",
  "Dźwiękówa Browar",
  "Dźwiękówa Bystrzycka",
  "Dźwiękówa Młyn",
  "Dźwiękówa Zaklęte Rewiry",
  "Sound Depot 65B",
];

export const DAYS_PAST = 5;
export const DAYS_FUTURE = 30;

export const POLISH_DAYS = [
  "niedziela",
  "poniedziałek",
  "wtorek",
  "środa",
  "czwartek",
  "piątek",
  "sobota",
];

export const CTA_LINKS = [
  {
    label: "Dysk Google",
    href: "https://drive.google.com/drive/folders/1Z6ga1KKGb-pxhkOJnA6CypGheFd-XPVE",
    icon: "drive",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/nbtc.band/",
    icon: "instagram",
  },
  {
    label: "Soundcloud",
    href: "https://soundcloud.com/nbtc_band",
    icon: "soundcloud",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@nbtc_band",
    icon: "youtube",
  },
  {
    label: "Mail",
    href: "https://mail.google.com/mail/u/0/#inbox/FMfcgzQgMCSlnKDfnXmchJbVRgmwTnnM",
    icon: "mail",
  },
] as const;
