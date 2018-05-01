import React, {Component} from 'react';
import {connect} from 'react-redux';
import OneCategory from './oneCategory/oneCategory';
import {addCategoriesToArrays} from '../../helperFunctions/helper';
import {visibility} from '../../redux/actions';

class Categories extends Component {

  visibilityHandler = () => {
    this.props.visibilityAction('showAll')
  }

  visibilityFilterFn = (arg) => {
    console.log('visibilityFilterFn');
    this.props.visibilityAction(arg)
  }

  render(){
    const categoriesCount = addCategoriesToArrays(this.props.products);
    const allCategories = Object.keys(this.props.products).map(c => {
      return (
        <OneCategory 
          key={c}
          categoryName={c}
          categoryCount={categoriesCount}
          visibilityReducer={this.props.visibilityReducer}
          visibilityFilterFn={this.visibilityFilterFn}
        />
      );
    });

    return (
      <ul className='list-group'>
        <li 
          onClick={() => this.visibilityHandler()}
          style={{cursor: 'pointer'}}
          className='list-group-item d-flex justify-content-between align-items-center'>
          Show All
        </li>
        {allCategories}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    visibilityReducer: state.visibilityReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    visibilityAction: (arg) => dispatch(visibility(arg))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);