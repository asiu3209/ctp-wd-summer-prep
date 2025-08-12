interface Habit {
  id: number;
  name: string;
  frequency: number;
  dateAdded: Date;
  dateCompleted?: Date;
  progress: number;
}

function HabitCard({ habit }: { habit: Habit }) {
  return (
    <div className="habit-card">
      <h3>{habit.name}</h3>
      <div>Frequency: {habit.frequency}</div>
      <div className="habit-progress">
        <progress
          value="{
            (habit.progress / habit.frequency) * 100
          }"
          max="100"
        >
          {habit.progress}%
        </progress>
        <div className="progress-text">
          Current Streak: {habit.progress} (
          {((habit.progress / habit.frequency) * 100).toFixed(2)}%)
        </div>
      </div>
      <button className="mark-complete">Mark Complete</button>
      <button className="mark-incomplete">Mark Incomplete</button>
      <button className="delete-habit">Delete</button>
    </div>
  );
}

export default HabitCard;
