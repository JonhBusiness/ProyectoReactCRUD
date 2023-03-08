import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CellPhones from "../pages/home/CellPhones";
import DashBoard from "../pages/home/DashBoard";
import Games from "../pages/home/Games";
import CellPhonesTask from "../pages/tasks/CellPhonesTask";
import GamesTask from "../pages/tasks/GamesTask";
import "../assets/css/styles.css";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/zonegames" element={<Games />} />
          <Route path="/zonegames/Add" element={<GamesTask />} />
          <Route path="/zonegames/Edit/:id" element={<GamesTask />} />
          <Route path="/zonegames/Delete/:id" element={<GamesTask del={true} />} />
          <Route path="/zonecellphones" element={<CellPhones />} />
          <Route path="/zonecellphones/Add" element={<CellPhonesTask />} />
          <Route path="/zonecellphones/Edit/:id" element={<CellPhonesTask />} />
          <Route path="/zonecellphones/Delete/:id" element={<CellPhonesTask del={true} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
