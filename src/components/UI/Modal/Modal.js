import React, { Component, Fragment } from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    const { children, show, modalClosed } = this.props;

    return (
      <Fragment>
        <Backdrop show={show} close={modalClosed} />
        <div
          className={classes.modal}
          style={{
            transform: show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: show ? '1' : '0'
          }}
        >
          {children}
        </div>
      </Fragment>
    )
  }
}

export default Modal;
