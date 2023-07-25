import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { SvgIcon } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const pages = ['Products', 'Services', 'Article', 'About Us'];
const settings = ['Logout'];

function ResponsiveAppBar() {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = event => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = event => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
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
                            fontWeight: 700,
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
                                    textAlign="center"
                                    onClick={() => {
                                        navigate('/products');
                                    }}
                                >
                                    Products
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Services</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Article</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">About Us</Typography>
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
                            fontWeight: 700,
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
                            onClick={() => {
                                navigate('/products');
                            }}
                            sx={{ my: 2, color: 'black', fontWeight: '500', display: 'block', textTransform: 'capitalize' }}
                        >
                            Products
                        </Button>

                        <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'black', fontWeight: '500', display: 'block', textTransform: 'capitalize' }}>
                            Services
                        </Button>
                        <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'black', fontWeight: '500', display: 'block', textTransform: 'capitalize' }}>
                            Article
                        </Button>
                        <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'black', fontWeight: '500', display: 'block', textTransform: 'capitalize' }}>
                            About Us
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <ShoppingBagOutlinedIcon />
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map(setting => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
