import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
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

function ArticleCarousel() {
    const posts = useSelector(state => state.data.posts);

    const renderPosts = posts.map((post, index) => (
        <Box key={index}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, position: 'relative', mb: '160px' }}>
                <Box component="img" src={post.mainImage} sx={{ width: '100%', height: 'auto' }}></Box>
                <Box
                    sx={{
                        m: '0 4.5% ',
                        p: '2% 3%',
                        width: '85%',
                        height: 'auto',
                        background: '#F3F3F3',
                        boxShadow: '0px 4px 140px 0px rgba(175, 173, 181, 0.20)',
                        position: 'absolute',
                        bottom: '15px',
                        left: '0',
                    }}
                >
                    <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5', mb: '10px' }}>{post.article}</Typography>
                    <Typography variant="h3" sx={{ mb: '15px' }}>
                        {post.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <Avatar src={post.avatar} style={{ width: '28px', height: '28px' }}></Avatar>
                        <Typography variant="h6">By {post.fullName}</Typography>
                        <Typography sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>{post.date}</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, position: 'relative', mb: '160px' }}>
                <Box component="img" src={post.mainImage} sx={{ width: '100%', height: 'auto' }}></Box>
                <Box
                    sx={{
                        m: '0 4.5% ',
                        p: '1% 3%',
                        width: '85%',
                        height: 'auto',
                        background: '#F3F3F3',
                        boxShadow: '0px 4px 140px 0px rgba(175, 173, 181, 0.20)',
                        position: 'absolute',
                        bottom: '10px',
                        left: '0',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    <Typography sx={{ fontSize: '10px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5', mb: '5px' }}>{post.article}</Typography>
                    <Typography variant="h6" sx={{ mb: '10px' }}>
                        {post.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Avatar src={post.avatar} style={{ width: '20px', height: '20px' }}></Avatar>
                        <Typography sx={{ fontSize: '12px', fontWeight: '700', lineHeight: '180%', color: '#151411' }}>By {post.fullName}</Typography>
                        <Typography sx={{ fontSize: '12px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>{post.date}</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    ));
    return (
        <Box>
            <Carousel responsive={responsive} removeArrowOnDeviceType={['tablet', 'mobile']}>
                {renderPosts}
            </Carousel>
        </Box>
    );
}

export default ArticleCarousel;