import { Box, SvgIcon, Typography } from '@mui/material';
import React from 'react';

function OurMission() {
    return (
        <Box>
            <Typography variant="h5" sx={{ display: { xs: 'none', md: 'flex' }, color: 'secondary.dark', mb: '10px' }}>
                Our mision
            </Typography>
            <Typography variant="h6Plus" sx={{ display: { xs: 'flex', md: 'none' }, color: 'secondary.dark', mb: '10px' }}>
                Our mision
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mb: '160px' }}>
                <Box sx={{ flex: '0.5' }}>
                    <Typography variant="h2" sx={{ mb: '50px' }}>
                        Our team dedicated to help find smart home product
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '50px' }}>
                        <Box>
                            <Typography variant="h2">20+</Typography>
                            <Typography variant="p1" sx={{ color: '#AFADB5' }}>
                                Years Experience
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h2">483</Typography>
                            <Typography variant="p1" sx={{ color: '#AFADB5' }}>
                                Happy Client
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h2">150+</Typography>
                            <Typography variant="p1" sx={{ color: '#AFADB5' }}>
                                Project Finished
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: '0.5', gap: '15px' }}>
                    <Box sx={{ display: 'flex', gap: '30px', justifyContent: 'flex-end' }}>
                        <SvgIcon>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21.2498 10.9C21.0123 10.9 20.7748 10.8125 20.5873 10.625L18.0873 8.12502C17.7248 7.76252 17.7248 7.16252 18.0873 6.80002C18.4498 6.43752 19.0498 6.43752 19.4123 6.80002L21.2498 8.63752L25.5873 4.31252C25.9498 3.95002 26.5498 3.95002 26.9123 4.31252C27.2748 4.67502 27.2748 5.27502 26.9123 5.63752L21.9123 10.6375C21.7248 10.8 21.4873 10.9 21.2498 10.9Z"
                                    fill="url(#paint0_linear_2_7448)"
                                />
                                <path
                                    d="M13.8125 18.6875L11.5 21C11.0125 21.4875 10.2375 21.4875 9.7375 21.0125C9.6 20.875 9.4625 20.75 9.325 20.6125C8.0375 19.3125 6.875 17.95 5.8375 16.525C4.8125 15.1 3.9875 13.675 3.3875 12.2625C2.8 10.8375 2.5 9.475 2.5 8.175C2.5 7.325 2.65 6.5125 2.95 5.7625C3.25 5 3.725 4.3 4.3875 3.675C5.1875 2.8875 6.0625 2.5 6.9875 2.5C7.3375 2.5 7.6875 2.575 8 2.725C8.325 2.875 8.6125 3.1 8.8375 3.425L11.7375 7.5125C11.9625 7.825 12.125 8.1125 12.2375 8.3875C12.35 8.65 12.4125 8.9125 12.4125 9.15C12.4125 9.45 12.325 9.75 12.15 10.0375C11.9875 10.325 11.75 10.625 11.45 10.925L10.5 11.9125C10.3625 12.05 10.3 12.2125 10.3 12.4125C10.3 12.5125 10.3125 12.6 10.3375 12.7C10.375 12.8 10.4125 12.875 10.4375 12.95C10.6625 13.3625 11.05 13.9 11.6 14.55C12.1625 15.2 12.7625 15.8625 13.4125 16.525C13.5375 16.65 13.675 16.775 13.8 16.9C14.3 17.3875 14.3125 18.1875 13.8125 18.6875Z"
                                    fill="url(#paint1_linear_2_7448)"
                                />
                                <path
                                    d="M27.4625 22.9125C27.4625 23.2625 27.4 23.625 27.275 23.975C27.2375 24.075 27.2 24.175 27.15 24.275C26.9375 24.725 26.6625 25.15 26.3 25.55C25.6875 26.225 25.0125 26.7125 24.25 27.025C24.2375 27.025 24.225 27.0375 24.2125 27.0375C23.475 27.3375 22.675 27.5 21.8125 27.5C20.5375 27.5 19.175 27.2 17.7375 26.5875C16.3 25.975 14.8625 25.15 13.4375 24.1125C12.95 23.75 12.4625 23.3875 12 23L16.0875 18.9125C16.4375 19.175 16.75 19.375 17.0125 19.5125C17.075 19.5375 17.15 19.575 17.2375 19.6125C17.3375 19.65 17.4375 19.6625 17.55 19.6625C17.7625 19.6625 17.925 19.5875 18.0625 19.45L19.0125 18.5125C19.325 18.2 19.625 17.9625 19.9125 17.8125C20.2 17.6375 20.4875 17.55 20.8 17.55C21.0375 17.55 21.2875 17.6 21.5625 17.7125C21.8375 17.825 22.125 17.9875 22.4375 18.2L26.575 21.1375C26.9 21.3625 27.125 21.625 27.2625 21.9375C27.3875 22.25 27.4625 22.5625 27.4625 22.9125Z"
                                    fill="url(#paint2_linear_2_7448)"
                                />
                                <defs>
                                    <linearGradient id="paint0_linear_2_7448" x1="29.3749" y1="2.50001" x2="17.4999" y2="10" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#69AFA9" />
                                        <stop offset="0.8197" stopColor="#A1D5CF" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_2_7448" x1="-10.625" y1="2.5" x2="48.125" y2="43.125" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.198716" stopColor="#FFB23F" />
                                        <stop offset="1" stopColor="#FAD8A5" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_2_7448" x1="-1.25012" y1="17.5" x2="29.9999" y2="25.625" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.365293" stopColor="#FFB23F" />
                                        <stop offset="1" stopColor="#FAD8A5" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </SvgIcon>
                        <Box>
                            <Typography variant="h3" sx={{ mb: '15px' }}>
                                24/7 Supports
                            </Typography>
                            <Typography
                                variant="p1"
                                sx={{
                                    color: '#AFADB5',
                                    maxWidth: '500px',
                                    mb: '30px',
                                }}
                            >
                                24/7 support means a support service that is provided 24 hours a day and 7 days a week.{' '}
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '30px', justifyContent: 'flex-end' }}>
                        <SvgIcon>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.4875 7.5H8.4875C8.1625 7.5 7.85 7.5125 7.55 7.55C4.1875 7.8375 2.5 9.825 2.5 13.4875V18.4875C2.5 23.4875 4.5 24.475 8.4875 24.475H8.9875C9.2625 24.475 9.625 24.6625 9.7875 24.875L11.2875 26.875C11.95 27.7625 13.025 27.7625 13.6875 26.875L15.1875 24.875C15.375 24.625 15.675 24.475 15.9875 24.475H16.4875C20.15 24.475 22.1375 22.8 22.425 19.425C22.4625 19.125 22.475 18.8125 22.475 18.4875V13.4875C22.475 9.5 20.475 7.5 16.4875 7.5ZM8.125 17.5C7.425 17.5 6.875 16.9375 6.875 16.25C6.875 15.5625 7.4375 15 8.125 15C8.8125 15 9.375 15.5625 9.375 16.25C9.375 16.9375 8.8125 17.5 8.125 17.5ZM12.4875 17.5C11.7875 17.5 11.2375 16.9375 11.2375 16.25C11.2375 15.5625 11.8 15 12.4875 15C13.175 15 13.7375 15.5625 13.7375 16.25C13.7375 16.9375 13.1875 17.5 12.4875 17.5ZM16.8625 17.5C16.1625 17.5 15.6125 16.9375 15.6125 16.25C15.6125 15.5625 16.175 15 16.8625 15C17.55 15 18.1125 15.5625 18.1125 16.25C18.1125 16.9375 17.55 17.5 16.8625 17.5Z"
                                    fill="url(#paint0_linear_2_7441)"
                                />
                                <path
                                    d="M27.4748 8.4875V13.4875C27.4748 15.9875 26.6998 17.6875 25.1498 18.625C24.7748 18.85 24.3373 18.55 24.3373 18.1125L24.3498 13.4875C24.3498 8.4875 21.4873 5.625 16.4873 5.625L8.87482 5.6375C8.43732 5.6375 8.13732 5.2 8.36232 4.825C9.29982 3.275 10.9998 2.5 13.4873 2.5H21.4873C25.4748 2.5 27.4748 4.5 27.4748 8.4875Z"
                                    fill="url(#paint1_linear_2_7441)"
                                />
                                <defs>
                                    <linearGradient id="paint0_linear_2_7441" x1="1.24963e-06" y1="30" x2="37.5" y2="-10.625" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.203125" stopColor="#FFB23F" />
                                        <stop offset="0.540676" stopColor="#FAD8A5" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_2_7441" x1="38.1251" y1="-6.25" x2="5.62512" y2="8.125" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.351787" stopColor="#66ADA7" />
                                        <stop offset="0.884165" stopColor="#9FD3CD" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </SvgIcon>
                        <Box>
                            <Typography variant="h3" sx={{ mb: '15px' }}>
                                Free Consultation
                            </Typography>
                            <Typography
                                variant="p1"
                                sx={{
                                    color: '#AFADB5',
                                    maxWidth: '500px',
                                    mb: '30px',
                                }}
                            >
                                A free consultation is a one-on-one interaction or conversation given freely to share one's thoughts and discuss possible
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '30px', justifyContent: 'flex-end' }}>
                        <SvgIcon>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22.2623 6.8625V7.7875L17.8373 5.225C16.1623 4.2625 13.8248 4.2625 12.1623 5.225L7.7373 7.8V6.8625C7.7373 4.05 9.2748 2.5 12.0873 2.5H17.9123C20.7248 2.5 22.2623 4.05 22.2623 6.8625Z"
                                    fill="url(#paint0_linear_2_7434)"
                                />
                                <path
                                    d="M22.3 9.96249L22.125 9.87499L20.425 8.89999L16.9 6.86249C15.825 6.23749 14.175 6.23749 13.1 6.86249L9.575 8.88749L7.875 9.88749L7.65 9.99999C5.4625 11.475 5.3125 11.75 5.3125 14.1125V19.7625C5.3125 22.125 5.4625 22.4 7.7 23.9125L13.1 27.025C13.6375 27.35 14.3125 27.4875 15 27.4875C15.675 27.4875 16.3625 27.3375 16.9 27.025L22.35 23.875C24.55 22.4 24.6875 22.1375 24.6875 19.7625V14.1125C24.6875 11.75 24.5375 11.475 22.3 9.96249ZM18.4875 16.875L17.725 17.8125C17.6 17.95 17.5125 18.2125 17.525 18.4L17.6 19.6C17.65 20.3375 17.125 20.7125 16.4375 20.45L15.325 20C15.15 19.9375 14.8625 19.9375 14.6875 20L13.575 20.4375C12.8875 20.7125 12.3625 20.325 12.4125 19.5875L12.4875 18.3875C12.5 18.2 12.4125 17.9375 12.2875 17.8L11.5125 16.875C11.0375 16.3125 11.25 15.6875 11.9625 15.5L13.125 15.2C13.3125 15.15 13.525 14.975 13.625 14.825L14.275 13.825C14.675 13.2 15.3125 13.2 15.725 13.825L16.375 14.825C16.475 14.9875 16.7 15.15 16.875 15.2L18.0375 15.5C18.75 15.6875 18.9625 16.3125 18.4875 16.875Z"
                                    fill="url(#paint1_linear_2_7434)"
                                />
                                <defs>
                                    <linearGradient id="paint0_linear_2_7434" x1="34.5" y1="-45" x2="-11.5" y2="26.5" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.390186" stopColor="#59A49E" />
                                        <stop offset="0.767343" stopColor="#A6D8D2" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_2_7434" x1="7.5" y1="25" x2="25" y2="6" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.212076" stopColor="#FFB23F" />
                                        <stop offset="0.720856" stopColor="#FAD8A5" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </SvgIcon>
                        <Box>
                            <Typography variant="h3" sx={{ mb: '15px' }}>
                                Overall Guarantee
                            </Typography>
                            <Typography
                                variant="p1"
                                sx={{
                                    color: '#AFADB5',
                                    maxWidth: '500px',
                                    mb: '30px',
                                }}
                            >
                                The comprehensive guarantee is required for import, warehousing, transit, processing and specific use.{' '}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', mb: '60px' }}>
                <Box sx={{ flex: '0.5' }}>
                    <Typography variant="h3" sx={{ mb: '30px' }}>
                        Our team dedicated to help find smart home product
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '30px', mb: '20px' }}>
                        <Box>
                            <Typography variant="h3">20+</Typography>
                            <Typography variant="p3" sx={{ color: '#AFADB5' }}>
                                Years Experience
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h3">483</Typography>
                            <Typography variant="p3" sx={{ color: '#AFADB5' }}>
                                Happy Client
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h3">150+</Typography>
                            <Typography variant="p3" sx={{ color: '#AFADB5' }}>
                                Project Finished
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '10px' }}>
                    <Box sx={{ display: 'flex', gap: '30px' }}>
                        <SvgIcon>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21.2498 10.9C21.0123 10.9 20.7748 10.8125 20.5873 10.625L18.0873 8.12502C17.7248 7.76252 17.7248 7.16252 18.0873 6.80002C18.4498 6.43752 19.0498 6.43752 19.4123 6.80002L21.2498 8.63752L25.5873 4.31252C25.9498 3.95002 26.5498 3.95002 26.9123 4.31252C27.2748 4.67502 27.2748 5.27502 26.9123 5.63752L21.9123 10.6375C21.7248 10.8 21.4873 10.9 21.2498 10.9Z"
                                    fill="url(#paint0_linear_2_7448)"
                                />
                                <path
                                    d="M13.8125 18.6875L11.5 21C11.0125 21.4875 10.2375 21.4875 9.7375 21.0125C9.6 20.875 9.4625 20.75 9.325 20.6125C8.0375 19.3125 6.875 17.95 5.8375 16.525C4.8125 15.1 3.9875 13.675 3.3875 12.2625C2.8 10.8375 2.5 9.475 2.5 8.175C2.5 7.325 2.65 6.5125 2.95 5.7625C3.25 5 3.725 4.3 4.3875 3.675C5.1875 2.8875 6.0625 2.5 6.9875 2.5C7.3375 2.5 7.6875 2.575 8 2.725C8.325 2.875 8.6125 3.1 8.8375 3.425L11.7375 7.5125C11.9625 7.825 12.125 8.1125 12.2375 8.3875C12.35 8.65 12.4125 8.9125 12.4125 9.15C12.4125 9.45 12.325 9.75 12.15 10.0375C11.9875 10.325 11.75 10.625 11.45 10.925L10.5 11.9125C10.3625 12.05 10.3 12.2125 10.3 12.4125C10.3 12.5125 10.3125 12.6 10.3375 12.7C10.375 12.8 10.4125 12.875 10.4375 12.95C10.6625 13.3625 11.05 13.9 11.6 14.55C12.1625 15.2 12.7625 15.8625 13.4125 16.525C13.5375 16.65 13.675 16.775 13.8 16.9C14.3 17.3875 14.3125 18.1875 13.8125 18.6875Z"
                                    fill="url(#paint1_linear_2_7448)"
                                />
                                <path
                                    d="M27.4625 22.9125C27.4625 23.2625 27.4 23.625 27.275 23.975C27.2375 24.075 27.2 24.175 27.15 24.275C26.9375 24.725 26.6625 25.15 26.3 25.55C25.6875 26.225 25.0125 26.7125 24.25 27.025C24.2375 27.025 24.225 27.0375 24.2125 27.0375C23.475 27.3375 22.675 27.5 21.8125 27.5C20.5375 27.5 19.175 27.2 17.7375 26.5875C16.3 25.975 14.8625 25.15 13.4375 24.1125C12.95 23.75 12.4625 23.3875 12 23L16.0875 18.9125C16.4375 19.175 16.75 19.375 17.0125 19.5125C17.075 19.5375 17.15 19.575 17.2375 19.6125C17.3375 19.65 17.4375 19.6625 17.55 19.6625C17.7625 19.6625 17.925 19.5875 18.0625 19.45L19.0125 18.5125C19.325 18.2 19.625 17.9625 19.9125 17.8125C20.2 17.6375 20.4875 17.55 20.8 17.55C21.0375 17.55 21.2875 17.6 21.5625 17.7125C21.8375 17.825 22.125 17.9875 22.4375 18.2L26.575 21.1375C26.9 21.3625 27.125 21.625 27.2625 21.9375C27.3875 22.25 27.4625 22.5625 27.4625 22.9125Z"
                                    fill="url(#paint2_linear_2_7448)"
                                />
                                <defs>
                                    <linearGradient id="paint0_linear_2_7448" x1="29.3749" y1="2.50001" x2="17.4999" y2="10" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#69AFA9" />
                                        <stop offset="0.8197" stopColor="#A1D5CF" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_2_7448" x1="-10.625" y1="2.5" x2="48.125" y2="43.125" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.198716" stopColor="#FFB23F" />
                                        <stop offset="1" stopColor="#FAD8A5" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_2_7448" x1="-1.25012" y1="17.5" x2="29.9999" y2="25.625" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.365293" stopColor="#FFB23F" />
                                        <stop offset="1" stopColor="#FAD8A5" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </SvgIcon>
                        <Box>
                            <Typography variant="h6" sx={{ mb: '15px' }}>
                                24/7 Supports
                            </Typography>
                            <Typography
                                variant="p3"
                                sx={{
                                    color: '#AFADB5',
                                    maxWidth: '500px',
                                    mb: '25px',
                                }}
                            >
                                24/7 support means a support service that is provided 24 hours a day and 7 days a week.
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '30px' }}>
                        <SvgIcon>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.4875 7.5H8.4875C8.1625 7.5 7.85 7.5125 7.55 7.55C4.1875 7.8375 2.5 9.825 2.5 13.4875V18.4875C2.5 23.4875 4.5 24.475 8.4875 24.475H8.9875C9.2625 24.475 9.625 24.6625 9.7875 24.875L11.2875 26.875C11.95 27.7625 13.025 27.7625 13.6875 26.875L15.1875 24.875C15.375 24.625 15.675 24.475 15.9875 24.475H16.4875C20.15 24.475 22.1375 22.8 22.425 19.425C22.4625 19.125 22.475 18.8125 22.475 18.4875V13.4875C22.475 9.5 20.475 7.5 16.4875 7.5ZM8.125 17.5C7.425 17.5 6.875 16.9375 6.875 16.25C6.875 15.5625 7.4375 15 8.125 15C8.8125 15 9.375 15.5625 9.375 16.25C9.375 16.9375 8.8125 17.5 8.125 17.5ZM12.4875 17.5C11.7875 17.5 11.2375 16.9375 11.2375 16.25C11.2375 15.5625 11.8 15 12.4875 15C13.175 15 13.7375 15.5625 13.7375 16.25C13.7375 16.9375 13.1875 17.5 12.4875 17.5ZM16.8625 17.5C16.1625 17.5 15.6125 16.9375 15.6125 16.25C15.6125 15.5625 16.175 15 16.8625 15C17.55 15 18.1125 15.5625 18.1125 16.25C18.1125 16.9375 17.55 17.5 16.8625 17.5Z"
                                    fill="url(#paint0_linear_2_7441)"
                                />
                                <path
                                    d="M27.4748 8.4875V13.4875C27.4748 15.9875 26.6998 17.6875 25.1498 18.625C24.7748 18.85 24.3373 18.55 24.3373 18.1125L24.3498 13.4875C24.3498 8.4875 21.4873 5.625 16.4873 5.625L8.87482 5.6375C8.43732 5.6375 8.13732 5.2 8.36232 4.825C9.29982 3.275 10.9998 2.5 13.4873 2.5H21.4873C25.4748 2.5 27.4748 4.5 27.4748 8.4875Z"
                                    fill="url(#paint1_linear_2_7441)"
                                />
                                <defs>
                                    <linearGradient id="paint0_linear_2_7441" x1="1.24963e-06" y1="30" x2="37.5" y2="-10.625" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.203125" stopColor="#FFB23F" />
                                        <stop offset="0.540676" stopColor="#FAD8A5" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_2_7441" x1="38.1251" y1="-6.25" x2="5.62512" y2="8.125" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.351787" stopColor="#66ADA7" />
                                        <stop offset="0.884165" stopColor="#9FD3CD" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </SvgIcon>
                        <Box>
                            <Typography variant="h6" sx={{ mb: '15px' }}>
                                Free Consultation
                            </Typography>
                            <Typography
                                variant="p3"
                                sx={{
                                    color: '#AFADB5',
                                    maxWidth: '500px',
                                    mb: '25px',
                                }}
                            >
                                A free consultation is a one-on-one interaction or conversation given freely to share one's thoughts and discuss possible
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '30px' }}>
                        <SvgIcon>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22.2623 6.8625V7.7875L17.8373 5.225C16.1623 4.2625 13.8248 4.2625 12.1623 5.225L7.7373 7.8V6.8625C7.7373 4.05 9.2748 2.5 12.0873 2.5H17.9123C20.7248 2.5 22.2623 4.05 22.2623 6.8625Z"
                                    fill="url(#paint0_linear_2_7434)"
                                />
                                <path
                                    d="M22.3 9.96249L22.125 9.87499L20.425 8.89999L16.9 6.86249C15.825 6.23749 14.175 6.23749 13.1 6.86249L9.575 8.88749L7.875 9.88749L7.65 9.99999C5.4625 11.475 5.3125 11.75 5.3125 14.1125V19.7625C5.3125 22.125 5.4625 22.4 7.7 23.9125L13.1 27.025C13.6375 27.35 14.3125 27.4875 15 27.4875C15.675 27.4875 16.3625 27.3375 16.9 27.025L22.35 23.875C24.55 22.4 24.6875 22.1375 24.6875 19.7625V14.1125C24.6875 11.75 24.5375 11.475 22.3 9.96249ZM18.4875 16.875L17.725 17.8125C17.6 17.95 17.5125 18.2125 17.525 18.4L17.6 19.6C17.65 20.3375 17.125 20.7125 16.4375 20.45L15.325 20C15.15 19.9375 14.8625 19.9375 14.6875 20L13.575 20.4375C12.8875 20.7125 12.3625 20.325 12.4125 19.5875L12.4875 18.3875C12.5 18.2 12.4125 17.9375 12.2875 17.8L11.5125 16.875C11.0375 16.3125 11.25 15.6875 11.9625 15.5L13.125 15.2C13.3125 15.15 13.525 14.975 13.625 14.825L14.275 13.825C14.675 13.2 15.3125 13.2 15.725 13.825L16.375 14.825C16.475 14.9875 16.7 15.15 16.875 15.2L18.0375 15.5C18.75 15.6875 18.9625 16.3125 18.4875 16.875Z"
                                    fill="url(#paint1_linear_2_7434)"
                                />
                                <defs>
                                    <linearGradient id="paint0_linear_2_7434" x1="34.5" y1="-45" x2="-11.5" y2="26.5" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.390186" stopColor="#59A49E" />
                                        <stop offset="0.767343" stopColor="#A6D8D2" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_2_7434" x1="7.5" y1="25" x2="25" y2="6" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.212076" stopColor="#FFB23F" />
                                        <stop offset="0.720856" stopColor="#FAD8A5" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </SvgIcon>
                        <Box>
                            <Typography variant="h6" sx={{ mb: '15px' }}>
                                Overall Guarantee
                            </Typography>
                            <Typography
                                variant="p3"
                                sx={{
                                    color: '#AFADB5',
                                    maxWidth: '500px',
                                    mb: '25px',
                                }}
                            >
                                The comprehensive guarantee is required for import, warehousing, transit, processing and specific use.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default OurMission;
