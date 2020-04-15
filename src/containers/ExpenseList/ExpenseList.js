import React, { Component } from "react";

import "./ExpenseList.css";

import NewExpense from "../../components/NewExpense/NewExpense";
import Transactions from "../../components/Transactions/Transactions";
import ListItem from "../../components/ListItem/ListItem";

import data from "../../mocks/ExpenseData/ExpenseData";

class ExpenseList extends Component {
  constructor(props) {
    super(props);
    this.category = React.createRef();
    this.categories = ["Comida", "Salud", "Servicios", "Transporte", "Otro"];
  }

  state = {
    data: [],
    form: {
      itemName: "",
      amount: "",
      date: "",
      category: "",
    },
  };

  itemAddTracker = (e) => {
    e.preventDefault();

    data.push(this.state.form);

    this.setState({
      form: {
        itemName: "",
        amount: "",
        date: "",
        category: "",
      },
    });
  };

  itemChangeHandler = ({ target }) => {
    this.setState({
      form: {
        ...this.state.form,
        [target.name]: target.value,
      },
    });
  };

  itemDeletedHandler = (id) => {
    data.pop();
  };

  render() {
    const items = data.map((item, i) => {
      return (
        <ListItem
          key={item.itemName + i}
          itemId={i + 1}
          itemName={item.itemName}
          amount={item.amount}
          date={item.date}
          category={item.category}
          itemDeleted={() => this.itemDeletedHandler(i + 1)}
        />
      );
    });

    return (
      <section className="expenseList__container">
        <NewExpense
          clicked={this.itemAddTracker}
          changed={this.itemChangeHandler}
          values={this.state.form}
          options={this.categories}
          selectorChanged={this.selectorChanged}
          reference={this.category}
        />
        <Transactions />
        {items}
      </section>
    );
  }
}

export default ExpenseList;
