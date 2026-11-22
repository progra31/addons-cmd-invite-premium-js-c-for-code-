// not working on debug.execute
const { stdout } = process;

const COLORS = {
  animation_reset: "\x1b[0m",
  animation_cyan: "\x1b[36m",
  animation_magenta: "\x1b[35m",
  animation_green: "\x1b[32m",
  animation_brightGreen: "\x1b[92m",
  animation_dimGreen: "\x1b[2;32m",
  animation_hideCursor: "\x1b[?25l",
  animation_showCursor: "\x1b[?25h",
  animation_clear: "\x1b[2J\x1b[H"
};

let A = 0;
let B = 0;

const LUMINANCE_CHARS = ".,-~:;=!*#$@";

function renderTorus() {
  const width = stdout.columns || 80;
  const height = (stdout.rows || 24) - 1;

  const buffer = new Array(width * height).fill(" ");
  const zBuffer = new Array(width * height).fill(0);

  const R1 = 1;
  const R2 = 2;
  const K2 = 5;
  const K1 = (width * K2 * 3) / (8 * (R1 + R2)) * 0.6;

  const cosA = Math.cos(A), sinA = Math.sin(A);
  const cosB = Math.cos(B), sinB = Math.sin(B);

  for (let theta = 0; theta < 2 * Math.PI; theta += 0.07) {
    const cosTheta = Math.cos(theta), sinTheta = Math.sin(theta);

    for (let phi = 0; phi < 2 * Math.PI; phi += 0.02) {
      const cosPhi = Math.cos(phi), sinPhi = Math.sin(phi);

      const circleX = R2 + R1 * cosTheta;
      const circleY = R1 * sinTheta;

      const x = circleX * (cosB * cosPhi + sinA * sinB * sinPhi) - circleY * cosA * sinB;
      const y = circleX * (sinB * cosPhi - sinA * cosB * sinPhi) + circleY * cosA * cosB;
      const z = K2 + cosA * circleX * sinPhi + circleY * sinA;
      const ooz = 1 / z; 

      const xp = Math.floor(width / 2 + K1 * ooz * x);
      const yp = Math.floor(height / 2 - (K1 / 2) * ooz * y);

      const L = cosPhi * cosTheta * sinB - cosA * cosTheta * sinPhi -
                sinA * sinTheta + cosB * (cosA * sinTheta - cosTheta * sinA * sinPhi);

      if (L > 0) {
        const idx = xp + yp * width;
        if (xp >= 0 && xp < width && yp >= 0 && yp < height && ooz > zBuffer[idx]) {
          zBuffer[idx] = ooz;
          const luminanceIndex = Math.floor(L * 8);
          const char = LUMINANCE_CHARS[Math.min(luminanceIndex, LUMINANCE_CHARS.length - 1)];
          
          const color = ooz > 0.22 ? COLORS.animation_cyan : COLORS.animation_magenta;
          buffer[idx] = `${color}${char}${COLORS.animation_reset}`;
        }
      }
    }
  }

  let output = "\x1b[H"; 
  for (let i = 0; i < height; i++) {
    output += buffer.slice(i * width, (i + 1) * width).join("") + "\n";
  }
  output += `${COLORS.animation_green} [CTRL+C pour quitter] | Résolution: ${width}x${height}${COLORS.animation_reset}`;

  stdout.write(output);

  A += 0.05;
  B += 0.03;
}

stdout.write(COLORS.animation_clear + COLORS.animation_hideCursor);

const interval = setInterval(renderTorus, 33);

process.on("SIGINT", () => {
  clearInterval(interval);
  stdout.write(COLORS.animation_showCursor + COLORS.animation_reset + COLORS.animation_clear);
  console.log("Animation terminée !");
  process.exit(0);
});
