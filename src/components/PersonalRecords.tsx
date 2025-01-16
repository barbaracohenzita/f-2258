import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const records = [
  { name: "Bench Press", value: "225 lbs" },
  { name: "Squat", value: "315 lbs" },
  { name: "Deadlift", value: "405 lbs" },
];

export function PersonalRecords() {
  return (
    <Card className="stat-card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-primary">Personal Records</h2>
        <Trophy className="w-5 h-5 text-accent animate-pulse" />
      </div>
      <div className="space-y-4">
        {records.map((record) => (
          <div key={record.name} className="flex items-center justify-between p-2 rounded-lg bg-muted/50 border border-primary/10">
            <span className="text-muted-foreground">{record.name}</span>
            <span className="font-bold text-secondary">{record.value}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}