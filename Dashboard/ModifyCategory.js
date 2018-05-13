import React, {Component} from 'react';
import {connect} from 'react-redux';
import OneCategory from './OneCategory/OneCategory';
import Add from './OneCategory/add';
import {addNewCategory, removeCategory, updateCategory} from '../redux/actions';
import {inputClassNameFn} from '../helperFunctions/helper';

class ModifyCategory extends Component {
  state = {
    showAddForm: false,
    addName : '',
    // showEditForm: false,
    // editName: '',
    errors: null,
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

  // showEditFormFn = () => {
  //   this.setState(() => {
  //     return {
  //       showEditForm: !this.state.showEditForm
  //     }
  //   });
  // } // show the input field when clicking the edit button

  addNewCategoryFn = () => {
    let stateAddName = this.state.addName.trim();
    if (stateAddName.length <= 3 || stateAddName.length >= 15) {
      this.setState(() => ({errors: 'invalidLength'}));
      return;
    }
    this.setState(() => ({errors: 'empty'}));

    this.props.addNewCategoryAction(stateAddName);
    
    
  } // action add new category

  removeCategoryFn = (categoryName) => {
    this.props.removeCategoryAction(categoryName)
  } // action remove category

  updateCategoryFn = (selectedElement, editName) => {
    this.props.updateCategoryAction(selectedElement, editName);
  } // action update category

  render(){

    let inputClassName = inputClassNameFn(this.state.errors);

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
        <div>        
        </div>
        {renderAllCategories}
        <div className='container mx-auto w-75 ml-5 p-2'>
          <button className='btn btn-primary ml-3' onClick={() => this.setState({showAddForm: !this.state.showAddForm})}>Add new category</button>
          {this.state.showAddForm ? 
          <Add
            inputClassNameMsg={inputClassName.message}
            inputClassName={inputClassName.className} 
            onChangeHandler={this.onChangeHandler}
            addNewCategoryFn={this.addNewCategoryFn}
          /> 
        : null}
        
        </div>
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