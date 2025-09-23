import React from "react";
import {
  Container,
  Title,
  Text,
  Group,
  Anchor,
  Box,
  Space,
  Button,
} from "@mantine/core";

export default function Home() {
  return (
    <Container id="home" size="sm" mt={40}>
      <Box
        sx={(theme) => ({
          background: "linear-gradient(90deg, #3b82f6 0%, #414142 100%)",
          borderRadius: theme.radius.lg,
          boxShadow: "0 8px 32px rgba(60,34,170,0.12)",
          padding: "2rem",
        })}
      >
        <Title
          order={2}
          align="center"
          color="white"
          mb="xs"
          style={{ textShadow: "0 2px 24px #3338" }}
        >
          Raktim C Bhowmick
        </Title>
        <Text align="center" size="lg" color="gray.1">
          Senior Frontend / Full‑stack Engineer
        </Text>
        <Text align="center" color="white" mt="md">
          7+ years building enterprise dashboards & rich UI/UX with React,
          TypeScript, GraphQL, Mantine, Node.js.
        </Text>
        <Space h="md" />
        <Group position="center" spacing="md">
          <Button component="a" href="#projects" variant="filled">
            View Projects
          </Button>
          <Button component="a" href="/cv.pdf" variant="outline">
            Download CV
          </Button>
          <Button component="a" href="#contact" variant="white" color="dark">
            Hire Me
          </Button>
        </Group>
        <Space h="sm" />
        <Group position="center" spacing="lg">
          <Anchor href="mailto:raktim.info@gmail.com" color="yellow">
            raktim.info@gmail.com
          </Anchor>
          <Anchor
            href="https://www.linkedin.com/in/raktim24"
            color="yellow"
            target="_blank"
          >
            LinkedIn
          </Anchor>
        </Group>
      </Box>
    </Container>
  );
}
