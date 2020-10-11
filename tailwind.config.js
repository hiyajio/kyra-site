module.exports = {
  theme: {
    fontFamily: {
      header: ["Pathway Gothic One", "sans-serif"],
      body: ["Inria Serif Light", "serif"],
    },
    extend: {
      colors: {
        golden: "#d3bb9b",
        silvered: "#77726b",
        bronzed: "#3a3633",
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      'xxl': '1560px',
      // => @media (mid-width: 1560px) { ... }
    }
  },
  purge: false,
  variants: {},
  plugins: [],
}
