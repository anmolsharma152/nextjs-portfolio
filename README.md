# Anmol Sharma - Portfolio Website

A modern, interactive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Showcases projects, experience, and education with a clean, responsive design and smooth animations.

Live site: [anmolsharma152.vercel.app](https://anmolsharma152.vercel.app)

## Features

- **Next.js 14 App Router** with React Server Components
- **Interactive UI** — 3D card, typewriter hero, Framer Motion scroll animations
- **Dark/Light theme** — custom theme context with system preference detection
- **Contact form** — client/server validation (React Hook Form + Zod) with SendGrid email delivery
- **Live GitHub projects** — fetches and prioritizes repositories from the GitHub API
- **Responsive design** — mobile-first layout with anchor navigation
- **Vercel Analytics** — built-in traffic tracking

## Tech Stack

| Layer | Tools |
|-------|-------|
| Framework | Next.js 14, React 18, TypeScript |
| Styling | Tailwind CSS 3.4, tailwindcss-animate |
| Animations | Framer Motion |
| Forms | React Hook Form, Zod |
| Email | SendGrid |
| UI | Radix Toast, Lucide icons |
| Analytics | Vercel Analytics |

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or pnpm/yarn)
- SendGrid API key (required for contact form in production)

### Installation

```bash
git clone https://github.com/anmolsharma152/nextjs-portfolio.git
cd nextjs-portfolio
npm install
```

### Environment Variables

Copy the example file and fill in your values:

```bash
cp .env.local.example .env.local
```

```env
SENDGRID_API_KEY=your_sendgrid_api_key_here
NEXT_PUBLIC_SENDER_EMAIL=noreply@yourdomain.com
NEXT_PUBLIC_RECIPIENT_EMAIL=your_email@example.com
```

The app builds without these variables. The contact form returns a 503 error at runtime if SendGrid is not configured.

### Development

```bash
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint with auto-fix
npm run format   # Prettier
```

## Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts   # SendGrid contact endpoint
│   ├── globals.css            # Global styles and CSS variables
│   ├── layout.tsx             # Root layout, nav, theme, analytics
│   ├── page.tsx               # Home page (all sections)
│   └── viewport.ts            # Viewport and theme-color config
├── components/
│   ├── ui/                    # Toast primitives (shadcn-style)
│   ├── 3DCard.tsx             # Interactive 3D card in hero
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Projects.tsx           # GitHub API integration
│   └── Resume.tsx
├── context/
│   └── ThemeContext.tsx       # Light/dark theme provider
├── hooks/
│   └── use-toast.ts
└── lib/
    └── utils.ts               # cn() helper
public/                        # Static assets (favicons, manifest)
```

## Customization

Update content in the section components under `src/components/`:

| File | What to change |
|------|----------------|
| `Hero.tsx` | Name, tagline, rotating titles |
| `About.tsx` | Bio and expertise cards |
| `Projects.tsx` | GitHub username and priority project list |
| `Resume.tsx` | Experience and education timeline |
| `Contact.tsx` | Social links and email |
| `Navigation.tsx` | Nav items and social links |
| `app/layout.tsx` | SEO metadata and site URL |

## Deployment

### Vercel (recommended)

1. Push to GitHub
2. Import the repo in Vercel
3. Add environment variables (`SENDGRID_API_KEY`, `NEXT_PUBLIC_SENDER_EMAIL`, `NEXT_PUBLIC_RECIPIENT_EMAIL`)
4. Deploy

### CI

GitHub Actions runs lint and build on every push/PR to `main`. No secrets are required for the build step.

## License

MIT — see [LICENSE](LICENSE).
