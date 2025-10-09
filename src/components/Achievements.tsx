// src/components/Achievements.tsx
import React from "react";
import {
  Container,
  Title,
  Card,
  Text,
  SimpleGrid,
  ThemeIcon,
  useMantineTheme,
} from "@mantine/core";
import { IconAward, IconStar, IconUsers, IconSparkles } from "@tabler/icons-react";

// Add an icon to each achievement
const achievements = [
  {
    text: "Pursuit of Excellence – Best Project (PathFactory dashboards)",
    icon: IconAward,
  },
  { text: "Multiple Bravo Awards from Product Owners & Leadership", icon: IconStar },
  { text: "Peer awards: U ROCK, NOTT at Cerner", icon: IconUsers },
  {
    text: "Recognized for mentoring, training, and Kaizen contributions",
    icon: IconSparkles,
  },
];

export default function Achievements() {
  const theme = useMantineTheme();

  return (
    <Container id="achievements" size="sm" mt={40}>
      <Title order={2} align="center">
        Achievements
      </Title>
      <SimpleGrid cols={2} spacing="lg" mt="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {achievements.map((item) => (
          <Card key={item.text} withBorder shadow="md" radius="md" p="lg">
            <ThemeIcon
              size={50}
              radius="md"
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
            >
              <item.icon size="1.8rem" />
            </ThemeIcon>
            <Text mt="md" weight={500}>
              {item.text}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}