import { useState } from "react";

import "./App.css";
import Display from "../components/Display";
import ButtonCon from "../components/ButtonCon";

function App() {
  let [calval, setcalval] = useState("");
  let onclickedbtn = (buttontext) => {
    if (buttontext === "C") {
      setcalval("");
    } else if (buttontext === "=") {
      let result = eval(calval);
      setcalval(result);
    } else {
      let newdisplayvalue = calval + buttontext;
      setcalval(newdisplayvalue);
    }
  };
  return (
    <>
      <div className="calculator">
        <Display displayvalue={calval} />
        <ButtonCon onclickedbtn={onclickedbtn} />
      </div>
    </>
  );
}

export default App;
