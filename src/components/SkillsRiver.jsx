// === src/components/SkillsRiver.jsx ===
import React from 'react'
import { Container, Title, Box } from '@mantine/core'

// Use CDN logos (Devicon). You can swap any src with /logos/*.svg if you add files under /public/logos
const LOGOS = [
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Redux', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'Vite', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
  { name: 'Mantine', src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/logos/logo.svg' },
  { name: 'GraphQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', dark: true },
  { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Jest', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
]

function Row({ reverse = false, speed = 35 }) {
  // Duplicate logos to create an infinite loop
  const items = [...LOGOS, ...LOGOS]
  return (
    <div className={`marquee ${reverse ? 'marquee--reverse' : ''}`} style={{ ['--duration']: `${speed}s` }}>
      <ul className="marquee__content">
        {items.map((l, i) => (
          <li key={`${l.name}-${i}`} className="marquee__item" title={l.name}>
            <img
              src={l.src}
              aria-label={l.name}
              alt={l.name}
              height={36}
              width={36}
              style={{
                filter: l.dark ? 'invert(1) brightness(1.4)' : undefined,
                margin: '0 8px',
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}







export default function SkillsRiver() {
  return (
    <Container id="skills-logos" size="md" mt={24}>
      <Title order={4} align="center" mb="sm">Tech Exposure</Title>
      <Box sx={{ position: 'relative' }}>
        {/* top row */}
        <Row speed={32} />
        {/* bottom row, reverse for nice parallax */}
        <Row reverse speed={40} />
      </Box>

      {/* Local CSS for the river */}
      <style>{`
        .marquee { 
          --gap: 48px; 
          display: flex; overflow: hidden; gap: var(--gap); user-select: none; 
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          margin: 8px 0;
        }
        .marquee__content { 
          flex-shrink: 0; display: flex; align-items: center; gap: var(--gap);
          min-width: 100%; 
          animation: scroll var(--duration, 35s) linear infinite;
        }
        .marquee--reverse .marquee__content { animation-direction: reverse; }
        .marquee:hover .marquee__content { animation-play-state: paused; }
        .marquee__item { list-style: none; display: flex; align-items: center; }
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (max-width: 640px) {
          .marquee { --gap: 32px; }
        }
      `}</style>
    </Container>
  )
}