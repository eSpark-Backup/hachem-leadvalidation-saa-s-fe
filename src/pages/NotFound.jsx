import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import PropTypes from 'prop-types';
import { notFoundBoxStyles } from '../styles/pages/NotFound';
import { NOT_FOUND_PAGE as defaultPageData } from '../constants/pages/NotFound';

/**
 * @component NotFound
 * @description Displays a "404 - Page Not Found" message with a button to redirect users to the homepage.
 *
 * @param {object} props - Component props.
 * @param {string} props.title - Heading text for the page.
 * @param {string} props.description - Description text.
 * @param {string} props.btnTitle - Text for the button.
 * @param {string} props.btnLink - Link for the button.
 *
 * @returns {JSX.Element} A full-page error layout with navigation option.
 */
const NotFound = ({
  title = defaultPageData.title,
  description = defaultPageData.description,
  btnTitle = defaultPageData.btnTitle,
  btnLink = defaultPageData.btnLink,
}) => {
  return (
    <Box sx={notFoundBoxStyles}>
      <Typography variant="h1" component="h1" gutterBottom>
        {title}
      </Typography>

      <Typography gutterBottom>{description}</Typography>

      <Button
        variant="contained"
        color="primary"
        component={RouterLink}
        to={btnLink}
      >
        {btnTitle}
      </Button>
    </Box>
  );
};

NotFound.propTypes = {
  title: PropTypes.any,
  description: PropTypes.any,
  btnTitle: PropTypes.any,
  btnLink: PropTypes.any,
};

export default NotFound;
