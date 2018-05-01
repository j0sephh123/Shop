import React from 'react'

import {
  // removeCategory,
  // updateCategory
} from '../../redux/actions';

const OneCategory = ({
  name, 
  removeCategoryFn, 
  updateCategoryFn, 
  showEditFormFn, 
  showEditForm, 
  onChangeHandler,
  editName
}) => {

  return (
    <div className='container mx-auto w-75'>
      <li className='list-group-item d-flex justify-content-between align-items-center'>
        {name}
        <span className="badge badge-pill">
          <button className='btn' onClick={() => showEditFormFn()}>Edit</button>
            {showEditForm ?
              <div>
                <input 
                  className='form-control'
                  type='text'
                  name='editName'
                  onChange={onChangeHandler}
                  value={editName}
                />
                <button className='btn btn-primary' onClick={() => updateCategoryFn(name)}>Complete Edit</button> 
              </div>
            : null}
          <button className='btn' onClick={() => removeCategoryFn(name)}>Remove</button>          
        </span>          
      </li>
    </div>
  );
}

export default OneCategory;