<script lang="ts">
  export let variant: 'default' | 'outline' = 'default'
  export let type: 'button' | 'submit' = 'button'
</script>

<button
  {type}
  class="inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm transition
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
  disabled:opacity-50 disabled:pointer-events-none
  ring-offset-zinc-950
  {variant === 'outline' ? 'border border-zinc-700/70 hover:bg-zinc-800/50' : 'bg-zinc-800 hover:bg-zinc-700'}">
  <slot />
</button>
