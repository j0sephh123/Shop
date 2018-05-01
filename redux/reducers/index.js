import {combineReducers} from 'redux';
import productsReducer from'./productsReducer';
import cartReducer from './cartReducer';
import visibilityReducer from './visibilityFilter';

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
  visibilityReducer
});