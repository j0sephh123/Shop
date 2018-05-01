import React from 'react';

const Add = ({onChangeHandler, addNewCategoryFn}) => {

  return (
    <div>
    <input 
      type='text' 
      name='addName'
      onChange={onChangeHandler}
    />
      <button className='btn btn-dark' onClick={addNewCategoryFn}>Add</button>
    </div>
  );
}

export default Add;