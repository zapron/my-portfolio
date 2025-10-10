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
  Menu,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconSun, IconMoonStars, IconChevronDown } from "@tabler/icons-react";

// Structured navigation items for the dropdown menu
const NAV_ITEMS = [
  { type: 'link', label: 'Home', href: '#home' },
  { type: 'link', label: 'Projects', href: '#projects' },
  { type: 'link', label: 'Experience', href: '#experience' },
  {
    type: 'menu',
    label: 'Credentials',
    links: [
      { label: 'Skills', href: '#skills' },
      { label: 'Education', href: '#education' },
      { label: 'Certifications', href: '#certifications' },
      { label: 'Achievements', href: '#achievements' },
    ]
  },
  { type: 'link', label: 'Contact', href: '#contact' },
];

// A flat list of all section IDs, needed for the scrollspy effect
const ALL_SECTIONS = NAV_ITEMS.flatMap(item => 
  item.type === 'link' ? [item.href.substring(1)] : item.links.map(link => link.href.substring(1))
);

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
    ALL_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // --- Desktop Menu Builder ---
  const desktopLinks = NAV_ITEMS.map(item => {
    if (item.type === 'link') {
      return (
        <Button
          key={item.label}
          component="a"
          href={item.href}
          variant={active === item.href.substring(1) ? "light" : "subtle"}
          size="md"
        >
          {item.label}
        </Button>
      );
    }
    if (item.type === 'menu') {
      const isActive = item.links.some(link => active === link.href.substring(1));
      return (
        <Menu key={item.label} trigger="hover" openDelay={100} closeDelay={400}>
          <Menu.Target>
            <Button
              variant={isActive ? "light" : "subtle"}
              rightIcon={<IconChevronDown size="0.9rem" />}
              size="md"
            >
              {item.label}
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            {item.links.map(link => (
              <Menu.Item key={link.label} component="a" href={link.href}>
                {link.label}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      );
    }
    return null;
  });

  // --- Mobile Drawer Builder ---
  const mobileLinks = NAV_ITEMS.flatMap(item => {
    if (item.type === 'link') {
        return (
            <Button key={item.label} variant={active === item.href.substring(1) ? "light" : "subtle"} component="a" href={item.href} onClick={closeDrawer} size="md" fullWidth>
                {item.label}
            </Button>
        )
    }
    return item.links.map(link => (
        <Button key={link.label} variant={active === link.href.substring(1) ? "light" : "subtle"} component="a" href={link.href} onClick={closeDrawer} size="md" fullWidth>
            {link.label}
        </Button>
    ))
  });

  return (
    <>
      <Drawer opened={drawerOpened} onClose={closeDrawer} padding="md" size="sm">
        <Stack>{mobileLinks}</Stack>
      </Drawer>

      <Paper
        withBorder
        shadow="xs"
        radius={0}
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          // This component will now get its style from the theme by default.
          // We just need to ensure the backdropFilter is here to create the blur.
          backdropFilter: "blur(12px)",
        }}
      >
        <Container size="md" py="sm">
          <Group position="apart">
            {isMobile ? (
              <Burger opened={drawerOpened} onClick={toggleDrawer} size="sm" />
            ) : (
              <Group spacing="xl">
                {desktopLinks}
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