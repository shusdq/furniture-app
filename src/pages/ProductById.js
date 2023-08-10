import React, { useState } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getRelatedItems } from '../utils/relatedItems';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/features/cartSlice';
import Submit from '../components/modal/Submit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductById({ products }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const onCheckoutConfirm = () => {
        handleClose();
        toast.success('Thanks for buying our furniture!');
    };

    const product = products.find(product => product.id === id);

    const relatedProducts = getRelatedItems(products, 3);

    const renderRelatedProducts = relatedProducts.map(relatedProduct => (
        <Box key={relatedProduct.id}>
            <Box
                sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', ':hover': { boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.75)' }, cursor: 'pointer', p: '10px', borderRadius: '8px' }}
                onClick={() => {
                    navigate(`/products/${relatedProduct.id}`);
                }}
            >
                <Box component="img" src={relatedProduct.img} sx={{ width: '100%', height: 'auto', maxWidth: '390px', mb: '25px' }}></Box>
                <Typography variant="h5" sx={{ color: '#AFADB5', mb: '15px' }}>
                    {relatedProduct.name}
                </Typography>
                <Typography variant="h3" sx={{ mb: '5px' }}>
                    {relatedProduct.title}
                </Typography>
                <Typography variant="p1" sx={{ color: '#AFADB5', mb: '20px' }}>
                    {relatedProduct.description}
                </Typography>
                <Typography variant="h3">${relatedProduct.price}</Typography>
            </Box>
            <Box
                sx={{
                    display: { xs: 'flex', md: 'none' },
                    flexDirection: 'column',
                    ':hover': { boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.75)' },
                    cursor: 'pointer',
                    p: '10px',
                    borderRadius: '8px',
                }}
                onClick={() => {
                    navigate(`/products/${relatedProduct.id}`);
                }}
            >
                <Box component="img" src={relatedProduct.img} sx={{ width: '100%', height: 'auto', maxWidth: '390px', mb: '15px' }}></Box>
                <Typography variant="l4" sx={{ color: '#AFADB5', mb: '5px' }}>
                    {relatedProduct.name}
                </Typography>
                <Typography variant="h6" sx={{ mb: '5px' }}>
                    {relatedProduct.title}
                </Typography>
                <Typography variant="p4" sx={{ color: '#AFADB5', mb: '10px', maxWidth: '350px' }}>
                    {relatedProduct.description}
                </Typography>
                <Typography variant="h6Plus">${relatedProduct.price}</Typography>
            </Box>
        </Box>
    ));

    return (
        <Box>
            <Header />
            <Container>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, m: '100px 0 120px', alignItems: 'center' }}>
                    <Box component="img" src={product.img} alt={product.name} sx={{ height: 'auto', width: '100%', maxWidth: '50%', mr: '50px', flex: '0 0 50%' }} />
                    <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
                        <Typography variant="h2" sx={{ mb: '10px' }}>
                            {product.name}
                        </Typography>
                        <Typography variant="p1" sx={{ color: '#AFADB5', mb: '30px' }}>
                            {product.title}
                        </Typography>
                        <Typography variant="h5" sx={{ mb: '20px' }}>
                            Color:
                        </Typography>
                        <Box sx={{ display: 'flex', mb: '20px' }}>
                            <Box sx={{ width: '50px', height: '50px', backgroundColor: '#151411' }}></Box>
                            <Box sx={{ width: '50px', height: '50px', backgroundColor: '#314443' }}></Box>
                            <Box sx={{ width: '50px', height: '50px', backgroundColor: '#C5A26E' }}></Box>
                            <Box sx={{ width: '50px', height: '50px', backgroundColor: '#D8DBE0' }}></Box>
                        </Box>
                        <Typography variant="p1" sx={{ color: '#AFADB5', mb: '30px' }}>
                            {product.description}
                        </Typography>
                        <Typography variant="h2" sx={{ mb: '50px' }}>
                            ${product.price}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: '20px' }}>
                            <Button
                                onClick={handleOpen}
                                variant="contained"
                                sx={{
                                    flex: '0.5',
                                    color: '#fff',
                                    fontFamily: "'Eudoxus Sans',sans-serif",
                                    fontSize: '18px',
                                    fontWeight: '700',
                                    lineHeight: '130%',
                                    p: '15px 0',
                                    borderRadius: '0',
                                    textTransform: 'capitalize',
                                }}
                            >
                                Buy Now
                            </Button>
                            <Submit cart={product} open={open} onClose={handleClose} onCheckoutConfirm={onCheckoutConfirm} />
                            <Button
                                onClick={() => {
                                    dispatch(addToCart({ id: product.id, title: product.title, price: product.price, img: product.img }));
                                }}
                                variant="text"
                                sx={{
                                    flex: '0.5',
                                    color: '#151411',
                                    fontFamily: "'Eudoxus Sans',sans-serif",
                                    fontSize: '18px',
                                    fontWeight: '700',
                                    lineHeight: '130%',
                                    p: '15px 0',
                                    border: '2px solid #F3F3F3',
                                    borderRadius: '0',
                                    textTransform: 'capitalize',
                                }}
                            >
                                Add to Cart
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', m: '50px 0 100px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Box component="img" src={product.img} alt={product.name} sx={{ height: 'auto', width: '100%', maxWidth: '500px', mb: '30px' }} />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h3" sx={{ mb: '5px' }}>
                            {product.name}
                        </Typography>
                        <Typography variant="p3" sx={{ color: '#AFADB5', mb: '20px' }}>
                            {product.title}
                        </Typography>
                        <Typography variant="p3" sx={{ color: '#151411', mb: '5px' }}>
                            Color:
                        </Typography>
                        <Box sx={{ display: 'flex', mb: '20px' }}>
                            <Box sx={{ width: '30px', height: '30px', backgroundColor: '#151411' }}></Box>
                            <Box sx={{ width: '30px', height: '30px', backgroundColor: '#314443' }}></Box>
                            <Box sx={{ width: '30px', height: '30px', backgroundColor: '#C5A26E' }}></Box>
                            <Box sx={{ width: '30px', height: '30px', backgroundColor: '#D8DBE0' }}></Box>
                        </Box>
                        <Typography variant="p3" sx={{ color: '#AFADB5', mb: '15px' }}>
                            {product.description}
                        </Typography>
                        <Typography variant="h3" sx={{ mb: '30px' }}>
                            ${product.price}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                            <Button
                                onClick={handleOpen}
                                variant="contained"
                                sx={{
                                    flex: '0.5',
                                    color: '#fff',
                                    fontFamily: "'Eudoxus Sans',sans-serif",
                                    fontSize: '18px',
                                    fontWeight: '700',
                                    lineHeight: '130%',
                                    p: '15px 0',
                                    borderRadius: '0',
                                    textTransform: 'capitalize',
                                }}
                            >
                                Buy Now
                            </Button>
                            <Button
                                onClick={() => {
                                    dispatch(addToCart({}));
                                }}
                                variant="text"
                                sx={{
                                    flex: '0.5',
                                    color: '#151411',
                                    fontFamily: "'Eudoxus Sans',sans-serif",
                                    fontSize: '18px',
                                    fontWeight: '700',
                                    lineHeight: '130%',
                                    p: '15px 0',
                                    border: '2px solid #F3F3F3',
                                    borderRadius: '0',
                                    textTransform: 'capitalize',
                                }}
                            >
                                Add to Cart
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Typography variant="h2" sx={{ display: { xs: 'none', md: 'flex' }, mb: '30px' }}>
                        Related Items
                    </Typography>
                    <Typography variant="h4" sx={{ display: { xs: 'flex', md: 'none' }, mb: '25px' }}>
                        Related Items
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: '20px', mb: '100px' }}>{renderRelatedProducts}</Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', gap: '20px', flexWrap: 'wrap', mb: '80px' }}>{renderRelatedProducts}</Box>
                </Box>
                <ToastContainer />
                <Footer />
            </Container>
        </Box>
    );
}

export default ProductById;
