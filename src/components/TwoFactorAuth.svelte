<script>
  let otp = Array(6).fill("");

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

  console.log(otp)
</script>

<div class="bg-white p-8 shadow-lg rounded-2xl flex flex-col items-center gap-1">
<div class='p-4 bg-sky-50 rounded-full'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="oklch(58.8% 0.158 241.966)" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>
</div>
<h1 class='text-3xl font-medium'>Easy peasy</h1>
<p class='text-[11px]/7 text-slate-500'>Enter 6-digit code from your two factor authenticator APP.</p>
<div class='mt-7 mb-1 flex w-full justify-between'>
{#each otp as number, i}
<input 
  id={`otp-${i}`}
  type="text"
  inputmode="numeric"
  pattern="[0-9]*"
  bind:value={otp[i]}
  maxlength={1}
  on:input={(e) => number = e.target.value.replace(/\D/, '')}
  on:keydown={(e) => handleKey(e, i)}
  on:paste={(e) => handlePaste(e, i)}
class="w-10 h-12 border border-gray-300 rounded-lg text-center text-sky-600 text-3xl font-light
      focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none"  />
{/each}
</div>
<button class="mt-5 py-4 w-full bg-gray-200 rounded-lg text-gray-500 font-medium">
  digits left
</button>
</div>