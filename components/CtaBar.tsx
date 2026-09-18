import { CTA_LINKS } from "@/lib/constants";
import { DriveIcon, InstagramIcon, MailIcon, SoundcloudIcon, YoutubeIcon } from "./icons";

const ICONS: Record<string, React.ReactNode> = {
  drive: <DriveIcon />,
  instagram: <InstagramIcon />,
  soundcloud: <SoundcloudIcon />,
  youtube: <YoutubeIcon />,
  mail: <MailIcon />,
};

export default function CtaBar() {
  return (
    <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-3">
      {CTA_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-panel flex flex-col items-center justify-center gap-1.5 rounded-xl px-2 py-3 text-center text-xs font-medium text-white/90 transition hover:border-brand-purple/60 hover:text-white sm:flex-row sm:justify-start sm:px-4 sm:py-3 sm:text-sm"
        >
          <span className="text-brand-purple">{ICONS[link.icon]}</span>
          <span className="leading-tight">{link.label}</span>
        </a>
      ))}
    </div>
  );
}
