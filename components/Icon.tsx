export interface IconProps {
  name: "arrow-right" | "arrow-left" | "arrow-up-right" | "close" | "grid" | "person" | "mail" | "cart" | "external-link" | "chevron-right" | "plus" | "star" | "double-arrow" | "check";
  className?: string;
  size?: number;
}

const icons = {
  "arrow-right": (
    <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  ),
  "arrow-left": (
    <path d="M19 12H5m6-6-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
  ),
  "arrow-up-right": (
    <path d="M7 17 17 7m0 0H8m9 0v9" strokeLinecap="round" strokeLinejoin="round" />
  ),
  "close": (
    <>
      <path d="M18 6 6 18" strokeLinecap="round" />
      <path d="m6 6 12 12" strokeLinecap="round" />
    </>
  ),
  "grid": (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </>
  ),
  "person": (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    </>
  ),
  "mail": (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </>
  ),
  "cart": (
    <>
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" />
    </>
  ),
  "external-link": (
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h5v5m-11 5L21 3" strokeLinecap="round" strokeLinejoin="round" />
  ),
  "chevron-right": (
    <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
  ),
  "plus": (
    <path d="M12 5v14m-7-7h14" strokeLinecap="round" />
  ),
  "star": (
    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinejoin="round" />
  ),
  "double-arrow": (
    <path d="M5 12h14m-4-4 4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
  ),
  "check": (
    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  ),
};

export function Icon({ name, className = "", size = 20 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}
