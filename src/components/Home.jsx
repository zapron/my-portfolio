import React from "react";
import { Container, Title, Text, Paper, Space, Group, Anchor } from "@mantine/core";

function Home() {
  return (
    <Container id="home" size="sm" mt={40}>
      <Paper shadow="md" radius="lg" p="xl">
        <Title order={2} align="center" mb="xs">
          Raktim C Bhowmick
        </Title>
        <Text color="dimmed" align="center" size="lg">
          Frontend Engineer | Kolkata
        </Text>
        <Space h="md" />
        <Text align="center">
          7+ years of experience building web/mobile apps. Love React, TypeScript, UI/UX, mentoring and innovation.
        </Text>
        <Space h="md" />
        <Group position="center">
          <Anchor href="mailto:raktim.info@gmail.com">raktim.info@gmail.com</Anchor>
          <Anchor href="https://www.linkedin.com/in/raktim24" target="_blank">
            LinkedIn
          </Anchor>
        </Group>
      </Paper>
    </Container>
  );
}

export default Home;
