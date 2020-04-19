import React, { Component } from "react";

import "./ItemsManager.css";

import NewItemForm from "../../components/NewItemForm/NewItemForm";
import ItemsList from "../../components/ItemsList/ItemsList";
import Description from "../../components/Description/Description";
import Modal from "../../components/UI/Modal/Modal";

class ItemsManager extends Component {
  constructor(props) {
    super(props);
    this.category = React.createRef();
  }

  state = {
    data: {
      income: [],
      expense: [],
    },
    expenseForm: {
      itemName: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    },
    incomeForm: {
      itemName: "",
      amount: "",
      date: "",
      description: "",
    },
    formValidation: true,
    uxDescription: "",
    categories: ["Comida", "Salud", "Servicios", "Transporte", "Otro"],
    show: false,
    showDescription: false,
    selectedItemIndex: null,
  };

  itemAdder = (e) => {
    e.preventDefault();

    if (
      (this.state.incomeForm.itemName.length !== 0 &&
        this.state.incomeForm.date.length !== 0 &&
        this.state.incomeForm.amount.length !== 0) ||
      (this.state.expenseForm.itemName.length !== 0 &&
        this.state.expenseForm.category.length !== 0 &&
        this.state.expenseForm.date.length !== 0 &&
        this.state.expenseForm.amount.length !== 0)
    ) {
      this.setState((prevState) => {
        const incomeData = [...prevState.data.income];
        const expenseData = [...prevState.data.expense];
        if (this.props.incomeVersion) {
          incomeData.push(this.state.incomeForm);
        } else {
          expenseData.push(this.state.expenseForm);
        }

        return {
          data: {
            income: incomeData,
            expense: expenseData,
          },
          incomeForm: {
            itemName: "",
            amount: "",
            date: "",
            category: "",
            description: "",
          },
          expenseForm: {
            itemName: "",
            amount: "",
            date: "",
            category: "",
            description: "",
          },
          formValidation: true,
          show: false,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          show: prevState.show,
          formValidation: false,
        };
      });
    }
  };

  itemChanged = ({ target }) => {
    if (this.props.incomeVersion) {
      this.setState({
        incomeForm: {
          ...this.state.incomeForm,
          [target.name]: target.value,
        },
        formValidation: true,
      });
    } else {
      this.setState({
        expenseForm: {
          ...this.state.expenseForm,
          [target.name]: target.value,
        },
        formValidation: true,
      });
    }
  };

  itemDeleted = (index, e) => {
    e.stopPropagation();

    this.setState((prevState) => {
      const incomeData = [...prevState.data.income];
      const expenseData = [...prevState.data.expense];
      if (this.props.incomeVersion) {
        incomeData.splice(index, 1);
      } else {
        expenseData.splice(index, 1);
      }

      return {
        data: {
          income: incomeData,
          expense: expenseData,
        },
        incomeForm: {
          itemName: "",
          amount: "",
          date: "",
          category: "",
          description: "",
        },
        expenseForm: {
          itemName: "",
          amount: "",
          date: "",
          category: "",
          description: "",
        },
      };
    });
  };

  modalToggleHandler = (e) => {
    e.preventDefault();

    const modal = this.state.show;

    this.setState({
      show: !modal,
      incomeForm: {
        itemName: "",
        amount: "",
        date: "",
        category: "",
        description: "",
      },
      expenseForm: {
        itemName: "",
        amount: "",
        date: "",
        category: "",
        description: "",
      },
      formValidation: true,
    });
  };

  descriptionToggleHandler = (index) => {
    const showDescription = this.state.showDescription;

    let description;

    if (this.props.incomeVersion) {
      description = this.state.data.income[index];
    } else {
      description = this.state.data.expense[index];
    }

    this.setState({
      showDescription: !showDescription,
      selectedItemIndex: index,
      uxDescription: description,
    });
  };

  render() {
    const uxDescription = this.state.uxDescription;

    let totalData;
    if (this.props.incomeVersion) {
      totalData = this.state.data.income;
    } else {
      totalData = this.state.data.expense;
    }

    const total = totalData
      .map((item) => {
        return parseInt(item.amount);
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    return (
      <section className="expenseList__container">
        {this.state.show ? (
          <Modal show={this.state.show} clickClosed={this.modalToggleHandler}>
            <NewItemForm
              incomeVersion={this.props.incomeVersion}
              clickClosed={this.modalToggleHandler}
              clicked={this.itemAdder}
              changed={this.itemChanged}
              values={
                this.props.incomeVersion
                  ? this.state.incomeForm
                  : this.state.expenseForm
              }
              options={this.state.categories}
              reference={this.category}
              formValidated={this.state.formValidation}
            />
          </Modal>
        ) : (
          <Modal
            show={this.state.showDescription}
            clickClosed={this.descriptionToggleHandler}
          >
            <Description
              descriptionToggle={this.descriptionToggleHandler}
              descriptionValues={uxDescription ? uxDescription : {}}
            />
          </Modal>
        )}
        {this.props.incomeVersion ? (
          <h1>Gestor de ingresos</h1>
        ) : (
          <h1>Gestor de gastos</h1>
        )}
        <ItemsList
          totalAmount={total}
          descriptionToggle={this.descriptionToggleHandler}
          clickedOpened={this.modalToggleHandler}
          itemsValues={
            this.props.incomeVersion
              ? this.state.data.income
              : this.state.data.expense
          }
          version={this.props.incomeVersion}
          clickedDeleted={this.itemDeleted}
        />
      </section>
    );
  }
}

export default ItemsManager;
