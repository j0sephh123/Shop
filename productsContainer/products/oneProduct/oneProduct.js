import React from 'react';
import { connect } from 'react-redux';
import {addToCart, removeFromCart, quantityAction} from '../../../redux/actions';
import {convertObjToArr} from '../../../helperFunctions/helper';

const oneProduct = ({
  id, 
  name, 
  price, 
  quantity, 
  category, 
  addFn, 
  subtractFn, 
  allItems, 
  addToCart, 
  removeFromCart,
  quantityAction
}) => {

  const addToCartFn = (id, category, plusOrMinus) => {
    let array = convertObjToArr(allItems);
    let itemWeWantToAdd = array.filter(item => item.id === id)[0];
    addToCart(itemWeWantToAdd);
    quantityAction(id, category, plusOrMinus);
  }

  const removeFromCartFn = (id, category, plusOrMinus) => {
    let array = convertObjToArr(allItems);
    let itemWeWantToRemove = array.filter(item => item.id === id);
    itemWeWantToRemove = itemWeWantToRemove[0];
    removeFromCart(itemWeWantToRemove);
    quantityAction(id, category, plusOrMinus);
  }


  return (
    <div 
      className='card border-primary col-lg-3 col-md-3 mb-3' 
      style={{display: ''}}>
      <img src='http://placehold.it/150x150' alt='' />

      <div className='card-header'><span className='productName'>{name}</span></div>

      <div className="card-body">

          <button className='btn' onClick={() => addToCartFn(id, category, 'minus')}><i className="fas fa-plus"></i></button>
          <button className='btn' onClick={() => removeFromCartFn(id, category, 'plus')}><i className="fas fa-minus"></i></button><hr />
        <p>Quantity: {quantity}</p><hr />
        <p><i className="fas fa-dollar-sign"></i> {price}</p><hr />
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
    removeFromCart: (object) => dispatch(removeFromCart(object)),
    quantityAction: (itemId, productcategory, plusOrMinus) => dispatch(quantityAction(itemId, productcategory, plusOrMinus))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(oneProduct);
