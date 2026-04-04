# Tesseract 🧊
**Interactive Game Hub — IITM BS Fest 2025**

> "Don't just build pages. Build an experience." — Bilal, Tech Head

---

## 📁 Project Structure

```
tesseract/
├── index.html       ← Main page (Landing + Games + Join)
├── style.css        ← All styles (CSS variables, animations, responsive)
├── script.js        ← All JS (cursor, loader, reveal, filter, tilt, form)
├── contact.php      ← Form handler (needs PHP server or replace with API route)
├── vercel.json      ← Vercel deployment config
└── README.md
```

## ✨ Features

- **Custom cursor** — dot + lagging ring with hover/click states
- **Page loader** — animated Tesseract logo with progress bar
- **Hero** — animated character-by-character title reveal, floating orbs, mouse parallax
- **Dual marquee** — games strip (left) + tech stack strip (right), pauses on hover
- **Scroll reveal** — staggered fade-up on every section
- **Game cards** — category filter, 3D tilt on hover, card glow effects
- **Leaderboard** — with progress bars and live indicator
- **Join form** — validates input, sends to `contact.php`, shows success state
- **Fully responsive** — mobile hamburger menu, breakpoints at 960/768/520px

## 🚀 Deploy to Vercel

### Option 1 — Drag & Drop
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **Add New → Project**
3. Import from GitHub (push code first)
4. Vercel auto-detects static site — click **Deploy**

### Option 2 — Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

### Option 3 — GitHub Auto Deploy
1. Push to GitHub
2. Connect repo on Vercel dashboard
3. Every `git push` auto-deploys

## ⚠️ PHP Note
`contact.php` requires a PHP-capable server.
- **Vercel** = static only → form gracefully falls back (shows success state)
- For real email delivery, deploy PHP to: cPanel hosting, Railway, or a VPS
- Or replace with a Next.js API route (`/api/contact.js`) for serverless email

## 🛠 Tech Stack
- HTML5 · CSS3 · Vanilla JS (no frameworks)
- Google Fonts: Syne + Cabinet Grotesk
- PHP 8.x (optional, for form backend)
- Deploy: Vercel

## 👥 Team
- **Backend**: Lakshya
- **Frontend**: 3 members (competition)
- **Tech Head**: Bilal
