import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const scale = 2;
const toFeet = (value: number) => value * scale;

const plot = {
  width: 320,
  height: 220,
};

const svgPadding = 80;
const svgWidth = toFeet(plot.width) + svgPadding * 2;
const svgHeight = toFeet(plot.height) + svgPadding * 2;

const offsetX = svgPadding;
const offsetY = svgPadding;

const stageMain = {
  x: (plot.width - 160) / 2,
  y: 22,
  width: 160,
  height: 26,
};

const stageStem = {
  x: stageMain.x + (stageMain.width - 60) / 2,
  y: stageMain.y + stageMain.height,
  width: 60,
  height: 34,
};

const vipArea = {
  x: stageMain.x,
  y: stageStem.y + stageStem.height + 6,
  width: stageMain.width,
  height: 18,
};

const generalArea = {
  x: stageMain.x - 34,
  y: vipArea.y + vipArea.height + 8,
  width: stageMain.width + 68,
  height: 76,
};

const herbalGarden = {
  x: (plot.width - 170) / 2,
  y: generalArea.y + generalArea.height + 12,
  width: 170,
  height: 46,
};

const stallWidth = 18;
const stallHeight = 12;
const stallGapX = 4;
const stallGapY = 4;

const createGrid = (
  rows: number,
  cols: number,
  originX: number,
  originY: number,
  gapX: number = stallGapX,
  gapY: number = stallGapY,
) => {
  const grid: { x: number; y: number }[] = [];
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      grid.push({
        x: originX + col * (stallWidth + gapX),
        y: originY + row * (stallHeight + gapY),
      });
    }
  }
  return grid;
};

const leftStalls = createGrid(5, 3, 16, 34);
const rightClusterOriginX =
  plot.width -
  16 -
  (stallWidth + stallGapX) * 3 +
  stallGapX;
const rightStalls = createGrid(5, 3, rightClusterOriginX, 34);

const bottomCols = 10;
const bottomRows = 3;
const totalBottomWidth = bottomCols * stallWidth + stallGapX * (bottomCols - 1);
const bottomOriginX = (plot.width - totalBottomWidth) / 2;
const bottomOriginY =
  plot.height -
  22 -
  bottomRows * stallHeight -
  stallGapY * (bottomRows - 1);
const bottomStalls = createGrid(
  bottomRows,
  bottomCols,
  bottomOriginX,
  bottomOriginY,
);

const stalls = [...leftStalls, ...rightStalls, ...bottomStalls];

const toX = (value: number) => offsetX + toFeet(value);
const toY = (value: number) => offsetY + toFeet(value);

const legendItems = [
  { label: "Stage (T-Structure)", color: "#8b1a1a" },
  { label: "VIP Seating", color: "#3d2c86" },
  { label: "General Seating", color: "#6fc3d5" },
  { label: "Commercial Stalls", color: "#f0b46a" },
  { label: "Walkways / Circulation", color: "#d9d2c5" },
  { label: "Herbal Garden", color: "#5c9b6b" },
  { label: "Meeting Hall", color: "#5a6f90" },
  { label: "Gates / Access", color: "#e4572e" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Rairangpur Layout – Event Site Plan</title>
        <meta
          name="description"
          content="Color-coded presentation plan for the Rairangpur event fairground."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.content}>
          <header className={styles.header}>
            <h1>Rairangpur Layout – Event Site Plan</h1>
            <p>
              Formal presentation layout for a 60-stall fairground with
              performance, seating, and landscaped amenities.
            </p>
          </header>
          <section className={styles.planCard}>
            <div className={styles.planWrapper}>
              <svg
                className={styles.svgBoard}
                viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                role="img"
                aria-labelledby="planTitle"
              >
                <title id="planTitle">
                  Rairangpur Layout – Event Site Plan
                </title>
                <defs>
                  <pattern
                    id="herbal-texture"
                    width="8"
                    height="8"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect width="8" height="8" fill="#5c9b6b" />
                    <circle cx="2" cy="2" r="1" fill="#6fb97a" />
                    <circle cx="6" cy="4" r="1" fill="#6fb97a" />
                    <circle cx="3" cy="6" r="1" fill="#6fb97a" />
                  </pattern>
                </defs>

                <rect
                  x="0"
                  y="0"
                  width={svgWidth}
                  height={svgHeight}
                  fill="#f6f4ef"
                />
                <rect
                  x={offsetX - 24}
                  y={offsetY - 24}
                  width={toFeet(plot.width) + 48}
                  height={toFeet(plot.height) + 48}
                  fill="#ffffff"
                  stroke="#d8d0c0"
                  strokeWidth="2"
                  rx="12"
                />
                <rect
                  x={offsetX}
                  y={offsetY}
                  width={toFeet(plot.width)}
                  height={toFeet(plot.height)}
                  fill="#efeae0"
                  stroke="#33363f"
                  strokeWidth="4"
                  rx="8"
                />

                <rect
                  x={toX(12)}
                  y={toY(12)}
                  width={toFeet(plot.width - 24)}
                  height={toFeet(plot.height - 24)}
                  fill="#d9d2c5"
                  rx="6"
                />
                <rect
                  x={toX(160 - 20)}
                  y={toY(stageStem.y + stageStem.height + 8)}
                  width={toFeet(40)}
                  height={toFeet(generalArea.height + 16)}
                  fill="#cec5b3"
                />
                <rect
                  x={toX(plot.width - 32)}
                  y={toY(100)}
                  width={toFeet(20)}
                  height={toFeet(70)}
                  fill="#cec5b3"
                />

                <rect
                  x={toX(plot.width - 66)}
                  y={toY(18)}
                  width={toFeet(50)}
                  height={toFeet(30)}
                  fill="#5a6f90"
                  stroke="#30415d"
                  strokeWidth="2"
                  rx="6"
                />
                <text
                  x={toX(plot.width - 41)}
                  y={toY(34)}
                  textAnchor="middle"
                  className={styles.svgLabel}
                >
                  Meeting Hall
                </text>

                <rect
                  x={toX(stageMain.x)}
                  y={toY(stageMain.y)}
                  width={toFeet(stageMain.width)}
                  height={toFeet(stageMain.height)}
                  fill="#8b1a1a"
                  rx="6"
                />
                <rect
                  x={toX(stageStem.x)}
                  y={toY(stageStem.y)}
                  width={toFeet(stageStem.width)}
                  height={toFeet(stageStem.height)}
                  fill="#8b1a1a"
                  rx="6"
                />
                <text
                  x={toX(stageMain.x + stageMain.width / 2)}
                  y={toY(stageMain.y + stageMain.height / 2)}
                  dy="-4"
                  textAnchor="middle"
                  className={styles.svgLabel}
                  fill="#ffffff"
                >
                  Main Stage
                </text>

                <rect
                  x={toX(vipArea.x)}
                  y={toY(vipArea.y)}
                  width={toFeet(vipArea.width)}
                  height={toFeet(vipArea.height)}
                  fill="#3d2c86"
                  rx="4"
                />
                <text
                  x={toX(vipArea.x + vipArea.width / 2)}
                  y={toY(vipArea.y + vipArea.height / 2)}
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className={styles.svgLabel}
                  fill="#ffffff"
                >
                  VIP Seating
                </text>

                <rect
                  x={toX(generalArea.x)}
                  y={toY(generalArea.y)}
                  width={toFeet((generalArea.width - 28) / 2)}
                  height={toFeet(generalArea.height)}
                  fill="#6fc3d5"
                  rx="4"
                />
                <rect
                  x={toX(generalArea.x + (generalArea.width + 28) / 2)}
                  y={toY(generalArea.y)}
                  width={toFeet((generalArea.width - 28) / 2)}
                  height={toFeet(generalArea.height)}
                  fill="#6fc3d5"
                  rx="4"
                />
                <text
                  x={toX(generalArea.x + generalArea.width / 2)}
                  y={toY(generalArea.y + generalArea.height / 2)}
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className={styles.svgLabel}
                  fill="#1d4d58"
                >
                  General Audience Seating
                </text>

                <rect
                  x={toX(herbalGarden.x)}
                  y={toY(herbalGarden.y)}
                  width={toFeet(herbalGarden.width)}
                  height={toFeet(herbalGarden.height)}
                  fill="url(#herbal-texture)"
                  stroke="#3c6f47"
                  strokeWidth="2"
                  rx="6"
                />
                <text
                  x={toX(herbalGarden.x + herbalGarden.width / 2)}
                  y={toY(herbalGarden.y + herbalGarden.height / 2)}
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className={styles.svgLabel}
                  fill="#ffffff"
                >
                  Herbal Garden
                </text>

                {stalls.map((stall, index) => (
                  <g key={`stall-${index}`}>
                    <rect
                      x={toX(stall.x)}
                      y={toY(stall.y)}
                      width={toFeet(stallWidth)}
                      height={toFeet(stallHeight)}
                      fill="#f0b46a"
                      stroke="#c5802e"
                      strokeWidth="1.5"
                      rx="3"
                    />
                  </g>
                ))}
                <text
                  x={toX(plot.width / 2)}
                  y={toY(bottomOriginY - 6)}
                  textAnchor="middle"
                  className={styles.svgLabel}
                >
                  60 Commercial Stalls
                </text>

                <rect
                  x={toX(plot.width) - 4}
                  y={toY(120)}
                  width="12"
                  height={toFeet(20)}
                  fill="#e4572e"
                />
                <text
                  x={toX(plot.width) + 16}
                  y={toY(130)}
                  className={styles.svgLabel}
                  textAnchor="start"
                >
                  Main Entry Gate (20&apos;)
                </text>
                <line
                  x1={toX(plot.width)}
                  y1={toY(120)}
                  x2={toX(plot.width)}
                  y2={toY(140)}
                  stroke="#ffffff"
                  strokeWidth="2"
                />

                <rect
                  x={toX(40)}
                  y={toY(0) - 6}
                  width={toFeet(18)}
                  height="12"
                  fill="#e4572e"
                />
                <text
                  x={toX(49)}
                  y={toY(0) - 12}
                  className={styles.svgLabel}
                  textAnchor="middle"
                >
                  Emergency Gate
                </text>

                <text
                  x={toX(plot.width / 2)}
                  y={offsetY - 32}
                  className={styles.svgLabel}
                  textAnchor="middle"
                >
                  EAST
                </text>
                <text
                  x={toX(plot.width / 2)}
                  y={offsetY + toFeet(plot.height) + 44}
                  className={styles.svgLabel}
                  textAnchor="middle"
                >
                  WEST
                </text>
                <text
                  x={offsetX - 40}
                  y={toY(plot.height / 2)}
                  className={styles.svgLabel}
                  textAnchor="middle"
                  transform={`rotate(-90 ${offsetX - 40} ${toY(plot.height / 2)})`}
                >
                  NORTH
                </text>
                <text
                  x={offsetX + toFeet(plot.width) + 40}
                  y={toY(plot.height / 2)}
                  className={styles.svgLabel}
                  textAnchor="middle"
                  transform={`rotate(90 ${offsetX + toFeet(plot.width) + 40} ${toY(plot.height / 2)})`}
                >
                  SOUTH
                </text>

                <g transform={`translate(${offsetX - 60}, ${offsetY - 60})`}>
                  <circle cx="0" cy="0" r="32" fill="#ffffff" stroke="#8b1a1a" />
                  <line x1="0" y1="0" x2="0" y2="-24" stroke="#8b1a1a" strokeWidth="3" />
                  <polygon points="0,-28 -6,-16 6,-16" fill="#8b1a1a" />
                  <text x="0" y="-36" textAnchor="middle" className={styles.svgLabel}>
                    E
                  </text>
                  <text x="0" y="46" textAnchor="middle" className={styles.svgLabel}>
                    W
                  </text>
                  <text x="-42" y="4" textAnchor="middle" className={styles.svgLabel}>
                    N
                  </text>
                  <text x="42" y="4" textAnchor="middle" className={styles.svgLabel}>
                    S
                  </text>
                </g>

                <g transform={`translate(${offsetX - 20}, ${offsetY + toFeet(plot.height) + 60})`}>
                  <rect width="0" height="0" fill="transparent" />
                  <text x="0" y="-12" className={styles.svgLabel}>
                    Scale 1&quot; = 20&apos; (1ft : 2px)
                  </text>
                  <line x1="0" y1="0" x2={toFeet(100)} y2="0" stroke="#33363f" strokeWidth="2" />
                  <line x1="0" y1="-6" x2="0" y2="6" stroke="#33363f" strokeWidth="2" />
                  <line x1={toFeet(50)} y1="-6" x2={toFeet(50)} y2="6" stroke="#33363f" strokeWidth="2" />
                  <line x1={toFeet(100)} y1="-6" x2={toFeet(100)} y2="6" stroke="#33363f" strokeWidth="2" />
                  <text x="0" y="20" className={styles.svgLabel}>
                    0&apos;
                  </text>
                  <text x={toFeet(50)} y="20" className={styles.svgLabel} textAnchor="middle">
                    50&apos;
                  </text>
                  <text x={toFeet(100)} y="20" className={styles.svgLabel} textAnchor="end">
                    100&apos;
                  </text>
                </g>

                <g transform={`translate(${offsetX + toFeet(plot.width) - 10}, ${offsetY + toFeet(plot.height) - 10})`}>
                  <rect
                    x="-220"
                    y="-86"
                    width="210"
                    height="78"
                    fill="#ffffff"
                    stroke="#8b1a1a"
                    strokeWidth="2"
                    rx="6"
                  />
                  <text
                    x="-115"
                    y="-64"
                    textAnchor="middle"
                    className={styles.svgTitleBlock}
                  >
                    Rairangpur Layout
                  </text>
                  <text
                    x="-115"
                    y="-44"
                    textAnchor="middle"
                    className={styles.svgTitleBlock}
                  >
                    Event / Fairground Site Plan
                  </text>
                  <text
                    x="-115"
                    y="-22"
                    textAnchor="middle"
                    className={styles.svgTitleBlock}
                  >
                    Plot: 320&apos; (N–S) × 220&apos; (E–W)
                  </text>
                  <text
                    x="-115"
                    y="-4"
                    textAnchor="middle"
                    className={styles.svgTitleBlock}
                  >
                    Total Area: 70,400 sq ft
                  </text>
                </g>
              </svg>
            </div>
            <aside className={styles.legend}>
              <h2>Legend</h2>
              <ul>
                {legendItems.map((item) => (
                  <li key={item.label}>
                    <span
                      className={styles.legendSwatch}
                      style={{ backgroundColor: item.color }}
                    />
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </section>
        </main>
      </div>
    </>
  );
}
