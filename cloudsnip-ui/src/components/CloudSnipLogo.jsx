export default function CloudSnipLogo({ className = '' }) {
  const mergedClassName = ['cloudsnip-logo', className].filter(Boolean).join(' ')

  return (
    <svg
      className={mergedClassName}
      viewBox="0 0 48 48"
      role="img"
      aria-label="CloudSnip logo"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="cs-bg" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0b1620" />
          <stop offset="0.54" stopColor="#06736b" />
          <stop offset="1" stopColor="#2bb8a8" />
        </linearGradient>
        <linearGradient
          id="cs-cut"
          x1="18"
          y1="17"
          x2="30"
          y2="31"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ffbf6f" />
          <stop offset="1" stopColor="#ff8f38" />
        </linearGradient>
      </defs>

      <rect x="2.5" y="2.5" width="43" height="43" rx="14" fill="url(#cs-bg)" />
      <path
        d="M14 30.4h20.2c2.9 0 5.3-2.3 5.3-5.2c0-2.6-1.9-4.8-4.5-5.2c-0.7-4.5-4.6-8-9.4-8c-4.6 0-8.5 3.3-9.3 7.7h-0.3c-3.3 0-6 2.7-6 6.1c0 2.6 1.7 4.6 4 5.4"
        fill="#e9fbff"
        opacity="0.96"
      />
      <path
        d="M18.4 31.7l4.1-6.2m0.5 6.2l4.1-6.2"
        stroke="url(#cs-cut)"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <circle cx="34.6" cy="14.1" r="2.2" fill="#ff9f43" />
      <path d="M33.1 9.4l0.9 1.8l1.8 0.9l-1.8 0.9l-0.9 1.8l-0.9-1.8l-1.8-0.9l1.8-0.9z" fill="#9eece1" />
    </svg>
  )
}