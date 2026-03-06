import React from "react";
import {
  Badge,
  Button,
  Card,
  Container,
  Grid,
  Group,
  List,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconArrowUpRight, IconCheck } from "@tabler/icons-react";

const PROJECTS = [
  {
    title: "PathFactory Enterprise Dashboards",
    period: "2021 - Present",
    summary:
      "Designed and built a multi-dashboard ecosystem with reusable UX patterns for data-intensive enterprise workflows.",
    impact: [
      "Reusable dynamic filters and high-performance table patterns",
      "Timeline and tree grouped analytics for complex business scenarios",
      "AI-assisted content tagging and filter caching for faster insight delivery",
    ],
    stack: [
      "React",
      "TypeScript",
      "Mantine",
      "GraphQL",
      "Node.js",
      "Testing Library",
    ],
  },
  {
    title: "Content Library UX Revamp",
    period: "Product Initiative",
    summary:
      "Re-architected a legacy experience into a modern, scalable, and component-driven system with stronger information hierarchy.",
    impact: [
      "Improved discoverability with composable search and filtering",
      "Introduced reusable visual building blocks and pagination flows",
      "Reduced UI inconsistency across screens with shared patterns",
    ],
    stack: ["React", "Styled Components", "Inertia", "Apollo", "Design Systems"],
  },
  {
    title: "React Native Product Experiments",
    period: "Ongoing",
    summary:
      "Built and iterated on cross-platform mobile projects with performance-first architecture and modular design.",
    impact: [
      "Reusable component primitives and centralized theming approach",
      "Pragmatic state patterns for maintainable feature growth",
      "Full-stack integration path with Node and MongoDB services",
    ],
    stack: ["React Native", "Redux", "Node.js", "MongoDB", "CI workflows"],
  },
];

const MILESTONES = [
  "Expanded from frontend ownership into full-stack delivery for key product tracks",
  "Contributed to quality standards using SOLID principles and SSDL-aligned practices",
  "Mentored associates and interns in architecture, review discipline, and delivery planning",
];

export default function Projects() {
  return (
    <Container id="projects" size="lg" mt={38} className="section-anchor">
      <Stack spacing="md" mb="lg">
        <Badge color="cyan" variant="light" w="fit-content">
          Featured Work
        </Badge>
        <Title order={2} className="section-title">
          Products That Blend Scale, Clarity, and Velocity
        </Title>
        <Text className="section-subtext">
          These projects represent my approach to modern product engineering:
          robust frontend architecture, thoughtful UX decisions, and outcomes tied to
          business value.
        </Text>
      </Stack>

      <SimpleGrid cols={1} spacing="lg">
        {PROJECTS.map((project) => (
          <Card key={project.title} radius="lg" p="lg" withBorder>
            <Grid align="flex-start">
              <Grid.Col span={12} md={8}>
                <Stack spacing={10}>
                  <Group position="apart">
                    <Title order={3}>{project.title}</Title>
                    <Badge color="amber" variant="light">
                      {project.period}
                    </Badge>
                  </Group>
                  <Text className="muted-copy">{project.summary}</Text>
                  <List
                    spacing={7}
                    icon={<IconCheck size={16} stroke={2.4} color="var(--mantine-color-cyan-4)" />}
                  >
                    {project.impact.map((point) => (
                      <List.Item key={point}>{point}</List.Item>
                    ))}
                  </List>
                </Stack>
              </Grid.Col>

              <Grid.Col span={12} md={4}>
                <Stack spacing={12}>
                  <Text fw={700}>Tech Stack</Text>
                  <Group spacing={8}>
                    {project.stack.map((tech) => (
                      <Badge key={tech} color="cyan" variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </Group>
                </Stack>
              </Grid.Col>
            </Grid>
          </Card>
        ))}
      </SimpleGrid>

      <Card radius="lg" mt="lg" p="lg" withBorder>
        <Stack spacing={12}>
          <Title order={4}>Delivery Highlights</Title>
          <List spacing={8}>
            {MILESTONES.map((point) => (
              <List.Item key={point}>{point}</List.Item>
            ))}
          </List>
          <Button
            component="a"
            href="#contact"
            variant="light"
            rightIcon={<IconArrowUpRight size={16} />}
            w="fit-content"
          >
            Discuss Collaboration
          </Button>
        </Stack>
      </Card>
    </Container>
  );
}
