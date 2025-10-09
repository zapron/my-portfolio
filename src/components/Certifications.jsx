import React from 'react';
import { Container, Title, SimpleGrid, Card, Text, Group, ThemeIcon } from '@mantine/core';
import { IconCertificate } from '@tabler/icons-react';

const certificationsData = [
  {
    name: 'React + Redux, JavaScript, Java',
    provider: 'Sololearn.com',
    citation: [95]
  },
  {
    name: 'React.js essential Training, React Hooks',
    provider: 'LinkedIn.com',
    citation: [96]
  },
  {
    name: 'CutShort certified React.js Basic Developer',
    provider: 'CutShort',
    citation: [97]
  },
];

export default function Certifications() {
  return (
    <Container id="certifications" size="sm" mt={40}>
      <Title order={2} align="center">
        Certifications
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" mt="md">
        {certificationsData.map((cert) => (
          <Card key={cert.name} withBorder shadow="md" radius="md" p="lg">
            <Group>
              <ThemeIcon
                size={40}
                radius="md"
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan' }}
              >
                <IconCertificate size="1.5rem" />
              </ThemeIcon>
              <div>
                <Text weight={600}>{cert.name}</Text>
                <Text size="sm" color="dimmed">{cert.provider}</Text>
              </div>
            </Group>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}