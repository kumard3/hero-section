module.exports = {
  purge: {
    enabled: true,
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        IBMPlexBold: ['IBMPlexMonoBold', 'sans-serif'],
        IBMPlexRegular: ['IBMPlexMonoRegular', 'sans-serif'],
        IBMPlexMedium: ['IBMPlexMonoMedium', 'sans-serif'],
        IBMPlexSemiBold: ['IBMPlexMonoSemiBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
