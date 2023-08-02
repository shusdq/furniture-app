import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate, useParams } from 'react-router-dom';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};
function Products() {
    const navigate = useNavigate();
    const { id } = useParams();
    const products = useSelector(state => state.data.products);
    const product = products.find(product => product.id === id);

    const renderProducts = products.map((product, index) => (
        <Box key={index}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: '30px', mb: '160px' }}>
                <Box
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        flexDirection: 'column',
                        m: '20px ',
                        ':hover': { boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.75)' },
                        cursor: 'pointer',
                        p: '15px 8px',
                        borderRadius: '8px',
                    }}
                    onClick={() => {
                        navigate(`/products/${product.id}`);
                    }}
                >
                    <Box component="img" src={product.img} sx={{ width: '100%', height: 'auto', mb: '10px', cursor: 'pointer' }}></Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <Typography variant="h5" sx={{ color: '#AFADB5' }}>
                            {product.name}
                        </Typography>
                        <Typography variant="h3">{product.title}</Typography>
                        <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>{product.description}</Typography>
                        <Typography variant="h3">${product.price}</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', gap: '20px', mb: '100px' }}>
                <Box
                    sx={{
                        display: { xs: 'flex', md: 'none' },
                        flexDirection: 'column',

                        m: '20px ',
                        ':hover': { boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.75)' },
                        cursor: 'pointer',
                        p: '15px 8px',
                        borderRadius: '8px',
                    }}
                    onClick={() => {
                        navigate(`/products/${product.id}`);
                    }}
                >
                    <Box component="img" src={product.img} sx={{ width: '100%', height: 'auto', mb: '10px', cursor: 'pointer' }}></Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <Typography sx={{ fontSize: '12px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>{product.name}</Typography>
                        <Typography variant="h6">{product.title}</Typography>
                        <Typography sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>{product.description}</Typography>
                        <Typography variant="h6">${product.price}</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    ));
    return (
        <Container>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ textAlign: 'center', display: { xs: 'none', md: 'flex' }, justifyContent: 'center', flexDirection: 'column', gap: '25px', mb: '50px' }}>
                    <Typography variant="h5" sx={{ color: 'secondary.dark' }}>
                        Product
                    </Typography>
                    <Typography variant="h2">Our popular product</Typography>
                    <Typography sx={{ color: '#AFADB5', fontSize: '18px', fontWeight: '500', lineHeight: '180%' }}>
                        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.
                    </Typography>
                </Box>
                <Box sx={{ textAlign: 'center', display: { xs: 'flex', md: 'none' }, justifyContent: 'center', flexDirection: 'column', gap: '15px', mb: '30px' }}>
                    <Typography variant="h6" sx={{ color: 'secondary.dark' }}>
                        Product
                    </Typography>
                    <Typography variant="h3">Our popular product</Typography>
                    <Typography sx={{ color: '#AFADB5', fontSize: '14px', fontWeight: '500', lineHeight: '180%' }}>
                        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.
                    </Typography>
                </Box>

                <Carousel autoPlay={true} infinite={true} removeArrowOnDeviceType={['tablet', 'mobile']} responsive={responsive}>
                    {renderProducts}
                </Carousel>
            </Box>
        </Container>
    );
}

export default Products;
