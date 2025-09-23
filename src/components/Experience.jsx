import React from 'react'
import { Container, Title, Timeline, Text, List, Group, Badge } from '@mantine/core'


const items = [
{
role: 'Senior Frontend Engineer',
company: 'PathFactory',
period: '2021 — Present',
bullets: [
'Built enterprise dashboards with dynamic filters and analytics',
'Led UI refactors to Mantine + TypeScript, improved DX and performance',
],
tech: ['React', 'TypeScript', 'Mantine', 'GraphQL', 'Vite'],
},
{
role: 'Frontend Engineer',
company: 'Product Apps (React Native)',
period: '2018 — 2021',
bullets: [
'Shipped multiple RN apps with offline-first patterns',
'Built reusable components and theming systems',
],
tech: ['React Native', 'Redux', 'Node.js'],
},
]


export default function Experience() {
return (
<Container id="experience" size="sm" mt={40}>
<Title order={3} align="center">Experience</Title>
<Timeline active={-1} bulletSize={16} lineWidth={2} mt="md">
{items.map((it) => (
<Timeline.Item
key={`${it.role}-${it.company}`}
title={`${it.role} · ${it.company}`}
>
<Text size="sm" color="dimmed">{it.period}</Text>
<List size="sm" spacing={4} mt="xs">
{it.bullets.map((b, i) => (
<List.Item key={i}>{b}</List.Item>
))}
</List>
<Group spacing={6} mt="xs">
{it.tech.map((t) => (
<Badge key={t} color="blue" variant="light">{t}</Badge>
))}
</Group>
</Timeline.Item>
))}
</Timeline>
</Container>
)
}