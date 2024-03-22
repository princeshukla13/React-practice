import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Fooditem from "../components/Fooditem";
import Item from "../components/Item";

function App() {
  let fooditem = ["dal", "chawal", "roti", "sabji"];

  return (
    <>
      <h1>healthy food</h1>
      <Fooditem items={fooditem} />;
    </>
  );
}

export default App;
