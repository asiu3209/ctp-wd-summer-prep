
export interface Habit {
  id: number;
  name: string;
  frequency: number;
  dateAdded: Date;
  dateCompleted?: Date;
  progress: number;
}
export interface HabitCardProps {
  habit: Habit;
  markComplete: (id: number) => void;
  markIncomplete: (id: number) => void;
  deleteHabit: (id: number) => void;
}

function HabitCard({
  habit,
  markComplete,
  markIncomplete,
  deleteHabit,
}: HabitCardProps) {
  return (
    <div className="habit-card">
      <h3>{habit.name}</h3>
      <div>Frequency: {habit.frequency}</div>
      <div className="habit-progress">
        <progress value={(habit.progress / habit.frequency) * 100} max={100}>
          {habit.progress}%
        </progress>
        <div className="progress-text">
          Current Streak: {habit.progress} (
          {((habit.progress / habit.frequency) * 100).toFixed(2)}%)
        </div>
      </div>
      <button className="mark-complete" onClick={() => markComplete(habit.id)}>
        Mark Complete
      </button>
      <button
        className="mark-incomplete"
        onClick={() => markIncomplete(habit.id)}
      >
        Mark Incomplete
      </button>
      <button className="delete-habit" onClick={() => deleteHabit(habit.id)}>
        Delete
      </button>
    </div>
  );
}

export default HabitCard;
