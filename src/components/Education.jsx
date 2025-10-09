import React from 'react';
import { Container, Title, SimpleGrid, Card, Text, Badge, List, ThemeIcon, Group } from '@mantine/core';
import { IconPointFilled } from '@tabler/icons-react';

const educationData = [
  {
    degree: 'Masters in Computer Applications (MCA)',
    institution: 'Vellore Institute of Technology',
    date: 'June 2017',
    score: '9.15 CGPA overall',
    details: ['Master thesis on Code Optimization'],
    citations: {
      degree: [63], institution: [63], date: [62], score: [64], details: [65]
    }
  },
  {
    degree: 'Bachelor of Science (BSc Hons Comp Sc)',
    institution: 'Asutosh College, Calcutta University',
    date: 'June 2015',
    score: '60.1% placed in 1st Class',
    details: [],
    citations: {
      degree: [67], institution: [67], date: [66], score: [68]
    }
  },
];

export default function Education() {
  return (
    <Container id="education" size="sm" mt={40}>
      <Title order={2} align="center">
        Education
      </Title>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg" mt="md">
        {educationData.map((edu) => (
          <Card key={edu.degree} withBorder shadow="md" radius="md" p="lg">
            <Group position="apart">
              <Title order={4} sx={{ flex: 1 }}>{edu.degree}</Title>
              <Badge variant="light">{edu.date}</Badge>
            </Group>
            <Text size="md" mt="sm">{edu.institution}</Text>
            <Text size="sm" color="dimmed" mt={4}>{edu.score}</Text>
            {edu.details.length > 0 && (
              <List
                spacing="xs"
                size="sm"
                center
                mt="md"
                icon={
                  <ThemeIcon color="blue" size={16} radius="xl">
                    <IconPointFilled size={12} />
                  </ThemeIcon>
                }
              >
                {edu.details.map((detail, index) => (
                  <List.Item key={index}>{detail}</List.Item>
                ))}
              </List>
            )}
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}