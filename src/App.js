import React from 'react';
import Verse from "./components/Verse";
import { Route } from "react-router-dom";
import "./css/reset.css";
import "./css/index.css";

function App() {
  return (
    <div className="app">
        <Verse />
    </div>
  );
}

export default App;
