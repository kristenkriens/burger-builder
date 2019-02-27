import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    }
  }

  render() {
    const {  } = this.props;

    return (
      <div className={classes.contactData}>
        <h4>Enter your Contact Data</h4>
        <form>
          <input type="text" name="name" placeholder="Your name" className={classes.input} />
          <input type="email" name="email" placeholder="Your email" className={classes.input} />
          <input type="text" name="street" placeholder="Street" className={classes.input} />
          <input type="text" name="postalCode" placeholder="Postal Code" className={classes.input} />
          <Button type="success">ORDER</Button>
        </form>
      </div>
    )
  }
}

export default ContactData;
