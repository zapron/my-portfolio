// src/theme.js
export const theme = {
  colorScheme: 'dark',
  fontFamily: 'Inter, sans-serif',
  defaultRadius: 'lg',

  colors: {
    blue: ['#eef3ff', '#d5e0ff', '#aabfff', '#809dff', '#5f7fff', '#4d6dff', '#4165ff', '#3355e4', '#294acb', '#1e3cb2'],
  },

  primaryColor: 'blue',

  headings: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 700,
  },
  
  components: {
    Paper: {
      styles: (theme) => ({
        root: {
          // Made the background more transparent (0.55 -> 0.4)
          backgroundColor: theme.fn.rgba(theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0], 0.4),
          // Increased the blur (12px -> 16px)
          backdropFilter: 'blur(16px)',
          // Made the border slightly more visible
          border: `1px solid ${theme.fn.rgba(theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3], 0.6)}`,
        },
      }),
    },
    Card: {
      styles: (theme) => ({
        root: {
          // Made the background more transparent (0.55 -> 0.4)
          backgroundColor: theme.fn.rgba(theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0], 0.4),
          // Increased the blur (12px -> 16px)
          backdropFilter: 'blur(16px)',
          // Made the border slightly more visible
          border: `1px solid ${theme.fn.rgba(theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3], 0.6)}`,
          // Added a subtle shadow to lift the card off the background
          boxShadow: theme.colorScheme === 'dark' ? '0 4px 30px rgba(0, 0, 0, 0.1)' : '0 4px 30px rgba(0, 0, 0, 0.05)',
        },
      }),
    },
    Button: {
      styles: {
        root: {
          transition: 'transform 150ms ease',
          '&:hover': {
            transform: 'scale(1.03)',
          },
        },
      },
    },
  },
};