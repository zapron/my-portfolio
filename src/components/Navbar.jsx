// src/components/Navbar.jsx
import React, { useEffect, useMemo, useState } from "react";
import {
  Button,
  Container,
  Group,
  Paper,
  useMantineColorScheme, // Hook to get theme functions
  ActionIcon, // A button for icons
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react"; // Icons

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
  const { colorScheme, toggleColorScheme } = useMantineColorScheme(); // Get theme state

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const buttons = useMemo(
    () =>
      SECTIONS.map((id) => (
        <Button
          key={id}
          variant={active === id ? "light" : "subtle"}
          component="a"
          href={`#${id}`}
        >
          {id[0].toUpperCase() + id.slice(1)}
        </Button>
      )),
    [active]
  );

  return (
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
          colorScheme === "dark" ? "rgba(26, 27, 30, 0.8)" : "rgba(255, 255, 255, 0.8)",
      }}
    >
      <Container size="md" py="sm">
        <Group position="apart">
          <Group spacing="xl">{buttons}</Group>
          {/* Dark Mode Toggle Button */}
          <ActionIcon
            onClick={() => toggleColorScheme()}
            size="lg"
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[6]
                  : theme.colors.gray[0],
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.yellow[4]
                  : theme.colors.blue[6],
            })}
          >
            {colorScheme === "dark" ? (
              <IconSun size="1.2rem" />
            ) : (
              <IconMoonStars size="1.2rem" />
            )}
          </ActionIcon>
        </Group>
      </Container>
    </Paper>
  );
}