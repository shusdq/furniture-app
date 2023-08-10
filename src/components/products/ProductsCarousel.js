import { Box, Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../../utils/responsive';

function ProductsCarousel() {
    const products = [
        { title: 'Bookshelf', image: '/images/rectangle1.png', description: 'Get 40% off for the first transaction on Lalasia' },
        { title: 'Lamp', image: '/images/rectangle2.png', description: 'Get 40% off for the first transaction on Lalasia' },
        { title: 'Sofa', image: '/images/rectangle3.jpg', description: 'Get 40% off for the first transaction on Lalasia' },
        { title: 'Table', image: '/images/rectangle4.png', description: 'Get 40% off for the first transaction on Lalasia' },
    ];

    const renderProducts = products.map((product, index) => (
        <Box key={index}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column' }}>
                <Box sx={{ position: 'relative' }}>
                    <img src={product.image} alt="" style={{ width: '100%', height: 'auto' }} />
                    <Box sx={{ height: '100%', m: '0 10% ', display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '20px', position: 'absolute', bottom: '0', left: '0' }}>
                        <Typography variant="p3" sx={{ color: '#fff', backgroundColor: '#518581', p: '8px 16px', borderRadius: '10px', width: 'fit-content' }}>
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
                            <Typography variant="p4" sx={{ color: '#fff', backgroundColor: '#518581', p: '6px 10px', borderRadius: '10px', width: 'fit-content' }}>
                                Discount
                            </Typography>
                            <Typography variant="l2" sx={{ color: '#fff', lineHeight: '145%', letterSpacing: '0.16px' }}>
                                {product.title}
                            </Typography>
                        </Box>
                        <Typography variant="p4" sx={{ opacity: '0.8', color: '#fff' }}>
                            {product.description}
                        </Typography>
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
                <Typography variant="p1" sx={{ textAlign: 'center', mb: '50px', color: '#AFADB5' }}>
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
                <Typography variant="p3" sx={{ textAlign: 'center', mb: '30px', color: '#AFADB5' }}>
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
