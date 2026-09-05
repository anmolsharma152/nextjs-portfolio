<div align="center">

# Anmol Sharma — Portfolio Website

**A clean, interactive single-page personal portfolio built with Next.js 14, Three.js, and Tailwind CSS.**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-0.185-000000?style=flat-square&logo=three.js)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Live Site](https://img.shields.io/badge/Live_Site-anmolsharma152.vercel.app-brightgreen?style=flat-square&logo=vercel)](https://anmolsharma152.vercel.app)

[Features & Components](#-features--components) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Project Structure](#-project-structure)

</div>

---

## ✦ Overview

This repository powers my live personal portfolio at [anmolsharma152.vercel.app](https://anmolsharma152.vercel.app). It is built as a single-page responsive application featuring an interactive 3D Three.js wireframe background, a clean porcelain-light default design system with dark mode support, dynamic project integration via the GitHub API, and server-side validated contact delivery through Resend.

---

## 🧩 Features & Components

### 1. Interactive Three.js Background (`Hero.tsx`)
- Renders an interactive 3D sapphire wireframe sphere using Three.js.
- Continuous slow rotation with dynamic mouse parallax tracking across the hero canvas.
- Fallback CSS background for reduced-motion preferences or low-power devices.

### 2. Hero & 3D Tilt Card (`3DCard.tsx`)
- Animated typewriter role headline.
- Interactive tilted card component that responds to mouse cursor angle and distance with smooth Framer Motion spring physics.

### 3. Live GitHub Projects Showcase (`Projects.tsx`)
- Connects directly to the GitHub REST API (`api.github.com/users/anmolsharma152/repos`) to fetch live repository metadata.
- Automatically extracts star counts, fork counts, primary languages, and descriptions, with robust local fallback data if rate limits are reached.

### 4. Contact Form & Email Delivery (`Contact.tsx` & `/api/contact`)
- Client-side form management with `react-hook-form` and `zod` schema validation.
- Hidden bot honeypot field to block automated spam without CAPTCHA friction.
- Serverless API route (`src/app/api/contact/route.ts`) that dispatches transactional notification emails via the [Resend](https://resend.com) API.
- Feedback notifications powered by Radix UI Toast primitives.

### 5. Porcelain Design System & Theme Context (`ThemeContext.tsx`)
- Editorial porcelain-light theme by default with high-contrast typography.
- Smooth dark mode toggle with persistent state saved in `localStorage`.

### 6. Full SEO & Social Sharing Suite
- Dynamic OpenGraph preview card generated programmatically using `@vercel/og` (`src/app/opengraph-image.tsx`).
- Automated `sitemap.ts` and `robots.ts` endpoints.
- Structured JSON-LD `Person` metadata schema for search indexing.

---

## 🛠 Tech Stack

| Layer | Tools |
|---|---|
| **Framework** | Next.js 14 (App Router, Server & Client Components), React 18 |
| **Language** | TypeScript 5.8 |
| **3D & Canvas** | Three.js (`three`), `@types/three` |
| **Styling** | Tailwind CSS 3.4, `tailwindcss-animate`, Radix UI primitives |
| **Animations** | Framer Motion |
| **Forms & Validation** | React Hook Form, Zod |
| **Email Delivery** | Resend API |
| **Icons** | Lucide React |
| **Analytics** | Vercel Analytics |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm, pnpm, or yarn
- Resend API key *(optional, required only for local email delivery testing)*

### Installation

```bash
# 1. Clone repository
git clone https://github.com/anmolsharma152/nextjs-portfolio.git
cd nextjs-portfolio

# 2. Install dependencies
npm install

# 3. Setup environment variables (optional)
cp .env.local.example .env.local

# 4. Start local development server
npm run dev
```

Open [`http://localhost:3000`](http://localhost:3000) in your browser.

### Environment Configuration

To enable contact form email delivery locally, add your credentials to `.env.local`:

```env
RESEND_API_KEY=re_your_api_key_here
NEXT_PUBLIC_RECIPIENT_EMAIL=your_email@example.com
```

*Note: The project builds cleanly without these variables; the contact form returns a 503 response at runtime if Resend is unconfigured.*

### Scripts

```bash
npm run dev      # Launch local dev server
npm run build    # Build optimized production bundle
npm run start    # Start production server locally
npm run lint     # Run ESLint with automated fixes
npm run format   # Format codebase with Prettier
```

---

## 📂 Project Structure

```
nextjs-portfolio/
├── docs/                      # Project status and handoff
│   └── STATUS.md              # Current project state
├── src/
│   ├── app/
│   │   ├── api/contact/       # Resend contact form route handler
│   │   ├── globals.css        # Theme CSS custom properties
│   │   ├── layout.tsx         # Root layout, theme provider, metadata
│   │   ├── opengraph-image.tsx# Dynamic SVG/Canvas OG image generator
│   │   ├── page.tsx           # Single-page layout (Hero, About, Projects, Contact)
│   │   ├── robots.ts          # Search engine crawler directives
│   │   └── sitemap.ts         # Dynamic XML sitemap generator
│   ├── components/
│   │   ├── ui/                # Toast notifications (Radix primitives)
│   │   ├── 3DCard.tsx         # Interactive tilted card
│   │   ├── About.tsx          # Personal background and education
│   │   ├── Contact.tsx        # Resend-backed contact form
│   │   ├── Hero.tsx           # Three.js 3D canvas and headline
│   │   ├── Navigation.tsx     # Section navigation & theme toggle
│   │   ├── Projects.tsx       # GitHub API integration & repo cards
│   │   └── Resume.tsx         # Experience timeline & skills badges
│   ├── context/
│   │   └── ThemeContext.tsx   # Theme state provider
│   └── lib/
│       └── validations.ts     # Zod contact submission schemas
├── tailwind.config.js
└── package.json
```

---

## 📄 License

MIT © [Anmol Sharma](https://github.com/anmolsharma152)
