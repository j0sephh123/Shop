import React from 'react';
import { connect } from 'react-redux';
import {addToCart, removeFromCart, quantityAction} from '../../../redux/actions';
import {convertObjToArr} from '../../../helperFunctions/helper';
import {Link} from 'react-router-dom';

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
    if(quantity > 0){
      let array = convertObjToArr(allItems);
      let itemWeWantToAdd = array.filter(item => item.id === id)[0];
      addToCart(itemWeWantToAdd);
      quantityAction(id, category, plusOrMinus);
    }
  }

  const removeFromCartFn = (id, category, plusOrMinus) => {
    let array = convertObjToArr(allItems);
    let itemWeWantToRemove = array.filter(item => item.id === id);
    itemWeWantToRemove = itemWeWantToRemove[0];
    removeFromCart(itemWeWantToRemove);
    quantityAction(id, category, plusOrMinus);
  }


  return (
    <div className='col-lg-3 col-md-3 mb-3'>
      <div 
        className='card h-100 text-center' 
        style={{display: ''}}>
        <img className="card-img-top" src="http://placehold.it/700x400" alt="" />

        <div className='card-header'><span className='productName'>{name}</span></div>
        <h4 className=" mt-2 card-title">
          <Link to={`/products/${id}`}>{name}</Link>
        </h4>
        <div className="card-body">

            <button className='btn' onClick={() => addToCartFn(id, category, 'minus')}><i className="fas fa-plus"></i></button>
            <button className='btn' onClick={() => removeFromCartFn(id, category, 'plus')}><i className="fas fa-minus"></i></button><hr />
          <p>Category: {category}</p><hr />
          <p><i className="fas fa-dollar-sign"></i> {price}</p><hr />
          <div className="card-footer">            
            Products left: {quantity}
          </div>
        </div>
    
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
