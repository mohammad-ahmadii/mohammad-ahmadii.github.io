/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A1B2A',
        raised: '#0F2438',
        line: '#1E3A52',
        lineStrong: '#2E5171',
        ink: '#EAF2F8',
        inkMuted: '#90A9BE',
        signal: '#FFB015',
        signalDim: '#7A5A1E',
        trace: '#5ED0C4',
      },
      fontFamily: {
        display: ['SpaceGrotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, #14293c 1px, transparent 1px), linear-gradient(to bottom, #14293c 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
    },
  },
  plugins: [],
};
