export default function Ornament({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`ornament ${compact ? 'ornament--compact' : ''}`} aria-hidden="true">
      <span />
      <svg viewBox="0 0 110 24" role="img">
        <path d="M3 12h26l8-8 8 8 10-10 10 10 8-8 8 8h26" />
        <path d="M37 20l8-8 10 10 10-10 8 8" />
      </svg>
      <span />
    </div>
  );
}
