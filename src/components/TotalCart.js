import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeAllItems } from '../store/features/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Submit from './modal/Submit';

function TotalCart() {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const cart = useSelector(state => state.cart.cart);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const getTotal = () => {
        let totalPrice = 0;
        cart.forEach(item => {
            totalPrice += item.price * item.quantity;
        });
        return totalPrice;
    };
    const onCheckoutConfirm = () => {
        dispatch(removeAllItems());
        handleClose();
        toast.success('Thanks for buying our furniture!');
    };

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mb: '100px' }}>
                <Button variant="contained" onClick={handleOpen} disabled={cart.length === 0} sx={{ textTransform: 'capitalize', fontSize: '18px', fontWeight: '700' }}>
                    Checkout &#183; ${Number(getTotal().toFixed(2))}
                </Button>
                <Submit onCheckoutConfirm={onCheckoutConfirm} cart={cart} onClose={handleClose} open={open} />
            </Box>
            <ToastContainer />
        </Box>
    );
}

export default TotalCart;
