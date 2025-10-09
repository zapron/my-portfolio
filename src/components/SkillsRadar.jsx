// src/components/SkillsRadar.jsx
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Text,
} from "recharts";
import { useMantineTheme } from "@mantine/core";

// This function processes the matrix data for the chart
const processData = (skillMatrix) => {
  const data = [];
  skillMatrix.forEach((group) => {
    group.items.forEach((skill) => {
      data.push({
        subject: skill.name,
        A: skill.level,
        fullMark: 100,
      });
    });
  });
  return data;
};

// Custom tick component to avoid text overlap
const CustomizedAxisTick = ({ x, y, payload }) => {
  return (
    <Text
      x={x}
      y={y}
      textAnchor="middle"
      verticalAnchor="middle"
      width={80}
      style={{ fontSize: '13px' }}
    >
      {payload.value}
    </Text>
  );
};

export default function SkillsRadar({ data }) {
  const theme = useMantineTheme();
  const chartData = processData(data);
  const tickColor = theme.colorScheme === 'dark' ? theme.colors.gray[5] : theme.colors.gray[7];
  const radarColor = theme.colors.blue[5];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
        <PolarGrid stroke={theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]} />
        <PolarAngleAxis dataKey="subject" tick={<CustomizedAxisTick />} stroke={tickColor} />
        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
        <Radar
          name="Skill Level"
          dataKey="A"
          stroke={radarColor}
          fill={radarColor}
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}