<div align="center">

# Anmol Sharma — Portfolio (v1 Archive)

**Executive AI Engineer & Systems Portfolio (Three.js & Porcelain Light Edition)**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-0.185-000000?style=flat-square&logo=three.js)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Deployment](https://img.shields.io/badge/Vercel-Live-brightgreen?style=flat-square&logo=vercel)](https://anmolsharma152.vercel.app)

> **Note**: This repository represents the **v1 production build**, actively deployed at [anmolsharma152.vercel.app](https://anmolsharma152.vercel.app).  
> The next-generation retro-futuristic dark/crimson redesign is maintained in [**`anmolsharma152/portfolio-v2`**](https://github.com/anmolsharma152/portfolio-v2).

</div>

---

## ✦ Overview

The v1 portfolio was engineered to showcase AI engineering capabilities through a clean, executive aesthetic. It pairs a **Porcelain Light Mode** default design system with an interactive **Three.js 3D wireframe sphere**, full SEO and social card automation, server-side validated contact delivery via Resend, and live GitHub API repository integrations.

### Key Features
- **Interactive Three.js Wireframe**: Custom 3D sapphire wireframe geometry with continuous rotation and cursor parallax tracking.
- **Porcelain Light Design System**: Clean editorial light theme with integrated dark mode toggle and CSS custom property theming.
- **Serverless Contact Form**: React Hook Form + Zod client validation, server-side API route handler (`/api/contact`), bot honeypot filtering, and transactional email dispatch via Resend.
- **Dynamic SEO & Social Cards**: Automated `sitemap.xml`, `robots.txt`, dynamic OpenGraph card generation via `@vercel/og` (`opengraph-image.tsx`), and structured JSON-LD `Person` metadata.
- **Live Repository Showcase**: Dynamic GitHub API client fetching production projects (`Disha`, `CodexEngine`, `vad_processor`, `Aura`).

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 14 (App Router, Server Components), React 18, TypeScript |
| **3D & Canvas** | Three.js (`three`), `@types/three` |
| **Styling** | Tailwind CSS 3.4, `tailwindcss-animate`, Radix UI primitives |
| **Animation** | Framer Motion |
| **Forms & Delivery** | React Hook Form, Zod, Resend API |
| **Icons** | Lucide React |
| **Analytics** | Vercel Analytics |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm, pnpm, or yarn
- Resend API key (optional, required for contact form dispatch)

### Setup & Installation

```bash
# 1. Clone repository
git clone https://github.com/anmolsharma152/nextjs-portfolio.git
cd nextjs-portfolio

# 2. Install dependencies
npm install

# 3. Configure environment variables (optional)
cp .env.local.example .env.local

# 4. Start local development server
npm run dev
```

The application will be available at [`http://localhost:3000`](http://localhost:3000).

### Environment Configuration

```env
RESEND_API_KEY=re_your_api_key_here
NEXT_PUBLIC_RECIPIENT_EMAIL=your_email@example.com
```

*Note: The project builds cleanly without these variables; the contact route returns HTTP 503 at runtime if Resend credentials are not set.*

### Scripts

```bash
npm run dev      # Launch Next.js dev server
npm run build    # Compile production bundle
npm run start    # Serve production build locally
npm run lint     # Run ESLint with automated fixes
npm run format   # Format codebase with Prettier
```

---

## 📂 Project Structure

```
nextjs-portfolio/
├── docs/                      # Historical specs and status records
│   ├── STATUS.md              # Status handoff
│   └── setup.md               # Setup reference
├── src/
│   ├── app/
│   │   ├── api/contact/       # Resend contact form API endpoint
│   │   ├── globals.css        # Theme CSS custom properties
│   │   ├── layout.tsx         # Root layout, theme provider, navigation
│   │   ├── opengraph-image.tsx# Dynamic SVG/Canvas OG image generator
│   │   ├── page.tsx           # Main single-page scroll view
│   │   └── sitemap.ts         # Automated sitemap generator
│   ├── components/
│   │   ├── 3DCard.tsx         # Interactive tilted card
│   │   ├── About.tsx          # Background & education
│   │   ├── Contact.tsx        # Resend-backed contact form
│   │   ├── Hero.tsx           # Three.js canvas & typewriter headline
│   │   ├── Navigation.tsx     # Theme toggle & anchor navigation
│   │   └── Projects.tsx       # GitHub API integration & repo cards
│   ├── context/
│   │   └── ThemeContext.tsx   # Light/dark theme state provider
│   └── lib/
│       └── validations.ts     # Zod schemas for contact submissions
└── tailwind.config.js
```

---

## 📄 License

MIT © [Anmol Sharma](https://github.com/anmolsharma152)
