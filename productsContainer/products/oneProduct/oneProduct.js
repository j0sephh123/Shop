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
      <img src='http://placehold.it/150x150' alt='' />

      <div className='card-header'><span className='productName'>{name}</span></div>

      <div className="card-body">

          <button className='btn' onClick={addToCartFn}><i className="fas fa-plus"></i></button>
          <button className='btn' onClick={removeFromCartFn}><i className="fas fa-minus"></i></button><hr />
        <p>Quantity: {quantity}</p><hr />
        <p>price: {price}</p><hr />
        <div className="card-footer">Category: {category}</div>
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
