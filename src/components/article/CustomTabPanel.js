import { Box } from '@mui/material';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Box role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px', p: 3 }}>{children}</Box>}
        </Box>
    );
}

export default CustomTabPanel;
