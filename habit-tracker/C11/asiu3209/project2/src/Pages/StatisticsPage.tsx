import { Habit } from "../components/HabitCard";

interface StatisticsPageProps {
  habits: Habit[];
}

function StatisticsPage({ habits }: StatisticsPageProps) {
  return (
    <>
      {habits.map((habit, idx) =>
        habit.progress === habit.frequency ? (
          <div key={idx}>This is a test</div>
        ) : null
      )}
    </>
  );
}

export default StatisticsPage;
