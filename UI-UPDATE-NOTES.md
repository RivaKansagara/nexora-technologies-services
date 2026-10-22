# Premium UI Redesign & Animation Notes

This project keeps the original React + TanStack Router + Vite + Tailwind CSS setup and the existing EmailJS integration, with a complete visual and animation redesign.

## Visual Design & Theme Updates
- **Color Theme**: Premium Light Gray + Rust Orange palette across all pages:
  - Light gray: `#F2F0ED`
  - Warm gray: `#E7E3DE`
  - Rust orange: `#B85C38`
  - Deep rust: `#91452D`
  - Dark charcoal: `#252525`
  - Soft card background: `#FAF9F7`
- **Avoided plain white and dark themes**: Balanced warm surfaces, subtle borders, and delicate gradients.
- **Enhanced Typography**: Crisp hierarchy, balance text wrap on headings, and readable charcoal body copy.

## Animations & Micro-Interactions
- Staggered entrance animations for hero elements, headings, copy, and action buttons (`animate-hero-up`, `stagger-1`, etc.).
- Subtle floating element animations on hero dashboard pills and badge elements (`animate-float-slow`, `animate-float-gentle`).
- Interactive hover lifts with warm rust shadow on all cards (`card-lift`, `shadow-lift`).
- Service and case study cards with image zoom transitions (`group-hover:scale-105 duration-700`).
- Button hover shine, lift, and arrow translation (`group-hover:translate-x-1`).
- Sticky navbar with backdrop blur and animated active indicator underline.
- Accessible reduced-motion support via `@media (prefers-reduced-motion: reduce)`.

## 100% Local & Static Assets — Zero Remote Image Dependencies
- All imagery is strictly local and stored in `public/images/`:
  - `public/images/team/*.jpg`: 8 leadership portraits
  - `public/images/services/*.jpg`: 6 practice images + fallback
  - `public/images/collaboration.jpg`: High-resolution workspace collaboration photo
  - `public/favicon.svg` & `public/favicon.ico`: Custom brand emblem
- Zero external image URLs or remote CDN dependencies.

## Environment configuration
The existing `.env` file is intentionally preserved as requested. Keep it private and do not commit it to a public repository. If you share the project publicly, remove `.env` and configure the variables locally using `.env.example`.

## Run locally
1. Run `npm install` (if dependencies are not already installed).
2. Run `npm run dev` to start the local development server.
3. Run `npm test` to run the test suite.
4. Run `npm run build` to verify production build.
