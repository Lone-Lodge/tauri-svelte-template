default: dev

dev:
	pnpm dev

test:
	pnpm test

e2e:
	pnpm test:e2e

lint:
	pnpm lint

fmt:
	pnpm fmt

build:
	pnpm tauri:build
