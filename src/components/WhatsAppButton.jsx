// src/components/WhatsAppButton.jsx
import React from "react";
import { ActionIcon, Tooltip } from "@mantine/core";
import { IconBrandWhatsapp } from "@tabler/icons-react";

// --- CUSTOMIZE THIS ---
// 1. Replace with your full phone number in international format.
//    (e.g., for +91 12345 67890, use 911234567890)
const PHONE_NUMBER = "918240565314"; // IMPORTANT: Replace with your number

// 2. Customize the default message that users will send.
const PRE_FILLED_MESSAGE = "Hello Raktim! I saw your portfolio and wanted to connect.";
// --------------------

export default function WhatsAppButton() {
  // We need to encode the message to make it URL-safe
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    PRE_FILLED_MESSAGE
  )}`;

  return (
    <Tooltip label="Chat on WhatsApp" position="left" withArrow>
      <ActionIcon
        component="a"
        href={whatsappUrl}
        target="_blank" // Opens WhatsApp in a new tab
        rel="noopener noreferrer" // Security best practice for new tabs
        size="xl"
        radius="xl"
        variant="filled"
        color="green" // WhatsApp's brand color
        sx={(theme) => ({
          // Style for the floating button
          position: "fixed",
          bottom: theme.spacing.xl, // 30px from bottom
          right: theme.spacing.xl,  // 30px from right
          zIndex: 100, // Ensure it's on top of other content
          boxShadow: theme.shadows.md,
          transition: "transform 0.2s ease-in-out",

          // Add a hover effect
          "&:hover": {
            transform: "scale(1.1)",
          },
        })}
      >
        <IconBrandWhatsapp size="2rem" />
      </ActionIcon>
    </Tooltip>
  );
}