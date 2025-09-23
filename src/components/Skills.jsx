import React from "react";
import {
  Container,
  Title,
  Card,
  Text,
  Group,
  Badge,
  SimpleGrid,
  Progress,
  Stack,
} from "@mantine/core";

const skillMatrix = [
  {
    group: "Core Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Mantine / Styled / Tailwind", level: 85 },
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
      { name: "RTL / Jest / Enzyme", level: 80 },
      { name: "SSDL / SOLID", level: 70 },
    ],
  },
];

export default function Skills() {
  return (
    <Container id="skills" size="sm" mt={40}>
      <Title order={3} align="center">
        Skills
      </Title>
      <SimpleGrid cols={1} spacing="lg" mt="md">
        {skillMatrix.map(({ group, items }) => (
          <Card key={group} withBorder shadow="sm" radius="md" p="lg">
            <Text weight={600}>{group}</Text>
            <Stack spacing="xs" mt="xs">
              {items.map((s) => (
                <div key={s.name}>
                  <Group position="apart">
                    <Text size="sm">{s.name}</Text>
                    <Badge variant="outline">{s.level}%</Badge>
                  </Group>
                  <Progress value={s.level} mt={4} />
                </div>
              ))}
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
