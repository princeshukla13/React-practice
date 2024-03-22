import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Display from "../components/Display";
import ButtonCon from "../components/ButtonCon";

function App() {
  return (
    <>
      <div className="calculator">
        <Display />
        <ButtonCon />
      </div>
    </>
  );
}

export default App;
