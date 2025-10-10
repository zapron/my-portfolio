// src/components/Skills.jsx
import React from "react";
import {
  Container,
  Title,
  Card,
  Text,
  Group,
  SimpleGrid,
  Progress,
  Stack,
  ThemeIcon,
} from "@mantine/core";
import { IconDeviceDesktopCode, IconDatabase, IconChartDonut, IconShieldCheck } from "@tabler/icons-react";
import SkillsRiver from "./SkillsRiver";

// Data derived from your resume's SKILLS section
const skillData = [
  {
    group: "Frontend",
    icon: IconDeviceDesktopCode,
    skills: [
      { name: "React.js, Redux, Recoil", level: 95, citation: [71] },
      { name: "TypeScript & JavaScript (ES6+)", level: 90, citation: [71] },
      { name: "Mantine UI, Styled Components, Tailwind CSS", level: 90, citation: [71] },
      { name: "HTML5, CSS3, Responsive UI/UX", level: 85, citation: [71] },
      { name: "React Native", level: 75, citation: [71] },
    ],
  },
  {
    group: "Backend & APIs",
    icon: IconDatabase,
    skills: [
      { name: "Node.js, Express.js", level: 80, citation: [75] },
      { name: "GraphQL (Apollo)", level: 85, citation: [75] },
      { name: "MongoDB, SQL", level: 70, citation: [75] },
    ],
  },
  {
    group: "Data Visualization",
    icon: IconChartDonut,
    skills: [
      { name: "D3.js, Nivo Charts, Recharts", level: 80, citation: [73] },
      { name: "AG Grid", level: 75, citation: [73] },
    ],
  },
  {
    group: "Testing & Quality",
    icon: IconShieldCheck,
    skills: [
      { name: "React Testing Library, Jest, Enzyme", level: 90, citation: [77] },
      { name: "SOLID Principles & SSDL", level: 85, citation: [77] },
      { name: "Selenium WebDriver", level: 70, citation: [77] },
    ],
  },
];

export default function Skills() {
  return (
    <Container id="skills" size="sm" mt={40}>
      <Title order={2} align="center">
        Skills
      </Title>

      <SkillsRiver />

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg" mt="xl">
        {skillData.map(({ group, icon: Icon, skills }) => (
          <Card key={group} withBorder shadow="sm" radius="md" p="lg">
            <Group>
              <ThemeIcon size="xl" radius="md" variant="light">
                <Icon size="1.5rem" />
              </ThemeIcon>
              <Text weight={700} size="lg">{group}</Text>
            </Group>
            <Stack spacing="md" mt="lg">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <Group position="apart">
                    <Text size="sm">{skill.name}</Text>
                    <Text size="sm" color="dimmed">{skill.level}%</Text>
                  </Group>
                  <Progress value={skill.level} mt={5} size="lg" radius="xl" animated />
                </div>
              ))}
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
      
    </Container>
  );
}