import React from "react";
import { Container, Title, Card, Text, Group, Badge, SimpleGrid } from "@mantine/core";

const projects = [
  {
    name: "Pathfactory Dashboards",
    description: "Enterprise dashboards, dynamic filters, and analytics for marketers.",
    tech: ["React", "TypeScript", "GraphQL", "Mantine", "D3"],
  },
  {
    name: "Personal React Native Apps",
    description: "Productivity and task management apps. Published, maintained.",
    tech: ["React Native", "Node.js", "MongoDB"],
  },
];

export default function Projects() {
  return (
    <Container id="projects" size="sm" mt={40}>
      <Title order={3} mb="md" align="center">
        Projects
      </Title>
      <SimpleGrid cols={1} spacing="lg">
        {projects.map((p) => (
          <Card key={p.name} shadow="sm" radius="md" p="lg" withBorder>
            <Group position="apart">
              <Text weight={600}>{p.name}</Text>
              <Group spacing={5}>
                {p.tech.map((t) => (
                  <Badge color="blue" key={t}>{t}</Badge>
                ))}
              </Group>
            </Group>
            <Text mt="sm">{p.description}</Text>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
