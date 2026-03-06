import React from "react";
import {
  Anchor,
  Badge,
  Card,
  Container,
  Group,
  Image,
  List,
  Stack,
  Text,
  Timeline,
  Title,
} from "@mantine/core";
import senecaLogo from "../assets/seneca-global-logo.svg";
import cernerLogo from "../assets/oracle-cerner-logo.svg";

const ROLES = [
  {
    role: "Technical Analyst (Frontend Research Engineer)",
    company: "SenecaGlobal",
    period: "Jul 2021 - Present",
    logo: senecaLogo,
    summary:
      "Lead frontend engineer for enterprise dashboard programs and platform UX modernization.",
    points: [
      "Delivered UCL, Goals, Content Play, Campaigns, Buying Signals, and PFRI dashboards",
      "Built reusable dynamic filters, custom pagination, and scalable table systems",
      "Implemented AI-driven content tagging and timeline visualizations",
      "Extended ownership into Node services, integration quality, and engineering standards",
    ],
    tech: ["React", "TypeScript", "Mantine", "Apollo GraphQL", "Node.js"],
    link: "https://senecaglobal.com",
  },
  {
    role: "Software Engineer (Full Stack)",
    company: "Cerner Healthcare Solutions",
    period: "Jan 2020 - Jul 2021",
    logo: cernerLogo,
    summary:
      "Owned major module delivery while modernizing legacy patterns and driving testing quality.",
    points: [
      "Developed 50+ features using Terra component architecture",
      "Wrote 100+ unit tests with close to full workflow coverage",
      "Led hook-based refactors and pixel-accurate React implementations",
    ],
    tech: ["React", "Terra", "Redux", "Jest", "Enzyme", "Node"],
    link: "https://www.oracle.com/industries/health/",
  },
  {
    role: "Quality and Automation Engineering",
    company: "Cerner Healthcare Solutions",
    period: "Jul 2017 - Dec 2019",
    logo: cernerLogo,
    summary:
      "Built robust automated testing systems and requirement coverage processes for large healthcare workflows.",
    points: [
      "Automated major regression suites and reduced manual effort significantly",
      "Produced high-volume test assets across workflow and load scenarios",
      "Partnered with analysts and developers on risk-driven quality strategy",
    ],
    tech: ["Selenium", "Python", "Ruby", "Java", "Capybara", "Agile"],
    link: "https://www.oracle.com/industries/health/",
  },
];

export default function Experience() {
  return (
    <Container id="experience" size="lg" mt={38} className="section-anchor">
      <Stack spacing="md" mb="lg">
        <Badge color="cyan" variant="light" w="fit-content">
          Career Journey
        </Badge>
        <Title order={2} className="section-title">
          Engineering Ownership Across Product, Platform, and Quality
        </Title>
      </Stack>

      <Timeline active={ROLES.length - 1} bulletSize={20} lineWidth={3}>
        {ROLES.map((role) => (
          <Timeline.Item
            key={`${role.company}-${role.period}`}
            title={
              <Group position="apart" align="center">
                <Text fw={700}>{role.role}</Text>
                <Badge color="amber" variant="light">
                  {role.period}
                </Badge>
              </Group>
            }
          >
            <Card radius="lg" p="lg" mt="sm" withBorder>
              <Stack spacing={12}>
                <Group position="apart">
                  <Text fw={700}>{role.company}</Text>
                  <Anchor href={role.link} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={role.logo}
                      alt={`${role.company} logo`}
                      width={88}
                      fit="contain"
                    />
                  </Anchor>
                </Group>
                <Text className="muted-copy">{role.summary}</Text>
                <List spacing={7}>
                  {role.points.map((point) => (
                    <List.Item key={point}>{point}</List.Item>
                  ))}
                </List>
                <Group spacing={8}>
                  {role.tech.map((item) => (
                    <Badge key={item} color="cyan" variant="outline">
                      {item}
                    </Badge>
                  ))}
                </Group>
              </Stack>
            </Card>
          </Timeline.Item>
        ))}
      </Timeline>
    </Container>
  );
}
