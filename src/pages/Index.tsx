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
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold mb-8">Fitness Dashboard</h1>
        
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="grid gap-6 md:grid-cols-2">
              {workouts.map((workout, index) => (
                <WorkoutCard key={index} {...workout} />
              ))}
            </div>
          </div>
          <div>
            <AddWorkoutForm onAddWorkout={handleAddWorkout} />
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