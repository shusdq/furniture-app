import React, { useState } from 'react';
import { AppBar, Box, Container, IconButton, Menu, MenuItem, SvgIcon, Toolbar, Typography, Button, Badge } from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';

function ResponsiveAppBar() {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState(null);
    const cart = useSelector(state => state.cart.cart);

    const getTotalQuantity = () => {
        let total = 0;
        cart.forEach(item => {
            total += item.quantity;
        });
        return total;
    };

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    const handleOpenNavMenu = event => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#fff', borderBottom: '2px solid #F3F3F3' }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <SvgIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} style={{ width: '42', height: '42' }}>
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
                        onClick={() => {
                            navigate('/');
                        }}
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            color: 'inherit',
                            cursor: 'pointer',
                        }}
                    >
                        Lalasia
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography
                                    variant="p1"
                                    onClick={() => {
                                        navigate('/products');
                                    }}
                                >
                                    Products
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography
                                    variant="p1"
                                    onClick={() => {
                                        navigate('/services');
                                    }}
                                >
                                    Services
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography
                                    variant="p1"
                                    onClick={() => {
                                        navigate('/article');
                                    }}
                                >
                                    Article
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography
                                    variant="p1"
                                    onClick={() => {
                                        navigate('/about');
                                    }}
                                >
                                    About Us
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <SvgIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
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
                        variant="h5"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            color: 'inherit',
                            cursor: 'pointer',
                        }}
                        onClick={() => {
                            navigate('/');
                        }}
                    >
                        Lalasia
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center', gap: '50px' } }}>
                        <Button
                            variant="text"
                            onClick={() => {
                                navigate('/products');
                            }}
                            sx={{ my: 2, fontFamily: "'Eudoxus Sans',sans-serif", fontSize: '18px', color: '#151411', fontWeight: '500', display: 'block', textTransform: 'capitalize' }}
                        >
                            Products
                        </Button>

                        <Button
                            onClick={() => {
                                navigate('/services');
                            }}
                            sx={{ my: 2, fontFamily: "'Eudoxus Sans',sans-serif", fontSize: '18px', color: '#151411', fontWeight: '500', display: 'block', textTransform: 'capitalize' }}
                        >
                            Services
                        </Button>
                        <Button
                            onClick={() => {
                                navigate('/article');
                            }}
                            sx={{ my: 2, fontFamily: "'Eudoxus Sans',sans-serif", fontSize: '18px', color: '#151411', fontWeight: '500', display: 'block', textTransform: 'capitalize' }}
                        >
                            Article
                        </Button>
                        <Button
                            onClick={() => {
                                navigate('/about');
                            }}
                            sx={{ my: 2, fontFamily: "'Eudoxus Sans',sans-serif", fontSize: '18px', color: '#151411', fontWeight: '500', display: 'block', textTransform: 'capitalize' }}
                        >
                            About Us
                        </Button>
                    </Box>

                    <Box
                        onClick={() => {
                            navigate('/cart');
                        }}
                        sx={{ position: 'relative', flexGrow: 0, display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
                    >
                        <IconButton>
                            <StyledBadge badgeContent={getTotalQuantity()} color="primary">
                                <ShoppingBagOutlinedIcon fontSize="large" sx={{ display: { xs: 'none', md: 'flex' }, fill: 'black' }} />
                                <ShoppingBagOutlinedIcon fontSize="medium" sx={{ display: { xs: 'flex', md: 'none' }, fill: 'black' }} />
                            </StyledBadge>
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
