import React from 'react'
import { Container, Title, Card, Text, Group, Badge, SimpleGrid, List, Stack, Divider } from '@mantine/core'

// Pulls highlights verbatim from your CV summaries so the section "speaks skills".
// Replace your src/components/Projects.jsx with this file.

const featured = [
  {
    name: 'PathFactory Enterprise Dashboards',
    period: '2021 — Present',
    context:
      'Design + development of enterprise dashboards (UCL, Goals, Content Play, Campaigns, Buying Signals, PFRI) with a New Content Library UX revamp.',
    highlights: [
      'Reusable dynamic filters, advanced table components & custom pagination',
      'Timeline charts, tree‑structured grouping, AI‑driven content tagging',
      'Advanced filter caching → better performance & UX',
      'Expanded into Node services & API integrations; repo‑level compliance',
      'Quality: SOLID + SSDL + RTL unit tests; mentoring & training contributions',
    ],
    tech: ['React', 'TypeScript', 'Inertia', 'Mantine', 'Styled', 'GraphQL (Apollo)', 'Node.js'],
  },
  {
    name: 'Personal React Native Apps',
    period: 'Ongoing',
    context:
      'Shipped multiple mobile applications and introduced mobile development practices into the team.',
    highlights: [
      'Cross‑platform feature work: performance‑minded components & offline patterns',
      'Reusable component library & theming; CI‑friendly architecture',
    ],
    tech: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
  },
]

const smallWins = [
  'Kaizen initiatives: dynamic filter optimization, workflow refactors, UI perf upgrades',
  'Mentoring interns/associates; requirement & risk analysis sessions',
]

export default function Projects() {
  return (
    <Container id="projects" size="sm" mt={40}>
      <Title order={3} mb="md" align="center">Projects</Title>

      <SimpleGrid cols={1} spacing="lg">
        {featured.map((p) => (
          <Card key={p.name} withBorder shadow="sm" radius="md" p="lg">
            <Stack spacing="xs">
              <Group position="apart">
                <Text weight={700}>{p.name}</Text>
                <Badge variant="outline">{p.period}</Badge>
              </Group>
              <Text color="dimmed">{p.context}</Text>
              <Divider my="xs" />
              <List spacing={6} size="sm">
                {p.highlights.map((h) => (
                  <List.Item key={h}>{h}</List.Item>
                ))}
              </List>
              <Group spacing={6} mt={4}>
                {p.tech.map((t) => (
                  <Badge key={t} color="blue" variant="light">{t}</Badge>
                ))}
              </Group>
            </Stack>
          </Card>
        ))}

        <Card withBorder radius="md" p="lg">
          <Text weight={600}>Additional Highlights</Text>
          <List spacing={6} size="sm" mt={6}>
            {smallWins.map((w) => (
              <List.Item key={w}>{w}</List.Item>
            ))}
          </List>
        </Card>
      </SimpleGrid>
    </Container>
  )
}
