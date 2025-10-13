// src/components/AIIntegration.jsx
import React from "react";
import {
  Container,
  Title,
  Card,
  Text,
  SimpleGrid,
  ThemeIcon,
  Stack,
  Box,
  useMantineTheme,
  Divider,
} from "@mantine/core";
import { IconRocket, IconShieldCheck, IconBrain } from "@tabler/icons-react";

const AI_LOGOS = [
  {
    name: "ChatGPT",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/ChatGPT-Logo.svg",
  },
  {
    name: "Gemini",
    src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.svg",
  },
  {
    name: "GitHub Copilot",
    src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-copilot-icon.svg",
  },
  {
    name: "Groq",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Groq_logo.svg",
  },
  {
    name: "DeepSeek",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/DeepSeek_logo.svg",
  },
  {
    name: "Perplexity",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Perplexity_AI_logo.svg",
  },
];

// --- The "River" row component, localized to this file ---
function AIRow({ reverse = false, speed = 45 }) {
  const theme = useMantineTheme();
  const items = [...AI_LOGOS, ...AI_LOGOS];
  const textColor =
    theme.colorScheme === "dark" ? theme.colors.gray[5] : theme.colors.gray[7];

  return (
    <div
      className={`marquee ${reverse ? "marquee--reverse" : ""}`}
      style={{ "--duration": `${speed}s` }}
    >
      <ul className="marquee__content">
        {items.map((logo, i) => (
          <li
            key={`${logo.name}-${i}`}
            className="marquee__item"
          //  title={logo.name}
          >
            <img
              src={logo.src}
              aria-label={logo.name}
              alt={logo.name}
              height={32}
              width={32}
            />
            {/* <span
              style={{ marginTop: "8px", fontSize: "12px", color: textColor }}
            >
              {logo.name}
            </span> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Data for the highlight points remains the same
const aiHighlights = [
  {
    icon: IconRocket,
    title: "Accelerated Development",
    description:
      "Leveraging AI tools like GitHub Copilot and ChatGPT to speed up development, code reviews, and overall productivity.",
  },
  {
    icon: IconShieldCheck,
    title: "Improved Code Quality",
    description:
      "Using AI assistance to improve the quality of code and explore new integrations and best practices.",
  },
  {
    icon: IconBrain,
    title: "Emerging Tech Exploration",
    description:
      "Staying updated with emerging LLM technologies and tools, including DeepSeek and Perplexity, to enhance project capabilities.",
  },
];

export default function AIIntegration() {
  return (
    <Container size="sm" mt={40}>
      <Title order={2} align="center">
        AI Integration & Tooling
      </Title>
      <Card withBorder shadow="md" radius="lg" p="xl" mt="md">
        <Stack spacing="lg">
          <Text align="center" size="lg" weight={500}>
            I actively use modern AI and LLM tools to enhance my engineering
            workflow.
          </Text>

          {/* --- NEW: The AI River Component --- */}
          <Box>
            <AIRow speed={40} />
            <AIRow reverse speed={45} />
          </Box>

          <Divider my="sm" label="How I Leverage AI" labelPosition="center" />

          <Text align="center" color="dimmed" mt={-10}>
            Here’s how I use these tools to deliver better results, faster:
          </Text>

          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl" mt="md">
            {aiHighlights.map((item) => (
              <Stack key={item.title} align="center" spacing="sm">
                <ThemeIcon
                  size={60}
                  radius="xl"
                  variant="gradient"
                  gradient={{ from: "blue", to: "cyan" }}
                >
                  <item.icon size="2rem" />
                </ThemeIcon>
                <Text weight={700} align="center">
                  {item.title}
                </Text>
                <Text size="sm" color="dimmed" align="center">
                  {item.description}
                </Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
      </Card>

      {/* --- NEW: Local CSS for the river, scoped to this component --- */}
      <style>{`
        .marquee { 
          --gap: 64px;
          display: flex; overflow: hidden; gap: var(--gap); user-select: none; 
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          margin: 12px 0;
        }
        .marquee__content { 
          flex-shrink: 0; display: flex; align-items: stretch;
          justify-content: space-around;
          gap: var(--gap);
          min-width: 100%; 
          animation: scroll var(--duration, 45s) linear infinite;
        }
        .marquee--reverse .marquee__content { animation-direction: reverse; }
        .marquee:hover .marquee__content { animation-play-state: paused; }
        .marquee__item { 
          list-style: none; display: flex; flex-direction: column; 
          align-items: center; justify-content: center; width: 80px;
        }
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (max-width: 640px) { .marquee { --gap: 48px; } }
      `}</style>
    </Container>
  );
}
