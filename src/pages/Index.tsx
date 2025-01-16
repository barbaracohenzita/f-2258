import { WorkoutCard } from "@/components/WorkoutCard";
import { PersonalRecords } from "@/components/PersonalRecords";
import { ProgressChart } from "@/components/ProgressChart";
import { AddWorkoutForm } from "@/components/AddWorkoutForm";
import { useState } from "react";

const Index = () => {
  const [workouts, setWorkouts] = useState([
    {
      date: "Today",
      type: "Upper Body",
      duration: "45 min",
      calories: 320,
    },
    {
      date: "Yesterday",
      type: "Lower Body",
      duration: "50 min",
      calories: 400,
    },
    {
      date: "2 days ago",
      type: "Cardio",
      duration: "30 min",
      calories: 250,
    },
  ]);

  const handleAddWorkout = (newWorkout: any) => {
    setWorkouts([newWorkout, ...workouts]);
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
          FITNESS ARCADE
        </h1>
        
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="grid gap-6 md:grid-cols-2">
              {workouts.map((workout, index) => (
                <WorkoutCard key={index} {...workout} />
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-sm p-4 rounded-xl border border-primary/20">
              <h2 className="text-xl font-bold mb-4 text-center text-primary">New Workout</h2>
              <AddWorkoutForm onAddWorkout={handleAddWorkout} />
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <PersonalRecords />
          <ProgressChart />
        </div>
      </div>
    </div>
  );
};

export default Index;