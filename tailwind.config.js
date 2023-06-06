/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'topo-pattern': "url('/topo.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      bg_h: '#1d2021',
      bg: '#282828',
      bg_s: '#32302f',
      bg1: '#3c3836',
      bg2: '#504945',
      bg3: '#665c54',
      bg4: '#7c6f64',

      fg: '#fbf1c7',
      fg0: '#fbf1c7',
      fg1: '#ebdbb2',
      fg2: '#d5c4a1',
      fg3: '#bdae93',
      fg4: '#a89984',

      red: '#fb4934',
      green: '#b8bb26',
      yellow: '#fabd2f',
      blue: '#83a598',
      purple: '#d3869b',
      aqua: '#8ec07c',
      orange: '#fe8019',
      gray: '#928374',

      redDim: '#cc2412',
      greenDim: '#98971a',
      yellowDim: '#d79921',
      blueDim: '#458588',
      purpleDim: '#b16286',
      aquaDim: '#689d6a',
      orangeDim: '#d65d0e',
      grayDim: '#a89984',
    },
  },
  plugins: [],
}
