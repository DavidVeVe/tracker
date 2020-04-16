import React, { Component } from "react";

import "./ExpenseManager.css";

import NewExpenseForm from "../../components/NewExpenseForm/NewExpenseForm";
import ItemsList from "../../components/ItemsList/ItemsList";
import Item from "../../components/Item/Item";
import Modal from "../../components/UI/Modal/Modal";

class ExpenseManager extends Component {
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
        <Item
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
          <NewExpenseForm
            clickClosed={this.modalClosedHandler}
            clicked={this.itemAddTracker}
            changed={this.itemChangeHandler}
            values={this.state.form}
            options={this.state.categories}
            selectorChanged={this.selectorChanged}
            reference={this.category}
          />
        </Modal>
        <h1>Expense Manager</h1>
        <ItemsList clickedOpened={this.modalOpenedHandler} />
        {items}
      </section>
    );
  }
}

export default ExpenseManager;