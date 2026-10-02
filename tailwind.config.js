/** @type {import('tailwindcss').Config} */
const c = (v) => `rgb(var(${v}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: c('--c-bg'),
        surface: c('--c-surface'),
        raised: c('--c-raised'),
        line: c('--c-line'),
        fg: c('--c-fg'),
        muted: c('--c-muted'),
        lime: c('--c-lime'),
        limeink: c('--c-lime-ink'),
        onlime: c('--c-on-lime'),
        amber: c('--c-amber'),
        danger: c('--c-danger'),
        sky: c('--c-sky'),
      },
      fontFamily: {
        sans: ['Onest', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Unbounded', 'Onest', 'system-ui', 'sans-serif'],
      },
      borderRadius: { '4xl': '2rem' },
      keyframes: {
        'sheet-in': {
          '0%': { transform: 'translateY(40px) scale(0.96)', opacity: '0' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
        'toast-in': {
          '0%': { transform: 'translateY(-14px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        pulsering: {
          '0%': { transform: 'scale(0.6)', opacity: '0.7' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        drain: { '0%': { transform: 'scaleX(1)' }, '100%': { transform: 'scaleX(0)' } },
        pop: {
          '0%': { transform: 'scale(0.6)', opacity: '0' },
          '60%': { transform: 'scale(1.08)', opacity: '1' },
          '100%': { transform: 'scale(1)' },
        },
        draw: { '0%': { strokeDashoffset: '48' }, '100%': { strokeDashoffset: '0' } },
      },
      animation: {
        'sheet-in': 'sheet-in 380ms cubic-bezier(.2,.9,.25,1.05) both',
        'toast-in': 'toast-in 260ms ease-out both',
        'fade-in': 'fade-in 220ms ease-out both',
        pulsering: 'pulsering 1.8s ease-out infinite',
        pop: 'pop 420ms cubic-bezier(.2,.9,.25,1.2) both',
        draw: 'draw 520ms 160ms ease-out both',
      },
    },
  },
  plugins: [],
};
