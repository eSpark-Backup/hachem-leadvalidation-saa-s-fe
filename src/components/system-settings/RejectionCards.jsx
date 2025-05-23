import { Card, Typography, IconButton, Box, Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  cardStyles,
  gridBoxStyles,
  gridItemStyles,
  titleTypographyStyles,
  messageBoxStyles,
  messageTypographyStyles,
  iconGridStyles,
  editButtonStyles,
  deleteButtonStyles,
  editIconStyles,
  deleteIconStyles,
} from '../../styles/components/system-settings/RejectionCards';

const RejectionCard = ({ handleDelete, handleEdit, id, title, message }) => {
  return (
    <Card key={id} variant="outlined" sx={cardStyles}>
      <Grid container spacing={2} sx={gridBoxStyles}>
        <Grid item xs={12} sm={11} sx={gridItemStyles}>
          <Typography sx={titleTypographyStyles}>{title}</Typography>
          <Box sx={messageBoxStyles}>
            <Typography sx={messageTypographyStyles}>{message}</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={1} sx={iconGridStyles}>
          <IconButton size="small" sx={editButtonStyles} onClick={handleEdit}>
            <EditIcon fontSize="small" sx={editIconStyles} />
          </IconButton>

          <IconButton
            size="small"
            sx={deleteButtonStyles}
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
