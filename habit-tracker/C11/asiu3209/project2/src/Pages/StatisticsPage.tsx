import { Habit } from "../components/HabitCard";

interface StatisticsPageProps {
  habits: Habit[];
}

function StatisticsPage({ habits }: StatisticsPageProps) {
  return (
    <ul className="completed-habits-list">
      <div className="completed-habit-header">
        <span className="completed-habit-item-span">Habit Name</span>
        <span className="completed-habit-item-span">Date Added</span>
        <span className="completed-habit-item-span">Date Completed</span>
        <span className="completed-habit-item-span">Frequency</span>
      </div>
      {habits.map((habit) =>
        habit.progress === habit.frequency ? (
          <li className="completed-habit-item">
            <span className="completed-habit-item-span">{habit.name}</span>
            <span className="completed-habit-item-span">
              {habit.dateAdded.toLocaleString()}
            </span>
            <span className="completed-habit-item-span">
              {habit.dateCompleted?.toLocaleString()}
            </span>
            <span className="completed-habit-item-span">{habit.frequency}</span>
          </li>
        ) : null
      )}
    </ul>
  );
}

export default StatisticsPage;
