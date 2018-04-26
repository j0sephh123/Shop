const productsState = {
  fruits: [
    {id: 1, name: 'avocado', quantity: 5},
    {id: 2, name: 'drugplod', quantity: 15},
    {id: 3, name: 'fruit3', quantity: 22},
  ],
  vegetables: [
    {id: 4, name: 'cucumber', quantity: 33},
    {id: 5, name: 'vegetable16', quantity: 11},
    {id: 6, name: 'veg1', quantity: 0},
  ],
  meats:[
    {id: 7, name: 'meat1', quantity: 1},
    {id: 8, name: 'meat2', quantity: 4},
    {id: 9, name: 'meat3', quantity: 6},
  ],
  eggs: [
    {id: 10, name: 'egg1', quantity: 8},
    {id: 11, name: 'egg2', quantity: 4},
    {id: 12, name: 'egg3', quantity: 9},
  ]
}

let counter = 20;

const productsReducer = (state = productsState, action) => {
  switch(action.type){
    case 'ADD_NEW_CATEGORY':
      return {...state, 
        [action.payload]: []
      };
    case 'REMOVE_CATEGORY':
      const obj = Object.entries(state)
      .filter(([k, v]) => { 
        return k !== action.payload; 
      })
      .reduce((total, current) => {
        total[current[0]] = current[1];
        return total;
        }, {});
      return obj;
    case 'UPDATE_CATEGORY':    
      const oldProp = action.payload.selectedElement;
      const newProp = action.payload.newValue;
      function updateState(oldProp, newProp, { [oldProp] : old, ...others }){
        return ({
          [newProp] : old,
          ...others
        });
      }
      return updateState(oldProp, newProp, state);
    case 'ADD_ITEM_TO_CATEGORY':
      const category = action.payload.category;
      const item = action.payload.item;
      const quantity = action.payload.quantity;
      console.log(quantity);
      
      function addItem(newItem, categoryToAddTo, quantity, { [categoryToAddTo] : old, ...others }){
        return ({
          [categoryToAddTo]: [...old, {id: ++counter, name: newItem, quantity: quantity}], ...others
        });
      }
      return addItem(item, category, quantity, state);
    case 'REMOVE_ITEM': 
      const categoryItem = action.payload.category;
      const itemToRemove = action.payload.item;
      function removeItem(category, item, state){
        let itemToRemove = state[category].findIndex(i => i.name === item);
        return ({
          ...state, 
          [category]: [
            ...state[category].slice(0, itemToRemove),
            ...state[category].slice(itemToRemove + 1)
          ]
        })
      }
      return removeItem(categoryItem, itemToRemove, state);
    case 'UPDATE_ITEM': 
      const categoryUpdate = action.payload.category;
      const itemToUpdate = action.payload.item;
      const newValue = action.payload.newValue;
      function updateItem(category, item, newVal, state){
        console.log(newVal);
        let itemToUpdate = state[category].filter(i => i.name === item);
        itemToUpdate[0].name = newVal;
        return {...state};
      }
      return updateItem(categoryUpdate, itemToUpdate, newValue, state);
    case 'INCREASE_QUANTITY':
      const itemIdToIncrease = Number(action.id);
      const actionCategoryToIncrease = action.category;
      return {
        ...state,
        [actionCategoryToIncrease]: state[actionCategoryToIncrease].map(fruit => {
          if(fruit.id === itemIdToIncrease){
            fruit.quantity ++;
            return fruit;
          } else {
            return fruit;
          }
        })
      };
    
    case 'DECREASE_QUANTITY':   
      const itemIdToDecrease = Number(action.id);
        const actionCategoryToDecrease = action.category;
        return {
          ...state,
          [actionCategoryToDecrease]: state[actionCategoryToDecrease].map(fruit => {
            if(fruit.id === itemIdToDecrease){
              fruit.quantity --;
              return fruit;
            } else {
              return fruit;
            }
          })
        };   

      default: return state;
  }
}

export default productsReducer;
