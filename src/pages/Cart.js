import { Box, Button, ButtonGroup, Container, Typography } from '@mui/material';
import React from 'react';
import Header from '../components/header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../store/features/cartSlice';
import TotalCart from '../components/TotalCart';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart);
    const renderCart = cart.map(item => (
        <Box key={item.id}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', borderBottom: '1px solid #ECE4DE', pb: '20px', mb: '40px' }}>
                <Box
                    sx={{ display: 'flex', alignItems: 'center', flex: '0.4', gap: '20px', cursor: 'pointer' }}
                    onClick={() => {
                        navigate(`/products/${item.id}`);
                    }}
                >
                    <Box component="img" src={item.img} sx={{ width: '100%', height: 'auto', maxWidth: '200px' }}></Box>
                    <Typography variant="h4" sx={{ maxWidth: '250px' }}>
                        {item.title}
                    </Typography>
                </Box>
                <Typography variant="h5" sx={{ flex: '0.2' }}>
                    ${item.price}
                </Typography>
                <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{ flex: '0.2', height: '40px' }}>
                    <Button
                        sx={{ fontSize: '18px' }}
                        onClick={() => {
                            dispatch(decrementQuantity(item.id));
                        }}
                    >
                        -
                    </Button>
                    <Button sx={{ fontSize: '18px', cursor: 'auto' }}>{item.quantity}</Button>
                    <Button
                        sx={{ fontSize: '18px' }}
                        onClick={() => {
                            dispatch(incrementQuantity(item.id));
                        }}
                    >
                        +
                    </Button>
                </ButtonGroup>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flex: '0.2' }}>
                    <Typography variant="h5">${Number((item.price * item.quantity).toFixed(2))}</Typography>
                    <Button
                        sx={{ fontSize: '20px' }}
                        onClick={() => {
                            dispatch(removeItem(item.id));
                        }}
                    >
                        &#10006;
                    </Button>
                </Box>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', borderBottom: '1px solid #ECE4DE', gap: '20px', pb: '20px', mb: '40px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box
                        sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px', cursor: 'pointer' }}
                        onClick={() => {
                            navigate(`/products/${item.id}`);
                        }}
                    >
                        <Box component="img" src={item.img} sx={{ width: '100%', height: 'auto', maxWidth: '200px' }}></Box>
                        <Typography variant="h5">{item.title}</Typography>
                    </Box>
                    <Button
                        sx={{ fontSize: '20px', alignItems: 'flex-start', p: '0' }}
                        onClick={() => {
                            dispatch(removeItem(item.id));
                        }}
                    >
                        &#10006;
                    </Button>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{ height: '40px' }}>
                        <Button
                            sx={{ fontSize: '18px' }}
                            onClick={() => {
                                dispatch(decrementQuantity(item.id));
                            }}
                        >
                            -
                        </Button>
                        <Button sx={{ fontSize: '18px', cursor: 'auto' }}>{item.quantity}</Button>
                        <Button
                            sx={{ fontSize: '18px' }}
                            onClick={() => {
                                dispatch(incrementQuantity(item.id));
                            }}
                        >
                            +
                        </Button>
                    </ButtonGroup>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h5">${Number((item.price * item.quantity).toFixed(2))}</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    ));
    return (
        <Box>
            <Header />
            <Container>
                <Typography variant="h2" sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', m: '70px 0 40px' }}>
                    Your Cart ({cart.length} items)
                </Typography>
                <Typography variant="h3" sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', m: '50px 0 20px' }}>
                    Your Cart ({cart.length} items)
                </Typography>
                <Box sx={{ display: 'flex', borderBottom: '1px solid #ECE4DE', pb: '20px', mb: '50px' }}>
                    <Typography variant="h5" sx={{ display: { xs: 'none', md: 'flex' }, flex: '0.4' }}>
                        Item
                    </Typography>
                    <Typography variant="h5" sx={{ display: { xs: 'none', md: 'flex' }, flex: '0.2' }}>
                        Price
                    </Typography>
                    <Typography variant="h5" sx={{ display: { xs: 'none', md: 'flex' }, flex: '0.2' }}>
                        Quantity
                    </Typography>
                    <Typography variant="h5" sx={{ display: { xs: 'none', md: 'flex' }, flex: '0.2' }}>
                        Total
                    </Typography>
                </Box>
                {renderCart}
                <TotalCart />
            </Container>
        </Box>
    );
}

export default Cart;
