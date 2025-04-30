import { Clear } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { useRef, useState } from 'react';
import {
  clearAvatar,
  handleChange,
  handleClick,
  handleDrop,
} from '../../utils/settings/SettingsUploadImages';
import { clearIconStyles } from '../../styles/components/settings/SettingsUploadImages';
import { SETTINGS_UPLOAD_IMAGES } from '../../constants/components/settings/SettingsUploadImages';

const SettingsUploadImages = () => {
  const [avatar, setAvatar] = useState(null);
  const fileInputRef = useRef(null);

  return (
    <Grid item xs={12} my={1}>
      <Typography
        variant="h6"
        fontWeight={700}
        color="#1E293B"
        fontSize="14px"
        mb={{ xs: 2, sm: 1 }}
      >
        {SETTINGS_UPLOAD_IMAGES?.title}
      </Typography>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 4, sm: 5 }}
        alignItems="top"
      >
        <Box>
          <Box position="relative">
            <Avatar src={avatar} sx={{ width: 64, height: 64, mx: 'auto' }} />
            {avatar && (
              <IconButton
                size="small"
                onClick={() => clearAvatar(setAvatar)}
                sx={clearIconStyles}
              >
                <Clear fontSize="small" />
              </IconButton>
            )}
          </Box>
        </Box>
        <Box
          onClick={() => handleClick(fileInputRef)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, setAvatar)}
          sx={{
            border: '2px dashed #CBD5E1',
            gap: '10px',
            borderRadius: '32px',
            padding: 3,
            textAlign: 'center',
            color: '#666',
            cursor: 'pointer',
            transition: '0.3s',
            width: '100%',
            height: { xs: 'auto', sm: '170px' },
            '&:hover': {
              backgroundColor: '#f9f9f9',
              borderColor: '#CBD5E1',
            },
          }}
        >
          <img src="/src/assets/settings/upload-image.svg" alt="Upload" />
          <Typography variant="h6" color="#475569" fontWeight={500}>
            <Typography
              variant="span"
              color={'#136BE5'}
              fontWeight={700}
              mr={1}
            >
              {SETTINGS_UPLOAD_IMAGES?.uploadTitle}
            </Typography>
            {SETTINGS_UPLOAD_IMAGES?.uploadText}
          </Typography>
          <Typography fontSize="14px" fontWeight={500} color="#94A3B8">
            {SETTINGS_UPLOAD_IMAGES?.supportedFormat}
          </Typography>
        </Box>
        <input
          ref={fileInputRef}
          type="file"
          accept={SETTINGS_UPLOAD_IMAGES?.image}
          style={{ display: 'none' }}
          onChange={(e) => handleChange(e, setAvatar)}
        />
      </Stack>
    </Grid>
  );
};

export default SettingsUploadImages;
