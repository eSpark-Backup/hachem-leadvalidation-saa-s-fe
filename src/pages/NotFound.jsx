// src/pages/NotFound.js
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

const NotFound = () => {
    return (
        <Box 
            display="flex" 
            flexDirection="column" 
            alignItems="center" 
            justifyContent="center" 
            height="100vh" 
            textAlign="center" 
            padding="50px"
        >
            <Typography variant="h1" component="h1" gutterBottom>
                404 - Page Not Found
            </Typography>
            <Typography variant="body1" gutterBottom>
                {"The page you're looking for doesn't exist."}
            </Typography>
            <Button 
                variant="contained" 
                color="primary" 
                component={RouterLink} 
                to="/"
            >
                Go to Home
            </Button>
        </Box>
    );
};

export default NotFound;
