import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    posts: [],
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
    },
});

export const { setProducts, setPosts } = dataSlice.actions;
export default dataSlice.reducer;
