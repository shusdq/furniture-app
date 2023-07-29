import { Grid, Typography } from '@mui/material';
import React from 'react';
import ProductItem from './ProductItem';

function ProductsList({ products }) {
    if (!products.length) {
        return (
            <Typography variant="h1" sx={{ textAlign: 'center', mb: '100px' }}>
                Products not found!
            </Typography>
        );
    }

    return (
        <Grid container gap="30px" justifyContent="center">
            {products.map((product, index) => (
                <ProductItem product={product} key={index} />
            ))}
        </Grid>
    );
}

export default ProductsList;
