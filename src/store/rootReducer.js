import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from './features/dataSlice';

const rootReducer = combineReducers({ products: productsReducer });

export default rootReducer;
