// src/App.jsx
import React, { useState } from "react";
import { MantineProvider, ColorSchemeProvider, Global, Box } from "@mantine/core";
import { theme } from "./theme";

// Import all your components
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
          styles={(theme) => ({
            // This is the CSS for our new animated background
            '.aurora-background': {
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              zIndex: -1, // Place it behind all content
              overflow: 'hidden',
              filter: 'blur(40px)', // Soften the overall effect
            },
            '.aurora-background::before, .aurora-background::after': {
              content: '""',
              position: 'absolute',
              borderRadius: '50%',
              opacity: 0.4,
            },
            '.aurora-background::before': {
              width: '50vw',
              height: '50vw',
              background: 'radial-gradient(circle, #5f7fff, transparent 60%)',
              top: '-10%',
              left: '-10%',
              animation: 'moveAurora1 20s infinite alternate',
            },
            '.aurora-background::after': {
              width: '60vw',
              height: '60vw',
              background: 'radial-gradient(circle, #339af0, transparent 60%)',
              bottom: '-20%',
              right: '-20%',
              animation: 'moveAurora2 25s infinite alternate',
            },
            '@keyframes moveAurora1': {
              '0%': { transform: 'translate(0, 0) scale(1)' },
              '100%': { transform: 'translate(100px, 100px) scale(1.2)' },
            },
            '@keyframes moveAurora2': {
              '0%': { transform: 'translate(0, 0) scale(1)' },
              '100%': { transform: 'translate(-100px, -100px) scale(0.8)' },
            },
            'html': {
              scrollPaddingTop: 70, 
            },
          })}
        />
        
        {/* The Aurora background div */}
        <div className="aurora-background" />

        {/* Wrap main content to ensure it's on top of the background */}
        <Box style={{ position: 'relative', zIndex: 1 }}>
          <Navbar />
          <FadeIn><Home /></FadeIn>
          <FadeIn><Projects /></FadeIn>
          <FadeIn><Experience /></FadeIn>
          <FadeIn><Skills /></FadeIn>
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