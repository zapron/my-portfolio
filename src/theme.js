export const theme = {
  colorScheme: "dark",
  defaultRadius: "md",
  fontFamily: "'Manrope', 'Segoe UI', sans-serif",
  primaryColor: "cyan",
  primaryShade: 5,
  colors: {
    cyan: [
      "#e5f9ff",
      "#ccf2ff",
      "#9fe4ff",
      "#6ed4ff",
      "#44c8ff",
      "#1db8f2",
      "#1096c7",
      "#0d7399",
      "#0f5f7d",
      "#0d4d66",
    ],
    amber: [
      "#fff3e7",
      "#fee4cd",
      "#fcca9a",
      "#faaf66",
      "#f9953f",
      "#f57a1f",
      "#d96011",
      "#ad4a11",
      "#8a3e15",
      "#713516",
    ],
  },
  headings: {
    fontFamily: "'Space Grotesk', 'Manrope', sans-serif",
    fontWeight: 700,
  },
  shadows: {
    xl: "0 24px 70px rgba(8, 17, 35, 0.42)",
  },
  components: {
    Paper: {
      styles: (theme) => ({
        root: {
          border: `1px solid ${theme.fn.rgba("#8adfff", theme.colorScheme === "dark" ? 0.2 : 0.35)}`,
          background:
            theme.colorScheme === "dark"
              ? "linear-gradient(150deg, rgba(8,20,39,0.84), rgba(11,32,56,0.68))"
              : "linear-gradient(150deg, rgba(255,255,255,0.88), rgba(240,248,255,0.78))",
          backdropFilter: "blur(16px)",
        },
      }),
    },
    Card: {
      styles: (theme) => ({
        root: {
          border: `1px solid ${theme.fn.rgba("#8adfff", theme.colorScheme === "dark" ? 0.22 : 0.33)}`,
          background:
            theme.colorScheme === "dark"
              ? "linear-gradient(155deg, rgba(8,20,39,0.9), rgba(10,29,51,0.72))"
              : "linear-gradient(155deg, rgba(255,255,255,0.92), rgba(243,250,255,0.84))",
          boxShadow:
            theme.colorScheme === "dark"
              ? "0 14px 38px rgba(0, 0, 0, 0.35)"
              : "0 14px 32px rgba(17, 34, 68, 0.12)",
        },
      }),
    },
    Button: {
      styles: (theme) => ({
        root: {
          fontWeight: 600,
          letterSpacing: "0.02em",
          borderWidth: 1,
          borderColor:
            theme.colorScheme === "dark"
              ? "rgba(166, 233, 255, 0.35)"
              : "rgba(13, 90, 120, 0.2)",
          transition: "transform 150ms ease, box-shadow 150ms ease",
          "&:hover": {
            transform: "translateY(-1px)",
            boxShadow: "0 10px 20px rgba(2, 22, 46, 0.22)",
          },
        },
      }),
    },
    Badge: {
      styles: () => ({
        root: {
          textTransform: "none",
          fontWeight: 600,
          letterSpacing: "0.02em",
        },
      }),
    },
  },
};
