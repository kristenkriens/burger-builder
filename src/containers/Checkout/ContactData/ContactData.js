import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axiosOrders from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (e) => {
    e.preventDefault();

    this.setState({
      loading: true
    });

    const order = {
      ingredients: this.props.ingredients,
      total: this.props.totalPrice,
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
          loading: false
        });
        this.props.history.push('/');
      }).catch((error) => {
        this.setState({
          loading: false
        });
      });
  }

  render() {
    let form = (
      <form>
        <input type="text" name="name" placeholder="Your name" className={classes.input} />
        <input type="email" name="email" placeholder="Your email" className={classes.input} />
        <input type="text" name="street" placeholder="Street" className={classes.input} />
        <input type="text" name="postalCode" placeholder="Postal Code" className={classes.input} />
        <Button type="success" clicked={this.orderHandler}>ORDER</Button>
      </form>
    );
    if(this.state.loading) {
      form = <Spinner />
    }

    return (
      <div className={classes.contactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    )
  }
}

export default ContactData;
