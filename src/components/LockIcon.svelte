<script>
  let { count, verified } = $props();
</script>

<div
    class={`w-20 h-20 rounded-full relative flex items-center justify-center ${
      count === 0 ? (verified ? "bg-green-100" : "bg-red-100") : "bg-sky-50"
    }`}
  >
    {#if count === 0}
      <span
        class={`absolute inline-flex h-full w-full ping-once-fill animate-ping-once rounded-full ${verified ? "bg-green-400" : "bg-red-400"} opacity-20`}
      ></span>
    {/if}
    {#if count === 0 && verified}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke={`${verified ? "oklch(72.3% 0.219 149.579)" : "currentColor"}`}
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
        />
      </svg>
    {:else}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke={`${count !== 0 ? "oklch(58.8% 0.158 241.966)" : "oklch(63.7% 0.237 25.331)"}`}
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
        />
      </svg>
    {/if}
  </div>

<style>
  .ping-once-fill {
    animation-fill-mode: forwards;
  }
</style>