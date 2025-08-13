import NavBar from "../components/NavBar";
import HabitForm from "../components/HabitForm";
import HabitCard, { FormHabit, StoredHabit } from "../components/HabitCard";
import { useState, useEffect } from "react";
import { Habit } from "../components/HabitCard";
let nextID = 0;
function HomePage() {
  //Use state replaces habit array in js
  let [habits, setHabits] = useState<Habit[]>(loadHabits());
  //Adds new Habit into useState
  function addHabit(newHabit: FormHabit) {
    const processHabit: Habit = {
      ...newHabit,
      id: nextID++,
      dateAdded: new Date(),
    };
    setHabits((oldHabits) => [...oldHabits, processHabit]);
  }
  //prevHabits refer to state of habits currently
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
  //Deletes Habit Card from useState
  function deleteHabit(id: number) {
    setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== id));
  }
  //JSON local storage to save habits
  function saveHabits() {
    localStorage.setItem("habits", JSON.stringify(habits));
  }
  function loadHabits() {
    const savedHabits = localStorage.getItem("habits");
    if (savedHabits) {
      return JSON.parse(savedHabits).map((storedHabit: StoredHabit) => ({
        ...storedHabit,
        dateAdded: new Date(storedHabit.dateAdded),
      }));
    }
    return [];
  }
  useEffect(() => {
    saveHabits();
  }, [habits]);
  return (
    <>
      <NavBar />
      <HabitForm addHabit={addHabit} />
      <div className="habits-list">
        {habits.map((habit) => (
          <HabitCard
            //Parameters defined in HabitCard function
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
