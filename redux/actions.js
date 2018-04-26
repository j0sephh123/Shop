// import store from '../redux/store';

export const addNewCategory = (inputData) => {
  return {
    type: 'ADD_NEW_CATEGORY',
    payload: inputData
  }
} // added

export const removeCategory = (inputData) => {
  return {
    type: 'REMOVE_CATEGORY',
    payload: inputData
  }
} // added

export const updateCategory = (selectedElement, newValue) => {
  return {
    type: 'UPDATE_CATEGORY',
    payload: {selectedElement, newValue}
  }
} // added

export const addItemToCategory = (category, item, quantity) => {
  return {
    type: 'ADD_ITEM_TO_CATEGORY',
    payload: {
      category,
      item,
      quantity
    }
  }
} // added

export const removeItem = (category, item) => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      category,
      item
    }
  }
} // in process of adding

export const updateItem = (category, item, newValue) => {
  return {
    type: 'UPDATE_ITEM',
    payload: {
      category,
      item,
      newValue
    }
  }
} // in process of adding

export const increaseQuantity = (itemId, productcategory) => {
  return {
    type: 'INCREASE_QUANTITY',
    id: itemId,
    category: productcategory
  } // added
} // added 
// export const boundIncreaseQuantity = (itemId, productcategory) => store.dispatch(increaseQuantity(itemId, productcategory));

export const decreaseQuantity = (itemId, productcategory) => {
  return {
    type: 'DECREASE_QUANTITY',
    id: itemId,
    category: productcategory
  } // added
} // added 
// export const boundDecreaseQuantity = (itemId, productcategory) => store.dispatch(decreaseQuantity(itemId, productcategory));
// finished 