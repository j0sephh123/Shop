import React from 'react';

const orderSummary = ({
  price,
  count,
  products
}) => {

  
  
  const renderProducts = () => products.map(product => {
    return(<li 
      key={product.id} 
      className='list-group-item d-flex justify-content-between align-items-center'>
      {product.name}
      <p>Category: {product.category}</p>
      <span className="badge badge-primary badge-pill">Price: {product.price}</span>
      <span className="badge badge-primary badge-pill">Quantity: {product.quantity}</span>
    </li>
    );
  });

  return (
    <div>
      <h3>Your order</h3>
      <p>Total number of products: {count}</p>
      <p>Total price: ${price.toFixed(2)}</p>
      <ul className='list-group list-group-flush'>        
        {renderProducts()}
      </ul>
      <form>
        <button className='btn btn-secondary'>Purchase (refreshes the page...)</button>
      </form>
    </div>
  );
}

export default orderSummary;