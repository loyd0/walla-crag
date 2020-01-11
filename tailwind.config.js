module.exports = {
  theme: {
    fontFamily: {
      body: ["Cairo", "sans-serif"],
      display: ["Cairo", "sans-serif"],
    },
    extend: {
      colors: {
        primary: '#053E68',
        secondary: '#fafafa'
      },
      height: {
        "50vh": '50vh',
        "25vh": '25vh',
        "75vh": '75vh',
        "inherit": "inherit"
      },
      width: {
        "1/8": "12.5%",
        "3/8": "37.5%",
        "5/8": "62.5%",
        "7/8": "87.5%",
      }
    }
  },
  variants: {
    cursor: ["hover"]
  },
  plugins: [],
}
