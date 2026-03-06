import React from "react";
import {
  Badge,
  Card,
  Container,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { IconAward, IconSparkles, IconStar, IconUsers } from "@tabler/icons-react";

const ACHIEVEMENTS = [
  {
    text: "Pursuit of Excellence for PathFactory dashboard delivery",
    icon: IconAward,
  },
  {
    text: "Multiple Bravo Awards from product and leadership teams",
    icon: IconStar,
  },
  {
    text: "Peer recognitions including U ROCK and NOTT awards",
    icon: IconUsers,
  },
  {
    text: "Appreciation for mentoring, training, and Kaizen contributions",
    icon: IconSparkles,
  },
];

export default function Achievements() {
  return (
    <Container id="achievements" size="lg" mt={38} className="section-anchor">
      <Stack spacing="md" mb="lg">
        <Badge color="cyan" variant="light" w="fit-content">
          Recognition
        </Badge>
        <Title order={2} className="section-title">
          Achievements
        </Title>
      </Stack>

      <SimpleGrid
        cols={2}
        spacing="lg"
        breakpoints={[
          { maxWidth: "md", cols: 2, spacing: "md" },
          { maxWidth: "sm", cols: 1, spacing: "sm" },
        ]}
      >
        {ACHIEVEMENTS.map((item) => (
          <Card key={item.text} radius="lg" p="lg" withBorder>
            <Stack spacing={12}>
              <ThemeIcon size={48} radius="md" color="amber" variant="light">
                <item.icon size={22} />
              </ThemeIcon>
              <Text fw={600}>{item.text}</Text>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
