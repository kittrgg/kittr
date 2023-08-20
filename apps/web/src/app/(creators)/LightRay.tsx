export function LightRay({ className }: { className: string }) {
  return (
    <div className={className}>
      <svg className="absolute w-full h-full" fill="none" viewBox="0 0 100 164">
        <g filter="url(#filter0_f_4003_349)" opacity="0.5">
          <rect fill="#57534E" height="100" rx="18" width="36" x="32" y="32" />
        </g>
        <g filter="url(#filter1_f_4003_349)" opacity="0.5">
          <rect fill="#52525B" height="100" rx="18" width="36" x="32" y="32" />
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="164"
            id="filter0_f_4003_349"
            width="100"
            x="0"
            y="0"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_4003_349"
              stdDeviation="16"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="140"
            id="filter1_f_4003_349"
            width="76"
            x="12"
            y="12"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_4003_349"
              stdDeviation="10"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
