import HabitCard from "./HabitCard";

let habits = [
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
];

function HabitList() {
  return (
    <div className="habits-list">
      {habits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} />
      ))}
    </div>
  );
}

export default HabitList;