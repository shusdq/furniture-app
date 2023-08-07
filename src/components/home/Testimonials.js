import { Avatar, Box, Container, SvgIcon, Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

function Testimonials() {
    const people = [
        {
            fullName: 'Gretchen Stevens',
            image: 'https://picsum.photos/id/21/500/500',
            comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non molestiae similique eum sint error! Labore totam veniam nesciunt amet veritatis.',
            grade: '3.2',
        },
        {
            fullName: 'Andrew Mathis',
            image: 'https://picsum.photos/id/2/500/500',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, quis eos. Fugiat numquam sapiente molestias?',
            grade: '4.4',
        },
        {
            fullName: 'Lisa Pruitt',
            image: 'https://picsum.photos/id/3/500/500',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate nam eaque ullam quidem error enim exercitationem placeat delectus quod, perspiciatis quo ducimus.',
            grade: '5',
        },
        {
            fullName: 'Gianni Underwood',
            image: 'https://picsum.photos/id/4/500/500',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, qui. Eveniet, minima rerum.',
            grade: '3',
        },
        {
            fullName: 'Taliyah Gordon',
            image: 'https://picsum.photos/id/5/500/500',
            comment:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta id est, quaerat placeat laborum atque expedita corporis cupiditate ipsa eveniet officia eos distinctio quasi repellat.',
            grade: '4.1',
        },
        {
            fullName: 'Malcolm Chung',
            image: 'https://picsum.photos/id/6/500/500',
            comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, harum ratione sapiente inventore distinctio quod!',
            grade: '4.2',
        },
    ];

    const renderPeoples = people.map((person, index) => (
        <Box key={index}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', justifyContent: 'space-between', m: '0 25px', mb: '160px' }}>
                <Box>
                    <SvgIcon>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.483 19.3831H5.66634C5.79967 11.5998 7.33301 10.3165 12.1163 7.48312C12.6663 7.14979 12.8497 6.44979 12.5163 5.88312C12.1997 5.33312 11.483 5.14979 10.933 5.48312C5.29967 8.81646 3.33301 10.8498 3.33301 20.5331V29.5165C3.33301 32.3665 5.64967 34.6665 8.48301 34.6665H13.483C16.4163 34.6665 18.633 32.4498 18.633 29.5165V24.5165C18.633 21.5998 16.4163 19.3831 13.483 19.3831Z"
                                fill="url(#paint0_linear_2_5541)"
                            />
                            <path
                                d="M31.5163 19.3831H23.6996C23.8329 11.5998 25.3663 10.3165 30.1496 7.48312C30.6996 7.14979 30.8829 6.44979 30.5496 5.88312C30.2163 5.33312 29.5163 5.14979 28.9496 5.48312C23.3163 8.81646 21.3496 10.8498 21.3496 20.5498V29.5331C21.3496 32.3831 23.6663 34.6831 26.4996 34.6831H31.4996C34.4329 34.6831 36.6496 32.4665 36.6496 29.5331V24.5331C36.6663 21.5998 34.4496 19.3831 31.5163 19.3831Z"
                                fill="url(#paint1_linear_2_5541)"
                            />
                            <defs>
                                <linearGradient id="paint0_linear_2_5541" x1="20.9558" y1="218.376" x2="-18.5335" y2="216.745" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.25249" stopColor="#40B4A6" />
                                    <stop offset="0.637527" stopColor="#A6D8D2" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_2_5541" x1="38.9725" y1="218.497" x2="-0.517108" y2="216.867" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.25249" stopColor="#40B4A6" />
                                    <stop offset="0.637527" stopColor="#A6D8D2" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </SvgIcon>
                    <Typography sx={{ color: '#AFADB5', fontSize: '18px', fontWeight: '500', lineHeight: '180%', mb: '20px' }}>{person.comment}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <Avatar alt={person.fullName} src={person.image}></Avatar>
                        <Typography variant="h4">{person.fullName}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                                    fill="#FFB23F"
                                    stroke="#FFB23F"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </SvgIcon>
                        <Typography variant="h5"> {person.grade}</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', justifyContent: 'space-between', m: '0 15px', mb: '100px' }}>
                <Box>
                    <SvgIcon>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.483 19.3831H5.66634C5.79967 11.5998 7.33301 10.3165 12.1163 7.48312C12.6663 7.14979 12.8497 6.44979 12.5163 5.88312C12.1997 5.33312 11.483 5.14979 10.933 5.48312C5.29967 8.81646 3.33301 10.8498 3.33301 20.5331V29.5165C3.33301 32.3665 5.64967 34.6665 8.48301 34.6665H13.483C16.4163 34.6665 18.633 32.4498 18.633 29.5165V24.5165C18.633 21.5998 16.4163 19.3831 13.483 19.3831Z"
                                fill="url(#paint0_linear_2_5541)"
                            />
                            <path
                                d="M31.5163 19.3831H23.6996C23.8329 11.5998 25.3663 10.3165 30.1496 7.48312C30.6996 7.14979 30.8829 6.44979 30.5496 5.88312C30.2163 5.33312 29.5163 5.14979 28.9496 5.48312C23.3163 8.81646 21.3496 10.8498 21.3496 20.5498V29.5331C21.3496 32.3831 23.6663 34.6831 26.4996 34.6831H31.4996C34.4329 34.6831 36.6496 32.4665 36.6496 29.5331V24.5331C36.6663 21.5998 34.4496 19.3831 31.5163 19.3831Z"
                                fill="url(#paint1_linear_2_5541)"
                            />
                            <defs>
                                <linearGradient id="paint0_linear_2_5541" x1="20.9558" y1="218.376" x2="-18.5335" y2="216.745" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.25249" stopColor="#40B4A6" />
                                    <stop offset="0.637527" stopColor="#A6D8D2" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_2_5541" x1="38.9725" y1="218.497" x2="-0.517108" y2="216.867" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.25249" stopColor="#40B4A6" />
                                    <stop offset="0.637527" stopColor="#A6D8D2" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </SvgIcon>
                    <Typography sx={{ color: '#AFADB5', fontSize: '14px', fontWeight: '500', lineHeight: '180%', mb: '15px' }}>{person.comment}</Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <Avatar sx={{ width: 35, height: 35 }} alt={person.fullName} src={person.image}></Avatar>
                        <Typography variant="h5">{person.fullName}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                                    fill="#FFB23F"
                                    stroke="#FFB23F"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </SvgIcon>
                        <Typography variant="h6"> {person.grade}</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    ));
    return (
        <Container>
            <Box sx={{ mb: '50px' }}>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', textAlign: 'center' }}>
                    <Typography variant="h5" sx={{ color: 'secondary.dark', mb: '10px' }}>
                        Testimonials
                    </Typography>
                    <Typography variant="h2" sx={{ mb: '30px' }}>
                        What our customer say
                    </Typography>
                    <Typography sx={{ color: '#AFADB5', fontSize: '18px', fontWeight: '500', lineHeight: '180%', mb: '50px' }}>
                        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.
                    </Typography>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ color: 'secondary.dark', mb: '10px' }}>
                        Testimonials
                    </Typography>
                    <Typography variant="h3" sx={{ mb: '30px' }}>
                        What our customer say
                    </Typography>
                    <Typography sx={{ color: '#AFADB5', fontSize: '14px', fontWeight: '500', lineHeight: '180%', mb: '50px' }}>
                        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.
                    </Typography>
                </Box>

                <Carousel infinite={true} arrows={false} autoPlay={true} responsive={responsive}>
                    {renderPeoples}
                </Carousel>
            </Box>
        </Container>
    );
}

export default Testimonials;
