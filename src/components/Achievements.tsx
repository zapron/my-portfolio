import React from "react";
import { Container, Title, Card, Text, List } from "@mantine/core";

const achievements = [
  "Pursuit of Excellence – Best Project (PathFactory dashboards)",
  "Multiple Bravo Awards from Product Owners & Leadership",
  "Peer awards: U ROCK, NOTT at Cerner",
  "Recognized for mentoring, training, and Kaizen contributions",
];

export default function Achievements() {
  return (
    <Container id="achievements" size="sm" mt={40}>
      <Title order={3} align="center">
        Achievements
      </Title>
      <Card withBorder shadow="sm" radius="md" p="lg" mt="md">
        <List spacing={6} size="sm">
          {achievements.map((a) => (
            <List.Item key={a}>
              <Text>{a}</Text>
            </List.Item>
          ))}
        </List>
      </Card>
    </Container>
  );
}
