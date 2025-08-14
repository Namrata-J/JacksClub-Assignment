module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      keyframes: {
        'ping-once': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '75%': { transform: 'scale(2)', opacity: '0.5' },
          '100%': { transform: 'scale(2)', opacity: '0' }
        }
      },
      animation: {
        'ping-once': 'ping 3s cubic-bezier(0,0,0.2,1) 1', // 1 run
      },
    },
  },
  plugins: [],
};