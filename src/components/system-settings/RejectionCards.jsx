import { Card, Typography, IconButton, Box, Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  cardStyles,
  gridItemStyles,
  messageBoxStyles,
  editButtonStyles,
  editIconStyles,
  deleteButtonStyles,
  deleteIconStyles,
  gridBoxStyles,
} from '../../styles/components/system-settings/RejectionCards';

const RejectionCard = ({ handleDelete, handleEdit, id, title, message }) => {
  return (
    <Card
      key={id}
      variant="outlined"
      sx={{ ...cardStyles, p: { xs: 1.5, sm: 2, md: 3 } }}
    >
      <Grid container sx={gridBoxStyles} spacing={2}>
        <Grid item xs={12} sm={11} sx={gridItemStyles}>
          <Typography
            fontWeight="bold"
            fontSize={{ xs: '1rem', sm: '1.1rem', md: '1.25rem' }}
          >
            {title}
          </Typography>
          <Box sx={{ ...messageBoxStyles, mt: { xs: 0.5, sm: 1 } }}>
            <Typography fontSize={{ xs: '0.875rem', sm: '1rem' }}>
              {message}
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={1}
          display="flex"
          alignItems="flex-start"
          justifyContent={{ xs: 'flex-end', sm: 'center' }}
          gap={1}
          sx={{ mt: { xs: 1, sm: 0 } }}
        >
          <IconButton
            size="small"
            sx={{ ...editButtonStyles, p: { xs: 0.5, sm: 1 } }}
            onClick={handleEdit}
          >
            <EditIcon fontSize="small" sx={editIconStyles} />
          </IconButton>

          <IconButton
            size="small"
            sx={{ ...deleteButtonStyles, p: { xs: 0.5, sm: 1 } }}
            onClick={() => handleDelete(id)}
          >
            <DeleteIcon fontSize="small" sx={deleteIconStyles} />
          </IconButton>
        </Grid>
      </Grid>
    </Card>
  );
};

RejectionCard.propTypes = {
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  message: PropTypes.string,
};

export default RejectionCard;
