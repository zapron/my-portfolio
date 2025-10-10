// src/components/Experience.jsx
import React from "react";
import {
  Container,
  Title,
  Timeline,
  Text,
  List,
  Group,
  Badge,
  Card,
  Image,
  Anchor
} from "@mantine/core";

// Imports for local logos remain the same
import senecaLogo from "../assets/seneca-global-logo.svg";
import cernerLogo from "../assets/oracle-cerner-logo.svg";

// The data structure with the 'logo' property is still correct
const roles = [
  {
    role: "Technical Analyst (Frontend Research Engineer)",
    company: "SenecaGlobal",
    period: "Jul 2021 — Present",
    logo: senecaLogo,
    summary:
      "Lead developer on PathFactory enterprise dashboards and Content Library UX revamp, shipped PFRI dashboards, dynamic filters, and advanced tables end‑to‑end.",
    bullets: [
      "Designed & built UCL / Goals / Content Play / Campaigns / Buying Signals / PFRI dashboards (React, TS, Inertia, Mantine, Styled, Apollo).",
      "Delivered New Content Library UX revamp; reusable dynamic filters, custom pagination, and table components.",
      "Implemented timeline charts, tree‑grouping, AI content tagging, and cached filters for performance.",
      "Expanded into Node.js services, API integrations, and repo‑standard compliance.",
      "Drove quality with SOLID, SSDL, and RTL unit tests; mentored interns and ran Req/Risk Analysis sessions.",
      "Multiple Bravo Awards; Pursuit of Excellence; direct product/CTO appreciation.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Inertia",
      "Mantine",
      "Styled",
      "GraphQL (Apollo)",
      "Node.js",
    ],
  },
  {
    role: "Software Engineer (Full‑stack)",
    company: "Cerner Healthcare Solutions",
    period: "Jan 2020 — Jul 2021",
    logo: cernerLogo,
    summary:
      "Modernized legacy app with Terra, owned a scalable module end‑to‑end and drove test coverage.",
    bullets: [
      "Built 50+ component features with Terra for class & functional components.",
      "Wrote 100+ unit tests with Jest/Enzyme reaching ~100% workflow coverage.",
      "Converted UI mockups to React Hooks; delivered pixel‑accurate module as sole owner.",
    ],
    tech: [
      "React",
      "Terra",
      "Redux",
      "Jest",
      "Enzyme",
      "GraphQL",
      "Node",
      "Express",
    ],
  },
  {
    role: "Test Automation Engineer",
    company: "Cerner Healthcare Solutions",
    period: "Jan 2019 — Dec 2019",
    logo: cernerLogo,
    summary: "Accelerated regression by heavy automation for RoR web apps.",
    bullets: [
      "Authored 100+ Capybara automation scripts, cut manual time by ~60%.",
      "Wrote 20 POM scripts for Page Repository, reduced vertical regression time by ~40%.",
      "Automated ~80% client workflows using Selenium (Python/Java) + internal tools (Touchstone/Eggplant).",
    ],
    tech: ["Selenium", "Ruby", "Python", "Java", "Capybara", "Mocha", "Chai"],
  },
  {
    role: "Solution Designer · Test Analyst",
    company: "Cerner Healthcare Solutions",
    period: "Jan 2018 — Dec 2018",
    logo: cernerLogo,
    summary: "Owned requirements and test design for a large solution.",
    bullets: [
      "Captured requirements & technical writing covering ~100% client scope.",
      "Produced 200+ test design docs and reviewed 100+ test plans.",
    ],
    tech: ["HP QC", "Soarian QM"],
  },
  {
    role: "Test Analyst",
    company: "Cerner Healthcare Solutions",
    period: "Jul 2017 — Dec 2017",
    logo: cernerLogo,
    summary: "Quality ownership across complex workflows.",
    bullets: [
      "Executed 500+ test plans; logged 200+ bugs improving quality by ~40%.",
      "Created 1000+ test cases incl. load‑test scenarios.",
    ],
    tech: ["TouchStone", "Eggplant", "Agile/Scrum"],
  },
];

export default function Experience() {
  return (
    <Container id="experience" size="sm" mt={40}>
      <Title order={2} align="center">
        Experience
      </Title>

      <Timeline bulletSize={24} lineWidth={2} mt="xl">
        {roles.map((r, index) => (
          <Timeline.Item
            key={index}
            // The custom 'bullet' prop has been removed
            title={`${r.role} · ${r.company}`}
          >
            <Group position="apart" align="center">
              <Text
                size="sm"
                fw="500"
                color="orange"
                sx={{ alignSelf: "flex-end" }}
              >
                {r.period}
              </Text>

              <Anchor
                sx={{ cursor: "pointer" }}
                href={
                  r.company === "SenecaGlobal"
                    ? "https://senecaglobal.com"
                    : "https://cerner.com"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={r.logo}
                  alt={`${r.company} logo`}
                  width={80}
                  height="100%" // You can easily adjust this size
                  mt="md"
                  radius="sm"
                />
              </Anchor>
            </Group>

            <Card withBorder radius="md" p="lg" mt="md">
              <Text fw={600} size="md">
                {r.summary}
              </Text>
              <List size="sm" spacing={4} mt="xs">
                {r.bullets.map((b, i) => (
                  <List.Item key={i}>{b}</List.Item>
                ))}
              </List>
              <Group spacing={6} mt="xs">
                {r.tech.map((t) => (
                  <Badge key={t} color="blue" variant="light">
                    {t}
                  </Badge>
                ))}
              </Group>
            </Card>
          </Timeline.Item>
        ))}
      </Timeline>
    </Container>
  );
}
