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
        <Card
  shadow="xl"
  radius="xl"
  p="lg"
  withBorder
  sx={{
    transition: 'transform 0.2s',
    '&:hover': { transform: 'scale(1.04)', boxShadow: '0 10px 32px rgba(0,0,0,0.18)' }
  }}
>
  <Text weight={700} size="lg">Pathfactory Dashboards</Text>
  <Group spacing={5}>
    <Badge variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>REACT</Badge>
    <Badge variant="gradient" gradient={{ from: 'violet', to: 'blue' }}>TYPESCRIPT</Badge>
    {/*...*/}
  </Group>
  <Text mt="sm" color="dimmed">Enterprise dashboards, dynamic filters...</Text>
</Card>
      </SimpleGrid>
    </Container>
  );
}
