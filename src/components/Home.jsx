// src/components/Home.jsx
import React from "react";
import {
  ActionIcon,
  Avatar,
  Badge,
  Button,
  Container,
  Grid,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { TypeAnimation } from "react-type-animation";
import { IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import profileImage from "../assets/image.jpg";

const AVATAR_URL = profileImage;

const STATS = [
  { label: "Years Experience", value: "8+" },
  { label: "Enterprise Products", value: "10+" },
  { label: "UI Modules Delivered", value: "50+" },
];

export default function Home() {
  return (
    <Container id="home" size="lg" mt={44} className="section-anchor">
      <Paper radius="xl" p="xl" shadow="xl">
        <Grid align="center">
          <Grid.Col span={12} md={7}>
            <Stack spacing={16}>
              <Badge color="amber" variant="filled" w="fit-content">
                Crafting Product-Grade Frontends
              </Badge>
              <Title
                order={1}
                sx={{
                  fontSize: "clamp(2.05rem, 4.2vw, 3.2rem)",
                  lineHeight: 1.04,
                }}
              >
                Raktim C Bhowmick
              </Title>
              <Text fw={700} size="lg" c="cyan.2">
                <TypeAnimation
                  sequence={[
                    "Senior Technical Analyst",
                    2000,
                    "Senior Full-Stack Engineer",
                    2000,
                    "React and TypeScript Specialist",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </Text>
              <Text className="section-subtext" size="md">
                I design and build high-impact, data-heavy products with elegant UX,
                stable architecture, and measurable business outcomes.
              </Text>
              <Group spacing="sm" mt={6}>
                <Button component="a" href="#projects" size="md">
                  Explore Work
                </Button>
                <Button
                  component="a"
                  href="/Raktim_Frontend_fullstack_2025.pdf"
                  variant="outline"
                  size="md"
                >
                  Download Resume
                </Button>
              </Group>
              <Group spacing={10}>
                <ActionIcon
                  component="a"
                  href="mailto:raktim.info@gmail.com"
                  size="lg"
                  variant="light"
                  color="cyan"
                >
                  <IconMail size="1.1rem" />
                </ActionIcon>
                <ActionIcon
                  component="a"
                  href="https://www.linkedin.com/in/raktim24"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  variant="light"
                  color="cyan"
                >
                  <IconBrandLinkedin size="1.1rem" />
                </ActionIcon>
              </Group>
            </Stack>
          </Grid.Col>

          <Grid.Col span={12} md={5}>
            <Stack spacing={18} align="center">
              <Avatar
                src={AVATAR_URL}
                size={190}
                radius="100%"
                alt="Raktim C Bhowmick"
                sx={(theme) => ({
                  border: `3px solid ${theme.fn.rgba(theme.colors.cyan[4], 0.7)}`,
                  boxShadow: "0 18px 40px rgba(3, 12, 25, 0.45)",
                })}
              />
              <SimpleGrid
                cols={3}
                spacing={10}
                w="100%"
                breakpoints={[
                  { maxWidth: "xs", cols: 1, spacing: "xs" },
                ]}
              >
                {STATS.map((item) => (
                  <Paper
                    key={item.label}
                    radius="md"
                    p="xs"
                    sx={(theme) => ({
                      textAlign: "center",
                      border: `1px solid ${theme.fn.rgba(theme.colors.cyan[3], 0.25)}`,
                      background: theme.fn.rgba(
                        theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.white,
                        theme.colorScheme === "dark" ? 0.32 : 0.7
                      ),
                    })}
                  >
                    <Text fw={800} className="accent-copy">
                      {item.value}
                    </Text>
                    <Text size="xs" className="muted-copy">
                      {item.label}
                    </Text>
                  </Paper>
                ))}
              </SimpleGrid>
            </Stack>
          </Grid.Col>
        </Grid>
      </Paper>
    </Container>
  );
}
