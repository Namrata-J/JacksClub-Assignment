<script>
  import Button from './Button.svelte';
  import LockIcon from './LockIcon.svelte';
  import OtpInput from './OtpInput.svelte';

  const authenticationCode = 123456;
  let otp = $state(Array(6).fill(""));
  let count = $derived(
    otp.length - otp.reduce((acc, curr) => (curr ? acc + 1 : acc), 0),
  );
  let verified = $derived(count === 0 && authenticationCode == otp.join(""));

</script>

<div class="bg-white p-8 shadow-lg rounded-2xl flex flex-col items-center gap-1">
  <LockIcon {count} {verified} />

  <h1 class="text-3xl font-medium">Easy peasy</h1>
  <p class="text-[11px]/7 text-slate-500">
    Enter 6-digit code from your two factor authenticator APP.
  </p>

  <OtpInput bind:otp {count} {verified} />

  <Button {count} {verified} />
</div>