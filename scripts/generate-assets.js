import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

// Helper to create directories
const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

ensureDir('public/images');
ensureDir('public/projects');
ensureDir('public/resume');

// 1. Create a modern SVG favicon
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="50%" stop-color="#8b5cf6"/>
      <stop offset="100%" stop-color="#06b6d4"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#090a0f"/>
  <rect x="2" y="2" width="96" height="96" rx="22" fill="none" stroke="url(#g)" stroke-width="3" opacity="0.8"/>
  <path d="M30 68 L48 32 L54 32 L72 68 L62 68 L51 45 L40 68 Z" fill="url(#g)"/>
  <circle cx="51" cy="56" r="4" fill="#22d3ee"/>
</svg>`;
fs.writeFileSync('public/favicon.svg', faviconSvg);

// Minimal valid PNG generator (uncompressed/deflated RGBA image)
function createPng(width, height, getPixelRgba) {
  const rowSize = 1 + width * 4;
  const rawData = Buffer.alloc(rowSize * height);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0; // Filter byte: None
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = getPixelRgba(x, y, width, height);
      const pxOffset = rowOffset + 1 + x * 4;
      rawData[pxOffset] = r;
      rawData[pxOffset + 1] = g;
      rawData[pxOffset + 2] = b;
      rawData[pxOffset + 3] = a;
    }
  }

  const deflated = zlib.deflateSync(rawData);

  // PNG Header
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR chunk
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // Bit depth: 8
  ihdr[9] = 6; // Color type: RGBA
  ihdr[10] = 0; // Compression
  ihdr[11] = 0; // Filter
  ihdr[12] = 0; // Interlace
  const ihdrChunk = makeChunk('IHDR', ihdr);

  // IDAT chunk
  const idatChunk = makeChunk('IDAT', deflated);

  // IEND chunk
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

function crc32(buf) {
  let table = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[n] = c;
  }
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = table[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const typeBuf = Buffer.from(type);
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);

  const toCrc = Buffer.concat([typeBuf, data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(toCrc), 0);

  return Buffer.concat([len, typeBuf, data, crc]);
}

// 2. Generate placeholder profile PNG: high-tech dark background with glowing initials & avatar silhouette
console.log('Generating subham-profile.png...');
const profilePng = createPng(500, 600, (x, y, w, h) => {
  const nx = (x - w / 2) / (w / 2);
  const ny = (y - h / 2) / (h / 2);
  const dist = Math.sqrt(nx * nx + ny * ny);

  // Deep tech gradient background
  let r = Math.floor(15 + 10 * Math.sin(nx * 2));
  let g = Math.floor(18 + 15 * Math.cos(ny * 2));
  let b = Math.floor(35 + 40 * Math.cos(nx * ny));

  // Subtle circular border glow
  const rDist = Math.sqrt(nx * nx + (ny + 0.1) * (ny + 0.1));
  if (rDist > 0.75 && rDist < 0.8) {
    r = 59; g = 130; b = 246; // Electric blue accent
  } else if (rDist > 0.8 && rDist < 0.82) {
    r = 139; g = 92; b = 246; // Violet accent
  }

  // Stylish stylized head/shoulder silhouette
  const headDist = Math.sqrt(nx * nx * 1.8 + (ny + 0.25) * (ny + 0.25) * 1.8);
  const shoulderDist = Math.sqrt(nx * nx * 0.9 + (ny - 0.55) * (ny - 0.55) * 3);
  if (headDist < 0.38 || (shoulderDist < 0.65 && ny > 0.1)) {
    r = Math.floor(30 + 30 * nx);
    g = Math.floor(40 + 35 * ny);
    b = Math.floor(70 + 40 * nx);
  }

  return [r, g, b, 255];
});
fs.writeFileSync('public/images/subham-profile.png', profilePng);

// 3. Generate ConvertX project preview
console.log('Generating convertx-preview.png...');
const convertxPng = createPng(640, 360, (x, y, w, h) => {
  const nx = x / w;
  const ny = y / h;
  // Gradient dark blue / cyan theme
  let r = Math.floor(12 + nx * 20);
  let g = Math.floor(18 + ny * 35);
  let b = Math.floor(45 + nx * 80);

  // Accent bar on top
  if (y < 6) {
    return [6, 182, 212, 255]; // Cyan
  }

  // Tech grid lines
  if (x % 40 === 0 || y % 40 === 0) {
    r = Math.min(255, r + 15);
    g = Math.min(255, g + 20);
    b = Math.min(255, b + 30);
  }

  return [r, g, b, 255];
});
fs.writeFileSync('public/projects/convertx-preview.png', convertxPng);

// 4. Generate Resume-Checker-AI project preview
console.log('Generating resume-checker-preview.png...');
const resumeCheckerPng = createPng(640, 360, (x, y, w, h) => {
  const nx = x / w;
  const ny = y / h;
  // Gradient dark purple / violet theme
  let r = Math.floor(18 + nx * 50);
  let g = Math.floor(14 + ny * 20);
  let b = Math.floor(45 + (1 - ny) * 70);

  // Accent bar on top
  if (y < 6) {
    return [139, 92, 246, 255]; // Violet
  }

  // Tech grid lines
  if (x % 40 === 0 || y % 40 === 0) {
    r = Math.min(255, r + 25);
    g = Math.min(255, g + 15);
    b = Math.min(255, b + 35);
  }

  return [r, g, b, 255];
});
fs.writeFileSync('public/projects/resume-checker-preview.png', resumeCheckerPng);

// 5. Generate a genuine minimal valid PDF for Resume Download
console.log('Generating Subham_Kumar_Keshari_Resume.pdf...');
const resumePdfContent = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 398 >>
stream
BT
/F1 22 Tf
50 720 Td
(Subham Kumar Keshari) Tj
/F1 12 Tf
0 -26 Td
(Aspiring Data Analyst | Full-Stack Developer | Data Science Enthusiast) Tj
0 -20 Td
(Email: kumar246subham@gmail.com | GitHub: github.com/kumar246subham-afk) Tj
0 -36 Td
(Education: B.Tech Computer Engineering - Marwadi University, Rajkot, Gujarat) Tj
0 -30 Td
(Key Skills: Python, SQL, Power BI, React, Node.js, Express, MongoDB, MySQL) Tj
0 -30 Td
(Featured Projects: ConvertX, Resume-Checker-AI) Tj
0 -30 Td
([Note: Please replace this placeholder with your official updated PDF resume]) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000224 00000 n 
0000000673 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
742
%%EOF`;

fs.writeFileSync('public/resume/Subham_Kumar_Keshari_Resume.pdf', resumePdfContent);
console.log('All static assets created successfully!');
