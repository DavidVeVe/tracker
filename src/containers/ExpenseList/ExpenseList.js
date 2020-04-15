import React, { Component } from "react";

import "./ExpenseList.css";

import NewExpense from "../../components/NewExpense/NewExpense";
import Transactions from "../../components/Transactions/Transactions";
import ListItem from "../../components/ListItem/ListItem";

class ExpenseList extends Component {
  constructor(props) {
    super(props);
    this.category = React.createRef();
    this.categories = ["Comida", "Salud", "Servicios", "Transporte", "Otro"];
  }

  state = {
    data: [
      {
        itemName: "Pago internet",
        amount: 500,
        date: "2020-05-04",
        category: "Servicios",
      },
      {
        itemName: "Gasolina",
        amount: 500,
        date: "2020-09-05",
        category: "Transporte",
      },
      {
        itemName: "Tacos",
        amount: 100,
        date: "2020-01-04",
        category: "Comida",
      },
    ],
    form: {
      itemName: "",
      amount: "",
      date: "",
      category: "",
    },
  };

  itemAddTracker = (e) => {
    e.preventDefault();
    const itemsData = [...this.state.data];

    itemsData.push(this.state.form);
    console.log(this.state.data);
    console.log(this.state.form);
    console.log(itemsData);

    this.setState({
      data: itemsData,
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

  itemDeletedHandler = (index) => {
    const itemsData = [...this.state.data];
    itemsData.splice(index, 1);
    this.setState({
      data: itemsData,
      form: {
        itemName: "",
        amount: "",
        date: "",
        category: "",
      },
    });
  };

  render() {
    const items = this.state.data.map((item, i) => {
      return (
        <ListItem
          key={item.itemName + i}
          itemId={i + 1}
          itemName={item.itemName}
          amount={item.amount}
          date={item.date}
          category={item.category}
          itemDeleted={() => this.itemDeletedHandler(i)}
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
