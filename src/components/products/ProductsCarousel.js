import { Box, Typography } from '@mui/material';
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
        { title: 'Bookshelf', image: '/images/rectangle1.png', description: 'Get 40% off for the first transaction on Lalasia' },
        { title: 'Lamp', image: '/images/rectangle2.png', description: 'Get 40% off for the first transaction on Lalasia' },
        { title: 'Sofa', image: '/images/rectangle3.jpg', description: 'Get 40% off for the first transaction on Lalasia' },
        { title: 'Table', image: '/images/rectangle4.png', description: 'Get 40% off for the first transaction on Lalasia' },
    ]);

    const renderProducts = products.map((product, index) => (
        <Box key={index}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column' }}>
                <Box sx={{ position: 'relative' }}>
                    <img src={product.image} alt="" style={{ width: '100%', height: 'auto' }} />
                    <Box sx={{ height: '100%', m: '0 10% ', display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '20px', position: 'absolute', bottom: '0', left: '0' }}>
                        <Typography
                            sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '180%', color: '#fff', backgroundColor: '#518581', p: '8px 16px', borderRadius: '10px', width: 'fit-content' }}
                        >
                            Discount
                        </Typography>
                        <Typography variant="h2" sx={{ color: '#fff' }}>
                            {product.title}
                        </Typography>
                        <Typography variant="h3" sx={{ opacity: '0.8', color: '#fff', maxWidth: '420px' }}>
                            {product.description}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column' }}>
                <Box sx={{ position: 'relative' }}>
                    <img src={product.image} alt="" style={{ width: '100%', height: 'auto' }} />
                    <Box sx={{ height: '100%', m: '0 10% ', display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '10px', position: 'absolute', bottom: '0', left: '0' }}>
                        <Box sx={{ display: 'flex', gap: '15px' }}>
                            <Typography
                                sx={{ fontSize: '10px', fontWeight: '500', lineHeight: '130%', color: '#fff', backgroundColor: '#518581', p: '6px 10px', borderRadius: '10px', width: 'fit-content' }}
                            >
                                Discount
                            </Typography>
                            <Typography sx={{ color: '#fff', fontSize: '16px', fontWeight: '700', lineHeight: '145%', letterSpacing: '0.16px' }}>{product.title}</Typography>
                        </Box>
                        <Typography sx={{ opacity: '0.8', color: '#fff', fontSize: '12px', fontWeight: '500', lineHeight: '180%' }}>{product.description}</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    ));
    return (
        <Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', mb: '50px' }}>
                <Typography variant="h1" sx={{ textAlign: 'center', m: '100px 0 20px' }}>
                    Products
                </Typography>
                <Typography sx={{ textAlign: 'center', mb: '50px', fontSize: '18px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>
                    We display products based on the latest products we have, if you want <br /> to see our old products please enter the name of the item
                </Typography>
                <Carousel showDots={true} autoPlay={true} infinite={true} responsive={responsive}>
                    {renderProducts}
                </Carousel>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', mb: '30px' }}>
                <Typography variant="h3" sx={{ textAlign: 'center', m: '50px 0 20px' }}>
                    Products
                </Typography>
                <Typography sx={{ textAlign: 'center', mb: '30px', fontSize: '14px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>
                    We display products based on the latest products we have, if you want to see our old products please enter the name of the item
                </Typography>
                <Carousel showDots={true} autoPlay={true} infinite={true} removeArrowOnDeviceType={['tablet', 'mobile']} responsive={responsive}>
                    {renderProducts}
                </Carousel>
            </Box>
        </Box>
    );
}

export default ProductsCarousel;
