import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export function AddWorkoutForm({ onAddWorkout }: { onAddWorkout: (workout: any) => void }) {
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!type || !duration || !calories) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const newWorkout = {
      date: "Today",
      type,
      duration: `${duration} min`,
      calories: parseInt(calories),
    };

    onAddWorkout(newWorkout);
    setType("");
    setDuration("");
    setCalories("");

    toast({
      title: "Success",
      description: "Workout added successfully!",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg bg-card">
      <div className="space-y-2">
        <Label htmlFor="type">Workout Type</Label>
        <Input
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          placeholder="e.g. Upper Body, Cardio"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="duration">Duration (minutes)</Label>
        <Input
          id="duration"
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="45"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="calories">Calories Burned</Label>
        <Input
          id="calories"
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          placeholder="300"
        />
      </div>

      <Button type="submit" className="w-full">
        Add Workout
      </Button>
    </form>
  );
}