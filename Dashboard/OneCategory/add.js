import React from 'react';

const Add = ({onChangeHandler, addNewCategoryFn}) => {



  return (
    <div>
    <input 
      type='text' 
      name='addName'
      onChange={onChangeHandler}
    />
      <button onClick={addNewCategoryFn}>Add</button>
    </div>
  );
}

export default Add;