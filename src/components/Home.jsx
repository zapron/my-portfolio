import {
  Container,
  Title,
  Text,
  Group,
  Anchor,
  Paper,
  Box,
  Space,
} from "@mantine/core";

function Home() {

  return (
    <Container id="home" size="sm" mt={40}>
      <Box
        sx={{
          background: "linear-gradient(90deg, #3b82f6 0%, #414142ff 100%)",
          borderRadius: "lg",
          boxShadow: "0 8px 32px rgba(60,34,170,0.12)",
          padding: "2rem",
        }}
      >
        <Title
          order={2}
          align="center"
          color="white"
          mb="xs"
          style={{ textShadow: "0 2px 24px #3338" }}
        >
          Raktim C Bhowmick
        </Title>
        <Text align="center" size="lg" color="gray.1">
          Frontend Engineer | Kolkata
        </Text>
        <Text align="center" color="white" mt="md">
          7+ years of building web/mobile apps. React, TypeScript, UI/UX,
          innovation!
        </Text>
        <Space h="md" />
        <Group position="center">
          <Anchor href="mailto:raktim.info@gmail.com" color="yellow">
            raktim.info@gmail.com
          </Anchor>
          <Anchor
            href="https://www.linkedin.com/in/raktim24"
            color="yellow"
            target="_blank"
          >
            LinkedIn
          </Anchor>
        </Group>
      </Box>
    </Container>
  );
}

export default Home;
