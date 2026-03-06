import React, { useState } from "react";
import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { IconArrowRight, IconMail } from "@tabler/icons-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = `Portfolio inquiry from ${form.name || "Visitor"}`;
    const body = `${form.message}\n\nFrom: ${form.name} <${form.email}>`;
    window.location.href = `mailto:raktim.info@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Container id="contact" size="lg" mt={38} mb={90} className="section-anchor">
      <Stack spacing="md" mb="lg">
        <Badge color="cyan" variant="light" w="fit-content">
          Let&apos;s Build Something Strong
        </Badge>
        <Title order={2} className="section-title">
          Contact
        </Title>
      </Stack>

      <Grid>
        <Grid.Col span={12} md={5}>
          <Card radius="lg" p="lg" withBorder h="100%">
            <Stack spacing={12}>
              <Group spacing={8}>
                <IconMail size={18} />
                <Text fw={700}>Open for Frontend and Full Stack Roles</Text>
              </Group>
              <Text className="muted-copy">
                If you need someone who can turn complex product requirements into
                clean architecture and high-impact UX, I can help.
              </Text>
              <Text className="accent-copy" fw={700}>
                raktim.info@gmail.com
              </Text>
              <Text className="muted-copy" size="sm">
                Location: India | Remote-friendly global collaboration
              </Text>
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={12} md={7}>
          <Card radius="lg" p="lg" withBorder>
            <Box component="form" onSubmit={handleSubmit}>
              <Stack spacing="md">
                <Grid>
                  <Grid.Col span={12} sm={6}>
                    <TextInput
                      label="Name"
                      placeholder="Your name"
                      required
                      value={form.name}
                      onChange={handleChange("name")}
                    />
                  </Grid.Col>
                  <Grid.Col span={12} sm={6}>
                    <TextInput
                      label="Email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      value={form.email}
                      onChange={handleChange("email")}
                    />
                  </Grid.Col>
                </Grid>

                <Textarea
                  label="Message"
                  placeholder="What are you building and where can I help?"
                  minRows={5}
                  required
                  value={form.message}
                  onChange={handleChange("message")}
                />

                <Group position="right">
                  <Button type="submit" rightIcon={<IconArrowRight size={16} />}>
                    Send Message
                  </Button>
                </Group>
              </Stack>
            </Box>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
