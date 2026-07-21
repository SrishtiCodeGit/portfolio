import './ProjectGraphic.css';

function NetworkGraphic() {
  const nodes = [
    [40, 100], [110, 40], [180, 70], [230, 130], [150, 150], [90, 160],
  ];
  const edges = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [1, 4], [4, 2]];
  return (
    <svg viewBox="0 0 260 190" className="pg-svg pg-network">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]} y1={nodes[a][1]}
          x2={nodes[b][0]} y2={nodes[b][1]}
          className="pg-network__edge"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x} cy={y} r={i === 2 ? 9 : 6}
          className="pg-network__node"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </svg>
  );
}

function ClimateGraphic() {
  return (
    <svg viewBox="0 0 260 190" className="pg-svg pg-climate">
      <path
        d="M0,120 C30,60 55,160 85,100 C115,40 140,150 170,90 C200,30 225,130 260,80"
        className="pg-climate__wave pg-climate__wave--back"
      />
      <path
        d="M0,140 C35,150 60,80 95,110 C130,140 155,60 190,95 C215,120 235,90 260,110"
        className="pg-climate__wave pg-climate__wave--front"
      />
      <polyline points="10,150 60,120 110,135 160,80 210,95 250,50" className="pg-climate__trend" />
    </svg>
  );
}

function SocialGraphic() {
  return (
    <svg viewBox="0 0 260 190" className="pg-svg pg-social">
      <circle cx="100" cy="95" r="55" className="pg-social__ring pg-social__ring--a" />
      <circle cx="150" cy="80" r="40" className="pg-social__ring pg-social__ring--b" />
      <circle cx="140" cy="125" r="28" className="pg-social__ring pg-social__ring--c" />
    </svg>
  );
}

function SpeechGraphic() {
  const heights = [22, 40, 60, 85, 55, 70, 35, 90, 50, 30, 65, 45, 25, 55, 38];
  return (
    <svg viewBox="0 0 260 190" className="pg-svg pg-speech">
      {heights.map((h, i) => (
        <rect
          key={i}
          x={10 + i * 16}
          y={95 - h / 2}
          width="8"
          height={h}
          rx="4"
          className="pg-speech__bar"
          style={{ animationDelay: `${i * 0.08}s` }}
        />
      ))}
    </svg>
  );
}

const GRAPHICS = {
  network: NetworkGraphic,
  climate: ClimateGraphic,
  social: SocialGraphic,
  speech: SpeechGraphic,
};

export default function ProjectGraphic({ type }) {
  const Graphic = GRAPHICS[type] || NetworkGraphic;
  return (
    <div className="project-graphic">
      <Graphic />
    </div>
  );
}
