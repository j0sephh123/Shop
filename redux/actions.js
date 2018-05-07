

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

export const removeItem = (product) => {
  return {
    type: 'REMOVE_ITEM',
    payload: product
  }
} // added

export const updateItem = (product, newValue) => {
  return {
    type: 'UPDATE_ITEM',
    payload: {
      product,
      newValue
    }
  }
} // added

export const quantityAction = (itemId, productcategory, plusOrMinus) => {
  return {
    type: 'CHANGE_QUANTITY',
    id: itemId,
    category: productcategory,
    plusOrMinus
  } 
} // added 

export const addToCart = (object) => {
  return {
    type: 'ADD_TO_CART',
    payload: object
  }
} // works

export const removeFromCart = (object) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: object
  }
} // works

export const changePrice = (product, newPrice) => {
  return {
    type: 'CHANGE_PRICE',
    payload: {product, newPrice}
  }
} // works like a charm

export const visibility = (category) => {
  return {
    type: 'VISIBILITY_FILTER',
    category
  }
} // works

export const select = (id) => {
  return {
    type: 'SELECT',
    id
  }
} // works

