# Tauri + Svelte Pro (TypeScript, Tailwind, Vitest, Playwright, Storybook)

A **state-of-the-art** starter focused on quality, DX, and longevity.

## Quickstart
```bash
corepack enable # optional, enables pnpm
pnpm install
pnpm tauri:dev
```

## Scripts
- `pnpm check` – typecheck (TS + svelte-check)
- `pnpm test` – unit tests (Vitest) + coverage via `pnpm test:coverage`
- `pnpm test:e2e` – Playwright E2E
- `pnpm storybook` – run Storybook
- `pnpm release` – open a Release PR via release-please

## Git hooks
Husky runs commitlint and lint-staged on commit. Conventional Commits recommended.

## CI
GitHub Actions workflow runs typecheck, lint, unit + E2E tests, and uploads coverage.

## Env
Use `.env` (see `.env.example`). All public variables must be prefixed with `PUBLIC_`.

## Notes
- Tauri v1 is used for stability; update to v2 when you need mobile targets.
- MSW is wired for tests; add runtime handlers if needed.
