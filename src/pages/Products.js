import { Box } from '@mui/material';
import React from 'react';
import Header from '../components/header/Header';
import ProductsCarousel from '../components/products/ProductsCarousel';

function Products() {
    return (
        <Box>
            <Header />
            <ProductsCarousel />
        </Box>
    );
}

export default Products;
