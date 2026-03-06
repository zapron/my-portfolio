import React from "react";
import {
  Badge,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";

const EDUCATION = [
  {
    degree: "Master of Computer Applications",
    institution: "Vellore Institute of Technology",
    date: "June 2017",
    score: "9.15 CGPA",
    note: "Thesis focus: Code Optimization",
  },
  {
    degree: "BSc (Hons) Computer Science",
    institution: "Asutosh College, Calcutta University",
    date: "June 2015",
    score: "60.1%, First Class",
    note: "Strong grounding in computing fundamentals and software design",
  },
];

export default function Education() {
  return (
    <Container id="education" size="lg" mt={38} className="section-anchor">
      <Stack spacing="md" mb="lg">
        <Badge color="cyan" variant="light" w="fit-content">
          Academic Foundation
        </Badge>
        <Title order={2} className="section-title">
          Education
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
        {EDUCATION.map((item) => (
          <Card key={item.degree} radius="lg" p="lg" withBorder>
            <Stack spacing={10}>
              <Group position="apart">
                <Title order={4}>{item.degree}</Title>
                <Badge color="amber" variant="light">
                  {item.date}
                </Badge>
              </Group>
              <Text fw={600}>{item.institution}</Text>
              <Text className="accent-copy" fw={700}>
                {item.score}
              </Text>
              <Text className="muted-copy" size="sm">
                {item.note}
              </Text>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
