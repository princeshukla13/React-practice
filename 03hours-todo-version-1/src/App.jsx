import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Heading from "../components/Heading";
import Addtodo from "../components/Addtodo";
// import Showsitem from "../components/Showsitem";
import Todoitem from "../components/Todoitem";
import Welcome from "../components/Welcome";
function App() {
  let [todos, settodos] = useState([]);
  const onnewitem = (itemname, itemdate) => {
    const newitems = [
      ...todos,

      {
        name: itemname,
        date: itemdate,
      },
    ];
    settodos(newitems);
    console.log(itemname, itemdate);
  };
  const handleondelete = (todoitemname) => {
    const newdeleteitem = todos.filter((item) => item.name !== todoitemname);
    settodos(newdeleteitem);
    console.log(todoitemname);
  };
  return (
    <center className="todo-item">
      <Heading />
      <Addtodo onnewitem={onnewitem} />
      {todos.length == 0 && <Welcome />}
      <Todoitem todos={todos} handleondelete={handleondelete} />
    </center>
  );
}

export default App;
