# nextjs-portfolio — Project Status & Handoff

| Field | Value |
|---|---|
| **As of** | 2026-09-06 |
| **Repository** | `anmolsharma152/nextjs-portfolio` |
| **Branch** | `main` |
| **Type** | Single-page personal portfolio |
| **Deployment** | Active on Vercel at [anmolsharma152.vercel.app](https://anmolsharma152.vercel.app) |
| **Framework** | Next.js 14 (App Router), React 18, TypeScript, Three.js, Tailwind CSS |
| **Key Features** | Three.js 3D wireframe canvas, Porcelain light mode default, Resend contact API, GitHub repos integration |

---

## Quick Resume

```bash
cd ~/Projects/nextjs-portfolio
npm install
npm run dev
```

Server runs on `http://localhost:3000`.

### Verification Commands
```bash
npm run lint      # ESLint verification with auto-fixes
npx tsc --noEmit  # TypeScript compiler check
npm run build     # Production Next.js build
```

---

## Active Architecture

- **`src/app/page.tsx`**: Single-page scroll layout containing Hero (Three.js wireframe sphere + typewriter subtitle), About, Projects (live GitHub API integration), Resume (timeline and skill tags), and Contact (Resend API email delivery).
- **`src/app/api/contact/route.ts`**: Server-side contact route with bot honeypot protection and Resend transactional email dispatch.
- **`src/context/ThemeContext.tsx`**: Porcelain-light default theme state provider with dark mode support.
- **`src/app/opengraph-image.tsx`**: Dynamic SVG/Canvas OpenGraph image generator.
