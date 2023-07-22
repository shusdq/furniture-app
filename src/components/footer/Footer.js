import { Box, Container, SvgIcon, Typography } from '@mui/material';
import React from 'react';

function Footer() {
    return (
        <Container>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', mb: '90px', pt: '90px', borderTop: '1px solid #ECE4DE', gap: '15px' }}>
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '50px', gap: '10px' }}>
                        <SvgIcon style={{ width: '42', height: '42' }}>
                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Frame" clipPath="url(#clip0_2_5593)">
                                    <path id="Vector" d="M42 0H0V42H42V0Z" fill="white" />
                                    <path id="Vector_2" d="M32.9034 20.6011L31.9654 24.1011H13.6534L8.66943 5.50562H12.2954L16.3379 20.6011H32.9034Z" fill="#AD7E5C" />
                                    <path id="Vector_3" d="M31.4019 26.2009L30.4639 29.7009H9.60743L8.66943 26.2009H31.4019Z" fill="#518581" />
                                    <path id="Vector_4" d="M29.9003 31.801L28.9623 35.301H14.5913L13.6533 31.801H29.9003Z" fill="#A6D8D1" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2_5593">
                                        <rect width="42" height="42" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </SvgIcon>
                        <Typography
                            variant="h3"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: 'flex',
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Lalasia
                        </Typography>
                    </Box>
                    <Typography sx={{ fontSize: '18px', fontWeight: '500', color: '#151411', maxWidth: '500px' }}>
                        Lalasia is digital agency that help you make better experience iaculis cras in.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: '100px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <Typography variant="h4" sx={{ mb: '8px' }}>
                            Product
                        </Typography>
                        <Typography component="a" href="/" sx={{ fontSize: '18px', fontWeight: '500', color: '#141411', textDecoration: 'none' }}>
                            New Arrivals
                        </Typography>
                        <Typography component="a" href="/" sx={{ fontSize: '18px', fontWeight: '500', color: '#141411', textDecoration: 'none' }}>
                            Best Selling
                        </Typography>
                        <Typography component="a" href="/" sx={{ fontSize: '18px', fontWeight: '500', color: '#141411', textDecoration: 'none' }}>
                            Home Decor
                        </Typography>
                        <Typography component="a" href="/" sx={{ fontSize: '18px', fontWeight: '500', color: '#141411', textDecoration: 'none' }}>
                            Kitchen Set
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <Typography variant="h4" sx={{ mb: '8px' }}>
                            Services
                        </Typography>
                        <Typography component="a" href="/" sx={{ fontSize: '18px', fontWeight: '500', color: '#141411', textDecoration: 'none' }}>
                            Catalog
                        </Typography>
                        <Typography component="a" href="/" sx={{ fontSize: '18px', fontWeight: '500', color: '#141411', textDecoration: 'none' }}>
                            Blog
                        </Typography>
                        <Typography component="a" href="/" sx={{ fontSize: '18px', fontWeight: '500', color: '#141411', textDecoration: 'none' }}>
                            FaQ
                        </Typography>
                        <Typography component="a" href="/" sx={{ fontSize: '18px', fontWeight: '500', color: '#141411', textDecoration: 'none' }}>
                            Pricing
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <Typography variant="h4" sx={{ mb: '8px' }}>
                            Follow Us
                        </Typography>
                        <Typography component="a" href="/" sx={{ fontSize: '18px', fontWeight: '500', color: '#141411', textDecoration: 'none' }}>
                            Facebook
                        </Typography>
                        <Typography component="a" href="/" sx={{ fontSize: '18px', fontWeight: '500', color: '#141411', textDecoration: 'none' }}>
                            Instagram
                        </Typography>
                        <Typography component="a" href="/" sx={{ fontSize: '18px', fontWeight: '500', color: '#141411', textDecoration: 'none' }}>
                            Twitter
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', mb: '40px', pt: '30px', borderTop: '1px solid #ECE4DE', gap: '15px', flexWrap: 'wrap' }}>
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '30px', gap: '10px' }}>
                        <SvgIcon style={{ width: '34', height: '32' }}>
                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Frame" clipPath="url(#clip0_2_5593)">
                                    <path id="Vector" d="M42 0H0V42H42V0Z" fill="white" />
                                    <path id="Vector_2" d="M32.9034 20.6011L31.9654 24.1011H13.6534L8.66943 5.50562H12.2954L16.3379 20.6011H32.9034Z" fill="#AD7E5C" />
                                    <path id="Vector_3" d="M31.4019 26.2009L30.4639 29.7009H9.60743L8.66943 26.2009H31.4019Z" fill="#518581" />
                                    <path id="Vector_4" d="M29.9003 31.801L28.9623 35.301H14.5913L13.6533 31.801H29.9003Z" fill="#A6D8D1" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2_5593">
                                        <rect width="42" height="42" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </SvgIcon>
                        <Typography
                            variant="h4"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: 'flex',
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Lalasia
                        </Typography>
                    </Box>
                    <Typography sx={{ fontSize: '14px', fontWeight: '500', maxWidth: '320px', color: '#AFADB5' }}>
                        Lalasia is digital agency that help you make better experience iaculis cras in.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: '30px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <Typography variant="h6" sx={{ mb: '8px' }}>
                            Product
                        </Typography>
                        <Typography component="a" href="/" sx={{ fontSize: '14px', fontWeight: '500', textDecoration: 'none', color: '#AFADB5' }}>
                            New Arrivals
                        </Typography>
                        <Typography component="a" href="/" sx={{ fontSize: '14px', fontWeight: '500', textDecoration: 'none', color: '#AFADB5' }}>
                            Best Selling
                        </Typography>
                        <Typography component="a" href="/" sx={{ fontSize: '14px', fontWeight: '500', textDecoration: 'none', color: '#AFADB5' }}>
                            Home Decor
                        </Typography>
                        <Typography component="a" href="/" sx={{ fontSize: '14px', fontWeight: '500', textDecoration: 'none', color: '#AFADB5' }}>
                            Kitchen Set
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <Typography variant="h6" sx={{ mb: '8px' }}>
                            Services
                        </Typography>
                        <Typography component="a" href="/" sx={{ fontSize: '14px', fontWeight: '500', textDecoration: 'none', color: '#AFADB5' }}>
                            Catalog
                        </Typography>
                        <Typography component="a" href="/" sx={{ fontSize: '14px', fontWeight: '500', textDecoration: 'none', color: '#AFADB5' }}>
                            Blog
                        </Typography>
                        <Typography component="a" href="/" sx={{ fontSize: '14px', fontWeight: '500', textDecoration: 'none', color: '#AFADB5' }}>
                            FaQ
                        </Typography>
                        <Typography component="a" href="/" sx={{ fontSize: '14px', fontWeight: '500', textDecoration: 'none', color: '#AFADB5' }}>
                            Pricing
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <Typography variant="h6" sx={{ mb: '8px' }}>
                            Follow Us
                        </Typography>
                        <Typography component="a" href="/" sx={{ fontSize: '14px', fontWeight: '500', textDecoration: 'none', color: '#AFADB5' }}>
                            Facebook
                        </Typography>
                        <Typography component="a" href="/" sx={{ fontSize: '14px', fontWeight: '500', textDecoration: 'none', color: '#AFADB5' }}>
                            Instagram
                        </Typography>
                        <Typography component="a" href="/" sx={{ fontSize: '14px', fontWeight: '500', textDecoration: 'none', color: '#AFADB5' }}>
                            Twitter
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Footer;
