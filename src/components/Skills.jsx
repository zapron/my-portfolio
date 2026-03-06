import React from "react";
import {
  Badge,
  Card,
  Container,
  Group,
  Progress,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconApi,
  IconChartDots3,
  IconCode,
  IconShieldCheck,
  IconStack3,
} from "@tabler/icons-react";

const SKILL_GROUPS = [
  {
    group: "Frontend Engineering",
    icon: IconCode,
    color: "cyan",
    skills: [
      { name: "React.js and state architecture", level: 95 },
      { name: "TypeScript and modern JavaScript", level: 92 },
      { name: "Responsive UI systems", level: 90 },
      { name: "Component libraries and design systems", level: 88 },
    ],
  },
  {
    group: "Backend and Integrations",
    icon: IconApi,
    color: "amber",
    skills: [
      { name: "Node.js and Express", level: 84 },
      { name: "GraphQL and API integration", level: 87 },
      { name: "Service-layer feature ownership", level: 80 },
      { name: "Data modeling and persistence", level: 75 },
    ],
  },
  {
    group: "Visualization and Product UX",
    icon: IconChartDots3,
    color: "cyan",
    skills: [
      { name: "Data-rich dashboard architecture", level: 90 },
      { name: "Information hierarchy and interaction design", level: 86 },
      { name: "Performance-minded table systems", level: 88 },
      { name: "Feature usability optimization", level: 85 },
    ],
  },
  {
    group: "Testing and Quality Discipline",
    icon: IconShieldCheck,
    color: "amber",
    skills: [
      { name: "Unit and integration testing", level: 90 },
      { name: "SOLID and maintainable code patterns", level: 87 },
      { name: "Quality gates and review practices", level: 86 },
      { name: "Automation strategy", level: 82 },
    ],
  },
];

const TOOLBELT = [
  "React",
  "TypeScript",
  "Mantine",
  "Styled Components",
  "Tailwind CSS",
  "React Native",
  "GraphQL",
  "Apollo",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "Jest",
  "React Testing Library",
  "Selenium",
  "GitHub Actions",
];

export default function Skills() {
  return (
    <Container id="skills" size="lg" mt={38} className="section-anchor">
      <Stack spacing="md" mb="lg">
        <Badge color="cyan" variant="light" w="fit-content">
          Engineering Capability Map
        </Badge>
        <Title order={2} className="section-title">
          End-to-End Skills for Product-Scale Delivery
        </Title>
      </Stack>

      <SimpleGrid
        cols={2}
        spacing="lg"
        breakpoints={[
          { maxWidth: "md", cols: 1, spacing: "md" },
          { maxWidth: "sm", cols: 1, spacing: "sm" },
        ]}
      >
        {SKILL_GROUPS.map(({ group, icon: Icon, color, skills }) => (
          <Card key={group} radius="lg" p="lg" withBorder>
            <Stack spacing={14}>
              <Group spacing={12}>
                <ThemeIcon
                  size={44}
                  radius="md"
                  variant="light"
                  color={color}
                >
                  <Icon size={20} />
                </ThemeIcon>
                <Text fw={700} size="lg">
                  {group}
                </Text>
              </Group>

              {skills.map((skill) => (
                <Stack key={skill.name} spacing={6}>
                  <Group position="apart">
                    <Text size="sm">{skill.name}</Text>
                    <Text size="sm" className="muted-copy">
                      {skill.level}%
                    </Text>
                  </Group>
                  <Progress
                    value={skill.level}
                    size="lg"
                    radius="xl"
                    color={color}
                    striped
                    animated
                  />
                </Stack>
              ))}
            </Stack>
          </Card>
        ))}
      </SimpleGrid>

      <Card radius="lg" p="lg" mt="lg" withBorder>
        <Stack spacing={12}>
          <Group spacing={10}>
            <ThemeIcon variant="light" color="cyan" size={38}>
              <IconStack3 size={19} />
            </ThemeIcon>
            <Title order={4}>Toolbelt</Title>
          </Group>
          <Group spacing={8}>
            {TOOLBELT.map((tool) => (
              <Badge key={tool} color="cyan" variant="outline">
                {tool}
              </Badge>
            ))}
          </Group>
        </Stack>
      </Card>
    </Container>
  );
}
