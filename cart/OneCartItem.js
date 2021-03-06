import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  select, 
  quantityAction, 
  addToCart,  
  removeFromCart
} from '../redux/actions';

// const OneCartItem = ({p, name, id, quantity, selectAction, quantityAction}) => {
class OneCartItem extends Component {

  selectOnClickHandler = () => {
    this.props.selectAction(this.props.id);
  }

  addOrSubtractHandler = (itemId, productcategory, plusOrMinus) => {
    this.props.quantityAction(itemId, productcategory, plusOrMinus);
    if (plusOrMinus === 'minus'){
      this.props.removeFromCart(this.props.all);
    } else if (plusOrMinus === 'plus') {
      this.props.addToCart(this.props.all);
    }
  }

  render(){
    
    return (
      <li 
        className='list-group-item d-flex justify-content-between align-items-center'>
        <p onClick={() => this.selectOnClickHandler()}>{this.props.name}</p>
        
        <button 
          onClick={() => this.addOrSubtractHandler(this.props.id, this.props.all.category, 'plus')}
          >Plus</button>

        <button 
          onClick={() => this.addOrSubtractHandler(this.props.id, this.props.all.category, 'minus')}
          >Minus</button>

        <span className="badge badge-secondary badge-pill">{this.props.quantity}</span>
      </li>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    selectAction: (id) => dispatch(select(id)),
    addToCart: (object) => dispatch(addToCart(object)),
    removeFromCart: (object) => dispatch(removeFromCart(object)),
    quantityAction: (itemId, productcategory, plusOrMinus) => dispatch(quantityAction(itemId, productcategory, plusOrMinus))
  }
}

export default connect(null, mapDispatchToProps)(OneCartItem);