import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import PropTypes from 'prop-types';

const DotBadge = ({ icon, color }) => {
  return (
    <Box sx={{ color: 'action.active' }}>
      <Badge
        color="primary"
        variant="dot"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{
          '& .MuiBadge-dot': {
            backgroundColor: color || '#54D14D',
          },
        }}
      >
        {icon}
      </Badge>
    </Box>
  );
};

DotBadge.propTypes = {
  icon: PropTypes.node.isRequired,
  color: PropTypes.string,
};

export default DotBadge;
