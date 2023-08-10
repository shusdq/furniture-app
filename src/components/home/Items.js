import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};
function Products({ products }) {
    const navigate = useNavigate();

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
                        <Typography variant="p3" sx={{ color: '#AFADB5' }}>
                            {product.description}
                        </Typography>
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
                        <Typography variant="p4" sx={{ fontWeight: '700', color: '#AFADB5' }}>
                            {product.name}
                        </Typography>
                        <Typography variant="p2" sx={{ fontWeight: '700' }}>
                            {product.title}
                        </Typography>
                        <Typography variant="p3" sx={{ color: '#AFADB5' }}>
                            {product.description}
                        </Typography>
                        <Typography variant="p2" sx={{ fontWeight: '700' }}>
                            ${product.price}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    ));
    return (
        <Container>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ textAlign: 'center', display: { xs: 'none', md: 'flex' }, justifyContent: 'center', flexDirection: 'column', mb: '50px' }}>
                    <Typography variant="h5" sx={{ color: 'secondary.dark', mb: '15px' }}>
                        Product
                    </Typography>
                    <Typography variant="h2" mb="30px">
                        Our popular product
                    </Typography>
                    <Typography variant="p1" sx={{ color: '#AFADB5' }}>
                        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.
                    </Typography>
                </Box>
                <Box sx={{ textAlign: 'center', display: { xs: 'flex', md: 'none' }, justifyContent: 'center', flexDirection: 'column', gap: '15px', mb: '30px' }}>
                    <Typography variant="h6Plus" sx={{ color: 'secondary.dark', mb: '8px' }}>
                        Product
                    </Typography>
                    <Typography variant="h3" mb="15px">
                        Our popular product
                    </Typography>
                    <Typography variant="p3" sx={{ color: '#AFADB5' }}>
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
