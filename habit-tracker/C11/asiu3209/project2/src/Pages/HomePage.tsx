import NavBar from "../components/NavBar";
import HabitForm from "../components/HabitForm";
import HabitCard from "../components/HabitCard";
import { useState } from "react";
import { Habit } from "../components/HabitCard";
function HomePage() {
  const [habits, setHabits] = useState<Habit[]>([
    {
      id: 0,
      name: "Exercise",
      frequency: 45,
      dateAdded: new Date("2023-10-01"),
      progress: 34,
    },
    {
      id: 1,
      name: "Read",
      frequency: 20,
      dateAdded: new Date("2023-10-02"),
      progress: 11,
    },
    {
      id: 2,
      name: "Meditate",
      frequency: 30,
      dateAdded: new Date("2023-10-03"),
      progress: 21,
    },
  ]);
  function markComplete(id: number) {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === id ? { ...habit, progress: habit.progress + 1 } : habit
      )
    );
  }
  function markIncomplete(id: number) {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === id ? { ...habit, progress: 0 } : habit
      )
    );
  }
  function deleteHabit(id: number) {
    setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== id));
  }
  return (
    <>
      <NavBar />
      <HabitForm />
      <div className="habits-list">
        {habits.map((habit) => (
          <HabitCard
            key={habit.id}
            habit={habit}
            markComplete={markComplete}
            markIncomplete={markIncomplete}
            deleteHabit={deleteHabit}
          />
        ))}
      </div>
    </>
  );
}

export default HomePage;
