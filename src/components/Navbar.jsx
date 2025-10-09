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

// ADDED "Education" and "Certifications" to the list
const SECTIONS = [
  "home",
  "projects",
  "experience",
  "skills",
  "education",
  "certifications",
  "achievements",
  "contact",
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isMobile = useMediaQuery("(max-width: 768px)");

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

  const links = SECTIONS.map((id) => (
    <Button
      key={id}
      variant={active === id ? "light" : "subtle"}
      component="a"
      href={`#${id}`}
      onClick={closeDrawer}
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
        title="Navigation"
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
          backgroundColor:
            colorScheme === "dark"
              ? "rgba(26, 27, 30, 0.85)"
              : "rgba(255, 255, 255, 0.7)",
        }}
      >
        <Container size="md" py="sm">
          <Group position="apart">
            {isMobile ? (
              <Burger
                opened={drawerOpened}
                onClick={toggleDrawer}
                size="sm"
              />
            ) : (
              <Group spacing="xl">
                {links}
              </Group>
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