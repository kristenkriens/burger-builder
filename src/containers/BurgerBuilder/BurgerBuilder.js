import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axiosOrders from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.75,
  cheese: 0.5,
  meat: 1.5
}

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 5,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  }

  componentDidMount = () => {
    axios.get('https://burger-builder-6574c.firebaseio.com/ingredients.json')
      .then((response) => {
        this.setState({
          ingredients: response.data
        })
      }).catch((error) => {
        this.setState({error: true})
      });
  }

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients).map((ingredientKey) => {
      return ingredients[ingredientKey];
    }).reduce((prev, curr) => {
      return prev + curr;
    }, 0);

    this.setState({
      purchasable: sum > 0
    })
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });

    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];

    if(oldCount >= 1) {
      const updatedCount = oldCount - 1;
      const updatedIngredients = {
        ...this.state.ingredients
      };
      updatedIngredients[type] = updatedCount;

      const priceDeduction = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceDeduction;

      this.setState({
        totalPrice: newPrice,
        ingredients: updatedIngredients
      });

      this.updatePurchaseState(updatedIngredients);
    }
  }

  purchaseHandler = () => {
    this.setState({
      purchasing: true
    })
  }

  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false
    })
  }

  purchaseContinueHandler = () => {
    this.setState({
      loading: true
    });

    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Kristen Kriens',
        address: {
          street: '1 Test Street',
          postalCode: 'A1A 1A1',
          country: 'Canada'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }

    axiosOrders.post('/orders.json', order)
      .then((response) => {
        this.setState({
          loading: false,
          purchasing: false
        });
      }).catch((error) => {
        this.setState({
          loading: false,
          purchasing: false
        });
      });
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />

    let orderSummary = null;

    if(this.state.ingredients) {
      burger = (
        <Fragment>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            purchasing={this.purchaseHandler}
          />
        </Fragment>
      )

      orderSummary = <OrderSummary
        ingredients={this.state.ingredients}
        purchaseContinued={this.purchaseContinueHandler}
        purchaseCancelled={this.purchaseCancelHandler}
        price={this.state.totalPrice}
      />
    }

    if(this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Fragment>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Fragment>
    )
  }
}

export default withErrorHandler(BurgerBuilder, axios);
