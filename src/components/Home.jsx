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
  ActionIcon,
} from "@mantine/core";
import { TypeAnimation } from "react-type-animation";
import { IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import profileImage from "../assets/image.jpg";

const AVATAR_URL = profileImage;

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
          color: "white",
          textAlign: "center",
          padding: theme.spacing.xl,
          [theme.fn.smallerThan("sm")]: {
            padding: theme.spacing.md,
          },
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
          style={{
            textShadow: "0 2px 4px rgba(0,0,0,0.3)",
            fontSize: "clamp(2rem, 6vw, 2.5rem)",
          }}
        >
          Raktim C Bhowmick
        </Title>

        <TypeAnimation
          sequence={[
            "Senior Tecnical Analyst",
            2000,
            "Senior Full-Stack Engineer",
            2000,
            "React & TypeScript Expert",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          style={{
            display: "inline-block",
            color: "#C1C2C5",
            fontSize: "clamp(1rem, 4vw, 1.25rem)", // Responsive font size
          }}
        />

        <Text mt="md">
          7+ years building enterprise dashboards & rich UI/UX with React,
          TypeScript, GraphQL, Mantine, Node.js.
        </Text>
        <Space h="md" />

        {/* Responsive Button Group */}
        <Group
          position="center"
          spacing="md"
          sx={(theme) => ({
            [theme.fn.smallerThan("xs")]: {
              flexDirection: "column",
              width: "100%",
            },
          })}
        >
          <Button
            component="a"
            href="#projects"
            variant="filled"
            size="md"
            fullWidth
            sx={(theme) => ({ [theme.fn.largerThan("xs")]: { width: "auto" } })}
          >
            View Projects
          </Button>
          <Button
            component="a"
            href="/cv.pdf"
            variant="outline"
            size="md"
            color="white"
            fullWidth
            sx={(theme) => ({ [theme.fn.largerThan("xs")]: { width: "auto" } })}
          >
            Download CV
          </Button>
        </Group>

        <Space h="sm" />
        <Group position="center" spacing="lg" mt="md">
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
