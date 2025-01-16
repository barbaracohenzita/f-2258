import { Card } from "@/components/ui/card";
import { CalendarDays, Clock, Dumbbell, Scale } from "lucide-react";

interface WorkoutCardProps {
  date: string;
  type: string;
  duration: string;
  calories: number;
  weight?: number | null;
}

export function WorkoutCard({ date, type, duration, calories, weight }: WorkoutCardProps) {
  return (
    <Card className="stat-card animate-in">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-bold text-lg text-primary">{type}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
            <CalendarDays className="w-4 h-4" />
            <span>{date}</span>
          </div>
        </div>
        <Dumbbell className="w-5 h-5 text-secondary animate-pulse" />
      </div>
      <div className="mt-4 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-accent" />
          <span>{duration}</span>
        </div>
        <div className="font-bold text-secondary">{calories} kcal</div>
      </div>
      {weight && (
        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
          <Scale className="w-4 h-4" />
          <span>{weight} lbs</span>
        </div>
      )}
    </Card>
  );
}