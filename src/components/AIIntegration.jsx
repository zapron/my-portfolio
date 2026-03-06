import React from "react";
import {
  Badge,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconBrain,
  IconRocket,
  IconSearch,
  IconShieldCheck,
  IconSparkles,
} from "@tabler/icons-react";

const AI_TOOLS = [
  "ChatGPT",
  "Gemini",
  "GitHub Copilot",
  "Claude",
  "Perplexity",
  "DeepSeek",
  "Cursor",
  "Postman AI",
];

const AI_HIGHLIGHTS = [
  {
    icon: IconRocket,
    title: "Faster Implementation Cycles",
    description:
      "I use AI-assisted coding and review loops to compress implementation time without compromising architectural rigor.",
  },
  {
    icon: IconShieldCheck,
    title: "Stronger Quality Signal",
    description:
      "Prompts and generated alternatives are evaluated against tests, readability, and maintainability before adoption.",
  },
  {
    icon: IconSearch,
    title: "Research-Driven Decisions",
    description:
      "I use LLM tooling for rapid documentation synthesis, RFC analysis, and risk discovery during feature planning.",
  },
  {
    icon: IconBrain,
    title: "Practical AI Integration",
    description:
      "From intelligent tagging to workflow automation, I incorporate AI where it creates clear user and team value.",
  },
];

export default function AIIntegration() {
  return (
    <Container id="ai-integration" size="lg" mt={38} className="section-anchor">
      <Stack spacing="md" mb="lg">
        <Badge color="cyan" variant="light" w="fit-content">
          AI-Enhanced Engineering
        </Badge>
        <Title order={2} className="section-title">
          Modern Tooling, Responsible Execution
        </Title>
      </Stack>

      <Card radius="lg" p="lg" withBorder>
        <Stack spacing={14}>
          <Group spacing={10}>
            <ThemeIcon size={40} variant="light" color="cyan">
              <IconSparkles size={20} />
            </ThemeIcon>
            <Text fw={700} size="lg">
              Active Tool Stack
            </Text>
          </Group>
          <Text className="muted-copy">
            AI is part of my day-to-day workflow for coding, testing, analysis, and
            faster design-to-implementation translation.
          </Text>
          <Group spacing={8}>
            {AI_TOOLS.map((tool) => (
              <Badge key={tool} color="amber" variant="light">
                {tool}
              </Badge>
            ))}
          </Group>
        </Stack>
      </Card>

      <SimpleGrid
        cols={2}
        spacing="lg"
        mt="lg"
        breakpoints={[
          { maxWidth: "md", cols: 1, spacing: "md" },
          { maxWidth: "sm", cols: 1, spacing: "sm" },
        ]}
      >
        {AI_HIGHLIGHTS.map((item) => (
          <Card key={item.title} radius="lg" p="lg" withBorder>
            <Stack spacing={12}>
              <ThemeIcon size={48} radius="md" color="cyan" variant="light">
                <item.icon size={22} />
              </ThemeIcon>
              <Text fw={700}>{item.title}</Text>
              <Text className="muted-copy" size="sm">
                {item.description}
              </Text>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
