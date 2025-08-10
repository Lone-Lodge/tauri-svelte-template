import { z } from 'zod'

const schema = z.object({
  PUBLIC_APP_NAME: z.string().default('Tauri Svelte Pro'),
  SENTRY_DSN: z.string().optional()
})

export const env = schema.parse({
  PUBLIC_APP_NAME: import.meta.env.PUBLIC_APP_NAME,
  SENTRY_DSN: import.meta.env.SENTRY_DSN
})
