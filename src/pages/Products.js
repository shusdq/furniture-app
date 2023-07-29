import { Box } from '@mui/material';
import React from 'react';
import Header from '../components/header/Header';
import ProductsCarousel from '../components/products/ProductsCarousel';
import TotalProducts from '../components/products/TotalProducts';
import Footer from '../components/footer/Footer';

function Products() {
    return (
        <Box>
            <Header />
            <ProductsCarousel />
            <TotalProducts />
            <Footer />
        </Box>
    );
}

export default Products;
