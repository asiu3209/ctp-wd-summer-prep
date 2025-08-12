function HabitForm() {
  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
  }
  return (
    <form id="habit-form" onSubmit={submitForm}>
      <label>Habit Name:</label>
      <input type="text" placeholder="Habit Name" name="habitName" required />
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
