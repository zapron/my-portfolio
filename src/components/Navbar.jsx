import React from "react";
import { Group, Container, Button } from "@mantine/core";

function Navbar() {
  return (
    <Container size="md" py="md">
      <Group position="center" spacing="xl">
        <Button variant="subtle" component="a" href="#home">
          Home
        </Button>
        <Button variant="subtle" component="a" href="#projects">
          Projects
        </Button>
        <Button variant="subtle" component="a" href="#experience">
          Experience
        </Button>
        <Button variant="subtle" component="a" href="#skills">
          Skills
        </Button>
        <Button variant="subtle" component="a" href="#contact">
          Contact
        </Button>
      </Group>
    </Container>
  );
}

export default Navbar;
