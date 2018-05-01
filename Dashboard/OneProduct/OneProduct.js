import React, {Component} from 'react'
import {connect} from 'react-redux';
import {changePrice, removeItem, updateItem} from '../../redux/actions';

class OneProduct extends Component {
  state = {
    showPriceForm: false,
    showUpdateForm: false,
    newUpdateValue: '',
    price: 0
  }
  
  showPriceFormFn = () => {
    this.setState({showPriceForm: !this.state.showPriceForm});
  } // show price form
    
  showUpdateFormFn = () => {
    this.setState({showUpdateForm: !this.state.showUpdateForm});
  } // show update form

  onUpdateFn = () => {
    this.props.updateItemAction(this.props.product, this.state.newUpdateValue);
  } // update action

  onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(() => {
      return {
        [name] : value
      }
    });
  } // update local state on input typing

  onPriceChangeFn = () => {
    this.props.changePriceAction(this.props.product, this.state.price);
  } // change price action

  onRemoveItem = () => {
    this.props.removeItemAction(this.props.product);
  } // remove action

  render(){
    return (
      <div className='border border-secondary m-1'>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          <span>Name: {this.props.name}</span>
          <span>Category: {this.props.product.category}</span>
          <span className='badge badge-primary badge-pill'>Quantity: {this.props.quantity}</span>
          <button onClick={this.props.quantityActionPlus}>Add quantity</button>
          <button onClick={this.props.quantityActionMinus}>Subtract quantity</button>
          <span className='badge badge-secondary badge-pill'>Price: {this.props.price}</span>
        </li>
        <li className='list-group-item'>
          <button onClick={this.showPriceFormFn}>Change Price</button>
          <button onClick={this.onRemoveItem}>Remove Working</button>
          <button onClick={this.showUpdateFormFn}>Update not yet implemented</button>
        </li>
        <li className='list-group-item'>
          {this.state.showPriceForm ? 

            <fieldset>
            <legend>Change Price</legend>
              <input 
                type='number'
                name='price'  
                value={this.state.price}
                onChange={this.onChangeHandler}  
              />
              <button onClick={this.onPriceChangeFn}>Submit</button>
            </fieldset>

          : null}
          {this.state.showUpdateForm ? 

            <fieldset>
            <legend>Update Form</legend>
              <input 
                type='text'
                name='newUpdateValue'  
                value={this.state.newUpdateValue}
                onChange={this.onChangeHandler}  
              />
              <button onClick={this.onUpdateFn}>Submit</button>
            </fieldset>

          : null}    
        </li>
      </div>   
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changePriceAction: (product, newPrice) => dispatch(changePrice(product, newPrice)),
    removeItemAction: (product) => dispatch(removeItem(product)),
    updateItemAction: (product, newValue) => dispatch(updateItem(product, newValue))
  }
}

export default connect(null, mapDispatchToProps)(OneProduct);