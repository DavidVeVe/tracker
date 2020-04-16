import React, { Component } from "react";

import "./ExpenseList.css";

import NewExpense from "../../components/NewExpense/NewExpense";
import Transactions from "../../components/Transactions/Transactions";
import ListItem from "../../components/ListItem/ListItem";
import Modal from "../../components/UI/Modal/Modal";

class ExpenseList extends Component {
  constructor(props) {
    super(props);
    this.category = React.createRef();
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
    categories: ["Comida", "Salud", "Servicios", "Transporte", "Otro"],
    show: true,
  };

  itemAddTracker = (e) => {
    e.preventDefault();
    // const itemsData = [...this.state.data];

    // itemsData.push(this.state.form);

    // this.setState({
    //   data: itemsData,
    //   form: {
    //     itemName: "",
    //     amount: "",
    //     date: "",
    //     category: "",
    //   },
    // });
    this.setState((prevState) => {
      const itemsData = [...prevState.data];
      itemsData.push(this.state.form);
      return {
        data: itemsData,
        form: {
          itemName: "",
          amount: "",
          date: "",
          category: "",
        },
        show: false,
      };
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
    this.setState((prevState) => {
      const itemsData = [...prevState.data];
      itemsData.splice(index, 1);
      return {
        data: itemsData,
        form: {
          itemName: "",
          amount: "",
          date: "",
          category: "",
        },
      };
    });
  };

  modalClosedHandler = (e) => {
    e.preventDefault();
    this.setState({ show: false });
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
        <Modal show={this.state.show} clickClosed={this.modalClosedHandler}>
          <NewExpense
            clickClosed={this.modalClosedHandler}
            clicked={this.itemAddTracker}
            changed={this.itemChangeHandler}
            values={this.state.form}
            options={this.state.categories}
            selectorChanged={this.selectorChanged}
            reference={this.category}
          />
        </Modal>
        <Transactions />
        {items}
      </section>
    );
  }
}

export default ExpenseList;
