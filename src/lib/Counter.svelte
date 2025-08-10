<script lang="ts">
  let count = 0
</script>

<div class="flex items-center gap-3">
  <button class="rounded-lg border border-zinc-700/70 px-3 py-1.5 text-sm hover:bg-zinc-800/60" on:click={() => count--}>-</button>
  <output class="w-10 text-center tabular-nums">{count}</output>
  <button class="rounded-lg border border-zinc-700/70 px-3 py-1.5 text-sm hover:bg-zinc-800/60" on:click={() => count++}>+</button>
</div>
