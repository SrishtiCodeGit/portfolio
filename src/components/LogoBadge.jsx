import './LogoBadge.css';

function initials(name) {
  return name
    .replace(/\(.*?\)/g, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

// Deterministic hue from the name so each company gets a stable, distinct tint.
function hueFrom(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) % 360;
  return hash;
}

export default function LogoBadge({ name, src, size = 48, shape = 'circle' }) {
  const hue = hueFrom(name);
  const style = {
    width: size,
    height: size,
    fontSize: size * 0.36,
    '--badge-hue': hue,
  };

  return (
    <div
      className={`logo-badge logo-badge--${shape} ${src ? 'logo-badge--has-image' : ''}`}
      style={style}
      title={name}
    >
      {src ? (
        <img src={src} alt={`${name} logo`} className="logo-badge__img" />
      ) : (
        <span className="logo-badge__initials">{initials(name)}</span>
      )}
    </div>
  );
}
