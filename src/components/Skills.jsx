import React from "react";
import {
  Container,
  Title,
  Card,
  Text,
  Group,
  Badge,
  SimpleGrid,
} from "@mantine/core";

const skills = {
  Languages: ["JavaScript", "TypeScript"],
  Frontend: ["React", "Mantine", "Vite", "React Native"],
  "Data & API": ["REST", "GraphQL"],
  Tooling: ["Git", "ESLint", "Prettier", "Jest"],
};

export default function Skills() {
  return (
    <Container id="skills" size="sm" mt={40}>
      <Title order={3} align="center">
        Skills
      </Title>
      <SimpleGrid cols={1} spacing="lg" mt="md">
        {Object.entries(skills).map(([group, list]) => (
          <Card key={group} withBorder shadow="sm" radius="md" p="lg">
            <Text weight={600}>{group}</Text>
            <Group mt="xs" spacing="xs">
              {list.map((s) => (
                <Badge key={s} variant="outline">
                  {s}
                </Badge>
              ))}
            </Group>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
