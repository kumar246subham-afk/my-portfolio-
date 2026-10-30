# Subham Kumar Keshari — Premium 3D Developer Portfolio

[![React](https://img.shields.io/badge/React-18.3-61dafb?style=flat&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-3D_Graphics-black?style=flat&logo=three.js)](https://threejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> A high-performance, dark-mode 3D personal portfolio designed and engineered for **Subham Kumar Keshari** — Aspiring Data Analyst, Full-Stack Developer, and Data Science Enthusiast at Marwadi University.

---

## 🌟 Visual Identity & Key Highlights

- **Aesthetic Direction**: Deep charcoal / cosmic black canvas (`#090a0f`), electric blue (`#3b82f6`), violet (`#8b5cf6`), and neon cyan (`#06b6d4`) accents.
- **Tasteful 3D Experience**: Custom Three.js interactive scene with nested geometric polyhedra, wireframe cages, floating particles, dynamic mouse lerp, and WebGL / reduced-motion fallback.
- **Glassmorphism & Polish**: Ultra-refined frosted cards, soft glows, and subtle borders without visual clutter.
- **Animated Role Typing**: Dynamic typewriter presentation cycling through *Data Analyst*, *Full-Stack Developer*, and *Data Science Enthusiast*.
- **Only Two Verified Featured Projects**:
  1. **ConvertX** — Online file conversion platform ([Live on Render](https://convertx-client.onrender.com)).
  2. **Resume-Checker-AI** — AI-powered ATS analyzer and resume builder ([Live on Vercel](https://resume-checker-ai-blush.vercel.app)).
- **Interactive Features**: Custom desktop-only glowing cursor, 3D card tilt effect, sticky glass navigation with scroll-spy, back-to-top circular progress indicator, and modal resume downloader.
- **Contact & Reachout**: Direct `mailto` fallback form with copy-to-clipboard functionality and verified social links.

---

## 📂 Project Architecture

```
portfolio/
├── public/
│   ├── favicon.svg                          # Custom SVG geometric brand icon
│   ├── images/
│   │   └── subham-profile.png               # Profile photograph (replace with your real photo)
│   ├── projects/
│   │   ├── convertx-preview.png             # ConvertX preview graphic
│   │   └── resume-checker-preview.png       # Resume-Checker-AI preview graphic
│   └── resume/
│       └── Subham_Kumar_Keshari_Resume.pdf  # Starter PDF resume (replace with latest resume)
├── src/
│   ├── components/
│   │   ├── About.jsx                        # Education, pillars & split bio
│   │   ├── BackToTop.jsx                    # Floating progress circular scroll button
│   │   ├── Contact.jsx                      # Mailto form & email copy utility
│   │   ├── CustomCursor.jsx                 # Desktop glowing cursor trail
│   │   ├── Footer.jsx                       # Dynamic year footer & credits
│   │   ├── Hero.jsx                         # Animated roles, CTAs & profile card
│   │   ├── Hero3DCanvas.jsx                 # Three.js interactive 3D scene
│   │   ├── Navbar.jsx                       # Sticky glass header with mobile drawer
│   │   ├── Projects.jsx                     # 3D tilt cards for ConvertX & Resume-Checker
│   │   ├── ResumeModal.jsx                  # Modal for downloading/previewing resume
│   │   └── Skills.jsx                       # 5 categorized technical skill cards
│   ├── data/
│   │   └── portfolioData.js                 # Central single source of truth
│   ├── App.jsx                              # Root application layout
│   ├── index.css                            # Tailwind directives & typography
│   └── main.jsx                             # React DOM entry point
├── scripts/
│   └── generate-assets.js                   # Generator for static demo assets
├── index.html                               # SEO metadata, OpenGraph & Google Fonts
├── package.json                             # Dependencies & build scripts
├── tailwind.config.js                       # Custom theme & animation keyframes
└── vite.config.js                           # Vite build config with optimized chunk splitting
```

---

## 🚀 Quick Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```
   Build outputs are bundled and minified to the `dist/` directory.

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 📸 Updating Your Profile Photo & Resume

### 1. Profile Photograph
Replace `public/images/subham-profile.png` with your actual professional headshot:
- **Recommended dimensions**: 800 × 960 px (approx. 5:6 or 4:5 aspect ratio).
- **Format**: `.png` or `.jpg`.

### 2. PDF Resume
Replace `public/resume/Subham_Kumar_Keshari_Resume.pdf` with your latest official resume PDF:
- Keep the filename identical (`Subham_Kumar_Keshari_Resume.pdf`) so the download buttons point to it seamlessly.

---

## 🌐 How to Push to GitHub & Deploy on Vercel

### Step 1: Create GitHub Repository
1. Log into your GitHub account: [github.com/kumar246subham-afk](https://github.com/kumar246subham-afk).
2. Click the **`+`** icon in the top right and select **New repository**.
3. Set the Repository name to:
   ```
   Subham-Portfolio
   ```
4. Choose **Public** and leave "Initialize with README" unchecked.
5. Click **Create repository**.

### Step 2: Push Local Code to GitHub
Run the following commands in PowerShell from this folder (`c:\Users\ADMIN\Downloads\portfolio`):

```bash
# Add all files to git tracking
git add .

# Commit with a descriptive message
git commit -m "feat: complete premium 3D personal portfolio for Subham Kumar Keshari"

# Rename default branch to main (if not already)
git branch -M main

# Link your remote GitHub repository
git remote add origin https://github.com/kumar246subham-afk/Subham-Portfolio.git

# Push code to GitHub
git push -u origin main
```

### Step 3: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account (`kumar246subham-afk`).
2. Click **"Add New..."** > **"Project"**.
3. In the list of repositories, find **`Subham-Portfolio`** and click **Import**.
4. Configure Project settings (Vercel automatically detects Vite):
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.
6. In ~30 seconds, your site will be live at a custom URL (e.g. `https://subham-portfolio.vercel.app`).

### Step 4: Automatic CI/CD
Every time you push code updates or commit changes to GitHub, Vercel will automatically build and deploy the new version in real time.

### Step 5: Add Portfolio URL to your GitHub Profile
Open your GitHub profile repository (`kumar246subham-afk/kumar246subham-afk`) and add your new portfolio link to your bio and README header!

---

## 🛠️ Technology Stack Breakdown

| Technology | Purpose |
|---|---|
| **React 18** | Component architecture & declarative state |
| **Vite 5** | Instant HMR development & ultra-fast Rollup bundling |
| **Three.js** | Interactive 3D graphics, particle constellations & lighting |
| **Tailwind CSS 3** | Responsive utility styling, custom themes & fluid layout |
| **Lucide React** | Clean, accessible developer and tech icons |
| **Framer Motion** | Physics-based animations and transitions |

---

## 👤 Author Information

**Subham Kumar Keshari**
- **Education**: B.Tech in Computer Engineering — Marwadi University, Rajkot, Gujarat, India
- **Focus**: Aspiring Data Analyst | Full-Stack Developer | Data Science Enthusiast
- **Email**: [kumar246subham@gmail.com](mailto:kumar246subham@gmail.com)
- **LinkedIn**: [linkedin.com/in/subham-kumar-keshari-28b349321](https://www.linkedin.com/in/subham-kumar-keshari-28b349321/)
- **GitHub**: [github.com/kumar246subham-afk](https://github.com/kumar246subham-afk)

---
*Built with precision and passion for modern web experiences.*
