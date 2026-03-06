// src/components/WhatsAppButton.jsx
import React from "react";
import { ActionIcon, Tooltip } from "@mantine/core";
import { IconBrandWhatsapp } from "@tabler/icons-react";

const PHONE_NUMBER = "918240565314";
const PRE_FILLED_MESSAGE = "Hello Raktim! I saw your portfolio and wanted to connect.";

export default function WhatsAppButton() {
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
        color="green"
        sx={(theme) => ({
          position: "fixed",
          bottom: theme.spacing.xl,
          right: theme.spacing.xl,
          zIndex: 100,
          boxShadow: "0 14px 30px rgba(1, 20, 11, 0.4)",
          border: "1px solid rgba(219, 255, 233, 0.45)",
          transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.07) translateY(-1px)",
            boxShadow: "0 18px 36px rgba(1, 20, 11, 0.5)",
          },
          [theme.fn.smallerThan("sm")]: {
            bottom: theme.spacing.md,
            right: theme.spacing.md,
          },
        })}
      >
        <IconBrandWhatsapp size="2rem" />
      </ActionIcon>
    </Tooltip>
  );
}
