// src/components/Home.jsx
import React from "react";
import {
  Container,
  Title,
  Text,
  Group,
  Box,
  Space,
  Button,
  Avatar,
  ActionIcon, // Changed from Anchor
} from "@mantine/core";
import { TypeAnimation } from "react-type-animation"; // For typing effect
import { IconBrandLinkedin, IconMail } from "@tabler/icons-react"; // Icons

const AVATAR_URL = "src/assets/profile.jpg";

export default function Home() {
  return (
    <Container id="home" size="sm" mt={40}>
      <style>{`
        @keyframes glow {
          0% { box-shadow: 0 0 5px 2px rgba(73, 104, 228, 0.6); }
          50% { box-shadow: 0 0 25px 8px rgba(125, 71, 234, 0.4); }
          100% { box-shadow: 0 0 5px 2px rgba(73, 104, 228, 0.6); }
        }
        .glowing-avatar {
          animation: glow 4s ease-in-out infinite;
          border: 2px solid white;
        }
      `}</style>

      <Box
        sx={(theme) => ({
          background: `linear-gradient(135deg, ${theme.colors.blue[8]} 0%, ${theme.colors.gray[9]} 100%)`,
          borderRadius: theme.radius.lg,
          boxShadow: theme.shadows.xl,
          padding: "2rem",
          textAlign: "center",
          color: "white",
        })}
      >
        <Avatar
          src={AVATAR_URL}
          size={120}
          radius="100%"
          mx="auto"
          mb="md"
          className="glowing-avatar"
          alt="Raktim C Bhowmick"
        />

        <Title
          order={1}
          align="center"
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
        >
          Raktim C Bhowmick
        </Title>

        {/* Typing Animation */}
        <TypeAnimation
          sequence={[
            "Frontend Engineer",
            2000,
            "Full-Stack Developer",
            2000,
            "React & TypeScript Expert",
            2000,
          ]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: "1.25rem",
            display: "inline-block",
            color: "#C1C2C5",
          }}
          repeat={Infinity}
        />

        <Text align="center" mt="md">
          7+ years building enterprise dashboards & rich UI/UX with React,
          TypeScript, GraphQL, Mantine, Node.js.
        </Text>
        <Space h="md" />
        <Group position="center" spacing="md">
          <Button component="a" href="#projects" variant="filled" size="md">
            View Projects
          </Button>
          <Button
            component="a"
            href="/cv.pdf"
            variant="outline"
            size="md"
            color="white"
          >
            Download CV
          </Button>
        </Group>
        <Space h="sm" />
        <Group position="center" spacing="lg" mt="md">
          {/* Icon Links */}
          <ActionIcon
            component="a"
            href="mailto:raktim.info@gmail.com"
            size="lg"
            variant="filled"
            color="blue"
          >
            <IconMail size="1.5rem" />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="https://www.linkedin.com/in/raktim24"
            target="_blank"
            size="lg"
            variant="filled"
            color="blue"
          >
            <IconBrandLinkedin size="1.5rem" />
          </ActionIcon>
        </Group>
      </Box>
    </Container>
  );
}