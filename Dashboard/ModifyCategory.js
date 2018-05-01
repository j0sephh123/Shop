import React, {Component} from 'react';
import {connect} from 'react-redux';
import OneCategory from './OneCategory/OneCategory';
import Add from './OneCategory/add';
import {addNewCategory, removeCategory, updateCategory} from '../redux/actions';

class ModifyCategory extends Component {
  state = {
    showAddForm: false,
    addName : '',
    showEditForm: false,
    editName: ''
  }

  onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(() => {
      return {
        [name] : value
      }
    });

  } // change input

  showEditFormFn = () => {
    this.setState(() => {
      return {
        showEditForm: !this.state.showEditForm
      }
    });
  } // show the input field when clicking the edit button

  addNewCategoryFn = () => {
    this.props.addNewCategoryAction(this.state.addName);
  } // action add new category

  removeCategoryFn = (categoryName) => {
    this.props.removeCategoryAction(categoryName)
  } // action remove category

  updateCategoryFn = (selectedElement) => {
    this.props.updateCategoryAction(selectedElement, this.state.editName);
    this.setState(() => {
      return {
        editName: ''
      }
    });
  } // action update category

  render(){
    const renderAllCategories = Object.keys(this.props.categories).map(c => {
      return (
        <OneCategory 
          key={c} 
          name={c} 
          removeCategoryFn={this.removeCategoryFn}
          showEditFormFn={this.showEditFormFn}
          showEditForm={this.state.showEditForm}
          updateCategoryFn={this.updateCategoryFn}
          editName={this.state.editName}
          onChangeHandler={this.onChangeHandler}
        />
      );
    });
    
    return (
      <ul className='border border-secondary m-1'>
        <button className='btn btn-primary' onClick={() => this.setState({showAddForm: !this.state.showAddForm})}>New Category</button>
        <div>        
        {this.state.showAddForm ? 
          <Add 
            onChangeHandler={this.onChangeHandler}
            addNewCategoryFn={this.addNewCategoryFn}
          /> 
        : null}
        </div>
        {renderAllCategories}
      </ul>   
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewCategoryAction: (inputData) => dispatch(addNewCategory(inputData)),
    removeCategoryAction: (inputData) => dispatch(removeCategory(inputData)),
    updateCategoryAction: (selectedElement, newValue) => dispatch(updateCategory(selectedElement, newValue)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModifyCategory);