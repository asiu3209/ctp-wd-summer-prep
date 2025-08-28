import React, { useState } from "react";
import { FormHabit } from "./HabitCard";

function HabitForm({ addHabit }: { addHabit: (habit: FormHabit) => void }) {
  //useState used for storing form values
  const [formValue, setFormValue] = useState<FormHabit>({
    //Initital starting state
    name: "",
    frequency: 1,
    progress: 0,
  });
  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addHabit(formValue);
    //resets form after submission
    setFormValue({
      name: "",
      frequency: 1,
      progress: 0,
    });
  }
  //Onchange sets formValue as info is being inputed
  return (
    <form id="habit-form" onSubmit={submitForm}>
      <label htmlFor="name">Habit Name:</label>
      <input
        onChange={(e) => setFormValue({ ...formValue, name: e.target.value })}
        type="text"
        placeholder="Habit Name"
        name="name"
        value={formValue.name}
        required
      />
      <label htmlFor="frequency">Frequency:</label>
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
