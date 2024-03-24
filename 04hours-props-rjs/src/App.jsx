import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Fooditem from "../components/Fooditem";
import Item from "../components/Item";

function App() {
  let [fooditem, setfooditem] = useState([]);

  function handleevents(event) {
    if (event.key === "Enter") {
      let fooditems = event.target.value;
      event.target.value = "";
      let newitem = [...fooditem, fooditems];
      setfooditem(newitem);
    }
  }

  return (
    <>
      <h1>healthy food</h1>
      <input type="text" onKeyDown={handleevents} />
      <Fooditem items={fooditem} />;
    </>
  );
}

export default App;
