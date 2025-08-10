<script lang="ts">
  import { env } from './env'
  import { onMount } from 'svelte'
  import { open } from '@tauri-apps/api/shell'
  let online = true
  const version = __APP_VERSION__ ?? '1.0.0'

  function HelpIcon() {
    // placeholder noop to satisfy TS when inlining SVG in slot
  }
</script>

<!-- Top status bar -->
<div class="fixed top-0 left-0 right-0 h-6 flex items-center justify-between px-3 text-xs text-zinc-300">
  <div class="flex items-center gap-2">
    <span class="inline-flex items-center gap-1">
      <span class="h-2 w-2 rounded-full {online ? 'bg-green-500' : 'bg-zinc-500'}"></span>
      <span>{online ? 'Online' : 'Offline'}</span>
    </span>
  </div>
  <div class="opacity-70">Tauri App v{version}</div>
</div>

<!-- Center content -->
<main class="grid place-items-center min-h-screen bg-zinc-950 text-zinc-50">
  <section class="text-center select-none">
    <div class="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-zinc-900/70 ring-1 ring-zinc-800">
      <svg viewBox="0 0 100 100" class="h-9 w-9 opacity-90">
        <rect x="0" y="0" width="100" height="100" rx="22" fill="none"/>
        <path d="M10 55 Q 25 35 40 55 T 70 55 T 90 55" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
      </svg>
    </div>
    <h1 class="text-xl font-semibold tracking-tight">Tauri Application</h1>
    <p class="mt-2 text-sm text-zinc-400">Ready to build something amazing</p>
  </section>

  <!-- Footer -->
  <footer class="fixed bottom-2 inset-x-0 text-center text-[11px] text-zinc-500">
    Built with Tauri + Svelte
  </footer>

  <!-- Help FAB -->
  <button
    title="Help"
    class="fixed bottom-4 right-4 h-9 w-9 grid place-items-center rounded-full bg-zinc-900/70 ring-1 ring-zinc-800 hover:bg-zinc-800/70 transition"
    on:click={() => open('https://tauri.app')}
  >
    <svg viewBox="0 0 24 24" class="h-5 w-5">
      <path d="M12 17v-2m0-1a3 3 0 1 0-3-3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.7" fill="none"/>
    </svg>
  </button>
</main>
