import React, { useState } from "react";

import "./App.css";

import ItemsManager from "./containers/ItemsManager/ItemsManager";
import Layout from "./hoc/Layout/Layout";

function App() {
  const [option, setOption] = useState({
    income: true,
    expense: false,
  });

  const showIncomeHandler = () => {
    setOption({
      income: true,
      expense: false,
    });
  };

  const showExpensesHandler = () => {
    setOption({
      income: false,
      expense: true,
    });
  };

  return (
    <Layout
      showIncomeComponent={showIncomeHandler}
      showExpenseComponent={showExpensesHandler}
    >
      <ItemsManager incomeVersion={option.income} />
    </Layout>
  );
}

export default App;
