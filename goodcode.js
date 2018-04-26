let newState = Object.entries(state).filter(([k, v]) => {
  return k === action.payload.selectedElement;
});
newState = newState.reduce((total, current) => {
  current[0] = action.payload.newValue;
  total[current[0]] = current[1];
  return {...state, [action.payload.newValue] : current[1]}
}, {});


const newState = Object.values(state).map((item, index, array) => {
  return item
});



const reducedNewState = newState.reduce((tot, cur, i) => {
    
    return [...tot, ...cur]
  }
);

console.log(reducedNewState);

const allProductsMap = Object.values(props.allProducts).map((item, index, array) => {
  return item;
}).reduce( (tot, cur, i) => [...tot, ...cur] );

const oneProductMap = allProductsMap.map((product, index, array) => {
  return (
    <OneProduct 
      key={product.id}
      name={product.name}
      quantity={product.quantity}
    />
  );
});

return ( <React.Fragment>{oneProductMap}</React.Fragment> );