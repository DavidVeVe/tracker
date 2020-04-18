import React, { useState } from "react";

import "./App.css";

import ExpenseManager from "./containers/ExpenseManager/ExpenseManager";
import Layout from "./hoc/Layout/Layout";

function App() {
  const [option, setOption] = useState({
    income: true,
    expense: false,
  });

  console.log(option);

  const showIncomeHandler = () => {
    setOption({
      income: true,
      expense: false,
    });
    console.log(option);
  };

  const showExpensesHandler = () => {
    setOption({
      income: false,
      expense: true,
    });
    console.log(option);
  };

  return (
    <Layout
      showIncomeComponent={showIncomeHandler}
      showExpenseComponent={showExpensesHandler}
    >
      <ExpenseManager incomeVersion={option.income} />
    </Layout>
  );
}

export default App;
