// src/components/Contact.jsx
import React, { useState } from "react";
import { Container, Title, TextInput, Textarea, Button, Group, Box, SimpleGrid } from "@mantine/core";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Hello from ${form.name || "Portfolio visitor"}`;
    const body = `${form.message}\n\nFrom: ${form.name} <${form.email}>`;
    window.location.href = `mailto:raktim.info@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Container id="contact" size="sm" mt={40} mb={80}>
      <Title order={3} align="center">
        Contact
      </Title>
      <Box component="form" onSubmit={handleSubmit} mt="md">
        {/* Use SimpleGrid for a responsive layout */}
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <TextInput
            label="Your name"
            value={form.name}
            onChange={handleChange("name")}
            required
          />
          <TextInput
            label="Email"
            value={form.email}
            onChange={handleChange("email")}
            type="email"
            required
          />
        </SimpleGrid>
        <Textarea
          label="Message"
          value={form.message}
          onChange={handleChange("message")}
          minRows={4}
          mt="md"
          required
        />
        <Group position="right" mt="md">
          <Button type="submit">Send email</Button>
        </Group>
      </Box>
    </Container>
  );
}