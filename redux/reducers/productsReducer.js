import {convertObjToArr} from '../../helperFunctions/helper';

const productsState = {
  fruits: [
    {id: 1, name: 'avocado', quantity: 5, price: 3.20, additional: {
      text1: 'text1',
      text2: 'text2',
      text3: 'text3',
       
    }},
    {id: 2, name: 'drugplod', quantity: 15, price: 4.10, additional: {
      text1: 'text1',
      text2: 'text2',
      text3: 'text3',
       
    }},
    {id: 3, name: 'fruit3', quantity: 22, price: 1.50, additional: {
      text1: 'text1',
      text2: 'text2',
      text3: 'text3',
       
    }},
  ],
  vegetables: [
    {id: 4, name: 'cucumber', quantity: 33, price: 4.05, additional: {
      text1: 'text1',
      text2: 'text2',
      text3: 'text3',
       
    }},
    {id: 5, name: 'vegetable16', quantity: 11, price: 6.10, additional: {
      text1: 'text1',
      text2: 'text2',
      text3: 'text3',
       
    }},
    {id: 6, name: 'veg1', quantity: 0, price: 8.90, additional: {
      text1: 'text1',
      text2: 'text2',
      text3: 'text3',
       
    }},
    {id: 13, name: 'veg5', quantity: 13, price: 0.40, additional: {
      text1: 'text1',
      text2: 'text2',
      text3: 'text3',
       
    }},
  ],
  meats:[
    {id: 7, name: 'meat1', quantity: 1, price: 3.20, additional: {
      text1: 'text1',
      text2: 'text2',
      text3: 'text3',
       
    }},
    {id: 8, name: 'meat2', quantity: 4, price: 3.40, additional: {
      text1: 'text1',
      text2: 'text2',
      text3: 'text3',
       
    }},
    {id: 9, name: 'meat3', quantity: 6, price: 3.60, additional: {
      text1: 'text1',
      text2: 'text2',
      text3: 'text3',
       
    }},
    {id: 14, name: 'meat3', quantity: 16, price: 4.15, additional: {
      text1: 'text1',
      text2: 'text2',
      text3: 'text3',
       
    }},
    {id: 15, name: 'meat3', quantity: 3, price: 4.25, additional: {
      text1: 'text1',
      text2: 'text2',
      text3: 'text3',
       
    }},
  ],
  eggs: [
    {id: 10, name: 'egg1', quantity: 8, price: 5.20, additional: {
      text1: 'text1',
      text2: 'text2',
      text3: 'text3',
       
    }},
    {id: 11, name: 'egg2', quantity: 4, price: 4.70, additional: {
      text1: 'text1',
      text2: 'text2',
      text3: 'text3',
       
    }},
    {id: 12, name: 'egg3', quantity: 9, price: 3.90, additional: {
      text1: 'text1',
      text2: 'text2',
      text3: 'text3',
       
    }},
    {id: 16, name: 'egg4', quantity: 9, price: 4.60, additional: {
      text1: 'text1',
      text2: 'text2',
      text3: 'text3',
       
    }},
    {id: 17, name: 'egg5', quantity: 19, price: 1.90, additional: {
      text1: 'text1',
      text2: 'text2',
       
      text3: 'text3',
    }},
    {id: 18, name: 'egg6', quantity: 29, price: 1.80, additional: {
      text1: 'text1',
      text2: 'text2',
      text3: 'text3',
       
    }},
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
      const productToDelete = action.payload;
      // find the index of the item we want to remove in the corresponding category
      let itemToRemoveIndex = state[productToDelete.category].findIndex((item, index, array ) => {
        return productToDelete.id === item.id;
      });
      // SLICE
      return {
        ...state,
        [productToDelete.category]: [
          ...state[productToDelete.category].slice(0, itemToRemoveIndex),
          ...state[productToDelete.category].slice(itemToRemoveIndex + 1),
        ]
      };
    case 'UPDATE_ITEM': 
      const productToUpdate = action.payload.product;
      const newVal = action.payload.newValue;
      let itemToUpdate = state[productToUpdate.category].filter(i => i.id===productToUpdate.id);
      itemToUpdate = itemToUpdate[0];
      itemToUpdate.name = newVal;
      return {...state}

    case 'CHANGE_QUANTITY':
      const howToChangeQuantity = action.plusOrMinus;
      const itemIdToChange = Number(action.id);
      const actionCategoryToIncrease = action.category;
      return {
        ...state,
        [actionCategoryToIncrease]: state[actionCategoryToIncrease].map(fruit => {
          if(fruit.id === itemIdToChange){
            if(howToChangeQuantity === 'plus'){
              fruit.quantity ++;
            } else if (howToChangeQuantity === 'minus'){
              fruit.quantity --;
            }
            return fruit;
          } else {
            return fruit;
          }
        })
      };
     
    case 'CHANGE_PRICE':
      const newPrice = action.payload.newPrice;
      const product = action.payload.product;
      
      let itemToUpdatePriceTo = convertObjToArr(state).filter(i => i.id === product.id);
      itemToUpdatePriceTo = itemToUpdatePriceTo[0];
      itemToUpdatePriceTo.price = newPrice;
      
      return {
        ...state,
        [itemToUpdatePriceTo.category] : [...state[itemToUpdatePriceTo.category]]  
      }
    
    default: return state;
  }
}

export default productsReducer;
