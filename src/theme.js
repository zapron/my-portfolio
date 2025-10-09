// src/theme.js
export const theme = {
  colorScheme: "light", // can be 'light' or 'dark'
  fontFamily: 'Verdana, sans-serif',
  colors: {
    // override colors here
    blue: ['#E9EDFC', '#C1CCF6', '#99ABF0', '#7189EA', '#4968E4', '#3452CF', '#273E9F', '#1A296A', '#0C1534', '#020305'],
  },
  primaryColor: 'blue',
  // Other theme properties
  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },
  headings: {
    fontFamily: 'Roboto, sans-serif',
    sizes: {
      h1: { fontSize: '2.5rem' },
      h2: { fontSize: '2rem' },
      h3: { fontSize: '1.5rem' },
    },
  },
};