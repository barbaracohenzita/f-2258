import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { format } from "date-fns";

export function AddWorkoutForm({ onAddWorkout }: { onAddWorkout: (workout: any) => void }) {
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");
  const [weight, setWeight] = useState("");
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!type || !duration || !calories) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const newWorkout = {
      date: format(new Date(date), 'MMM dd, yyyy'),
      type,
      duration: `${duration} min`,
      calories: parseInt(calories),
      weight: weight ? parseInt(weight) : null,
    };

    onAddWorkout(newWorkout);
    setType("");
    setDuration("");
    setCalories("");
    setWeight("");
    setDate(format(new Date(), 'yyyy-MM-dd'));

    toast({
      title: "Success",
      description: "Workout added successfully!",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg bg-card">
      <div className="space-y-2">
        <Label htmlFor="date">Date</Label>
        <Input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

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

      <div className="space-y-2">
        <Label htmlFor="weight">Weight (optional)</Label>
        <Input
          id="weight"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="150"
        />
      </div>

      <Button type="submit" className="w-full">
        Add Workout
      </Button>
    </form>
  );
}