import React from 'react';
import { connect } from 'react-redux';
import {addToCart, removeFromCart} from '../../../redux/actions';
import {convertObjToArr} from '../../../helperFunctions/helper';

const oneProduct = ({id, name, price, quantity, category, addFn, subtractFn, allItems, addToCart, removeFromCart}) => {

  const addToCartFn = () => {
    let array = convertObjToArr(allItems);
    let itemWeWantToAdd = array.filter(item => item.id === id)[0];
    addToCart(itemWeWantToAdd);
  }

  const removeFromCartFn = () => {
    let array = convertObjToArr(allItems);
    let itemWeWantToRemove = array.filter(item => item.id === id);
    itemWeWantToRemove = itemWeWantToRemove[0];
    
    removeFromCart(itemWeWantToRemove);
  }


  return (
    <div 
      className='card border-primary col-lg-3 col-md-3 mb-3' 
      style={{display: ''}}>

      <div className='card-header'><span className='productName '>{name}</span></div>

      <div className="card-body">
          <h4 className="card-title">Category: {category}</h4>
          <button onClick={addToCartFn}>Add to cart</button>
          <button onClick={removeFromCartFn}>Remove from cart</button>
        <p>Quantity: {quantity}</p>
        <p>price: {price}</p>
      </div>
  
    </div>
  );
}

const mapStateToProps = state => {
  return {
    allItems: state.products,
    cartItems: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (object) => dispatch(addToCart(object)),
    removeFromCart: (object) => dispatch(removeFromCart(object))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(oneProduct);
