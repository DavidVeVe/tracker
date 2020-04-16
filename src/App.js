import React from "react";
import "./App.css";

import ExpenseManager from "./containers/ExpenseManager/ExpenseManager";

function App() {
  return (
    <div className="app__container" style={{ marginTop: "50px" }}>
      <ExpenseManager />
    </div>
  );
}

export default App;
