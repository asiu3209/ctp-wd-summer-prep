let habitID = 3; // next unique ID for habit

let allHabits = [
  {
    id: 0,
    name: "Exercise",
    frequency: 45,
    dateAdded: "2023-10-01",
    progress: 34,
  },
  {
    id: 1,
    name: "Read",
    frequency: 20,
    dateAdded: "2023-10-02",
    progress: 11,
  },
  {
    id: 2,
    name: "Meditate",
    frequency: 30,
    dateAdded: "2023-10-03",
    progress: 21,
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
          <progress value="${
            (habit.progress / habit.frequency) * 100
          }" max="100">${habit.progress}%</progress>
        <div class="progress-text">Current Streak: ${habit.progress} (${(
      (habit.progress / habit.frequency) *
      100
    ).toFixed(2)}%)</div>
      </div>
        <button class="mark-complete">Mark Complete</button>
        <button class="mark-incomplete">Mark Incomplete</button>
        <button class="delete-habit">Delete</button>
    `;
    habitList.appendChild(newHabbit);
  }
}
//Handles creating new habits and adding them to the list
document.getElementById("habit-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const habit = {
    id: habitID++,
    name: formData.get("habit-name"),
    frequency: Number(formData.get("habit-frequency")),
    dateAdded: new Date().toISOString().split("T")[0], // Current date in YYYY-MM-DD format
    progress: 0,
  };
  allHabits.push(habit);
  console.log("New habit created:", habit);
  saveHabits();
  displayHabits();
  e.target.reset();
});
//Deletes Habit Cards
document.getElementById("habits-list").addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-habit")) {
    const habitCard = e.target.closest(".habit-card");
    const id = parseInt(habitCard.id);
    deleteCard(id);
  }
  if (e.target.classList.contains("mark-complete")) {
    const habitCard = e.target.closest(".habit-card");
    for (let i = 0; i < allHabits.length; i++) {
      if (allHabits[i].id === parseInt(habitCard.id)) {
        allHabits[i].progress++;
        displayHabits();
        return;
      }
    }
  } else if (e.target.classList.contains("mark-incomplete")) {
    const habitCard = e.target.closest(".habit-card");
    for (let i = 0; i < allHabits.length; i++) {
      if (allHabits[i].id === parseInt(habitCard.id)) {
        allHabits[i].progress = 0;
        displayHabits();
        return;
      }
    }
  }
});

function deleteCard(id) {
  for (let i = 0; i < allHabits.length; i++) {
    if (allHabits[i].id === id) {
      allHabits.splice(i, 1);
      console.log("Habit deleted:", id);
      saveHabits();
      displayHabits();
      return;
    }
  }
}

function saveHabits() {
  localStorage.setItem("habits", JSON.stringify(allHabits));
}

function loadHabits() {
  const storedHabits = localStorage.getItem("habits");
  if (storedHabits) {
    allHabits = JSON.parse(storedHabits);
    habitID = allHabits.length
      ? Math.max(...allHabits.map((h) => h.id)) + 1
      : 0;
  } else {
    allHabits = [];
    habitID = 0;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadHabits();
  displayHabits();
});
