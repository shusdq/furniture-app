import { Box, Button, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

function ProductsCarousel() {
    const [products, setProducts] = useState([
        { title: 'Bookshelf', image: '/rectangle.png', description: 'Get 40% off for the first transaction on Lalasia' },
        { title: 'Lamp', image: '/rectangle2.png', description: 'Get 40% off for the first transaction on Lalasia' },
        { title: 'Sofa', image: '/rectangle3.jpg', description: 'Get 40% off for the first transaction on Lalasia' },
        { title: 'Table', image: '/rectangle4.jpg', description: 'Get 40% off for the first transaction on Lalasia' },
    ]);

    const renderProducts = products.map((product, index) => (
        <Box key={index}>
            <Box sx={{ position: 'relative' }}>
                <img src={product.image} alt="" />
                <Box sx={{ display: 'flex', position: 'absolute', bottom: '0', left: '0' }}>
                    <Button variant="contained" sx={{ color: '#fff', fontSize: '14px', fontWeight: '500', lineHeight: '180%' }}>
                        Discount
                    </Button>
                    <Typography variant="h2" sx={{ color: '#fff' }}>
                        {product.title}
                    </Typography>
                    <Typography variant="h3" sx={{ opacity: '0.8' }}>
                        {product.description}
                    </Typography>
                </Box>
            </Box>
        </Box>
    ));
    return (
        <Container>
            <Box>
                <Typography variant="h1" sx={{ mb: '20px' }}>
                    Products
                </Typography>
                <Typography sx={{ mb: '50px', maxWidth: '600px', fontSize: '18px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>
                    We display products based on the latest products we have, if you want to see our old products please enter the name of the item
                </Typography>
                <Carousel responsive={responsive}>{renderProducts}</Carousel>
            </Box>
        </Container>
    );
}

export default ProductsCarousel;
