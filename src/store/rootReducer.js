import { combineReducers } from '@reduxjs/toolkit';
import { databaseApi } from './features/databaseApi';
import { cartReducer } from './features/cartSlice';

const rootReducer = combineReducers({
    [databaseApi.reducerPath]: databaseApi.reducer,
    cart: cartReducer,
});

export default rootReducer;
