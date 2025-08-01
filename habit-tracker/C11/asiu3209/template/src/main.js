let habitID = 3; // next unique ID for habit

const allHabits = [
  {
    id: 0,
    name: "Exercise",
    frequency: "45",
    dateAdded: "2023-10-01",
    progress: 65,
  },
  {
    id: 1,
    name: "Read",
    frequency: "20",
    dateAdded: "2023-10-02",
    progress: 30,
  },
  {
    id: 2,
    name: "Meditate",
    frequency: "365",
    dateAdded: "2023-10-03",
    progress: 80,
  },
];

function displayHabits() {
  const habitList = document.getElementById("habits-list");
  habitList.innerHTML = ""; // Clear previous habits to prevent duplicates
  for (const habit of allHabits) {
    const newHabbit = document.createElement("div");
    newHabbit.className = "habit-card";
    newHabbit.id = habit.id;
    newHabbit.innerHTML = `
      <h3>${habit.name}</h3>
      <div>Frequency: ${habit.frequency}</div>
      <div class="habit-progress">
          <progress value="${habit.progress}" max="100">${habit.progress}%</progress>
        <div class="progress-text">${habit.progress}% Complete</div>
      </div>
        <button class="mark-complete">Mark Complete</button>
        <button class="mark-incomplete">Mark Incomplete</button>
        <button class="delete-habit">Delete</button>
    `;
    habitList.appendChild(newHabbit);
  }
}

document.getElementById("habit-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const habit = {
    id: habitID++,
    name: formData.get("habit-name"),
    frequency: formData.get("habit-frequency"),
    dateAdded: new Date().toISOString().split("T")[0], // Current date in YYYY-MM-DD format
    progress: 0,
  };
  allHabits.push(habit);
  console.log("New habit created:", habit);
  displayHabits();
  e.reset();
});

document.getElementById("habits-list").addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-habit")) {
    const habitCard = e.target.closest(".habit-card");
    const id = parseInt(habitCard.id);
    deleteCard(id);
  }
});

function deleteCard(id) {
  for (let i = 0; i < allHabits.length; i++) {
    if (allHabits[i].id === id) {
      allHabits.splice(i, 1);
      console.log("Habit deleted:", id);
      displayHabits();
      return;
    }
  }
}

document.addEventListener("DOMContentLoaded", displayHabits);
