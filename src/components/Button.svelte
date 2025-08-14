<script>
 let {count, verified} = $props();
</script>

 <button
    class={`relative mt-5 h-[48px] w-full rounded-lg ${count === 0 && !verified ? "bg-red-400 text-white animate-shake" : "bg-gray-200 text-gray-500"} font-medium transition duration-700`}
  >
    {#if count === 0 && verified}
      <div
        class="absolute top-0 right-0 h-full bg-blue-500 rounded-lg animate-progress flex justify-center items-center text-white"
      >
        Let's go!
      </div>
    {/if}
    {#if count === 0 && !verified}
      Wrong code!
    {:else}
      {count} digits left
    {/if}
  </button>