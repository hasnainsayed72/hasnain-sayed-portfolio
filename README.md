# Mohammad Hasnain Sayed — Portfolio

A personal portfolio site for an ERP & Digital Transformation professional, built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx      Root layout, fonts, SEO metadata
  page.tsx         Assembles all sections
  globals.css      Design tokens & shared utility classes
components/
  Nav.tsx, Hero.tsx, About.tsx, Journey.tsx, Experience.tsx,
  Expertise.tsx, Projects.tsx, Achievements.tsx, Skills.tsx,
  Industries.tsx, Testimonials.tsx, Education.tsx, Contact.tsx, Footer.tsx
  Reveal.tsx       Scroll-reveal animation primitives (Framer Motion)
  Counter.tsx      Animated stat counter
public/
  resume.pdf       Add your resume PDF here — the hero "Download Resume"
                    button links to /resume.pdf
```

## Before you deploy

1. **Add your resume**: drop a `resume.pdf` file into `public/` so the "Download Resume" button works.
2. **Replace testimonials**: `components/Testimonials.tsx` currently has clearly-labeled placeholder quotes — swap in real client feedback when available.
3. **Update contact details**: email, phone, and location live in `components/Contact.tsx` and `components/Footer.tsx`.

## Deploying

The easiest path is [Vercel](https://vercel.com/new) — connect the repo and it builds automatically with zero config. Netlify and any Node hosting also work with `npm run build && npm run start`.

## Design system

- **Colors**: near-black navy background (`#060A12`), cyan accent (`#22D3EE`), emerald secondary (`#34D399`) — defined in `tailwind.config.ts`.
- **Type**: Space Grotesk (display), Inter (body), JetBrains Mono (labels, stats, eyebrows).
- **Motion**: scroll-triggered fade/slide reveals and animated counters via Framer Motion, respecting `prefers-reduced-motion`.
