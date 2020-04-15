import React from "react";
import "./App.css";

import ExpenseManager from "./containers/ExpenseList/ExpenseList";

function App() {
  return (
    <div className="app__container" style={{ marginTop: "50px" }}>
      <ExpenseManager />
    </div>
  );
}

export default App;
