export default function Ornament({compact=false}:{compact?:boolean}){
  return (
    <div className={compact?'ornament ornament--compact ornament--floral':'ornament ornament--floral'} aria-hidden="true">
      <span />
      <svg viewBox="0 0 180 34" role="img">
        <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M6 18c20 0 28-9 39-14M174 18c-20 0-28-9-39-14"/>
          <path d="M43 7c-7 2-12 7-14 13M137 7c7 2 12 7 14 13"/>
        </g>
        <g fill="currentColor">
          <ellipse cx="32" cy="13" rx="3.2" ry="7" transform="rotate(-52 32 13)"/>
          <ellipse cx="42" cy="7" rx="3.2" ry="7" transform="rotate(-28 42 7)"/>
          <ellipse cx="148" cy="13" rx="3.2" ry="7" transform="rotate(52 148 13)"/>
          <ellipse cx="138" cy="7" rx="3.2" ry="7" transform="rotate(28 138 7)"/>
        </g>
        <g transform="translate(90 17)">
          <rect x="-8" y="-8" width="16" height="16" transform="rotate(45)" fill="#7A2E3A"/>
          <circle cx="0" cy="-10" r="5" fill="#D69035"/>
          <circle cx="9" cy="-3" r="5" fill="#D69035"/>
          <circle cx="6" cy="8" r="5" fill="#D69035"/>
          <circle cx="-6" cy="8" r="5" fill="#D69035"/>
          <circle cx="-9" cy="-3" r="5" fill="#D69035"/>
          <circle r="3.2" fill="#6F3425"/>
        </g>
      </svg>
      <span />
    </div>
  );
}
