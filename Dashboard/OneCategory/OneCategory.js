import React from 'react'

import {
  // removeCategory,
  // updateCategory
} from '../../redux/actions';

const OneCategory = ({name, removeCategoryFn}) => {



  return (
    <div className='container mx-auto w-75'>
      <li className='list-group-item d-flex justify-content-between align-items-center'>
        {name}
        <span className="badge badge-pill">
          <button className='btn' onClick={() => removeCategoryFn(name)}>Remove</button>
        </span>          
      </li>
    </div>
  );
}

export default OneCategory;