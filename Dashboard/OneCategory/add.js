import React from 'react';

const Add = ({
  onChangeHandler, 
  addNewCategoryFn, 
  inputClassName,
  inputClassNameMsg
}) => {

  return (
    <div className='form-group m-3'>
    <input
      className={inputClassName}
      type='text' 
      name='addName'
      onChange={onChangeHandler}
    />
    {inputClassNameMsg}
      <button className='btn btn-dark mt-2' onClick={addNewCategoryFn}>Add</button>
    </div>
  );
}

export default Add;