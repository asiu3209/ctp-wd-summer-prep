const allHabits = [
  { name: "Exercise", frequency: "Daily", dateAdded: "2023-10-01" },
  { name: "Read", frequency: "Weekly", dateAdded: "2023-10-02" },
  { name: "Meditate", frequency: "Daily", dateAdded: "2023-10-03" },
];

function displayHabits() {
  const habitList = document.getElementById("habits-list");
  habitList.innerHTML = ""; // Clear previous habits to prevent duplicates
  for (const habit of allHabits) {
    const habitItem = document.createElement("div");
    habitItem.className = "habit-item";
    habitItem.innerHTML = `
      <h3>${habit.name}</h3>
      <p>Frequency: ${habit.frequency}</p>
    `;
    habitList.appendChild(habitItem);
  }
}

document.getElementById("habit-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const habit = {
    name: formData.get("habit-name"),
    frequency: formData.get("habit-frequency"),
  };
  allHabits.push(habit);
  console.log("New habit created:", habit);
  displayHabits();
  e.reset();
});

document.addEventListener("DOMContentLoaded", displayHabits());
