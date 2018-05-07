import React from 'react';

const oneCategory = ({
  categoryName, 
  categoryCount, 
  visibilityAction, 
  visibilityReducer,
  visibilityFilterFn
}) => {

  return (
    <li 
      onClick={() => visibilityFilterFn(categoryName)}
      style={
        visibilityReducer === categoryName 
          ? {backgroundColor: '#eee'} 
          : {backgroundColor: 'white'}
      }
      className='list-group-item d-flex justify-content-between align-items-center'>
      {categoryName}
      <span className='badge badge-primary badge-pill'>{categoryCount[categoryName]}</span>
    </li>
  );
}



export default oneCategory;