import "./App.css";
import Employee from "./components/Employee";
import Intern from "./components/Intern";
import { useState } from "react";

function App() {
  const [role, setRole] = useState("role?");

  return (
    <div className="App">
      <>
        <input
          type="text"
          placeholder=""
          onKeyDown={(e) => setRole(e.target.value)}
        />
        <Employee name="Caleb" role="Dev" />
        <Employee name="Susan" role={role} />
      </>

      <Intern intern_name="Christian" intern_age="42" />
    </div>
  );
}

export default App;
