// src/App.jsx
import React, { useState } from "react";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
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
import Education from "./components/Education"; // <-- 1. IMPORT Education
import Certifications from "./components/Certifications"; // <-- 2. IMPORT Certifications

export default function App() {
  const [colorScheme, setColorScheme] = useState("light");
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
        <Navbar />
        <FadeIn><Home /></FadeIn>
        <FadeIn><Projects /></FadeIn>
        <FadeIn><Experience /></FadeIn>
        <FadeIn><Skills /></FadeIn>
        {/* 3. ADD the new components in the correct order */}
        <FadeIn><Education /></FadeIn>
        <FadeIn><Certifications /></FadeIn>
        <FadeIn><Achievements /></FadeIn>
        <FadeIn><Contact /></FadeIn>

        <WhatsAppButton />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}