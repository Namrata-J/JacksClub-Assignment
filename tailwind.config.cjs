module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%,100%": { transform: "translateX(0)" },
          "10%,30%,50%,70%, 90%": { transform: "translateX(-5px)" },
          "20%,40%,60%,80% ": { transform: "translateX(5px)" },
        },
        "ping-once": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "75%": { transform: "scale(2)", opacity: "0.5" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
        'progress': {
          from: {
            width: "0%",
          },
          'to': {
            width: "100%",
          },
        },
      },
      animation: {
        "ping-once": "ping 3s cubic-bezier(0,0,0.2,1) 1",
        shake: "shake 0.5s ease-in-out",
        progress: "progress 2s linear forwards",
      },
    },
  },
  plugins: [],
};
