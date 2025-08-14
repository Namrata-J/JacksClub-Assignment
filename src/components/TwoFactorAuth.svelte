<script>
  const authenticationCode = 123456;
  let otp = $state(Array(6).fill(""));
  let count = $derived(
    otp.length - otp.reduce((acc, curr) => (curr ? acc + 1 : acc), 0),
  );
  let verified = $derived(count === 0 && authenticationCode == otp.join(""));

  function focusInput(i) {
    const el = document.getElementById(`otp-${i}`);
    el.focus();
  }

  function handleKey(e, index) {
    if (e.key === "ArrowLeft" && index > 0) {
      focusInput(index - 1);
    } else if (e.key === "ArrowRight" && index < otp.length - 1) {
      focusInput(index + 1);
    } else if (e.key === "Backspace" && !otp[index] && index > 0) {
      focusInput(index - 1);
    }
  }

  function handlePaste(e, index) {
    const pasteData = e.clipboardData.getData("text").replace(/\D/g, "");
    pasteData.split("").forEach((digit, i) => {
      if (index + i < otp.length) otp[index + i] = digit;
    });
  }
</script>

<div class="bg-white p-8 shadow-lg rounded-2xl flex flex-col items-center gap-1">
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

  <h1 class="text-3xl font-medium">Easy peasy</h1>
  <p class="text-[11px]/7 text-slate-500">
    Enter 6-digit code from your two factor authenticator APP.
  </p>

  <div class="mt-7 mb-1 flex w-full justify-between">
    {#each otp as number, i}
      <input
        id={`otp-${i}`}
        type="text"
        inputmode="numeric"
        pattern="[0-9]*"
        bind:value={otp[i]}
        maxlength={1}
        on:input={(e) => {
          otp[i] = e.target.value.replace(/\D/, "");
          otp = [...otp];
          if (otp[i] && !otp[i + 1] && i + 1 < otp.length) {
            focusInput(i + 1);
          }
        }}
        on:keydown={(e) => handleKey(e, i)}
        on:paste={(e) => handlePaste(e, i)}
        class={`w-10 h-12 border rounded-lg text-center text-3xl font-light focus:ring-2 ${count === 0 && !verified ? "shake focus:border-red-500 focus:ring-red-500 text-red-600 border-red-300" : "focus:border-sky-500 focus:ring-sky-200 text-sky-600 border-gray-300"} outline-none`}
      />
    {/each}
  </div>

  <button
    class={`relative mt-5 h-[48px] w-full rounded-lg ${count === 0 && !verified ? "bg-red-400 text-white shake" : "bg-gray-200 text-gray-500"} font-medium transition duration-700`}
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
</div>

<style>
  .ping-once-fill {
    animation-fill-mode: forwards;
  }

  @keyframes progress {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }

  @keyframes shake {
    0%,
    100% {
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      transform: translateX(-5px);
    }
    20%,
    40%,
    60%,
    80% {
      transform: translateX(5px);
    }
  }

  .shake {
    animation: shake 0.5s ease-in-out;
  }

  .animate-progress {
    animation: progress 2s linear forwards;
  }
</style>