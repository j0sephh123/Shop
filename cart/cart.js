import React from 'react';
import { connect } from 'react-redux';

const cart = (props) => {
  return (
    <div>
      cart
      <p>Number of items: {props.cartItems.count}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart
  }
}

export default connect(mapStateToProps, null)(cart);