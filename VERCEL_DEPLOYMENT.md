# Vercel deployment

This project is a Vite + React single-page application and is ready to import
directly into Vercel.

## Import

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep the detected framework as **Vite**.
4. Deploy.

The included `vercel.json` supplies the production settings:

- Build command: `pnpm build`
- Output directory: `dist`
- SPA fallback: all application routes resolve to `index.html`

No environment variables are currently required.

## Local production check

```bash
pnpm install
pnpm build
```

## Project structure

- `src/App.tsx` — application state and section composition
- `src/content.ts` — German, English, and Italian copy
- `src/components/Header.tsx` — navigation and language switcher
- `src/components/ReservationModal.tsx` — reservation form
- `src/components/sections/` — one file per landing-page section
- `src/components/Ui.tsx` — shared icons and decorative UI
- `public/images/` — optimized restaurant assets

## Reservation delivery

The reservation form is frontend-only. It validates the entered details and
opens either:

- WhatsApp with a prepared message to `+41 31 829 12 44`
- The visitor's email client with a prepared message to `info@lindewurm.ch`

There is no database or server-side reservation storage.
