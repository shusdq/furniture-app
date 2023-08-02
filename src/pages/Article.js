import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import PostService from '../API/PostService';
import { useDispatch } from 'react-redux';
import { setPosts } from '../store/features/dataSlice';
import ArticleCarousel from '../components/article/ArticleCarousel';
import DailyNews from '../components/article/DailyNews';
import Topics from '../components/article/Topics';
function Article() {
    const dispatch = useDispatch();

    const [isProductsLoading, setIsProductsLoading] = useState(false);

    async function fetchPosts() {
        setIsProductsLoading(true);
        const response = await PostService.getAllPosts();
        dispatch(setPosts(response.data));
        setIsProductsLoading(false);
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <Box>
            <Header />
            <Container>
                {isProductsLoading ? (
                    <Typography>LOADING...</Typography>
                ) : (
                    <Box>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', textAlign: 'center', mb: '50px' }}>
                            <Typography variant="h1" sx={{ m: '100px 0 20px' }}>
                                Article
                            </Typography>
                            <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>
                                We display products based on the latest products we have, if you want
                                <br /> to see our old products please enter the name of the item
                            </Typography>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', textAlign: 'center', mb: '30px' }}>
                            <Typography variant="h3" sx={{ m: '50px 0 20px' }}>
                                Article
                            </Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>
                                We display products based on the latest products we have, if you want to see our old products please enter the name of the item
                            </Typography>
                        </Box>

                        <ArticleCarousel />
                        <DailyNews />
                        <Topics/>
                    </Box>
                )}
                <Footer />
            </Container>
        </Box>
    );
}

export default Article;
