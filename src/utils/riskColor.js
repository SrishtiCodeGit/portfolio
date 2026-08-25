export function riskColor(t) {
  const low = [34, 197, 94];
  const mid = [234, 179, 8];
  const high = [239, 68, 68];
  let a, b, localT;
  if (t < 0.5) {
    a = low; b = mid; localT = t / 0.5;
  } else {
    a = mid; b = high; localT = (t - 0.5) / 0.5;
  }
  const r = Math.round(a[0] + (b[0] - a[0]) * localT);
  const g = Math.round(a[1] + (b[1] - a[1]) * localT);
  const bch = Math.round(a[2] + (b[2] - a[2]) * localT);
  return `rgb(${r}, ${g}, ${bch})`;
}
