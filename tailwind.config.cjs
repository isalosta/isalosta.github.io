module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0f",
        secondary: "#a0a0b0",
        tertiary: "#12111a",
        quaternary: "#00f0ff",
        cyber: {
          black: "#0a0a0f",
          dark: "#0d0221",
          cyan: "#00f0ff",
          pink: "#ff2a6d",
          yellow: "#fcee09",
          purple: "#b537f2",
          green: "#39ff14",
          blue: "#05d9e8",
          muted: "#1a1a2e",
          card: "#0f0f1a",
        },
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        rajdhani: ["Rajdhani", "sans-serif"],
        mono: ["Share Tech Mono", "monospace"],
      },
      screens: {
        'xs': "450px",
        '3xl': "2160px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.jpeg')",
        "cyber-grid": "linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        "cyber-grid": "50px 50px",
      },
      keyframes: {
        textRotate1: {
          '0%, 40%': { transform: 'translate3d(0, 0%, 0) rotateX(0deg)' },
          '60%, 100%': { transform: 'translate3d(0, -100%, 0) rotateX(-90deg)' },
        },
        textRotate2: {
          '0%, 40%': { transform: 'translate3d(0, 100%, 0) rotateX(-90deg)' },
          '60%, 100%': { transform: 'translate3d(0, 0%, 0) rotateX(0deg)' },
        },
        'text-slide-2': {
          '0%, 26.66%': { transform: 'translateY(0%)' },
          '33.33%, 60%': { transform: 'translateY(-25%)' },
          '66.66%, 93.33%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(-75%)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-3px, 3px)' },
          '40%': { transform: 'translate(-3px, -3px)' },
          '60%': { transform: 'translate(3px, 3px)' },
          '80%': { transform: 'translate(3px, -3px)' },
        },
        'glitch-skew': {
          '0%': { transform: 'skew(0deg)' },
          '20%': { transform: 'skew(-2deg)' },
          '40%': { transform: 'skew(0.5deg)' },
          '60%': { transform: 'skew(-0.5deg)' },
          '80%': { transform: 'skew(2deg)' },
          '100%': { transform: 'skew(0deg)' },
        },
        'neon-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '1' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.33' },
        },
        'border-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'cyber-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        textRotate1: 'textRotate1 2.4s infinite alternate',
        textRotate2: 'textRotate2 2.4s infinite alternate',
        'text-slide-2': 'text-slide-2 7.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        glitch: 'glitch 0.3s infinite',
        'glitch-skew': 'glitch-skew 1s infinite',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
        scanline: 'scanline 8s linear infinite',
        flicker: 'flicker 3s linear infinite',
        'border-flow': 'border-flow 3s ease infinite',
        'cyber-float': 'cyber-float 3s ease-in-out infinite',
      },
      fontSize: {
        title: '2rem',
        subtitle: '1.5rem',
      },
      boxShadow: {
        'neon-cyan': '0 0 5px #00f0ff, 0 0 20px rgba(0, 240, 255, 0.3)',
        'neon-pink': '0 0 5px #ff2a6d, 0 0 20px rgba(255, 42, 109, 0.3)',
        'neon-yellow': '0 0 5px #fcee09, 0 0 20px rgba(252, 238, 9, 0.3)',
        'neon-purple': '0 0 5px #b537f2, 0 0 20px rgba(181, 55, 242, 0.3)',
      },
    },
  },
  plugins: [],
};
