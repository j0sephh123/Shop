import React from 'react';
import {connect} from 'react-redux';
import {visibility} from '../../../redux/actions';

const oneCategory = ({categoryName, categoryCount, visibilityAction}) => {

  

  const visibilityFilterFn = (categoryName) => {
    visibilityAction(categoryName);
    console.log('visibilityAction');
  }


  
  return (
    <li 
      onClick={() => visibilityFilterFn(categoryName)}
      style={{cursor: 'pointer'}}
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