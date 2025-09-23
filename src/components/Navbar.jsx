import React, { useEffect, useMemo, useState } from "react";
import { Button, Container, Group, Paper } from "@mantine/core";
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

  // watch sections and update active on scroll
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
        backdropFilter: "blur(6px)",
      }}
    >
      <Container size="md" py="sm">
        <Group position="center" spacing="xl">
          {buttons}
        </Group>
      </Container>
    </Paper>
  );
}
