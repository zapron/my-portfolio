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
import { IconCertificate } from "@tabler/icons-react";

const CERTIFICATIONS = [
  {
    name: "React, Redux, JavaScript, and Java",
    provider: "SoloLearn",
  },
  {
    name: "React.js Essential Training and React Hooks",
    provider: "LinkedIn Learning",
  },
  {
    name: "React.js Basic Developer Certification",
    provider: "CutShort",
  },
];

export default function Certifications() {
  return (
    <Container id="certifications" size="lg" mt={38} className="section-anchor">
      <Stack spacing="md" mb="lg">
        <Badge color="cyan" variant="light" w="fit-content">
          Verified Learning
        </Badge>
        <Title order={2} className="section-title">
          Certifications
        </Title>
      </Stack>

      <SimpleGrid
        cols={3}
        spacing="lg"
        breakpoints={[
          { maxWidth: "md", cols: 2, spacing: "md" },
          { maxWidth: "sm", cols: 1, spacing: "sm" },
        ]}
      >
        {CERTIFICATIONS.map((cert) => (
          <Card key={cert.name} radius="lg" p="lg" withBorder>
            <Stack spacing={12}>
              <ThemeIcon size={46} radius="md" color="cyan" variant="light">
                <IconCertificate size={22} />
              </ThemeIcon>
              <Text fw={700}>{cert.name}</Text>
              <Text className="muted-copy">{cert.provider}</Text>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
