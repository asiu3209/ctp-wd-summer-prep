import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NavBar from "./components/NavBar";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavBar />
    <HabitForm />
    <HabitList />
  </StrictMode>
);
