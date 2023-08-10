import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import ProductItem from './ProductItem';

function ProductsList({ products }) {
    if (!products.length) {
        return (
            <Box>
                <Typography variant="h1" sx={{ display: { xs: 'none', md: 'flex', justifyContent: 'center' }, mb: '100px' }}>
                    Products not found!
                </Typography>
                <Typography variant="h3" sx={{ display: { xs: 'flex', md: 'none', justifyContent: 'center' }, mb: '100px' }}>
                    Products not found!
                </Typography>
            </Box>
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
