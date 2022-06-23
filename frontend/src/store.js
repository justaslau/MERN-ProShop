import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers';

import { cartReducer } from './reducers/cartReducers';

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
  },
};

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer,
  preloadedState: initialState,
});

export default store;
