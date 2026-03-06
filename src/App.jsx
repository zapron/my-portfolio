import React, { useState } from "react";
import { MantineProvider, ColorSchemeProvider, Global, Box } from "@mantine/core";
import { theme } from "./theme";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import FadeIn from "./components/FadeIn";
import WhatsAppButton from "./components/WhatsAppButton";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import AIIntegration from "./components/AIIntegration";

export default function App() {
  const [colorScheme, setColorScheme] = useState("dark");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ ...theme, colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Global
          styles={(theme) => {
            const isDark = theme.colorScheme === "dark";

            return {
              body: {
                color: isDark ? theme.white : theme.colors.dark[8],
                "--bg-main": isDark ? "#050913" : "#f4f8ff",
                "--bg-deep": isDark ? "#071328" : "#e9f2ff",
                "--bg-halo-cyan": isDark
                  ? "rgba(14, 41, 70, 0.9)"
                  : "rgba(97, 173, 221, 0.46)",
                "--bg-halo-amber": isDark
                  ? "rgba(63, 58, 27, 0.82)"
                  : "rgba(238, 194, 126, 0.55)",
                "--text-main": isDark ? "#f3f8ff" : "#0f243f",
                "--text-soft": isDark ? "#c7d6e8" : "#324a63",
                "--accent-copy": isDark ? "#7fd7ff" : "#0c739c",
                "--orb-cyan": isDark
                  ? "rgba(68, 200, 255, 0.8)"
                  : "rgba(116, 193, 240, 0.42)",
                "--orb-amber": isDark
                  ? "rgba(245, 122, 31, 0.52)"
                  : "rgba(242, 170, 95, 0.34)",
                "--grid-line": isDark
                  ? "rgba(133, 189, 215, 0.08)"
                  : "rgba(97, 138, 168, 0.2)",
                "--line": isDark
                  ? "rgba(138, 223, 255, 0.2)"
                  : "rgba(74, 129, 166, 0.3)",
              },
              ".section-title": {
                letterSpacing: "-0.02em",
              },
              ".section-subtext": {
                color: "var(--text-soft)",
                maxWidth: 640,
              },
            };
          }}
        />

        <div className="site-bg" />
        <div className="site-grid" />

        <Box className="main-shell">
          <Navbar />
          <FadeIn><Home /></FadeIn>
          <FadeIn><Projects /></FadeIn>
          <FadeIn><Experience /></FadeIn>
          <FadeIn><Skills /></FadeIn>
          <FadeIn><AIIntegration /></FadeIn>
          <FadeIn><Education /></FadeIn>
          <FadeIn><Certifications /></FadeIn>
          <FadeIn><Achievements /></FadeIn>
          <FadeIn><Contact /></FadeIn>
          <WhatsAppButton />
        </Box>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
