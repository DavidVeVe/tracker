import React, { Component } from "react";

import "./ExpenseList.css";

import NewExpense from "../../components/NewExpense/NewExpense";
import ListItemsNames from "../../components/ListItemsNames/ListItemsNames";
import ListItem from "../../components/ListItem/ListItem";
import Modal from "../../components/UI/Modal/Modal";

class ExpenseList extends Component {
  constructor(props) {
    super(props);
    this.category = React.createRef();
  }

  state = {
    data: [],
    form: {
      itemName: "",
      amount: "",
      date: "",
      category: "",
    },
    categories: ["Comida", "Salud", "Servicios", "Transporte", "Otro"],
    show: false,
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

  modalOpenedHandler = () => {
    this.setState({ show: true });
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
        <ListItemsNames clickedOpened={this.modalOpenedHandler} />
        {items}
      </section>
    );
  }
}

export default ExpenseList;
