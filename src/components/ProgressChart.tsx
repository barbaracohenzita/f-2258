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
      <h2 className="text-xl font-bold mb-4 text-primary">Weekly Progress</h2>
      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="date" 
              stroke="currentColor" 
              strokeOpacity={0.5}
              tick={{ fill: 'currentColor', opacity: 0.5 }}
            />
            <YAxis 
              stroke="currentColor"
              strokeOpacity={0.5}
              tick={{ fill: 'currentColor', opacity: 0.5 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(240 20% 15%)",
                border: "1px solid hsl(326 100% 60% / 0.2)",
                borderRadius: "8px",
                color: "white",
              }}
            />
            <Line
              type="monotone"
              dataKey="weight"
              stroke="hsl(326 100% 60%)"
              strokeWidth={2}
              dot={{ fill: "hsl(326 100% 60%)", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}