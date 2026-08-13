"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";
import { PenBox } from "lucide-react";

const data = [
  { speed: 70 },
  { speed: 45 },
  { speed: 65 },
  { speed: 48 },
  { speed: 52 },
  { speed: 49 },
  { speed: 50 },
];

export default function SpeedChart({ css }: { css: string }) {
  return (
    <div className={`${css} flex-col h-80`}>
      <h2 className="mb-4 font-bold text-3xl text-[#192060] flex items-center"><PenBox className="mr-2" size={30} /> Performance</h2>
      <ResponsiveContainer>
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="speed"
            stroke="#192060"
            strokeWidth={4}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}