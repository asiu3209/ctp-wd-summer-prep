import { completedHabits } from "./main.js";

function displayCompletedHabits() {
  const completedList = document.getElementById("completed-habits-list");
  for (let habit of completedHabits) {
    const completedItem = document.createElement("li");
    completedItem.className = "completed-habit-item";
    completedItem.innerHTML = `
        <span class="completed-habit-item-span">${habit.name}</span>
        <span class="completed-habit-item-span">${habit.dateAdded}</span>
        <span class="completed-habit-item-span">${habit.dateCompleted}</span>
        <span class="completed-habit-item-span">${habit.frequency}</span>
    `;
    completedList.appendChild(completedItem);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  displayCompletedHabits();
});
