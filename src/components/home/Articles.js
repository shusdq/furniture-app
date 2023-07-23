import { Avatar, Box, Button, Container, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

function Articles() {
    const [articles, setArticles] = useState([
        { image: 'https://picsum.photos/id/258/500/500', title: 'Create Cozy Dinning Room Vibes', description: 'Combination of wood and wool', content: 'Tips and Trick' },
        { image: 'https://picsum.photos/id/259/500/500', title: 'Amazing furniture', description: 'Combination of wood and wool', content: 'Tips and Trick' },
        { image: 'https://picsum.photos/id/288/500/500', title: 'Craft future', description: 'Easy to use with bluetooth connection', content: 'Tips and Trick' },
    ]);

    const [visibleIndex, setVisibleIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true); // Set transitioning to true before changing article
            setTimeout(() => {
                setVisibleIndex(prevIndex => (prevIndex + 1) % articles.length);
            }, 500);
        }, 10000);

        setTimeout(() => {
            setIsTransitioning(false);
        }, 500);

        return () => {
            clearInterval(interval);
        };
    }, [articles.length, visibleIndex]);

    const currentArticle = articles[visibleIndex];

    return (
        <Container>
            <Typography variant="h5" color="secondary" sx={{ mb: '14px' }}>
                Articles
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', flex: '1' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px', flex: '0.48' }}>
                        <Typography variant="h2">The best furniture comes from Lalasia</Typography>
                        <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5', mb: '20px' }}>Pellentesque etiam blandit in tincidunt at donec. </Typography>
                        <Box
                            key={visibleIndex}
                            sx={{
                                position: 'relative',
                                transition: 'opacity 0.5s ease-out',
                                opacity: isTransitioning ? 0 : 1,
                            }}
                        >
                            <img src={currentArticle.image} alt={currentArticle.title} style={{ height: 'auto', width: '100%' }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column', position: 'absolute', bottom: '0', left: '0', m: '26px', gap: '10px' }}>
                                <Typography sx={{ opacity: '0.7', fontSize: '18px', fontWeight: '500', lineHeight: '180%', color: '#ffffff' }}>{currentArticle.content}</Typography>
                                <Typography sx={{ letterSpacing: '0.26px', fontSize: '25px', fontWeight: '700', lineHeight: '130%', color: '#ffffff' }}>{currentArticle.title}</Typography>
                                <Typography sx={{ opacity: '0.7', fontSize: '18px', fontWeight: '500', lineHeight: '180%', color: '#ffffff' }}>{currentArticle.description}</Typography>
                                <Button
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                        p: '0',
                                        textTransform: 'capitalize',
                                        fontSize: '18px',
                                        color: '#ffffff',
                                        fontWeight: '500',
                                        lineHeight: '180%',
                                    }}
                                >
                                    Read more
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px', mb: '160px', flex: '0.48' }}>
                        <Box sx={{ display: 'flex', gap: '26px', alignItems: 'center' }}>
                            <Box component="img" src="https://picsum.photos/id/211/220/220" sx={{ height: 'auto', width: '100%' }}></Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>Tips and Trick</Typography>
                                <Typography variant="h3">6 ways to give your home minimalistic vibes</Typography>
                                <Typography
                                    sx={{
                                        fontSize: '18px',
                                        fontWeight: '500',
                                        lineHeight: '180%',
                                        color: '#AFADB5',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        display: '-webkit-box',
                                        WebkitLineClamp: '1',
                                        WebkitBoxOrient: 'vertical',
                                    }}
                                >
                                    Pellentesque etiam blandit in tincidunt at donec. Eget ipsum .
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Avatar></Avatar>
                                    <Typography variant="h6">By Jerremy Jean</Typography>
                                    <Typography sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>Friday, 1 April 2022</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '26px', alignItems: 'center' }}>
                            <Box component="img" src="https://picsum.photos/id/212/220/220" sx={{ height: 'auto', width: '100%' }}></Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>Tips and Trick</Typography>
                                <Typography variant="h3">6 ways to give your home minimalistic vibes</Typography>
                                <Typography
                                    sx={{
                                        fontSize: '18px',
                                        fontWeight: '500',
                                        lineHeight: '180%',
                                        color: '#AFADB5',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        display: '-webkit-box',
                                        WebkitLineClamp: '1',
                                        WebkitBoxOrient: 'vertical',
                                    }}
                                >
                                    Pellentesque etiam blandit in tincidunt at donec. Eget ipsum .
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Avatar></Avatar>
                                    <Typography variant="h6">By Jerremy Jean</Typography>
                                    <Typography sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>Friday, 1 April 2022</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '26px', alignItems: 'center' }}>
                            <Box component="img" src="https://picsum.photos/id/213/220/220" sx={{ height: 'auto', width: '100%' }}></Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>Tips and Trick</Typography>
                                <Typography variant="h3">6 ways to give your home minimalistic vibes</Typography>
                                <Typography
                                    sx={{
                                        fontSize: '18px',
                                        fontWeight: '500',
                                        lineHeight: '180%',
                                        color: '#AFADB5',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        display: '-webkit-box',
                                        WebkitLineClamp: '1',
                                        WebkitBoxOrient: 'vertical',
                                    }}
                                >
                                    Pellentesque etiam blandit in tincidunt at donec. Eget ipsum .
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Avatar></Avatar>
                                    <Typography variant="h6">By Jerremy Jean</Typography>
                                    <Typography sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>Friday, 1 April 2022</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '80px' }}>
                    <Typography variant="h2">Join with me to get special discount</Typography>
                    <Button variant="contained" sx={{ color: '#ffffff', borderRadius: '0', textTransform: 'capitalize' }}>
                        Learn More &#10132;
                    </Button>
                </Box>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <Typography variant="h3">The best furniture comes from Lalasia</Typography>
                        <Typography sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5', mb: '20px' }}>Pellentesque etiam blandit in tincidunt at donec. </Typography>
                        <Box
                            key={visibleIndex}
                            sx={{
                                position: 'relative',
                                transition: 'opacity 0.5s ease-out',
                                opacity: isTransitioning ? 0 : 1,
                                mb: '20px',
                            }}
                        >
                            <img src={currentArticle.image} alt={currentArticle.title} style={{ height: 'auto', width: '100%' }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column', position: 'absolute', bottom: '0', left: '0', m: '26px', gap: '10px' }}>
                                <Typography sx={{ opacity: '0.7', fontSize: '12px', fontWeight: '500', lineHeight: '180%', color: '#ffffff' }}>{currentArticle.content}</Typography>
                                <Typography sx={{ letterSpacing: '0.26px', fontSize: '16px', fontWeight: '700', lineHeight: '130%', color: '#ffffff' }}>{currentArticle.title}</Typography>
                                <Typography sx={{ opacity: '0.7', fontSize: '14px', fontWeight: '500', lineHeight: '180%', color: '#ffffff' }}>{currentArticle.description}</Typography>
                                <Button
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                        p: '0',
                                        textTransform: 'capitalize',
                                        fontSize: '12px',
                                        color: '#ffffff',
                                        fontWeight: '500',
                                        lineHeight: '180%',
                                    }}
                                >
                                    Read more
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px', mb: '80px' }}>
                        <Box sx={{ display: 'flex', gap: '26px', alignItems: 'center', flexWrap: 'wrap' }}>
                            <Box component="img" src="https://picsum.photos/id/211/200/200" sx={{ height: 'auto', width: '100%', maxWidth: '350px' }}></Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <Typography sx={{ fontSize: '12px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>Tips and Trick</Typography>
                                <Typography variant="h6">6 ways to give your home minimalistic vibes</Typography>
                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        fontWeight: '500',
                                        lineHeight: '180%',
                                        color: '#AFADB5',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        display: '-webkit-box',
                                        WebkitLineClamp: '1',
                                        WebkitBoxOrient: 'vertical',
                                    }}
                                >
                                    Pellentesque etiam blandit in tincidunt at donec. Eget ipsum .
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Avatar sx={{ width: 35, height: 35 }}></Avatar>
                                    <Typography sx={{ fontSize: '12px', fontWeight: '700', lineHeight: '180%', color: '#151411' }}>By Jerremy Jean</Typography>
                                    <Typography sx={{ display: { xs: 'none', md: 'flex' }, fontSize: '14px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>
                                        Friday, 1 April 2022
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '26px', alignItems: 'center', flexWrap: 'wrap' }}>
                            <Box component="img" src="https://picsum.photos/id/212/200/200" sx={{ height: 'auto', width: '100%', maxWidth: '350px' }}></Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <Typography sx={{ fontSize: '12px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>Tips and Trick</Typography>
                                <Typography variant="h6">6 ways to give your home minimalistic vibes</Typography>
                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        fontWeight: '500',
                                        lineHeight: '180%',
                                        color: '#AFADB5',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        display: '-webkit-box',
                                        WebkitLineClamp: '1',
                                        WebkitBoxOrient: 'vertical',
                                    }}
                                >
                                    Pellentesque etiam blandit in tincidunt at donec. Eget ipsum .
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Avatar sx={{ width: 35, height: 35 }}></Avatar>
                                    <Typography sx={{ fontSize: '12px', fontWeight: '700', lineHeight: '180%', color: '#151411' }}>By Jerremy Jean</Typography>
                                    <Typography sx={{ display: { xs: 'none', md: 'flex' }, fontSize: '14px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>
                                        Friday, 1 April 2022
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '26px', alignItems: 'center', flexWrap: 'wrap' }}>
                            <Box component="img" src="https://picsum.photos/id/213/200/200" sx={{ height: 'auto', width: '100%', maxWidth: '350px' }}></Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <Typography sx={{ fontSize: '12px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>Tips and Trick</Typography>
                                <Typography variant="h6">6 ways to give your home minimalistic vibes</Typography>
                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        fontWeight: '500',
                                        lineHeight: '180%',
                                        color: '#AFADB5',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        display: '-webkit-box',
                                        WebkitLineClamp: '1',
                                        WebkitBoxOrient: 'vertical',
                                    }}
                                >
                                    Pellentesque etiam blandit in tincidunt at donec. Eget ipsum .
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Avatar sx={{ width: 35, height: 35 }}></Avatar>
                                    <Typography sx={{ fontSize: '12px', fontWeight: '700', lineHeight: '180%', color: '#151411' }}>By Jerremy Jean</Typography>
                                    <Typography sx={{ display: { xs: 'none', md: 'flex' }, fontSize: '14px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>
                                        Friday, 1 April 2022
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', flexWrap: 'wrap', mb: '50px', gap: '16px' }}>
                    <Typography variant="h3">Join with me to get special discount</Typography>
                    <Button variant="contained" sx={{ fontSize: '14px', color: '#ffffff', borderRadius: '0', textTransform: 'capitalize' }}>
                        Learn More &#10132;
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default Articles;
