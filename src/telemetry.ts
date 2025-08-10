import { env } from './env'
// Hook for Sentry or any telemetry you choose; opt-in via env
export function initTelemetry() {
  if (!env.SENTRY_DSN) return
  // Example: import('@sentry/sveltekit').then(Sentry => Sentry.init({ dsn: env.SENTRY_DSN }))
  console.info('Telemetry would init here (SENTRY_DSN present).')
}
