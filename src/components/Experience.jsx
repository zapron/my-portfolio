import React from 'react'
import { Container, Title, Timeline, Text, List, Group, Badge, Card } from '@mantine/core'

// CV‑accurate roles pulled from your resume
// Keep the bullets concise and impact‑oriented
const roles = [
  {
    role: 'Technical Analyst (Frontend Research Engineer)',
    company: 'SenecaGlobal',
    period: 'Jul 2021 — Present',
    summary:
      'Lead developer on PathFactory enterprise dashboards and Content Library UX revamp; shipped PFRI dashboards, dynamic filters, and advanced tables end‑to‑end.',
    bullets: [
      'Designed & built UCL / Goals / Content Play / Campaigns / Buying Signals / PFRI dashboards (React, TS, Inertia, Mantine, Styled, Apollo).',
      'Delivered New Content Library UX revamp; reusable dynamic filters, custom pagination, and table components.',
      'Implemented timeline charts, tree‑grouping, AI content tagging, and cached filters for performance.',
      'Expanded into Node.js services, API integrations, and repo‑standard compliance.',
      'Drove quality with SOLID, SSDL, and RTL unit tests; mentored interns and ran Req/Risk Analysis sessions.',
      'Multiple Bravo Awards; Pursuit of Excellence; direct product/CTO appreciation.'
    ],
    tech: ['React', 'TypeScript', 'Inertia', 'Mantine', 'Styled', 'GraphQL (Apollo)', 'Node.js']
  },
  {
    role: 'Software Engineer (Full‑stack)',
    company: 'Cerner Healthcare Solutions',
    period: 'Jan 2020 — Jul 2021',
    summary:
      'Modernized legacy app with Terra; owned a scalable module end‑to‑end and drove test coverage.',
    bullets: [
      'Built 50+ component features with Terra for class & functional components.',
      'Wrote 100+ unit tests with Jest/Enzyme reaching ~100% workflow coverage.',
      'Converted UI mockups to React Hooks; delivered pixel‑accurate module as sole owner.'
    ],
    tech: ['React', 'Terra', 'Redux', 'Jest', 'Enzyme', 'GraphQL', 'Node', 'Express']
  },
  {
    role: 'Test Automation Engineer',
    company: 'Cerner Healthcare Solutions',
    period: 'Jan 2019 — Dec 2019',
    summary:
      'Accelerated regression by heavy automation for RoR web apps.',
    bullets: [
      'Authored 100+ Capybara automation scripts; cut manual time by ~60%.',
      'Wrote 20 POM scripts for Page Repository; reduced vertical regression time by ~40%.',
      'Automated ~80% client workflows using Selenium (Python/Java) + internal tools (Touchstone/Eggplant).'
    ],
    tech: ['Selenium', 'Ruby', 'Python', 'Java', 'Capybara', 'Mocha', 'Chai']
  },
  {
    role: 'Solution Designer · Test Analyst',
    company: 'Cerner Healthcare Solutions',
    period: 'Jan 2018 — Dec 2018',
    summary:
      'Owned requirements and test design for a large solution.',
    bullets: [
      'Captured requirements & technical writing covering ~100% client scope.',
      'Produced 200+ test design docs and reviewed 100+ test plans.'
    ],
    tech: ['HP QC', 'Soarian QM']
  },
  {
    role: 'Test Analyst',
    company: 'Cerner Healthcare Solutions',
    period: 'Jul 2017 — Dec 2017',
    summary:
      'Quality ownership across complex workflows.',
    bullets: [
      'Executed 500+ test plans; logged 200+ bugs improving quality by ~40%.',
      'Created 1000+ test cases incl. load‑test scenarios.'
    ],
    tech: ['TouchStone', 'Eggplant', 'Agile/Scrum']
  }
]

export default function Experience() {
  return (
    <Container id="experience" size="sm" mt={40}>
      <Title order={3} align="center">Experience</Title>

      <Timeline active={-1} bulletSize={16} lineWidth={2} mt="md">
        {roles.map((r) => (
          <Timeline.Item key={`${r.period}-${r.role}`} title={`${r.role} · ${r.company}`}>
            <Text size="sm" color="orange">{r.period}</Text>
            <Card withBorder radius="md" p="md" mt={8}>
              <Text size="sm">{r.summary}</Text>
              <List size="sm" spacing={4} mt="xs">
                {r.bullets.map((b, i) => (
                  <List.Item key={i}>{b}</List.Item>
                ))}
              </List>
              <Group spacing={6} mt="xs">
                {r.tech.map((t) => (
                  <Badge key={t} color="blue" variant="light">{t}</Badge>
                ))}
              </Group>
            </Card>
          </Timeline.Item>
        ))}
      </Timeline>
    </Container>
  )
}
