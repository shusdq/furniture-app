import React from 'react';
import Checkout from '../form/Checkout';
import { Box, Button, Modal } from '@mui/material';

function Submit({ onCheckoutConfirm, cart, onClose, open }) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #8BAEAB',
        boxShadow: 24,
        p: 4,
    };
    return (
        <>
            <Modal sx={{ display: { xs: 'none', md: 'flex' } }} open={open} onClose={onClose}>
                <Box sx={{ ...style, width: 400 }}>
                    <Button
                        sx={{
                            position: 'absolute',
                            top: 4,
                            right: -4,
                            fontSize: '20px',
                        }}
                        onClick={onClose}
                    >
                        &#10006;
                    </Button>
                    <Checkout onCheckoutConfirm={onCheckoutConfirm} cart={cart} />
                </Box>
            </Modal>
            <Modal sx={{ display: { xs: 'flex', md: 'none' } }} open={open} onClose={onClose}>
                <Box sx={{ ...style, width: 240 }}>
                    <Button
                        sx={{
                            position: 'absolute',
                            top: 4,
                            right: -4,
                        }}
                        onClick={onClose}
                    >
                        &#10006;
                    </Button>
                    <Checkout onCheckoutConfirm={onCheckoutConfirm} cart={cart} />
                </Box>
            </Modal>
        </>
    );
}

export default Submit;
