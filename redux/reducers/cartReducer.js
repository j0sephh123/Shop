const initialState = {
  selected: null,
  count: 0,
  price: 0,
  products: []
}
  
const cartReducer = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_TO_CART': 
      const isItemNew = state.products.filter(p => p.id === action.payload.id)
      if(isItemNew.length === 0){ // item is not there
        return {
          products: [...state.products, {
            ...action.payload,
            quantity: 1
          }],
          price: state.price + action.payload.price,
          count: state.count += 1
        }
      } else {
        return {
          products: state.products.map(p => {
            if(p.id === action.payload.id) {
              return {...action.payload, quantity: p.quantity += 1}
            }
            return p
          }),
          price: state.price + action.payload.price,
          count: state.count += 1
        }
      }
    
    case 'REMOVE_FROM_CART':
      const itemToRemove = state.products.filter(p => p.id === action.payload.id);  

      if(itemToRemove.length === 0) { // item IS NOT present
        return state;
      } else if (itemToRemove.length > 0) { // item IS present
        if(itemToRemove[0].quantity >= 2){
          return {
            products: state.products.map(p => {
              if(p.id === action.payload.id){
                return {...action.payload, quantity: p.quantity -= 1}
              }
              return p
            }),
            price: state.price - action.payload.price,
            count: state.count -= 1
          }
        }  

        if(itemToRemove[0].quantity === 1){
          const newProductsState = Object.assign([], state.products);
          const indexOfItemToDelete = state.products.findIndex(product => {
            return product.id === action.payload.id
          });
          newProductsState.splice(indexOfItemToDelete, 1);
          return {
            products: [...newProductsState],
            price: state.price - action.payload.price,
            count: state.count -= 1
          }
        }
      }
      return;
    
    case 'SELECT':
      return {...state, selected: action.id}

      

      

    
    default: return state;
  }
}

export default cartReducer;
