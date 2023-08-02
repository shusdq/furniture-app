import { Box, Tab, Tabs, Typography, Button, Avatar } from '@mui/material';
import React, { useState } from 'react';
import CustomTabPanel from './CustomTabPanel';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Topics() {
    const navigate = useNavigate();
    const [value, setValue] = useState(0);
    const [postLimit, setPostLimit] = useState(3);
    const posts = useSelector(state => state.data.posts);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleLoadMore = () => {
        setPostLimit(prevPostLimit => prevPostLimit + 3);
    };

    const uniqueArticles = ['All', ...new Set(posts.map(post => post.article))];

    const groupedPosts = uniqueArticles.map(article => {
        if (article === 'All') {
            return posts;
        }
        return posts.filter(post => post.article === article);
    });

    return (
        <Box>
            <Box sx={{ mb: '30px' }}>
                <Typography variant="h5" sx={{ color: 'secondary.dark' }}>
                    Trending Topics
                </Typography>
                <Typography variant="h2">Popular last week</Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Tabs value={value} onChange={handleChange}>
                    {uniqueArticles.map((article, index) => (
                        <Tab key={index} label={article} sx={{ textTransform: 'capitalize', color: '#AFADB5' }} />
                    ))}
                </Tabs>
            </Box>
            {groupedPosts.map((articlePosts, index) => (
                <Box key={index}>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <CustomTabPanel value={value} index={index}>
                            {articlePosts.slice(0, postLimit).map((item, postIndex) => (
                                <Box
                                    key={postIndex}
                                    sx={{ display: 'flex', gap: '30px', ':hover': { boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.75)' }, cursor: 'pointer', p: '10px', borderRadius: '8px' }}
                                    onClick={() => {
                                        navigate(`/posts/${item.id}`);
                                    }}
                                >
                                    <Box component="img" src={item.mainImage} sx={{ width: '100%', height: 'auto', maxWidth: '210px' }}></Box>
                                    <Box>
                                        <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5', mb: '10px' }}>{item.article}</Typography>
                                        <Typography variant="h3" sx={{ mb: '15px' }}>
                                            {item.title}
                                        </Typography>
                                        <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5', mb: '15px' }}>{item.mainText}</Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                            <Avatar src={item.avatar}></Avatar>
                                            <Typography variant="h6">{item.fullName}</Typography>
                                            <Typography sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>{item.date}</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </CustomTabPanel>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <CustomTabPanel key={index} value={value} index={index}>
                            {articlePosts.slice(0, postLimit).map((item, postIndex) => (
                                <Box
                                    key={postIndex}
                                    sx={{ display: 'flex', gap: '15px', ':hover': { boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.75)' }, cursor: 'pointer', p: '10px', borderRadius: '8px' }}
                                    onClick={() => {
                                        navigate(`/posts/${item.id}`);
                                    }}
                                >
                                    <Box component="img" src={item.mainImage} sx={{ width: '100%', height: 'auto', maxWidth: '110px' }}></Box>
                                    <Box>
                                        <Typography sx={{ fontSize: '12px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5', mb: '5px' }}>{item.article}</Typography>
                                        <Typography
                                            variant="h6"
                                            sx={{ mb: '10px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical' }}
                                        >
                                            {item.title}
                                        </Typography>

                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                            <Avatar src={item.avatar} style={{ width: '18px', height: '18px' }}></Avatar>
                                            <Typography sx={{ fontSize: '12px', fontWeight: '700', lineHeight: '180%' }}>{item.fullName}</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </CustomTabPanel>
                    </Box>
                </Box>
            ))}
            {groupedPosts[value].length > postLimit && (
                <Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', mb: '160px' }}>
                        <Button
                            variant="outlined"
                            onClick={handleLoadMore}
                            sx={{ border: '1.5px solid #f3f3f3', borderRadius: '0', color: '#151411', textTransform: 'capitalize', fontSize: '18px', fontWeight: '700' }}
                        >
                            Load More
                        </Button>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', mb: '80px' }}>
                        <Button
                            variant="outlined"
                            onClick={handleLoadMore}
                            sx={{ border: '1.5px solid #f3f3f3', borderRadius: '0', color: '#151411', textTransform: 'capitalize', fontSize: '18px', fontWeight: '700' }}
                        >
                            Load More
                        </Button>
                    </Box>
                </Box>
            )}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', alignItems: 'center', m: '80px 0' }}>
                <Typography variant="h2">Subscribe our newsletter</Typography>
                <Button variant="contained" sx={{ maxHeight: '50px', fontSize: '18px', color: '#ffffff', borderRadius: '0', textTransform: 'capitalize' }}>
                    Let`s Talk &#10132;
                </Button>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', alignItems: 'center', mb: '50px' }}>
                <Typography variant="h3" sx={{ mb: '20px' }}>
                    Subscribe our newsletter
                </Typography>
                <Button variant="contained" sx={{ fontSize: '14px', color: '#ffffff', borderRadius: '0', textTransform: 'capitalize' }}>
                    Let`s Talk &#10132;
                </Button>
            </Box>
        </Box>
    );
}

export default Topics;
