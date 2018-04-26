import React, { Component } from 'react';
import {connect} from 'react-redux'
import store from '../redux/store';
import * as actions from '../redux/actions';

 class Form extends Component {
  state = {
    name: '',
    editVal: '',
    newVal: ''
  }

  onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(() => {
      return {
        [name] : value
      } 
    });
  }

  addNewCategoryHandler = () => {
    store.dispatch(actions.addNewCategory(this.state.name))
  }

  removeCategoryHandler = () => {
    store.dispatch(actions.removeCategory(this.state.name));
  }

  editCategoryHandler = () => {
    store.dispatch(actions.updateData(this.state.name, this.state.editVal));
  }

  addItemToCategoryHandler = () => {
    store.dispatch(actions.addItemToCategory(this.state.name, this.state.editVal));
  }
  
  removeItem = () => {
    store.dispatch(actions.removeItem(this.state.name, this.state.editVal));
  }

  updateItem = () => {
    store.dispatch(actions.updateItem(this.state.name, this.state.editVal, this.state.newVal));
  }

  increaseQuantity = () => {
    console.log('increaseQuantity');
    store.dispatch(actions.increaseQuantity(this.state.name));
  }

  decreaseQuantity = () => {
    console.log('decreaseQuantity');
    store.dispatch(actions.decreaseQuantity(this.state.name));
  }

  render() {
    return (
      <div>
        <input 
          name='name'
          type='text' 
          value={this.state.inputVal} 
          onChange={(e) => this.onChangeHandler(e)} />
        <button onClick={this.addNewCategoryHandler}>Add new category</button>  
        <button onClick={this.removeCategoryHandler}>Remove category</button>  
        <input 
          name='editVal'
          type='text' 
          value={this.state.inputVal} 
          onChange={(e) => this.onChangeHandler(e)} />
        <input 
          name='newVal'
          type='text' 
          value={this.state.inputVal} 
          onChange={(e) => this.onChangeHandler(e)} />
        <p>Name: {this.state.name} || Edit value: {this.state.editVal}</p>
        <button onClick={this.editCategoryHandler}>Edit category</button>  
        <button onClick={this.addItemToCategoryHandler}>Add item to category</button>  
        <button onClick={this.removeItem}>Remove item from category</button>  
        <button onClick={this.updateItem}>Update item</button>  
        <button onClick={this.increaseQuantity}>Increase Quantity</button>  
        <button onClick={this.decreaseQuantity}>Decrease Quantity</button>  
      </div>
    );
  }
}

export default connect(null, null)(Form);