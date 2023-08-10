import { Avatar, Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import Header from '../components/header/Header';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import { getRelatedItems } from '../utils/relatedItems';

function PostById({ posts }) {
    const navigate = useNavigate();
    const { id } = useParams();

    const post = posts.find(post => post.id === id);
    const relatedPosts = getRelatedItems(posts, 3);

    const renderRelatedPosts = relatedPosts.map((relatedPost, index) => (
        <Box key={index}>
            <Box
                sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', ':hover': { boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.75)' }, cursor: 'pointer', p: '10px', borderRadius: '8px' }}
                onClick={() => {
                    navigate(`/posts/${relatedPost.id}`);
                }}
            >
                <Box component="img" src={relatedPost.mainImage} sx={{ width: '100%', height: 'auto', mb: '25px' }}></Box>
                <Box>
                    <Typography variant="p1" sx={{ color: '#AFADB5', mb: '10px' }}>
                        {relatedPost.article}
                    </Typography>
                    <Typography variant="h3" sx={{ mb: '5px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '1', WebkitBoxOrient: 'vertical' }}>
                        {relatedPost.title}
                    </Typography>
                    <Typography
                        variant="p1"
                        sx={{
                            color: '#AFADB5',
                            mb: '15px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: '2',
                            WebkitBoxOrient: 'vertical',
                        }}
                    >
                        {relatedPost.mainText}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Avatar src={relatedPost.avatar} style={{ width: '28px', height: '28px' }}></Avatar>
                        <Typography variant="h6Plus">By {relatedPost.fullName}</Typography>
                        <Typography variant="p3" sx={{ color: '#AFADB5' }}>
                            {relatedPost.date}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', ':hover': { boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.75)' }, cursor: 'pointer', p: '10px', borderRadius: '8px' }}
                onClick={() => {
                    navigate(`/posts/${relatedPost.id}`);
                }}
            >
                <Box component="img" src={relatedPost.mainImage} sx={{ width: '100%', height: 'auto', mb: '15px' }}></Box>
                <Box>
                    <Typography variant="p4" sx={{ color: '#AFADB5', mb: '5px' }}>
                        {relatedPost.article}
                    </Typography>
                    <Typography variant="h6Plus" sx={{ mb: '5px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical' }}>
                        {relatedPost.title}
                    </Typography>
                    <Typography
                        variant="p4"
                        sx={{
                            color: '#AFADB5',
                            mb: '15px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: '2',
                            WebkitBoxOrient: 'vertical',
                        }}
                    >
                        {relatedPost.mainText}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Avatar src={relatedPost.avatar} style={{ width: '20px', height: '20px' }}></Avatar>
                        <Typography variant="p4" sx={{ color: '#151411' }}>
                            By {relatedPost.fullName}
                        </Typography>
                        <Typography variant="p4" sx={{ color: '#AFADB5' }}>
                            {relatedPost.date}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    ));
    return (
        <Box>
            <Header />
            <Container>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column' }}>
                    <Box sx={{ textAlign: 'center', m: '100px 0 50px' }}>
                        <Typography variant="h1" sx={{ mb: '20px' }}>
                            {post.title}
                        </Typography>
                        <Typography variant="p1" sx={{ color: '#AFADB5', mb: '50px' }}>
                            {post.mainText}
                        </Typography>
                        <Box component="img" src={post.mainImage} sx={{ width: '100%', height: 'auto' }}></Box>
                    </Box>
                    <Box sx={{ columnCount: 2, columnGap: '30px', mb: '50px' }}>
                        <Typography variant="p1" sx={{ color: '#AFADB5', mb: '30px' }}>
                            {post.additionalInfo.firstText}
                        </Typography>
                        <Box component="img" src={post.additionalInfo.firstImage} sx={{ width: '100%', height: 'auto' }}></Box>
                    </Box>
                    <Box>
                        <Typography variant="h3" sx={{ mb: '15px' }}>
                            {post.additionalInfo.firstTitle}
                        </Typography>
                        <Typography variant="p1" sx={{ color: '#AFADB5', mb: '50px', columnCount: 2, columnGap: '30px' }}>
                            {post.additionalInfo.firstText}
                        </Typography>
                        <Box component="img" src={post.additionalInfo.secondImage} sx={{ width: '100%', height: 'auto', mb: '50px' }}></Box>
                    </Box>
                    <Box sx={{ mb: '160px' }}>
                        <Typography variant="h3" sx={{ mb: '15px' }}>
                            {post.additionalInfo.secondTitle}
                        </Typography>
                        <Typography variant="p1" sx={{ color: '#AFADB5', columnCount: 2, columnGap: '30px' }}>
                            {post.additionalInfo.secondText}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column' }}>
                    <Box sx={{ textAlign: 'center', m: '50px 0 30px' }}>
                        <Typography variant="h3" sx={{ mb: '20px' }}>
                            {post.title}
                        </Typography>
                        <Typography variant="p3" sx={{ color: '#AFADB5', mb: '30px' }}>
                            {post.mainText}
                        </Typography>
                        <Box component="img" src={post.mainImage} sx={{ width: '100%', height: 'auto' }}></Box>
                    </Box>
                    <Box sx={{ mb: '20px' }}>
                        <Typography variant="p3" sx={{ color: '#AFADB5', mb: '20px' }}>
                            {post.additionalInfo.firstText}
                        </Typography>
                        <Box component="img" src={post.additionalInfo.firstImage} sx={{ width: '100%', height: 'auto' }}></Box>
                    </Box>
                    <Box>
                        <Typography variant="h6" sx={{ mb: '6px' }}>
                            {post.additionalInfo.firstTitle}
                        </Typography>
                        <Typography variant="p3" sx={{ color: '#AFADB5', mb: '30px' }}>
                            {post.additionalInfo.firstText}
                        </Typography>
                        <Box component="img" src={post.additionalInfo.secondImage} sx={{ width: '100%', height: 'auto', mb: '30px' }}></Box>
                    </Box>
                    <Box sx={{ mb: '80px' }}>
                        <Typography variant="h6" sx={{ mb: '5px' }}>
                            {post.additionalInfo.secondTitle}
                        </Typography>
                        <Typography variant="p3" sx={{ color: '#AFADB5' }}>
                            {post.additionalInfo.secondText}
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', textAlign: 'center', mb: '50px' }}>
                        <Typography variant="h5" sx={{ color: 'secondary.dark', mb: '15px' }}>
                            Similar Topics
                        </Typography>
                        <Typography variant="h2">Maybe you`re interested</Typography>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', textAlign: 'center', mb: '50px' }}>
                        <Typography variant="h6" sx={{ color: 'secondary.dark', mb: '15px' }}>
                            Similar Topics
                        </Typography>
                        <Typography variant="h4">Maybe you`re interested</Typography>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '30px' }}>{renderRelatedPosts}</Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: '20px', flexWrap: 'wrap', mb: '100px' }}>{renderRelatedPosts}</Box>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', alignItems: 'center', m: '80px 0' }}>
                    <Typography variant="h2">Subscribe our newsletter</Typography>
                    <Button variant="contained" sx={{ maxHeight: '50px', fontFamily: "'Eudoxus Sans',sans-serif", fontSize: '18px', color: '#ffffff', borderRadius: '0', textTransform: 'capitalize' }}>
                        let's Talk &#10132;
                    </Button>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', alignItems: 'center', mb: '50px' }}>
                    <Typography variant="h3" sx={{ mb: '20px' }}>
                        Subscribe our newsletter
                    </Typography>
                    <Button variant="contained" sx={{ fontSize: '14px', fontFamily: "'Eudoxus Sans',sans-serif", color: '#ffffff', borderRadius: '0', textTransform: 'capitalize' }}>
                        let's Talk &#10132;
                    </Button>
                </Box>
                <Footer />
            </Container>
        </Box>
    );
}

export default PostById;
