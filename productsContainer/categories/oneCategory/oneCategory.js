import React from 'react';
import {connect} from 'react-redux';
import {visibility} from '../../../redux/actions';

const oneCategory = ({categoryName, categoryCount, visibilityAction, visibilityReducer}) => {

  

  const visibilityFilterFn = (categoryName) => {
    visibilityAction(categoryName);
  }
  // console.log(visibilityReducer);
  // console.log(categoryName);
  if(visibilityReducer === categoryName){
    console.log('equal');
  }
  
  return (
    <li 
      onClick={() => visibilityFilterFn(categoryName)}
      style={
        visibilityReducer === categoryName ? {backgroundColor: 'gray'} : {backgroundColor: 'white'}
      }
      className='list-group-item d-flex justify-content-between align-items-center'>
      {categoryName}
      <span className='badge badge-primary badge-pill'>{categoryCount[categoryName]}</span>
    </li>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    visibilityAction: (category) => dispatch(visibility(category)) 
  }
}

export default connect(null, mapDispatchToProps)(oneCategory);