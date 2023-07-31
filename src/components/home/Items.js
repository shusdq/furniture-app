import { Box, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'react-multi-carousel/lib/styles.css';

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
    const [items, setItems] = useState([
        { itemName: 'Bookshelf', image: 'https://picsum.photos/id/238/500/500', title: 'Wooden Bookshelf', description: 'Combination of wood and wool', price: '$42.50' },
        { itemName: 'Lamp', image: 'https://picsum.photos/id/237/500/500', title: 'White Aesthetic Chair', description: 'Combination of wood and wool', price: '$63.47' },
        { itemName: 'Sofa', image: 'https://picsum.photos/id/236/500/500', title: 'Bardono Smart Lamp', description: 'Easy to use with bluetooth connection', price: '$62.23' },
        { itemName: 'Table', image: 'https://picsum.photos/id/231/500/500', title: 'Sofa Empuk Banget', description: 'Using kapuk randu material', price: '$58.39' },
        { itemName: 'Decoration', image: 'https://picsum.photos/id/232/500/500', title: 'Plant With Clay Stand', description: 'Combination of wood and wool', price: '$61.49' },
        { itemName: 'Decoration', image: 'https://picsum.photos/id/233/500/500', title: 'White Minimalist Vase', description: 'Combination of wood and wool', price: '$58.39' },
    ]);
    const renderProducts = items.map((item, index) => (
        <Box key={index}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: '30px', mb: '160px' }}>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column' }}>
                    <Box component="img" src={item.image} sx={{ maxWidth: '400px', maxHeight: '360px', mb: '10px', cursor: 'pointer' }}></Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <Typography variant="h5" sx={{ color: '#AFADB5' }}>
                            {item.itemName}
                        </Typography>
                        <Typography variant="h3">{item.title}</Typography>
                        <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>{item.description}</Typography>
                        <Typography variant="h3">{item.price}</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column' }}>
                    <Box component="img" src={item.image} sx={{ maxWidth: '220px', maxHeight: '200px', mb: '10px', cursor: 'pointer' }}></Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <Typography sx={{ fontSize: '12px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>{item.itemName}</Typography>
                        <Typography variant="h6">{item.title}</Typography>
                        <Typography sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>{item.description}</Typography>
                        <Typography variant="h6">{item.price}</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', gap: '20px', mb: '100px' }}>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column' }}>
                    <Box component="img" src={item.image} sx={{ maxWidth: '400px', maxHeight: '360px', mb: '10px', cursor: 'pointer' }}></Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <Typography variant="h5" sx={{ color: '#AFADB5' }}>
                            {item.itemName}
                        </Typography>
                        <Typography variant="h3">{item.title}</Typography>item
                        <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>{item.description}</Typography>
                        <Typography variant="h3">{item.price}</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column' }}>
                    <Box component="img" src={item.image} sx={{ maxWidth: '220px', maxHeight: '200px', mb: '10px', cursor: 'pointer' }}></Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <Typography sx={{ fontSize: '12px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>{item.itemName}</Typography>
                        <Typography variant="h6">{item.title}</Typography>
                        <Typography sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>{item.description}</Typography>
                        <Typography variant="h6">{item.price}</Typography>
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
