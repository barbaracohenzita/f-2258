import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "Mon", weight: 185 },
  { date: "Tue", weight: 184 },
  { date: "Wed", weight: 184 },
  { date: "Thu", weight: 183 },
  { date: "Fri", weight: 183 },
  { date: "Sat", weight: 182 },
  { date: "Sun", weight: 182 },
];

export function ProgressChart() {
  return (
    <Card className="stat-card">
      <h2 className="text-xl font-semibold mb-4">Weekly Progress</h2>
      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="date" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "none",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              }}
            />
            <Line
              type="monotone"
              dataKey="weight"
              stroke="#10B981"
              strokeWidth={2}
              dot={{ fill: "#10B981", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}