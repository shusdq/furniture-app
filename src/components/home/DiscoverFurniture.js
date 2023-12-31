import { Box, Button, Container, InputAdornment, SvgIcon, TextField, Typography } from '@mui/material';
import React from 'react';

function DiscoverFurniture() {
    return (
        <Container>
            <Box sx={{ textAlign: 'center' }}>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }} flexDirection="column" justifyContent="center" alignItems="center" gap="30px" m="100px 0 50px">
                    <Typography variant="h1" sx={{ position: 'relative', maxWidth: '730px' }}>
                        Discover Furniture With High Quality Wood
                        <SvgIcon sx={{ position: 'absolute', top: '71px', left: '-210px', animation: 'pulse 2s infinite' }} style={{ width: '327', height: '327' }}>
                            <svg width="327" height="327" viewBox="0 0 327 327" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Sketch-annotation-element-stroke-line-arrow-spiral-down-5">
                                    <path
                                        id="Vector"
                                        d="M175.772 245.176C183.833 244.316 194.661 242.923 202.368 240.73M202.368 240.73C203.256 240.477 199.476 234.67 199.28 234.417C194.966 228.863 190.059 224.044 184.952 219.239M202.368 240.73C158.606 235.673 127.02 204.269 126.302 172.87C126.23 169.758 126.156 166.371 126.383 162.992M126.383 162.992C126.746 157.61 127.873 152.249 130.997 148.052C133.881 144.179 139.268 140.348 144.28 140.983C153.642 142.17 156.341 154.392 149.984 160.897C144.398 166.613 132.668 167.79 126.383 162.992ZM126.383 162.992C126.251 162.89 126.121 162.787 125.993 162.68C95.1909 136.963 112.891 93.2305 141.789 77.64"
                                        stroke="#A6D8D2"
                                        strokeWidth="5"
                                        strokeMiterlimit="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                            </svg>
                        </SvgIcon>
                        <SvgIcon sx={{ position: 'absolute', bottom: '38px', right: '26px', animation: 'pulse 2s infinite' }} style={{ width: '51', height: '51' }}>
                            <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Sketch-annotation-element-stroke-abstract-stars-plus-wink-filled">
                                    <path
                                        id="Vector"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M39.187 17.1759C23.0046 26.9858 20.2788 28.152 13.9092 22.393C15.4886 27.8963 14.767 31.8985 11.8232 35.9922C19.1092 33.7715 20.4384 35.8003 24.1368 38.3394C21.8603 31.1522 25.0529 28.7875 39.187 17.1759Z"
                                        stroke="#FFB23F"
                                        strokeWidth="3"
                                        strokeMiterlimit="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        id="Vector_2"
                                        d="M33.1123 31.7903C33.3434 32.5452 33.4351 33.3468 33.5837 34.1209"
                                        stroke="#FFB23F"
                                        strokeWidth="3"
                                        strokeMiterlimit="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        id="Vector_3"
                                        d="M30.0693 36.6562C30.6689 36.5643 31.2745 36.3938 31.8673 36.2555"
                                        stroke="#FFB23F"
                                        strokeWidth="3"
                                        strokeMiterlimit="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        id="Vector_4"
                                        d="M34.3106 37.6726C34.3086 38.4141 34.4414 39.3726 34.6746 40.0877"
                                        stroke="#FFB23F"
                                        strokeWidth="3"
                                        strokeMiterlimit="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        id="Vector_5"
                                        d="M36.2236 35.5363C37.0232 35.601 37.8655 35.2785 38.6645 35.1788"
                                        stroke="#FFB23F"
                                        strokeWidth="3"
                                        strokeMiterlimit="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        id="Vector_6"
                                        d="M18.5898 10.7007C18.6763 11.5475 18.8199 12.3838 18.988 13.2169"
                                        stroke="#FFB23F"
                                        strokeWidth="3"
                                        strokeMiterlimit="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        id="Vector_7"
                                        d="M15.2627 15.4507C15.8964 15.394 16.5033 15.3153 17.1274 15.2015"
                                        stroke="#FFB23F"
                                        strokeWidth="3"
                                        strokeMiterlimit="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        id="Vector_8"
                                        d="M19.6582 16.7291C19.6714 17.5213 19.8292 18.3633 19.9899 19.1422"
                                        stroke="#FFB23F"
                                        strokeWidth="3"
                                        strokeMiterlimit="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        id="Vector_9"
                                        d="M21.6602 14.5608C22.3816 14.3809 23.049 14.1379 23.7952 14.0525"
                                        stroke="#FFB23F"
                                        strokeWidth="3"
                                        strokeMiterlimit="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                            </svg>
                        </SvgIcon>
                    </Typography>
                    <Typography variant="p1" sx={{ color: '#AFADB5', maxWidth: '750px' }}>
                        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. Purus parturient viverra nunc, tortor sit laoreet. Quam tincidunt
                        aliquam adipiscing tempor.
                    </Typography>
                </Box>
                <Box width="100%" sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', position: 'relative', mb: '50%' }}>
                    <TextField
                        label="Search property"
                        id="outlined-start-adornment"
                        fullWidth
                        variant="filled"
                        sx={{ m: 1, maxWidth: '786px', background: '#FFFFFF' }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Button
                                        variant="contained"
                                        sx={{ borderRadius: '0', fontFamily: "'Eudoxus Sans',sans-serif", fontWeight: '700', color: '#fff', fontSize: '18px', textTransform: 'capitalize' }}
                                    >
                                        Search
                                    </Button>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Box component="img" src="/images/rectangle.png" sx={{ width: '100%', height: 'auto', position: 'absolute', top: '35px', left: '0', zIndex: '-1' }}></Box>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '30px', margin: '50px 0 30px' }}>
                    <Typography variant="h3" sx={{ position: 'relative', maxWidth: '730px' }}>
                        Discover Furniture With High Quality Wood
                        <SvgIcon sx={{ position: 'absolute', top: '-52px', left: '-76px', animation: 'pulse 2s infinite' }} style={{ width: '150', height: '150' }}>
                            <svg width="327" height="327" viewBox="0 0 327 327" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Sketch-annotation-element-stroke-line-arrow-spiral-down-5">
                                    <path
                                        id="Vector"
                                        d="M175.772 245.176C183.833 244.316 194.661 242.923 202.368 240.73M202.368 240.73C203.256 240.477 199.476 234.67 199.28 234.417C194.966 228.863 190.059 224.044 184.952 219.239M202.368 240.73C158.606 235.673 127.02 204.269 126.302 172.87C126.23 169.758 126.156 166.371 126.383 162.992M126.383 162.992C126.746 157.61 127.873 152.249 130.997 148.052C133.881 144.179 139.268 140.348 144.28 140.983C153.642 142.17 156.341 154.392 149.984 160.897C144.398 166.613 132.668 167.79 126.383 162.992ZM126.383 162.992C126.251 162.89 126.121 162.787 125.993 162.68C95.1909 136.963 112.891 93.2305 141.789 77.64"
                                        stroke="#A6D8D2"
                                        strokeWidth="5"
                                        strokeMiterlimit="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                            </svg>
                        </SvgIcon>
                        <SvgIcon sx={{ position: 'absolute', bottom: '0px', right: '-37px', animation: 'pulse 2s infinite' }} style={{ width: '40', height: '40' }}>
                            <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Sketch-annotation-element-stroke-abstract-stars-plus-wink-filled">
                                    <path
                                        id="Vector"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M39.187 17.1759C23.0046 26.9858 20.2788 28.152 13.9092 22.393C15.4886 27.8963 14.767 31.8985 11.8232 35.9922C19.1092 33.7715 20.4384 35.8003 24.1368 38.3394C21.8603 31.1522 25.0529 28.7875 39.187 17.1759Z"
                                        stroke="#FFB23F"
                                        strokeWidth="3"
                                        strokeMiterlimit="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        id="Vector_2"
                                        d="M33.1123 31.7903C33.3434 32.5452 33.4351 33.3468 33.5837 34.1209"
                                        stroke="#FFB23F"
                                        strokeWidth="3"
                                        strokeMiterlimit="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        id="Vector_3"
                                        d="M30.0693 36.6562C30.6689 36.5643 31.2745 36.3938 31.8673 36.2555"
                                        stroke="#FFB23F"
                                        strokeWidth="3"
                                        strokeMiterlimit="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        id="Vector_4"
                                        d="M34.3106 37.6726C34.3086 38.4141 34.4414 39.3726 34.6746 40.0877"
                                        stroke="#FFB23F"
                                        strokeWidth="3"
                                        strokeMiterlimit="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        id="Vector_5"
                                        d="M36.2236 35.5363C37.0232 35.601 37.8655 35.2785 38.6645 35.1788"
                                        stroke="#FFB23F"
                                        strokeWidth="3"
                                        strokeMiterlimit="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        id="Vector_6"
                                        d="M18.5898 10.7007C18.6763 11.5475 18.8199 12.3838 18.988 13.2169"
                                        stroke="#FFB23F"
                                        strokeWidth="3"
                                        strokeMiterlimit="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        id="Vector_7"
                                        d="M15.2627 15.4507C15.8964 15.394 16.5033 15.3153 17.1274 15.2015"
                                        stroke="#FFB23F"
                                        strokeWidth="3"
                                        strokeMiterlimit="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        id="Vector_8"
                                        d="M19.6582 16.7291C19.6714 17.5213 19.8292 18.3633 19.9899 19.1422"
                                        stroke="#FFB23F"
                                        strokeWidth="3"
                                        strokeMiterlimit="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        id="Vector_9"
                                        d="M21.6602 14.5608C22.3816 14.3809 23.049 14.1379 23.7952 14.0525"
                                        stroke="#FFB23F"
                                        strokeWidth="3"
                                        strokeMiterlimit="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                            </svg>
                        </SvgIcon>
                    </Typography>
                    <Typography variant="p3" sx={{ color: '#AFADB5', maxWidth: '750px' }}>
                        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. Purus parturient viverra nunc, tortor sit laoreet. Quam tincidunt
                        aliquam adipiscing tempor.
                    </Typography>
                </Box>
                <Box width="100%" sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', flexDirection: 'column', gap: '30px', mb: '100px' }}>
                    <TextField
                        label="Search property"
                        id="outlined-start-adornment"
                        fullWidth
                        variant="filled"
                        sx={{ background: '#fff' }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Button
                                        variant="contained"
                                        sx={{ borderRadius: '0', fontFamily: "'Eudoxus Sans',sans-serif", fontWeight: '700', color: '#fff', fontSize: '14px', textTransform: 'capitalize' }}
                                    >
                                        Search
                                    </Button>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Box component="img" src="/images/rectangle.png" maxWidth="lg" sx={{ width: '100%', height: 'auto' }}></Box>
                </Box>
            </Box>
        </Container>
    );
}

export default DiscoverFurniture;
