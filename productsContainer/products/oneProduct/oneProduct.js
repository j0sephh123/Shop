import React from 'react';

const oneProduct = ({id, name, quantity, category, addFn, subtractFn}) => {
  return (
    <div style={{display: ''}}>
      <p>Name: <span className='productName'>{name}</span></p>
      <p>Quantity: {quantity}
        <button onClick={() => addFn(id, category)}>Add</button>
        <button onClick={() => subtractFn(id, category)}>Subtract</button>
      </p>
      <p>Category: {category}</p>
    </div>
  );
}

export default oneProduct;