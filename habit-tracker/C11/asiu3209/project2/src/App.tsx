import "./index.css";
import HomePage from "./Pages/HomePage";
import NavBar from "./components/NavBar";
import StatisticsPage from "./Pages/StatisticsPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
      </Routes>
    </>
  );
}
export default App;
