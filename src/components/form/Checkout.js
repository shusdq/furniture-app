import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Button, TextField, Typography } from '@mui/material';

const validationSchema = yup.object({
    name: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Name is required!'),
    surname: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Surname is required!'),
    email: yup.string().email('Invalid email!').required('Email is required!'),
    phone: yup
        .string()
        .matches(/^\+380\d{9}$/, 'Invalid phone number!')
        .required('Phone number is required!'),
    address: yup.string().required('Your address is required!').min(2, 'Too short!'),
});

function Checkout({ onCheckoutConfirm, cart }) {
    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            email: '',
            phone: '',
            address: '',
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            onCheckoutConfirm();
            console.log('Values:', values);
            console.log('Items to buy', cart);
        },
    });
    return (
        <>
            <Typography variant="h3" sx={{ textAlign: 'center', mb: '20px', textTransform: 'uppercase' }}>
                Fill the form
            </Typography>
            <form onSubmit={formik.handleSubmit}>
                <Box display="flex" flexDirection="column">
                    <TextField
                        fullWidth
                        id="name"
                        name="name"
                        label="Name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                        margin="dense"
                        size="small"
                    />
                    <TextField
                        fullWidth
                        id="surname"
                        name="surname"
                        label="Surname"
                        value={formik.values.surname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.surname && Boolean(formik.errors.surname)}
                        helperText={formik.touched.surname && formik.errors.surname}
                        margin="dense"
                        size="small"
                    />
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        margin="dense"
                        size="small"
                    />
                    <TextField
                        fullWidth
                        id="phone"
                        name="phone"
                        label="Phone number"
                        value={formik.values.phone}
                        onChange={e => {
                            const inputNumber = e.target.value;
                            const formattedNumber = inputNumber.startsWith('+38') ? inputNumber : `+38${inputNumber}`;
                            formik.handleChange({
                                target: {
                                    name: 'phone',
                                    value: formattedNumber,
                                },
                            });
                        }}
                        onBlur={formik.handleBlur}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        helperText={formik.touched.phone && formik.errors.phone}
                        margin="dense"
                        size="small"
                    />
                    <TextField
                        fullWidth
                        id="address"
                        name="address"
                        label="Address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.address && Boolean(formik.errors.address)}
                        helperText={formik.touched.address && formik.errors.address}
                        margin="dense"
                        size="small"
                    />
                </Box>
                <Button type="submit" variant="contained" fullWidth sx={{ textTransform: 'capitalize', mt: '20px', color: '#fff', fontSize: '18px' }}>
                    Checkout
                </Button>
            </form>
        </>
    );
}

export default Checkout;
