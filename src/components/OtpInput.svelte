 <script>
 let { otp = $bindable(), count, verified } = $props();

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
        class={`w-10 h-12 border rounded-lg text-center text-3xl font-light focus:ring-2 ${count === 0 && !verified ? "animate-shake focus:border-red-500 focus:ring-red-500 text-red-600 border-red-300" : "focus:border-sky-500 focus:ring-sky-200 text-sky-600 border-gray-300"} outline-none`}
      />
    {/each}
  </div>