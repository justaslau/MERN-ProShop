import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});
const initialState = {};

const store = configureStore({
  reducer,
  initialState,
});

export default store;
