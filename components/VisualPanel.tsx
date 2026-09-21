export default function VisualPanel({ label, title, variant = 'paper' }: { label: string; title: string; variant?: 'paper' | 'wood' | 'night' | 'sea' }) {
  return (
    <div className={`visual-panel visual-panel--${variant}`} aria-hidden="true">
      <div className="visual-frame">
        <span className="visual-label">{label}</span>
        <div className="visual-emblem"><i /><b>✦</b><i /></div>
        <p>{title}</p>
      </div>
    </div>
  );
}
