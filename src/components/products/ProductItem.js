import { Box, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductItem({ product }) {
    const navigate = useNavigate();

    return (
        <Box
            sx={{ ':hover': { boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.75)' }, cursor: 'pointer', p: '10px', borderRadius: '8px' }}
            onClick={() => {
                navigate(`/products/${product.id}`);
            }}
        >
            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', maxWidth: '344px' }}>
                <Box component="img" src={product.img} sx={{ height: 'auto', width: '100%', mb: '26px' }}></Box>
                <Typography variant="h5" sx={{ color: '#AFADB5', textTransform: 'capitalize', mb: '14px' }}>
                    {product.name}
                </Typography>
                <Typography variant="h3" sx={{ textTransform: 'capitalize', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '1', WebkitBoxOrient: 'vertical' }}>
                    {product.title}
                </Typography>
                <Typography
                    variant="p1"
                    sx={{
                        mb: '18px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '2',
                        WebkitBoxOrient: 'vertical',
                    }}
                >
                    {product.description}
                </Typography>
                <Typography variant="h3">{product.price} $</Typography>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', maxWidth: '300px' }}>
                <Box component="img" src={product.img} sx={{ height: 'auto', width: '100%', mb: '14px' }}></Box>
                <Typography variant="l4" sx={{ color: '#AFADB5', textTransform: 'capitalize', mb: '6px' }}>
                    {product.name}
                </Typography>
                <Typography
                    variant="h6Plus"
                    sx={{ textTransform: 'capitalize', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '1', WebkitBoxOrient: 'vertical' }}
                >
                    {product.title}
                </Typography>
                <Typography
                    variant="p4"
                    sx={{
                        mb: '12px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '2',
                        WebkitBoxOrient: 'vertical',
                        color: '#AFADB5',
                    }}
                >
                    {product.description}
                </Typography>
                <Typography variant="h6Plus">{product.price} $</Typography>
            </Box>
        </Box>
    );
}

export default ProductItem;
