import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function DailyNews() {
    const navigate = useNavigate();
    const posts = useSelector(state => state.data.posts);

    const renderPosts = posts.slice(-2).map((post, index) => (
        <Box key={index}>
            <Box
                onClick={() => {
                    navigate(`/posts/${post.id}`);
                }}
                sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', ':hover': { boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.75)' }, cursor: 'pointer', p: '10px', borderRadius: '8px' }}
            >
                <Box component="img" src={post.mainImage} sx={{ width: '100%', height: 'auto', maxWidth: '520px', mb: '20px' }}></Box>
                <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5', mb: '10px' }}>{post.article}</Typography>
                <Typography variant="h3" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '1', WebkitBoxOrient: 'vertical' }}>
                    {post.title}
                </Typography>
                <Typography
                    sx={{
                        fontSize: '18px',
                        fontWeight: '500',
                        lineHeight: '180%',
                        color: '#AFADB5',
                        mb: '15px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '2',
                        WebkitBoxOrient: 'vertical',
                    }}
                >
                    {post.mainText}
                </Typography>
                <Box sx={{ display: 'flex', gap: '15px' }}>
                    <Avatar src={post.avatar} style={{ width: '28px', height: '28px' }}></Avatar>
                    <Typography variant="h6">{post.fullName}</Typography>
                    <Typography sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>{post.date}</Typography>
                </Box>
            </Box>
            <Box
                onClick={() => {
                    navigate(`/posts/${post.id}`);
                }}
                sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', ':hover': { boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.75)' }, cursor: 'pointer', p: '10px', borderRadius: '8px' }}
            >
                <Box component="img" src={post.mainImage} sx={{ width: '100%', height: 'auto', maxWidth: '520px', mb: '15px' }}></Box>
                <Typography sx={{ fontSize: '12px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5', mb: '5px' }}>{post.article}</Typography>
                <Typography variant="h6" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical' }}>
                    {post.title}
                </Typography>
                <Typography
                    sx={{
                        fontSize: '12px',
                        fontWeight: '500',
                        lineHeight: '180%',
                        color: '#AFADB5',
                        mb: '15px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '2',
                        WebkitBoxOrient: 'vertical',
                        maxWidth: '400px',
                    }}
                >
                    {post.mainText}
                </Typography>
                <Box sx={{ display: 'flex', gap: '5px' }}>
                    <Avatar src={post.avatar} style={{ width: '20px', height: '20px' }}></Avatar>
                    <Typography sx={{ fontSize: '12px', fontWeight: '700', lineHeight: '180%', color: '#151411' }}>{post.fullName}</Typography>
                    <Typography sx={{ fontSize: '12px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>{post.date}</Typography>
                </Box>
            </Box>
        </Box>
    ));
    return (
        <Box>
            <Typography variant="h5" sx={{ color: 'secondary.dark', mb: '15px' }}>
                Daily News
            </Typography>
            <Typography variant="h2" sx={{ display: { xs: 'none', md: 'flex' }, mb: '30px' }}>
                Today top headlines
            </Typography>
            <Typography variant="h3" sx={{ display: { xs: 'flex', md: 'none' }, mb: '30px' }}>
                Today top headlines
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '30px', mb: '160px' }}>{renderPosts}</Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: '20px', mb: '80px', justifyContent: 'center', flexWrap: 'wrap' }}>{renderPosts}</Box>
        </Box>
    );
}

export default DailyNews;
