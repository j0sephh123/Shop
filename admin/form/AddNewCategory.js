import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addNewCategory, removeCategory, updateCategory} from '../../redux/actions';

class AddNewCategory extends Component {
  state = {
    newCategoryName: '',
    removeCategoryName: '',
    selectedCategory: '',
    updatedCategoryName: ''

  }

  addNewCategoryHandler = () => {
    this.props.addNewCategoryDispatch(this.state.newCategoryName);
  } // for adding new category -> 1 input

  removeCategoryHandler = () => {
    this.props.removeCategoryDispatch(this.state.removeCategoryName);
  } // for removing a category -> 1 input

  updatedCategoryHandler = () => {
    this.props.updateCategoryDispatch(this.state.selectedCategory, this.state.updatedCategoryName);
  }

  onChangeHandler = (e) => {
    const name = e.target.name
    const data = e.target.value;
    this.setState(() => {
      return {
        [name] : data
      }
    });
  } // for input updating state
  
  render(){
    return (
      <div>
        <fieldset>
          <legend>Add a new category</legend>
            <input 
              type='text'
              name='newCategoryName'
              onChange={this.onChangeHandler}
              value={this.state.newCategoryName}
            />

            <button onClick={this.addNewCategoryHandler}>Add new category</button>
            <span>State: {this.state.newCategoryName}</span>
        </fieldset>
        <fieldset>
          <legend>Remove category</legend>
            <input 
              type='text'
              name='removeCategoryName'
              onChange={this.onChangeHandler}
              value={this.state.removeCategoryName}
            />

            <button onClick={this.removeCategoryHandler}>Add new category</button>
            <span>State: {this.state.removeCategoryName}</span>
        </fieldset>
        <fieldset>
          <legend>Update category</legend>
            <input 
              type='text'
              name='selectedCategory'
              onChange={this.onChangeHandler}
              value={this.state.selectedCategory}
            />
            <input 
              type='text'
              name='updatedCategoryName'
              onChange={this.onChangeHandler}
              value={this.state.updatedCategoryName}
            />

            <button onClick={this.updatedCategoryHandler}>Update category</button>
            <span>State: {this.state.selectedCategory}</span>
            <span>State: {this.state.updatedCategoryName}</span>
        </fieldset>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewCategoryDispatch: (input) => dispatch(addNewCategory(input)),
    removeCategoryDispatch: (input) => dispatch(removeCategory(input)),
    updateCategoryDispatch: (selectedCategory, newCategoryName) => dispatch(updateCategory(selectedCategory, newCategoryName)),
  }
}

export default connect(null, mapDispatchToProps)(AddNewCategory);













