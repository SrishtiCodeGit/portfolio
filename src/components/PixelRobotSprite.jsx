import './PixelRobot.css';

const ANTENNA = [[3, 0]];

const BODY = [
  [3, 1],
  [2, 2], [3, 2], [4, 2], [5, 2],
  [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3],
  [1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [6, 4],
  [3, 5], [4, 5],
  [0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [6, 6], [7, 6],
  [1, 7], [2, 7], [3, 7], [4, 7], [5, 7], [6, 7],
  [1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8],
  [1, 9], [2, 9], [5, 9], [6, 9],
];

const EYES = [[2, 3], [5, 3]];

export default function PixelRobotSprite() {
  return (
    <>
      {BODY.map(([x, y]) => (
        <rect key={`b-${x}-${y}`} x={x} y={y} width="1" height="1" className="pixel-robot__px pixel-robot__px--body" />
      ))}
      {EYES.map(([x, y]) => (
        <rect key={`e-${x}-${y}`} x={x} y={y} width="1" height="1" className="pixel-robot__px pixel-robot__px--eye" />
      ))}
      {ANTENNA.map(([x, y]) => (
        <rect key={`a-${x}-${y}`} x={x} y={y} width="1" height="1" className="pixel-robot__px pixel-robot__px--antenna" />
      ))}
    </>
  );
}
