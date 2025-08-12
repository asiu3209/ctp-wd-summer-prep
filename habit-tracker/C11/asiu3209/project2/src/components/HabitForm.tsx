function HabitForm() {
  return (
    <form id="habit-form">
      <label>Habit Name:</label>
      <input type="text" name="habitName" placeholder="Habit Name" required />
      <label>Frequency:</label>
      <input
        type="number"
        name="frequency"
        placeholder="Frequency(Days)"
        required
        min="1"
        max="365"
      />
      <button type="submit">Add Habit</button>
    </form>
  );
}

export default HabitForm;
