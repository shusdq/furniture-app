import { Avatar, Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Articles({ posts }) {
    const navigate = useNavigate();
    return (
        <Container>
            <Typography variant="h5" color="secondary" sx={{ mb: '15px' }}>
                Articles
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }} justifyContent="space-between" gap="50px">
                {/* Left Box */}
                {posts.length > 0 && (
                    <Box flexBasis="50%">
                        <Box flexDirection="column" sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Typography variant="h2" sx={{ mb: '30px' }}>
                                The best furniture comes from Lalasia
                            </Typography>
                            <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5', mb: '50px' }}>Pellentesque etiam blandit in tincidunt at donec. </Typography>
                            <Box sx={{ position: 'relative' }}>
                                <Box component="img" src={posts[0].mainImage} sx={{ width: '100%', height: 'auto%' }}></Box>
                                <Box sx={{ position: 'absolute', bottom: '0', left: '0', m: '3% 5%' }}>
                                    <Typography sx={{ color: '#fff', fontSize: '18px', fontWeight: '500', lineHeight: '180%', opacity: '0.7' }}>{posts[0].article}</Typography>
                                    <Typography
                                        sx={{
                                            color: '#fff',
                                            fontSize: '26px',
                                            fontWeight: '500',
                                            lineHeight: '180%',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            display: '-webkit-box',
                                            WebkitLineClamp: '1',
                                            WebkitBoxOrient: 'vertical',
                                        }}
                                    >
                                        {posts[0].title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: '#fff',
                                            fontSize: '18px',
                                            fontWeight: '500',
                                            lineHeight: '180%',
                                            opacity: '0.7',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            display: '-webkit-box',
                                            WebkitLineClamp: '1',
                                            WebkitBoxOrient: 'vertical',
                                        }}
                                    >
                                        {posts[0].mainText}
                                    </Typography>
                                    <Button
                                        onClick={() => {
                                            navigate(`/posts/${posts[0].id}`);
                                        }}
                                        sx={{ border: 'none', fontSize: '18px', fontWeight: '500', lineHeight: '180%', textTransform: 'capitalize', color: '#fff' }}
                                    >
                                        Read Me
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                )}

                <Box flexBasis="50%" display="flex" flexDirection="column" sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {posts.slice(1, 4).map(post => (
                        <Box
                            key={post.id}
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                gap: '30px',
                                ':hover': { boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.75)' },
                                cursor: 'pointer',
                                p: '10px',
                                borderRadius: '8px',
                            }}
                            onClick={() => {
                                navigate(`/posts/${post.id}`);
                            }}
                        >
                            <Box component="img" src={post.mainImage} sx={{ width: '100%', height: 'auto', maxWidth: '210px' }}></Box>
                            <Box>
                                <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5', mb: '10px' }}>{post.article}</Typography>
                                <Typography variant="h3" sx={{ mb: '15px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical' }}>
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
                                        WebkitLineClamp: '1',
                                        WebkitBoxOrient: 'vertical',
                                    }}
                                >
                                    {post.mainText}
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <Avatar src={post.avatar}></Avatar>
                                    <Typography variant="h6">{post.fullName}</Typography>
                                    <Typography sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>{post.date}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }} justifyContent="space-between" gap="20px" flexWrap="wrap" my={2}>
                {/* Left Box */}
                {posts.length > 0 && (
                    <Box>
                        <Box flexDirection="column" sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <Typography variant="h3" sx={{ mb: '15px' }}>
                                The best furniture comes from Lalasia
                            </Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5', mb: '30px' }}>Pellentesque etiam blandit in tincidunt at donec. </Typography>
                            <Box sx={{ position: 'relative' }}>
                                <Box component="img" src={posts[0].mainImage} sx={{ width: '100%', height: 'auto%' }}></Box>
                                <Box sx={{ position: 'absolute', bottom: '0', left: '0', m: '3% 5%' }}>
                                    <Typography sx={{ color: '#fff', fontSize: '12px', fontWeight: '500', lineHeight: '180%', opacity: '0.7' }}>{posts[0].article}</Typography>
                                    <Typography
                                        sx={{
                                            color: '#fff',
                                            fontSize: '16px',
                                            fontWeight: '500',
                                            lineHeight: '180%',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            display: '-webkit-box',
                                            WebkitLineClamp: '1',
                                            WebkitBoxOrient: 'vertical',
                                        }}
                                    >
                                        {posts[0].title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: '#fff',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            lineHeight: '180%',
                                            opacity: '0.7',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            display: '-webkit-box',
                                            WebkitLineClamp: '1',
                                            WebkitBoxOrient: 'vertical',
                                        }}
                                    >
                                        {posts[0].mainText}
                                    </Typography>
                                    <Button
                                        onClick={() => {
                                            navigate(`/posts/${posts[0].id}`);
                                        }}
                                        sx={{ border: 'none', fontSize: '12px', fontWeight: '500', lineHeight: '180%', textTransform: 'capitalize', color: '#fff' }}
                                    >
                                        Read Me
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                )}

                <Box flexDirection="column" sx={{ display: { xs: 'flex', md: 'none' } }}>
                    {posts.slice(1, 4).map(post => (
                        <Box
                            key={post.id}
                            sx={{ display: 'flex', gap: '15px', ':hover': { boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.75)' }, cursor: 'pointer', p: '10px', borderRadius: '8px' }}
                            onClick={() => {
                                navigate(`/posts/${post.id}`);
                            }}
                        >
                            <Box component="img" src={post.mainImage} sx={{ width: '100%', height: 'auto', maxWidth: '110px' }}></Box>
                            <Box>
                                <Typography sx={{ fontSize: '12px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5', mb: '5px' }}>{post.article}</Typography>
                                <Typography variant="h6" sx={{ mb: '10px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical' }}>
                                    {post.title}
                                </Typography>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                    <Avatar src={post.avatar} style={{ width: '18px', height: '18px' }}></Avatar>
                                    <Typography sx={{ fontSize: '12px', fontWeight: '700', lineHeight: '180%' }}>{post.fullName}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', m: '160px 0 80px' }}>
                <Typography variant="h2">Join with me to get special discount</Typography>
                <Button variant="contained" sx={{ color: '#ffffff', borderRadius: '0', textTransform: 'capitalize' }}>
                    Learn More &#10132;
                </Button>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, width: '100%', justifyContent: 'space-between', flexWrap: 'wrap', m: '80px 0 50px', gap: '16px' }}>
                <Typography variant="h3">Join with me to get special discount</Typography>
                <Button variant="contained" sx={{ fontSize: '14px', color: '#ffffff', borderRadius: '0', textTransform: 'capitalize' }}>
                    Learn More &#10132;
                </Button>
            </Box>
        </Container>
    );
}

export default Articles;
