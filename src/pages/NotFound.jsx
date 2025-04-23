import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

import { notFoundBoxStyles } from '../styles/pages/NotFound';
import { NOT_FOUND_PAGE } from '../constants/pages/NotFound';

/**
 * @component NotFound
 * @description Displays a "404 - Page Not Found" message with a button to redirect users to the homepage.
 *
 * @returns {JSX.Element} A full-page error layout with navigation option.
 */
const NotFound = () => {
  return (
    <Box sx={notFoundBoxStyles}>
      {/* Heading for the 404 error */}
      <Typography variant="h1" component="h1" gutterBottom>
        {NOT_FOUND_PAGE.title}
      </Typography>

      {/* Description of the error */}
      <Typography variant="body1" gutterBottom>
        {NOT_FOUND_PAGE.description}
      </Typography>

      {/* Button that redirects the user to the homepage */}
      <Button
        variant="contained"
        color="primary"
        component={RouterLink}
        to={NOT_FOUND_PAGE.btnLink}
      >
        {NOT_FOUND_PAGE.btnTitle}
      </Button>
    </Box>
  );
};

export default NotFound;
