// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Group,
  Paper,
  useMantineColorScheme,
  ActionIcon,
  Burger,
  Drawer,
  Stack,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

const SECTIONS = [
  "home",
  "projects",
  "experience",
  "skills",
  "achievements",
  "contact",
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  // This hook now reliably controls which view is shown.
  // We'll use a standard breakpoint from Mantine's theme for consistency.
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Scrollspy effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Create links (used for both desktop and mobile drawer)
  const links = SECTIONS.map((id) => (
    <Button
      key={id}
      variant={active === id ? "light" : "subtle"}
      component="a"
      href={`#${id}`}
      onClick={closeDrawer} // This will close the drawer on mobile when a link is clicked
      size="md"
    >
      {id[0].toUpperCase() + id.slice(1)}
    </Button>
  ));

  return (
    <>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        padding="md"
        size="sm"
      >
        <Stack>{links}</Stack>
      </Drawer>

      <Paper
        withBorder
        shadow="xs"
        radius={0}
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(10px)",
          // FIX: Re-added the semi-transparent background for the glass effect
          backgroundColor:
            colorScheme === "dark"
              ? "rgba(26, 27, 30, 0.85)"
              : "rgba(255, 255, 255, 0.7)",
        }}
      >
        <Container size="md" py="sm">
          <Group position="apart">
            {/* CORRECTED LOGIC:
              We use a ternary operator with the 'isMobile' constant.
              If the screen is mobile, show the Burger.
              If it's not mobile, show the Group of links.
            */}
            {isMobile ? (
              <Burger opened={drawerOpened} onClick={toggleDrawer} size="sm" />
            ) : (
              <Group spacing="xl">{links}</Group>
            )}

            <ActionIcon onClick={() => toggleColorScheme()} size="lg">
              {colorScheme === "dark" ? <IconSun /> : <IconMoonStars />}
            </ActionIcon>
          </Group>
        </Container>
      </Paper>
    </>
  );
}
