import React, { useEffect, useState } from "react";
import {
  Anchor,
  Badge,
  Burger,
  Container,
  Drawer,
  Group,
  ActionIcon,
  Paper,
  Stack,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconMoonStars, IconSparkles, IconSun } from "@tabler/icons-react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "AI", href: "#ai-integration" },
  { label: "Credentials", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const ALL_SECTIONS = NAV_ITEMS.map((item) => item.href.substring(1));

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isSmallMobile = useMediaQuery("(max-width: 520px)");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-42% 0px -48% 0px" }
    );
    ALL_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        padding="md"
        size="sm"
        title={
          <Group spacing={8}>
            <IconSparkles size={16} />
            <Text fw={700}>Navigation</Text>
          </Group>
        }
      >
        <Stack spacing={10}>
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.href.substring(1);
            return (
              <Anchor
                key={item.label}
                href={item.href}
                onClick={closeDrawer}
                sx={(theme) => ({
                  color:
                    theme.colorScheme === "dark"
                      ? theme.white
                      : theme.colors.dark[8],
                  border: `1px solid ${
                    isActive
                      ? theme.fn.rgba(theme.colors.cyan[4], 0.5)
                      : theme.fn.rgba(
                          theme.colorScheme === "dark"
                            ? theme.colors.gray[5]
                            : theme.colors.dark[3],
                          0.25
                        )
                  }`,
                  background: isActive
                    ? theme.fn.rgba(theme.colors.cyan[5], 0.14)
                    : theme.fn.rgba(
                        theme.colorScheme === "dark"
                          ? theme.colors.dark[5]
                          : theme.white,
                        theme.colorScheme === "dark" ? 0.1 : 0.68
                      ),
                  borderRadius: theme.radius.md,
                  textDecoration: "none",
                  padding: "10px 12px",
                  fontWeight: 600,
                })}
              >
                {item.label}
              </Anchor>
            );
          })}
        </Stack>
      </Drawer>

      <Paper
        withBorder
        shadow="sm"
        radius={0}
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(18px)",
        }}
      >
        <Container size="lg" py={14}>
          <Group position="apart">
            <Group spacing={10}>
              {isMobile && <Burger opened={drawerOpened} onClick={toggleDrawer} size="sm" />}
              <Anchor
                href="#home"
                sx={(theme) => ({
                  textDecoration: "none",
                  color:
                    theme.colorScheme === "dark"
                      ? theme.white
                      : theme.colors.dark[8],
                })}
              >
                <Group spacing={10}>
                  <Badge variant="filled" color="amber" radius="sm">
                    RCB
                  </Badge>
                  <Text
                    fw={800}
                    sx={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {isSmallMobile ? "Portfolio" : "Frontend + Full Stack"}
                  </Text>
                </Group>
              </Anchor>
            </Group>

            {!isMobile && (
              <Group spacing={4}>
                {NAV_ITEMS.map((item) => {
                  const isActive = active === item.href.substring(1);
                  return (
                    <Anchor
                      key={item.label}
                      href={item.href}
                      sx={(theme) => ({
                        color: isActive
                          ? theme.colorScheme === "dark"
                            ? theme.white
                            : theme.colors.dark[8]
                          : theme.colorScheme === "dark"
                            ? theme.colors.gray[3]
                            : theme.colors.dark[4],
                        textDecoration: "none",
                        padding: "8px 12px",
                        borderRadius: 999,
                        border: `1px solid ${
                          isActive
                            ? theme.fn.rgba(theme.colors.cyan[4], 0.45)
                            : "transparent"
                        }`,
                        background: isActive
                          ? theme.fn.rgba(theme.colors.cyan[5], 0.14)
                          : "transparent",
                        fontWeight: 600,
                        transition: "all 150ms ease",
                        "&:hover": {
                          color:
                            theme.colorScheme === "dark"
                              ? theme.white
                              : theme.colors.dark[9],
                          background: theme.fn.rgba(
                            theme.colorScheme === "dark"
                              ? theme.colors.dark[4]
                              : theme.colors.cyan[1],
                            theme.colorScheme === "dark" ? 0.42 : 0.68
                          ),
                        },
                      })}
                    >
                      {item.label}
                    </Anchor>
                  );
                })}
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
