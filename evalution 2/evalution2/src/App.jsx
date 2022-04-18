import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ShowStudents } from "../src/components/ShowStudents";
import { AddStudent } from "../src/components/AddStudent";

function App() {
  const [count, setCount] = useState(0);
  const [showPage, setShowPage] = useState(false);

  return (
    <div className="App">
      <button className="togglebtn" onClick={()=>setShowPage(false)}>Toggle</button>
      <button onClick={() => setShowPage(true)}>form</button>

      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
      {showPage === true ? <AddStudent /> : <ShowStudents />}
      {/* <AddStudent /> */}
    </div>
  );
}

export default App;
