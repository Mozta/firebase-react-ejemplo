import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar bg-gray-800 p-4 flex items-center gap-4">
        <img src={reactLogo} className="logo react" alt="React logo" />
        <h1 className="text-3xl font-bold text-orange-500">
          Implementación de Firebase
        </h1>
      </nav>
    </>
  );
}

export default App;
