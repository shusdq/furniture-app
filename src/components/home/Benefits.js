import { Box, Container, SvgIcon, Typography } from '@mui/material';
import React from 'react';

function Benefits() {
    return (
        <Container>
            <Typography variant="h5" sx={{ display: { xs: 'none', md: 'flex' }, color: 'secondary.dark', mb: '10px' }}>
                Benefits
            </Typography>
            <Typography variant="h6Plus" sx={{ display: { xs: 'flex', md: 'none' }, color: 'secondary.dark', mb: '10px' }}>
                Benefits
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, flex: '1', mb: '70px', justifyContent: 'space-between' }}>
                <Typography variant="h2" sx={{ flex: '0.4' }}>
                    Benefits when using our services
                </Typography>
                <Typography variant="p1" sx={{ flex: '0.44', color: '#AFADB5' }}>
                    Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.
                </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '33px', mb: '180px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <SvgIcon fontSize="large">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15 23.125V24.225C15 26.5625 14.0625 27.5 11.7125 27.5H5.775C3.9625 27.5 2.5 26.0375 2.5 24.225V18.2875C2.5 15.9375 3.4375 15 5.775 15H6.875V19.375C6.875 21.45 8.55 23.125 10.625 23.125H15Z"
                                fill="url(#paint0_linear_2_5377)"
                            />
                            <path
                                d="M21.25 16.875V17.9625C21.25 19.775 19.775 21.25 17.9625 21.25H12.025C9.6875 21.25 8.75 20.3125 8.75 17.9625V12.025C8.75 10.2125 10.2125 8.75 12.025 8.75H13.125V13.125C13.125 15.2 14.8 16.875 16.875 16.875H21.25Z"
                                fill="url(#paint1_linear_2_5377)"
                            />
                            <path
                                d="M27.5 5.775V11.7125C27.5 14.0625 26.5625 15 24.2125 15H18.275C15.9375 15 15 14.0625 15 11.7125V5.775C15 3.4375 15.9375 2.5 18.275 2.5H24.2125C26.5625 2.5 27.5 3.4375 27.5 5.775Z"
                                fill="url(#paint2_linear_2_5377)"
                            />
                            <defs>
                                <linearGradient id="paint0_linear_2_5377" x1="16.8977" y1="105.741" x2="-15.2182" y2="103.196" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.25249" stopColor="#59A49E" />
                                    <stop offset="0.637527" stopColor="#A6D8D2" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_2_5377" x1="9" y1="21" x2="31.5" y2="0.5" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.138287" stopColor="#FFB23F" />
                                    <stop offset="0.467052" stopColor="#FAD8A5" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_2_5377" x1="29.3977" y1="93.2407" x2="-2.71822" y2="90.6962" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.25249" stopColor="#59A49E" />
                                    <stop offset="0.637527" stopColor="#A6D8D2" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </SvgIcon>
                    <Typography variant="h3">Many Choices</Typography>
                    <Typography variant="p1" sx={{ color: '#AFADB5' }}>
                        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <SvgIcon fontSize="large">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20.9373 4.45V2.5C20.9373 1.9875 20.5123 1.5625 19.9998 1.5625C19.4873 1.5625 19.0623 1.9875 19.0623 2.5V4.375H10.9373V2.5C10.9373 1.9875 10.5123 1.5625 9.9998 1.5625C9.4873 1.5625 9.0623 1.9875 9.0623 2.5V4.45C5.6873 4.7625 4.0498 6.775 3.7998 9.7625C3.7748 10.125 4.0748 10.425 4.4248 10.425H25.5748C25.9373 10.425 26.2373 10.1125 26.1998 9.7625C25.9498 6.775 24.3123 4.7625 20.9373 4.45Z"
                                fill="url(#paint0_linear_2_5436)"
                            />
                            <path
                                d="M23.75 18.75C20.9875 18.75 18.75 20.9875 18.75 23.75C18.75 24.6875 19.0125 25.575 19.475 26.325C20.3375 27.775 21.925 28.75 23.75 28.75C25.575 28.75 27.1625 27.775 28.025 26.325C28.4875 25.575 28.75 24.6875 28.75 23.75C28.75 20.9875 26.5125 18.75 23.75 18.75ZM26.3375 23.2125L23.675 25.675C23.5 25.8375 23.2625 25.925 23.0375 25.925C22.8 25.925 22.5625 25.8375 22.375 25.65L21.1375 24.4125C20.775 24.05 20.775 23.45 21.1375 23.0875C21.5 22.725 22.1 22.725 22.4625 23.0875L23.0625 23.6875L25.0625 21.8375C25.4375 21.4875 26.0375 21.5125 26.3875 21.8875C26.7375 22.2625 26.7125 22.85 26.3375 23.2125Z"
                                fill="url(#paint1_linear_2_5436)"
                            />
                            <path
                                d="M25 12.3H5C4.3125 12.3 3.75 12.8625 3.75 13.55V21.25C3.75 25 5.625 27.5 10 27.5H16.1625C17.025 27.5 17.625 26.6625 17.35 25.85C17.1 25.125 16.8875 24.325 16.8875 23.75C16.8875 19.9625 19.975 16.875 23.7625 16.875C24.125 16.875 24.4875 16.9 24.8375 16.9625C25.5875 17.075 26.2625 16.4875 26.2625 15.7375V13.5625C26.25 12.8625 25.6875 12.3 25 12.3ZM11.5125 22.7625C11.275 22.9875 10.95 23.125 10.625 23.125C10.3 23.125 9.975 22.9875 9.7375 22.7625C9.5125 22.525 9.375 22.2 9.375 21.875C9.375 21.55 9.5125 21.225 9.7375 20.9875C9.8625 20.875 9.9875 20.7875 10.15 20.725C10.6125 20.525 11.1625 20.6375 11.5125 20.9875C11.7375 21.225 11.875 21.55 11.875 21.875C11.875 22.2 11.7375 22.525 11.5125 22.7625ZM11.5125 18.3875C11.45 18.4375 11.3875 18.4875 11.325 18.5375C11.25 18.5875 11.175 18.625 11.1 18.65C11.025 18.6875 10.95 18.7125 10.875 18.725C10.7875 18.7375 10.7 18.75 10.625 18.75C10.3 18.75 9.975 18.6125 9.7375 18.3875C9.5125 18.15 9.375 17.825 9.375 17.5C9.375 17.175 9.5125 16.85 9.7375 16.6125C10.025 16.325 10.4625 16.1875 10.875 16.275C10.95 16.2875 11.025 16.3125 11.1 16.35C11.175 16.375 11.25 16.4125 11.325 16.4625C11.3875 16.5125 11.45 16.5625 11.5125 16.6125C11.7375 16.85 11.875 17.175 11.875 17.5C11.875 17.825 11.7375 18.15 11.5125 18.3875ZM15.8875 18.3875C15.65 18.6125 15.325 18.75 15 18.75C14.675 18.75 14.35 18.6125 14.1125 18.3875C13.8875 18.15 13.75 17.825 13.75 17.5C13.75 17.175 13.8875 16.85 14.1125 16.6125C14.5875 16.15 15.425 16.15 15.8875 16.6125C16.1125 16.85 16.25 17.175 16.25 17.5C16.25 17.825 16.1125 18.15 15.8875 18.3875Z"
                                fill="url(#paint2_linear_2_5436)"
                            />
                            <defs>
                                <linearGradient id="paint0_linear_2_5436" x1="29.6043" y1="65.8977" x2="-26.0864" y2="54.743" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.25249" stopColor="#59A49E" />
                                    <stop offset="0.637527" stopColor="#A6D8D2" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_2_5436" x1="30.2682" y1="91.3426" x2="4.57542" y2="89.3069" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.25249" stopColor="#59A49E" />
                                    <stop offset="0.637527" stopColor="#A6D8D2" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_2_5436" x1="4.20025" y1="27.196" x2="30.4895" y2="-8.27959" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.138287" stopColor="#FFB23F" />
                                    <stop offset="0.467052" stopColor="#FAD8A5" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </SvgIcon>
                    <Typography variant="h3">Fast and On Time</Typography>
                    <Typography variant="p1" sx={{ color: '#AFADB5' }}>
                        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <SvgIcon fontSize="large">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.25 5H8.75C5 5 2.5 6.875 2.5 11.25V15.7C2.5 16.1625 2.975 16.45 3.3875 16.2625C4.6125 15.7 6.025 15.4875 7.5125 15.75C10.8 16.3375 13.2125 19.3875 13.125 22.725C13.1125 23.25 13.0375 23.7625 12.9 24.2625C12.8 24.65 13.1125 25.0125 13.5125 25.0125H21.25C25 25.0125 27.5 23.1375 27.5 18.7625V11.25C27.5 6.875 25 5 21.25 5ZM15 18.125C13.275 18.125 11.875 16.725 11.875 15C11.875 13.275 13.275 11.875 15 11.875C16.725 11.875 18.125 13.275 18.125 15C18.125 16.725 16.725 18.125 15 18.125ZM24.0625 17.5C24.0625 18.0125 23.6375 18.4375 23.125 18.4375C22.6125 18.4375 22.1875 18.0125 22.1875 17.5V12.5C22.1875 11.9875 22.6125 11.5625 23.125 11.5625C23.6375 11.5625 24.0625 11.9875 24.0625 12.5V17.5Z"
                                fill="url(#paint0_linear_2_5386)"
                            />
                            <path
                                d="M6.25 17.5C3.4875 17.5 1.25 19.7375 1.25 22.5C1.25 23.4375 1.5125 24.325 1.975 25.075C2.8375 26.525 4.425 27.5 6.25 27.5C8.075 27.5 9.6625 26.525 10.525 25.075C10.9875 24.325 11.25 23.4375 11.25 22.5C11.25 19.7375 9.0125 17.5 6.25 17.5ZM8.7125 22.0875L6.05 24.55C5.875 24.7125 5.6375 24.8 5.4125 24.8C5.175 24.8 4.9375 24.7125 4.75 24.525L3.5125 23.2875C3.15 22.925 3.15 22.325 3.5125 21.9625C3.875 21.6 4.475 21.6 4.8375 21.9625L5.4375 22.5625L7.4375 20.7125C7.8125 20.3625 8.4125 20.3875 8.7625 20.7625C9.1125 21.1375 9.0875 21.7375 8.7125 22.0875Z"
                                fill="url(#paint1_linear_2_5386)"
                            />
                            <defs>
                                <linearGradient id="paint0_linear_2_5386" x1="3" y1="24.6123" x2="38.8778" y2="-16.223" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.138287" stopColor="#FFB23F" />
                                    <stop offset="0.467052" stopColor="#FAD8A5" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_2_5386" x1="12.7682" y1="90.0926" x2="-12.9246" y2="88.0569" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.25249" stopColor="#40B4A6" />
                                    <stop offset="0.637527" stopColor="#A6D8D2" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </SvgIcon>
                    <Typography variant="h3">Affordable Price</Typography>
                    <Typography variant="p1" sx={{ color: '#AFADB5' }}>
                        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, flexWrap: 'wrap', gap: '20px', mb: '50px', justifyContent: 'space-between' }}>
                <Typography variant="h3">Benefits when using our services</Typography>
                <Typography variant="p3" sx={{ color: '#AFADB5' }}>
                    Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.
                </Typography>
            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none' }, flexWrap: 'wrap', gap: '20px', mb: '100px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    {/* Don`t working for no reason */}
                    {/* <SvgIcon>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15 23.125V24.225C15 26.5625 14.0625 27.5 11.7125 27.5H5.775C3.9625 27.5 2.5 26.0375 2.5 24.225V18.2875C2.5 15.9375 3.4375 15 5.775 15H6.875V19.375C6.875 21.45 8.55 23.125 10.625 23.125H15Z"
                                fill="url(#paint0_linear_2_5377)"
                            />
                            <path
                                d="M21.25 16.875V17.9625C21.25 19.775 19.775 21.25 17.9625 21.25H12.025C9.6875 21.25 8.75 20.3125 8.75 17.9625V12.025C8.75 10.2125 10.2125 8.75 12.025 8.75H13.125V13.125C13.125 15.2 14.8 16.875 16.875 16.875H21.25Z"
                                fill="url(#paint1_linear_2_5377)"
                            />
                            <path
                                d="M27.5 5.775V11.7125C27.5 14.0625 26.5625 15 24.2125 15H18.275C15.9375 15 15 14.0625 15 11.7125V5.775C15 3.4375 15.9375 2.5 18.275 2.5H24.2125C26.5625 2.5 27.5 3.4375 27.5 5.775Z"
                                fill="url(#paint2_linear_2_5377)"
                            />
                            <defs>
                                <linearGradient id="paint0_linear_2_5377" x1="16.8977" y1="105.741" x2="-15.2182" y2="103.196" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.25249" stopColor="#59A49E" />
                                    <stop offset="0.637527" stopColor="#A6D8D2" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_2_5377" x1="9" y1="21" x2="31.5" y2="0.5" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.138287" stopColor="#FFB23F" />
                                    <stop offset="0.467052" stopColor="#FAD8A5" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_2_5377" x1="29.3977" y1="93.2407" x2="-2.71822" y2="90.6962" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.25249" stopColor="#59A49E" />
                                    <stop offset="0.637527" stopColor="#A6D8D2" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </SvgIcon> */}
                    <Typography variant="h6">Many Choices</Typography>
                    <Typography variant="p3" sx={{ color: '#AFADB5' }}>
                        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    {/* Don`t working for no reason */}
                    {/* <SvgIcon>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20.9373 4.45V2.5C20.9373 1.9875 20.5123 1.5625 19.9998 1.5625C19.4873 1.5625 19.0623 1.9875 19.0623 2.5V4.375H10.9373V2.5C10.9373 1.9875 10.5123 1.5625 9.9998 1.5625C9.4873 1.5625 9.0623 1.9875 9.0623 2.5V4.45C5.6873 4.7625 4.0498 6.775 3.7998 9.7625C3.7748 10.125 4.0748 10.425 4.4248 10.425H25.5748C25.9373 10.425 26.2373 10.1125 26.1998 9.7625C25.9498 6.775 24.3123 4.7625 20.9373 4.45Z"
                                fill="url(#paint0_linear_2_5436)"
                            />
                            <path
                                d="M23.75 18.75C20.9875 18.75 18.75 20.9875 18.75 23.75C18.75 24.6875 19.0125 25.575 19.475 26.325C20.3375 27.775 21.925 28.75 23.75 28.75C25.575 28.75 27.1625 27.775 28.025 26.325C28.4875 25.575 28.75 24.6875 28.75 23.75C28.75 20.9875 26.5125 18.75 23.75 18.75ZM26.3375 23.2125L23.675 25.675C23.5 25.8375 23.2625 25.925 23.0375 25.925C22.8 25.925 22.5625 25.8375 22.375 25.65L21.1375 24.4125C20.775 24.05 20.775 23.45 21.1375 23.0875C21.5 22.725 22.1 22.725 22.4625 23.0875L23.0625 23.6875L25.0625 21.8375C25.4375 21.4875 26.0375 21.5125 26.3875 21.8875C26.7375 22.2625 26.7125 22.85 26.3375 23.2125Z"
                                fill="url(#paint1_linear_2_5436)"
                            />
                            <path
                                d="M25 12.3H5C4.3125 12.3 3.75 12.8625 3.75 13.55V21.25C3.75 25 5.625 27.5 10 27.5H16.1625C17.025 27.5 17.625 26.6625 17.35 25.85C17.1 25.125 16.8875 24.325 16.8875 23.75C16.8875 19.9625 19.975 16.875 23.7625 16.875C24.125 16.875 24.4875 16.9 24.8375 16.9625C25.5875 17.075 26.2625 16.4875 26.2625 15.7375V13.5625C26.25 12.8625 25.6875 12.3 25 12.3ZM11.5125 22.7625C11.275 22.9875 10.95 23.125 10.625 23.125C10.3 23.125 9.975 22.9875 9.7375 22.7625C9.5125 22.525 9.375 22.2 9.375 21.875C9.375 21.55 9.5125 21.225 9.7375 20.9875C9.8625 20.875 9.9875 20.7875 10.15 20.725C10.6125 20.525 11.1625 20.6375 11.5125 20.9875C11.7375 21.225 11.875 21.55 11.875 21.875C11.875 22.2 11.7375 22.525 11.5125 22.7625ZM11.5125 18.3875C11.45 18.4375 11.3875 18.4875 11.325 18.5375C11.25 18.5875 11.175 18.625 11.1 18.65C11.025 18.6875 10.95 18.7125 10.875 18.725C10.7875 18.7375 10.7 18.75 10.625 18.75C10.3 18.75 9.975 18.6125 9.7375 18.3875C9.5125 18.15 9.375 17.825 9.375 17.5C9.375 17.175 9.5125 16.85 9.7375 16.6125C10.025 16.325 10.4625 16.1875 10.875 16.275C10.95 16.2875 11.025 16.3125 11.1 16.35C11.175 16.375 11.25 16.4125 11.325 16.4625C11.3875 16.5125 11.45 16.5625 11.5125 16.6125C11.7375 16.85 11.875 17.175 11.875 17.5C11.875 17.825 11.7375 18.15 11.5125 18.3875ZM15.8875 18.3875C15.65 18.6125 15.325 18.75 15 18.75C14.675 18.75 14.35 18.6125 14.1125 18.3875C13.8875 18.15 13.75 17.825 13.75 17.5C13.75 17.175 13.8875 16.85 14.1125 16.6125C14.5875 16.15 15.425 16.15 15.8875 16.6125C16.1125 16.85 16.25 17.175 16.25 17.5C16.25 17.825 16.1125 18.15 15.8875 18.3875Z"
                                fill="url(#paint2_linear_2_5436)"
                            />
                            <defs>
                                <linearGradient id="paint0_linear_2_5436" x1="29.6043" y1="65.8977" x2="-26.0864" y2="54.743" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.25249" stopColor="#59A49E" />
                                    <stop offset="0.637527" stopColor="#A6D8D2" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_2_5436" x1="30.2682" y1="91.3426" x2="4.57542" y2="89.3069" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.25249" stopColor="#59A49E" />
                                    <stop offset="0.637527" stopColor="#A6D8D2" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_2_5436" x1="4.20025" y1="27.196" x2="30.4895" y2="-8.27959" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.138287" stopColor="#FFB23F" />
                                    <stop offset="0.467052" stopColor="#FAD8A5" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </SvgIcon> */}
                    <Typography variant="h6">Fast and On Time</Typography>
                    <Typography variant="p3" sx={{ color: '#AFADB5' }}>
                        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    {/* Don`t working for no reason */}
                    {/* <SvgIcon>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.25 5H8.75C5 5 2.5 6.875 2.5 11.25V15.7C2.5 16.1625 2.975 16.45 3.3875 16.2625C4.6125 15.7 6.025 15.4875 7.5125 15.75C10.8 16.3375 13.2125 19.3875 13.125 22.725C13.1125 23.25 13.0375 23.7625 12.9 24.2625C12.8 24.65 13.1125 25.0125 13.5125 25.0125H21.25C25 25.0125 27.5 23.1375 27.5 18.7625V11.25C27.5 6.875 25 5 21.25 5ZM15 18.125C13.275 18.125 11.875 16.725 11.875 15C11.875 13.275 13.275 11.875 15 11.875C16.725 11.875 18.125 13.275 18.125 15C18.125 16.725 16.725 18.125 15 18.125ZM24.0625 17.5C24.0625 18.0125 23.6375 18.4375 23.125 18.4375C22.6125 18.4375 22.1875 18.0125 22.1875 17.5V12.5C22.1875 11.9875 22.6125 11.5625 23.125 11.5625C23.6375 11.5625 24.0625 11.9875 24.0625 12.5V17.5Z"
                                fill="url(#paint0_linear_2_5386)"
                            />
                            <path
                                d="M6.25 17.5C3.4875 17.5 1.25 19.7375 1.25 22.5C1.25 23.4375 1.5125 24.325 1.975 25.075C2.8375 26.525 4.425 27.5 6.25 27.5C8.075 27.5 9.6625 26.525 10.525 25.075C10.9875 24.325 11.25 23.4375 11.25 22.5C11.25 19.7375 9.0125 17.5 6.25 17.5ZM8.7125 22.0875L6.05 24.55C5.875 24.7125 5.6375 24.8 5.4125 24.8C5.175 24.8 4.9375 24.7125 4.75 24.525L3.5125 23.2875C3.15 22.925 3.15 22.325 3.5125 21.9625C3.875 21.6 4.475 21.6 4.8375 21.9625L5.4375 22.5625L7.4375 20.7125C7.8125 20.3625 8.4125 20.3875 8.7625 20.7625C9.1125 21.1375 9.0875 21.7375 8.7125 22.0875Z"
                                fill="url(#paint1_linear_2_5386)"
                            />
                            <defs>
                                <linearGradient id="paint0_linear_2_5386" x1="3" y1="24.6123" x2="38.8778" y2="-16.223" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.138287" stopColor="#FFB23F" />
                                    <stop offset="0.467052" stopColor="#FAD8A5" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_2_5386" x1="12.7682" y1="90.0926" x2="-12.9246" y2="88.0569" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.25249" stopColor="#40B4A6" />
                                    <stop offset="0.637527" stopColor="#A6D8D2" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </SvgIcon> */}
                    <Typography variant="h6">Affordable Price</Typography>
                    <Typography variant="p3" sx={{ color: '#AFADB5' }}>
                        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}

export default Benefits;
