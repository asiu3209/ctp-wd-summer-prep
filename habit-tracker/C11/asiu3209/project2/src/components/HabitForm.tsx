import React, { useState } from "react";
import { FormHabit } from "./HabitCard";
function HabitForm({ addHabit }: { addHabit: (habit: FormHabit) => void }) {
  const [formValue, setFormValue] = useState<FormHabit>({
    name: "",
    frequency: 1,
    progress: 0,
  });
  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addHabit(formValue);
    setFormValue({
      name: "",
      frequency: 1,
      progress: 0,
    });
  }
  return (
    <form id="habit-form" onSubmit={submitForm}>
      <label>Habit Name:</label>
      <input
        onChange={(e) => setFormValue({ ...formValue, name: e.target.value })}
        type="text"
        placeholder="Habit Name"
        name="name"
        value={formValue.name}
        required
      />
      <label>Frequency:</label>
      <input
        onChange={(e) =>
          setFormValue({ ...formValue, frequency: e.target.valueAsNumber })
        }
        type="number"
        name="frequency"
        placeholder="Frequency(Days)"
        required
        min="1"
        max="365"
        value={formValue.frequency}
      />
      <button type="submit">Add Habit</button>
    </form>
  );
}

export default HabitForm;
