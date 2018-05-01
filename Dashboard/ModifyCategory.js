import React, {Component} from 'react';
import {connect} from 'react-redux';
import OneCategory from './OneCategory/OneCategory';
import Add from './OneCategory/add';
import {addNewCategory, removeCategory} from '../redux/actions';

class ModifyCategory extends Component {
  state = {
    showAddForm: false,
    addName : ''
  }

  addNewCategoryFn = () => {
    this.props.addNewCategoryAction(this.state.addName);
    console.log('addNewCategoryFn');
  } // action add new category

  onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(() => {
      return {
        [name] : value
      }
    });
  } // change input

  removeCategoryFn = (categoryName) => {
    console.log('removeCategoryFn: ' + categoryName);
    this.props.removeCategoryAction(categoryName)
  }

  render(){
    
    const renderAllCategories = Object.keys(this.props.categories).map(c => {
      return (
        <OneCategory 
          key={c} 
          name={c} 
          removeCategoryFn={this.removeCategoryFn}
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
    removeCategoryAction: (inputData) => dispatch(removeCategory(inputData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModifyCategory);