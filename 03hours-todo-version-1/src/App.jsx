import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Heading from "../components/Heading";
import Addtodo from "../components/Addtodo";
// import Showsitem from "../components/Showsitem";
import Todoitem from "../components/Todoitem";
function App() {
  const todos = [
    {
      name: "buymilk",
      date: "12/02/23",
    },
    {
      name: "gotoclg",
      date: "12/02/23",
    },
    {
      name: "gotoclg",
      date: "12/02/23",
    },
  ];
  return (
    <center className="todo-item">
      <Heading />
      <Addtodo />
      <Todoitem todos={todos} />
    </center>
  );
}

export default App;
