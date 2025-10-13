// === src/components/SkillsRiver.jsx ===
import React from 'react';
import { Container, Title, Box, useMantineTheme } from '@mantine/core';
import mantineLogo from '../assets/mantine-logo.svg';

// Use CDN logos (Devicon).
const LOGOS = [
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { 
    name: 'Mantine', 
    src: "https://logo.svgcdn.com/l/mantine-icon.svg"// CORRECTED: This is the official and most stable link.
  }, 
  { 
    name: 'Tailwind CSS', 
    src: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg', // CORRECTED: Using a different, more reliable version of the icon.
    dark: true // This version of the logo looks better inverted in dark mode
  },
    { 
    name: 'React Native', 
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/React-icon.svg', // CORRECTED: Using a different, more reliable version of the icon.
    dark: true // This version of the logo looks better inverted in dark mode
  },
  { name: 'Ant Design', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg' },
  { name: 'Bootstrap', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'Chakra UI', src: 'https://www.vectorlogo.zone/logos/chakra-ui/chakra-ui-icon.svg' },
  { name: 'GraphQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Figma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Jest', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
  { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
];


function Row({ reverse = false, speed = 45 }) {
  const theme = useMantineTheme();
  // Duplicate logos to create an infinite loop
  const items = [...LOGOS, ...LOGOS];
  
  const textColor = theme.colorScheme === 'dark' ? theme.colors.gray[5] : theme.colors.gray[7];

  return (
    <div className={`marquee ${reverse ? 'marquee--reverse' : ''}`} style={{ '--duration': `${speed}s` }}>
      <ul className="marquee__content">
        {items.map((logo, i) => (
          <li key={`${logo.name}-${i}`} className="marquee__item" title={logo.name}>
            <img
              src={logo.src}
              aria-label={logo.name}
              alt={logo.name}
              height={36}
              width={36}
              style={{
                filter: logo.dark ? 'invert(1) brightness(1.4)' : undefined,
              }}
            />
            {/* ADDED: Displaying the name below the icon */}
            <span style={{ marginTop: '8px', fontSize: '12px', color: textColor }}>
              {logo.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SkillsRiver() {
  return (
    <Container id="skills-logos" size="md" mt={24}>
      <Title order={4} align="center" mb="sm">
        Tech Exposure
      </Title>
      <Box sx={{ position: 'relative' }}>
        <Row speed={40} />
        <Row reverse speed={45} />
      </Box>

      {/* Local CSS for the river */}
      <style>{`
        .marquee { 
          --gap: 64px; /* Increased gap for labels */
          display: flex; overflow: hidden; gap: var(--gap); user-select: none; 
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          margin: 12px 0;
        }
        .marquee__content { 
          flex-shrink: 0; display: flex; align-items: stretch; /* Align items to stretch */
          justify-content: space-around;
          gap: var(--gap);
          min-width: 100%; 
          animation: scroll var(--duration, 45s) linear infinite;
        }
        .marquee--reverse .marquee__content { animation-direction: reverse; }
        .marquee:hover .marquee__content { animation-play-state: paused; }
        
        /* UPDATED: Style for each item to center icon and text vertically */
        .marquee__item { 
          list-style: none; 
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          justify-content: center;
          width: 80px; /* Give items a fixed width */
        }

        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (max-width: 640px) {
          .marquee { --gap: 48px; }
        }
      `}</style>
    </Container>
  );
}