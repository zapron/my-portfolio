// src/components/Skills.jsx
import React from "react";
import { Container, Title, Card } from "@mantine/core";
import SkillsRiver from "./SkillsRiver";
import SkillsRadar from "./SkillsRadar"; // Import the new component

const skillMatrix = [
  {
    group: "Core Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Mantine / Tailwind", level: 85 },
      { name: "Redux / Recoil", level: 80 },
    ],
  },
  {
    group: "Data & APIs",
    items: [
      { name: "GraphQL (Apollo)", level: 75 },
      { name: "REST", level: 90 },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "Node.js / Express", level: 70 },
      { name: "MongoDB / SQL", level: 65 },
    ],
  },
  {
    group: "Quality",
    items: [
      { name: "RTL / Jest", level: 80 },
      { name: "SSDL / SOLID", level: 70 },
    ],
  },
];

export default function Skills() {
  return (
    <Container id="skills" size="sm" mt={40}>
      <Title order={2} align="center">
        Skills
      </Title>

      {/* The scrolling logos */}
      <SkillsRiver />

      {/* The new radar chart */}
      <Card withBorder shadow="sm" radius="md" p="lg" mt="xl">
        <Title order={4} align="center" mb="md">Proficiency Overview</Title>
        <SkillsRadar data={skillMatrix} />
      </Card>
    </Container>
  );
}