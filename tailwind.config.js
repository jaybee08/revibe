
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.liquid"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(22, 16, 44, 0.00) 49.75%, rgba(22, 16, 44, 0.80) 100%)',
      },
      borderRadius: {
        '80': '80px',
      },
      flex: {
        '60': '0 0 60%',  // Custom utility for 60% width in a flex container
        '40': '0 0 40%',  // Custom utility for 40% width in a flex container
      },
    },
  },
  plugins: [],
}
