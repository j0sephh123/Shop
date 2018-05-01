import React, {Component} from 'react';
import {connect} from 'react-redux';
import OneCategory from './OneCategory/OneCategory';
import Add from './OneCategory/add';
import {addNewCategory} from '../redux/actions';

class ModifyCategory extends Component {
  state = {
    showAddForm: false,
    addName : ''
  }

  addNewCategoryFn = () => {
    this.props.addNewCategoryAction(this.state.addName);
    console.log('addNewCategoryFn');
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

  render(){
    
    const renderAllCategories = Object.keys(this.props.categories).map(c => {
      return (
        <OneCategory key={c} name={c} />
      );
    });
    
    return (
      <ul className='border border-secondary m-1'>
        <button onClick={() => this.setState({showAddForm: !this.state.showAddForm})}>New Category</button>
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
    addNewCategoryAction: (inputData) => dispatch(addNewCategory(inputData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModifyCategory);