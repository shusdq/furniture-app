import { Box } from '@mui/material';
import React from 'react';
import Header from '../components/header/Header';
import ProductsCarousel from '../components/products/ProductsCarousel';
import TotalProducts from '../components/products/TotalProducts';
import Footer from '../components/footer/Footer';

function Products({ products }) {
    return (
        <Box>
            <Header />
            <ProductsCarousel />
            <TotalProducts products={products} />
            <Footer />
        </Box>
    );
}

export default Products;
