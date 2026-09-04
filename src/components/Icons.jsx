/**
 * Stroke icons on a shared 24×24 grid, drawn with `currentColor` so they
 * inherit text colour, hover states and the active theme for free.
 *
 * `aria-hidden` is the default because nearly every use sits beside a text
 * label. A caller that needs a labelled icon passes
 * `aria-hidden={undefined} role="img" aria-label="…"`.
 */

const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

function Icon({ size = 20, strokeWidth = 1.75, children, ...rest }) {
  return (
    <svg
      {...base}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

/* ---------- Navigation ---------- */

export function HomeIcon(props) {
  return (
    <Icon {...props}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9.5 21v-6h5v6" />
    </Icon>
  );
}

export function UserIcon(props) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
    </Icon>
  );
}

export function LayersIcon(props) {
  return (
    <Icon {...props}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </Icon>
  );
}

export function BriefcaseIcon(props) {
  return (
    <Icon {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </Icon>
  );
}

export function MailIcon(props) {
  return (
    <Icon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </Icon>
  );
}

/* ---------- Services ---------- */

export function CodeIcon(props) {
  return (
    <Icon {...props}>
      <path d="m9 17-5-5 5-5" />
      <path d="m15 7 5 5-5 5" />
    </Icon>
  );
}

export function PaletteIcon(props) {
  return (
    <Icon {...props}>
      <path d="M12 3a9 9 0 0 0 0 18c1.1 0 2-.9 2-2 0-1.4-1-1.7-1-3 0-.8.7-1.5 1.5-1.5H17a4 4 0 0 0 4-4c0-4.1-4-7.5-9-7.5Z" />
      <circle cx="8" cy="11" r="1" />
      <circle cx="12" cy="8" r="1" />
      <circle cx="16" cy="10" r="1" />
    </Icon>
  );
}

export function DeviceIcon(props) {
  return (
    <Icon {...props}>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M11 18.5h2" />
    </Icon>
  );
}

export function UsersIcon(props) {
  return (
    <Icon {...props}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20v-.5A5.5 5.5 0 0 1 8 14h2a5.5 5.5 0 0 1 5.5 5.5v.5" />
      <path d="M16 5.2a3.5 3.5 0 0 1 0 6.6" />
      <path d="M18 14.4a5.5 5.5 0 0 1 3.5 5.1v.5" />
    </Icon>
  );
}

/* ---------- Portfolio ---------- */

export function ShoppingBagIcon(props) {
  return (
    <Icon {...props}>
      <path d="M5 7h14l-1 13.5a1 1 0 0 1-1 .9H7a1 1 0 0 1-1-.9L5 7Z" />
      <path d="M9 10V6.5a3 3 0 0 1 6 0V10" />
    </Icon>
  );
}

export function ClipboardIcon(props) {
  return (
    <Icon {...props}>
      <path d="M9 4H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="2.5" width="6" height="4" rx="1.2" />
      <path d="M9 12h6M9 16h4" />
    </Icon>
  );
}

export function CloudIcon(props) {
  return (
    <Icon {...props}>
      <path d="M7.5 19a4.5 4.5 0 0 1-.4-9 6 6 0 0 1 11.5 1.6A3.9 3.9 0 0 1 17.5 19h-10Z" />
    </Icon>
  );
}

export function ChartIcon(props) {
  return (
    <Icon {...props}>
      <path d="M4 20h16" />
      <path d="M7 20v-6M12 20V7M17 20v-9" />
    </Icon>
  );
}

/* ---------- Contact ---------- */

export function MapPinIcon(props) {
  return (
    <Icon {...props}>
      <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </Icon>
  );
}

export function PhoneIcon(props) {
  return (
    <Icon {...props}>
      <path d="M6.5 3h3l1.5 4.5-2 1.4a12 12 0 0 0 6.1 6.1l1.4-2L21 14.5v3a2.5 2.5 0 0 1-2.7 2.5A16.5 16.5 0 0 1 4 5.7 2.5 2.5 0 0 1 6.5 3Z" />
    </Icon>
  );
}

/* ---------- Theme ---------- */

export function SunIcon(props) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </Icon>
  );
}

export function MoonIcon(props) {
  return (
    <Icon {...props}>
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
    </Icon>
  );
}

/* ---------- UI affordances ---------- */

export function MenuIcon(props) {
  return (
    <Icon {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Icon>
  );
}

export function CloseIcon(props) {
  return (
    <Icon {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </Icon>
  );
}

export function ArrowRightIcon(props) {
  return (
    <Icon {...props}>
      <path d="M4 12h16" />
      <path d="m14 6 6 6-6 6" />
    </Icon>
  );
}

export function CheckIcon(props) {
  return (
    <Icon {...props}>
      <path d="m4.5 12.5 5 5 10-11" />
    </Icon>
  );
}

export function AlertCircleIcon(props) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5v5" />
      <path d="M12 16.2v.3" />
    </Icon>
  );
}

export function ZapIcon(props) {
  return (
    <Icon {...props}>
      <path d="M13 2 4.5 13H11l-1 9 8.5-11H12l1-9Z" />
    </Icon>
  );
}
