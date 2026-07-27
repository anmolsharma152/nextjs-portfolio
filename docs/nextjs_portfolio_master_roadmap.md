# 🗺️ Master Upgrade Blueprint — `nextjs-portfolio`

A condensed, actionable master guide compiling all design insights, SOTA motion engines, Vercel border beams, Fuse.js search, technical implementations, and real project mappings to upgrade your live [`~/Projects/nextjs-portfolio`](file:///home/anmol/Projects/nextjs-portfolio) codebase (`anmolsharma152.vercel.app`).

---

## 1. 📌 Core Decisions & Goals

| Feature | Current Live State | Upgraded Target State |
| :--- | :--- | :--- |
| **Default Theme** | System / Dark Mode | **Pristine Porcelain Light Mode** (`#ffffff` / `#f8fafc`) with theme toggle |
| **Scroll Motion** | Native Jitter Scroll | **Lenis Smooth Inertia Scroll** (`@lenis/react` or `lenis`) |
| **Background Graphics** | Static CSS Grid Mask | **Three.js 3D Wireframe Sapphire Sphere** with cursor parallax tracking |
| **Card Borders** | Static Border | **Vercel Conic Border Beam** with rotating gradient glow |
| **Search Modal** | None / Simple Filter | **Fuse.js Weighted Fuzzy Cmd+K Command OS Modal** |
| **Typography** | `Inter` (global) | **`Plus Jakarta Sans`** (Headings) + **`Inter`** (Body) |
| **Positioning Copy** | Personal Resume (*"Hi, I'm Anmol..."*) | **Executive AI Systems Architecture & Services** |
| **Real Projects** | Listed in `Projects.tsx` | Enhanced with live GitHub API data, star/fork counts & clean fallback cards |

---

## 2. ☀️ Step 1: Set Light Mode as Default Theme

In [`src/context/ThemeContext.tsx`](file:///home/anmol/Projects/nextjs-portfolio/src/context/ThemeContext.tsx):

```tsx
// src/context/ThemeContext.tsx
useEffect(() => {
  setMounted(true);
  const savedTheme = localStorage.getItem('theme') as Theme | null;

  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme('light'); // Set Light Theme as default for new visitors!
  }
}, []);
```

### Light Mode HSL Values (`src/app/globals.css`)
```css
@layer base {
  :root {
    --background-h: 210;
    --background-s: 40%;
    --background-l: 98%; /* Porcelain Slate White #f8fafc */

    --foreground-h: 222.2;
    --foreground-s: 84%;
    --foreground-l: 4.9%; /* Deep Slate #0f172a */

    --card-h: 0;
    --card-s: 0%;
    --card-l: 100%; /* Pure White Card */

    --primary-h: 221.2;
    --primary-s: 83.2%;
    --primary-l: 53.3%; /* Royal Blue #2563eb */
  }
}
```

---

## 3. 🌊 Step 2: Lenis Smooth Scroll Provider for Next.js

Install Lenis:
```bash
npm install lenis
```

Create `src/components/SmoothScrollProvider.tsx`:
```tsx
'use client';

import { ReactNode, useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
```

---

## 4. ✨ Step 3: Vercel Border Beam Component (`src/components/BorderBeam.tsx`)

Create `src/components/BorderBeam.tsx`:
```tsx
'use client';

interface BorderBeamProps {
  size?: number;
  duration?: number;
  borderWidth?: number;
  anchor?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export function BorderBeam({
  size = 250,
  duration = 6,
  borderWidth = 1.5,
  anchor = 90,
  colorFrom = '#38bdf8',
  colorTo = '#818cf8',
  delay = 0,
}: BorderBeamProps) {
  return (
    <div
      style={
        {
          '--size': `${size}px`,
          '--duration': `${duration}s`,
          '--border-width': `${borderWidth}px`,
          '--color-from': colorFrom,
          '--color-to': colorTo,
          '--delay': `-${delay}s`,
        } as React.CSSProperties
      }
      className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] after:absolute after:aspect-square after:w-[var(--size)] after:animate-border-beam after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:100%_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)))]"
    />
  );
}
```

In `tailwind.config.js`:
```js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'border-beam': {
          '100%': {
            'offset-distance': '100%',
          },
        },
      },
      animation: {
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
      },
    },
  },
};
```

---

## 5. 🌐 Step 4: Add Three.js 3D Background Sphere

Create `src/components/ThreeSphereBackground.tsx` that reacts to mouse movement and light/dark theme switches:

```tsx
'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '@/context/ThemeContext';

export default function ThreeSphereBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 4.8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Wireframe Icosahedron Sphere
    const geometry = new THREE.IcosahedronGeometry(2.5, 2);
    const sphereColor = theme === 'dark' ? 0x6366f1 : 0x2563eb;
    const material = new THREE.MeshBasicMaterial({
      color: sphereColor,
      wireframe: true,
      transparent: true,
      opacity: theme === 'dark' ? 0.25 : 0.2,
    });
    const sphereMesh = new THREE.Mesh(geometry, material);
    scene.add(sphereMesh);

    let targetX = 0, targetY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 1.2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 1.2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      sphereMesh.rotation.x += 0.002;
      sphereMesh.rotation.y += 0.003;
      sphereMesh.rotation.x += (targetY * 0.3 - sphereMesh.rotation.x) * 0.05;
      sphereMesh.rotation.y += (targetX * 0.3 - sphereMesh.rotation.y) * 0.05;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [theme]);

  return <div ref={containerRef} className="fixed inset-0 -z-10 pointer-events-none opacity-60" />;
}
```

Include `<SmoothScrollProvider>` and `<ThreeSphereBackground />` in `src/app/layout.tsx`.

---

## 6. 🎨 Step 5: Configure Typography (`Plus Jakarta Sans`)

In `src/app/layout.tsx`:
```tsx
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], display: 'swap', variable: '--font-jakarta' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jakarta.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider>
          <SmoothScrollProvider>
            <Navigation />
            <ThreeSphereBackground />
            <main className="flex-1">{children}</main>
            <Toaster />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

In `tailwind.config.js`:
```js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        heading: ['var(--font-jakarta)', ...fontFamily.sans],
      },
    },
  },
};
```

---

## 7. ✍️ Step 6: Executive Copywriting & Real Projects Map

### Hero Headline (`src/components/Hero.tsx`)
```tsx
<h1 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight">
  Architecting <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Autonomous AI Platforms</span> & Duplex Voice Systems
</h1>
<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mt-4">
  Engineering production-grade agentic platforms, sub-150ms voice pipelines, and edge intelligence daemons.
</p>
```

### 4 Real Action Capabilities Map (`src/components/About.tsx`)

| Capability Area | Real Project | Key Stack & Impact |
| :--- | :--- | :--- |
| **1. Agentic Personal Intelligence** | **`Disha`** | LangGraph orchestrator with async PostgreSQL & pgvector long-term memory. |
| **2. Agentic RAG Engine** | **`CodexEngine`** | Hybrid search retrieval with pgvector, LangGraph, and async FastAPI backend. |
| **3. Client-Side Voice Detection** | **`vad_processor`** | Real-time VAD engine built with Rust, WebAssembly, and ONNX Runtime. |
| **4. Edge Linux Auth Daemon** | **`Aura`** | Arch Linux biometric authentication daemon decoupled via Unix domain sockets & PAM. |

---

## 8. 🚀 Verification Checklist

- [ ] `ThemeContext.tsx` defaults to `'light'`.
- [ ] `SmoothScrollProvider.tsx` installed with `lenis` and wrapped in `layout.tsx`.
- [ ] `BorderBeam.tsx` created for high-impact project card borders.
- [ ] `ThreeSphereBackground.tsx` added to `layout.tsx`.
- [ ] `Plus_Jakarta_Sans` configured for `font-heading`.
- [ ] All project titles and descriptions accurately match your real GitHub repos (`Disha`, `CodexEngine`, `vad_processor`, `Aura`, `WellnessMate`).
- [ ] Run `npm run dev` to verify responsive rendering in both Light & Dark modes.
