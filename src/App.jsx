import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";

function App() {
  const [name, Setname] = useState("");
  const [email, Setemail] = useState("");
  const [pass, Setpass] = useState("");
  const [passcon, Setpasscon] = useState("");
  const [error, Seterror] = useState("");

  const SumbitHandler = (event) => {
    event.preventDefault();

    if (pass.length < 8) {
      Seterror("must be 8 charector");
      return;
    }
    if (pass !== passcon) {
      Seterror("Password not match");
      return;
    }
    if (!/[!@#$%^&*]/.test(pass)) {
      SetError(
        "Password must include at least one special character (!@#$%^&*)."
      );
      return;
    }
    if (!/[A-Z]/.test(pass)) {
      SetError("Password must include at least one special character (A-Z).");
      return;
    }

    Setname("");
    Setemail("");
    Setpass("");
    Setpasscon("");
    Seterror("");

    toast.success("🦄 Wow Login Done!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <div className="form-container">
      <form
        className="form"
        action=""
        onSubmit={(event) => {
          SumbitHandler(event);
        }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          className="input"
          value={name}
          onChange={(e) => {
            Setname(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Enter your mailid"
          className="input"
          value={email}
          onChange={(e) => {
            Setemail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Enter password"
          className="input"
          value={pass}
          onChange={(e) => {
            Setpass(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Reenter password"
          className="input"
          value={passcon}
          onChange={(e) => {
            Setpasscon(e.target.value);
          }}
        />
        {error && <p>{error}</p>}
        <button type="submit" className="button">
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default App;
