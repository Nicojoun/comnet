<!-- Copilot instructions for contributors and AI coding agents -->

# Quick orientation

- This repo is a Create React App frontend (root) + a tiny Express backend under `backend/`.
- Frontend sources: `src/` (pages in `src/pages`, reusable components in `src/components`, global SCSS in `src/assets/styles`).
- Routing is centralized in `src/Routes/index.jsx` (React Router). Update this file when adding pages.
- Navigation links are defined in `src/components/Header/index.jsx` via the `categoryPages` array.

# Important files to inspect first

- `package.json` (root) — frontend scripts: `npm start`, `npm run build`, `npm test`.
- `backend/server.js` — simple Express API connecting to a local SQLite DB (note: DB path is currently absolute and Windows-specific).
- `src/Routes/index.jsx` — register new routes here.
- `src/components/Header/index.jsx` — header nav list and link rendering.
- `src/assets/styles/*.scss` — global styles and variables (`variables.scss`, `variablesMedia.scss`).
- `src/pages/*/index.jsx` — page components follow this folder/index pattern.

# Architecture & patterns (what to expect)

- Single-page React app using functional components and hooks (no TypeScript). Components and pages export a default component from `index.jsx`.
- SCSS is used globally; components import the relevant stylesheet directly (e.g., `import '../../assets/styles/Header.scss'`).
- Centralized routing: add `import MyPage from '../pages/MyPage'` then add a `<Route path='/mypage' element={<MyPage />} />` in `src/Routes/index.jsx`.
- Header nav is data-driven: modify `categoryPages` in `src/components/Header/index.jsx` to add/remove header links.
- Data files: lightweight JSON fixtures (e.g., `src/datas/logements.json`) and external API usage (see `src/pages/Meteo/index.jsx` — calls open-meteo.com).

# Backend notes and environment

- The backend server is a minimal Express app at `backend/server.js`. It expects a local SQLite DB; current path is hard-coded:
  `C:\Users\FORMATION6\Sabathgron\site_esa\DB\comnet.db` — update this path for other environments or make it configurable via env vars.
- Start backend with: `node backend/server.js` (run in a separate terminal). Frontend runs with `npm start` (Create React App dev server on port 3000).

# Developer workflows

- Run frontend dev: `npm install` then `npm start` from project root.
- Run backend dev: `node backend/server.js` (no npm script present in `backend/package.json`).
- Build production: `npm run build` (bundles frontend to `build/`).
- Tests: `npm test` (uses CRA test runner).

# Project-specific conventions

- File layout: each component or page lives in a folder and exposes `index.jsx` (e.g., `src/components/Header/index.jsx`). Follow this convention for new components/pages.
- Styling: use SCSS files under `src/assets/styles` and import them from components/pages. Global variables live in `variables.scss` and `variablesMedia.scss`.
- Routes: keep all client-side routes in `src/Routes/index.jsx` so the app's navigation behaviour remains consistent (scroll handling logic is present in that file).

# Examples (common edits)

- Add a page:
  1. Create `src/pages/NewPage/index.jsx` exporting default component.
  2. Import and add route in `src/Routes/index.jsx`.
  3. Optionally add a header link in `src/components/Header/index.jsx`.

- Fix backend DB path: change `backend/server.js` to read DB path from an environment variable and default to a local file.

# Cautions for AI edits

- Avoid changing the hard-coded DB path without confirming the target environment; prefer adding an environment variable.
- Do not assume TypeScript or module aliases — imports are relative and ES modules are used (`type: "module"`).
- Styling expects SCSS variables; if you add new styles, import `variables.scss` when needed to keep consistent spacing and breakpoints.

# When you finish a change

- Run frontend locally (`npm start`) to verify UI changes.
- If backend changes are involved, run `node backend/server.js` and validate endpoints (e.g., `/user`, `/login`).

---

If any section is unclear or you want more examples (e.g., component creation template or a recommended `.env` pattern), tell me which area to expand.
