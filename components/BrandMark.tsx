export default function BrandMark({compact=false}:{compact?:boolean}){
  return (
    <svg className={compact?'brand-mark brand-mark--compact':'brand-mark'} viewBox="0 0 120 120" aria-hidden="true">
      <g className="brand-mark-leaves" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M27 84C17 72 15 56 20 42C24 30 32 22 43 17"/>
        <path d="M93 84C103 72 105 56 100 42C96 30 88 22 77 17"/>
        <path d="M24 69l-10-7M23 57l-9-10M28 45l-3-12M35 33l4-12"/>
        <path d="M96 69l10-7M97 57l9-10M92 45l3-12M85 33l-4-12"/>
      </g>
      <g className="brand-mark-leaf-fill" fill="currentColor">
        <ellipse cx="18" cy="64" rx="4" ry="9" transform="rotate(-50 18 64)"/>
        <ellipse cx="17" cy="50" rx="4" ry="9" transform="rotate(-35 17 50)"/>
        <ellipse cx="24" cy="36" rx="4" ry="9" transform="rotate(-18 24 36)"/>
        <ellipse cx="35" cy="25" rx="4" ry="9" transform="rotate(22 35 25)"/>
        <ellipse cx="102" cy="64" rx="4" ry="9" transform="rotate(50 102 64)"/>
        <ellipse cx="103" cy="50" rx="4" ry="9" transform="rotate(35 103 50)"/>
        <ellipse cx="96" cy="36" rx="4" ry="9" transform="rotate(18 96 36)"/>
        <ellipse cx="85" cy="25" rx="4" ry="9" transform="rotate(-22 85 25)"/>
      </g>
      <g className="brand-mark-flowers">
        <g transform="translate(60 18)">
          <circle r="10" fill="#D69035"/><circle r="4" fill="#6F3425"/>
          <g fill="#E8A94D"><circle cx="0" cy="-11" r="5"/><circle cx="10" cy="-4" r="5"/><circle cx="6" cy="8" r="5"/><circle cx="-6" cy="8" r="5"/><circle cx="-10" cy="-4" r="5"/></g>
        </g>
        <g transform="translate(33 75) scale(.72)">
          <circle r="9" fill="#C96F3A"/><circle r="3.5" fill="#6F3425"/>
          <g fill="#E59A48"><circle cx="0" cy="-10" r="4.5"/><circle cx="9" cy="-3" r="4.5"/><circle cx="6" cy="7" r="4.5"/><circle cx="-6" cy="7" r="4.5"/><circle cx="-9" cy="-3" r="4.5"/></g>
        </g>
        <g transform="translate(87 75) scale(.72)">
          <circle r="9" fill="#C96F3A"/><circle r="3.5" fill="#6F3425"/>
          <g fill="#E59A48"><circle cx="0" cy="-10" r="4.5"/><circle cx="9" cy="-3" r="4.5"/><circle cx="6" cy="7" r="4.5"/><circle cx="-6" cy="7" r="4.5"/><circle cx="-9" cy="-3" r="4.5"/></g>
        </g>
      </g>
      <g transform="translate(60 60)">
        <rect x="-17" y="-17" width="34" height="34" rx="1" transform="rotate(45)" fill="#7A2E3A"/>
        <path d="M0-16C-4-7-10-4-15 0C-8 1-4 5 0 14C4 5 8 1 15 0C10-4 4-7 0-16Z" fill="#F6F1E7"/>
        <circle r="3.2" fill="#D69035"/>
      </g>
    </svg>
  );
}
