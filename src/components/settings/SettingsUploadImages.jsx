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
  handleDragOver,
  handleDrop,
  handleFileSelect,
} from '../../utils/settings/SettingsUploadImages';
import {
  clearIconStyles,
  // uploadBoxStyles,
} from '../../styles/components/settings/SettingsUploadImages';
import { SETTINGS_UPLOAD_IMAGES } from '../../constants/components/settings/SettingsUploadImages';

const SettingsUploadImages = () => {
  const [avatar, setAvatar] = useState('');
  const fileInputRef = useRef(null);

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <Grid item xs={12} my={1}>
      <Typography
        variant="h6"
        fontWeight={700}
        color={'#1E293B'}
        fontSize={'14px'}
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
          onDrop={(e) => handleDrop(e, setAvatar)}
          onDragOver={handleDragOver}
          onClick={triggerFileInput}
          sx={{
            border: '2px dashed  #CBD5E1',
            gap: '10px',
            borderRadius: '32px',
            padding: 3,
            textAlign: 'center',
            color: '#666',
            cursor: 'pointer',
            transition: '0.3s',
            width: '100%',
            // maxWidth: { xs: '100%', md: '512px' },
            '&:hover': {
              backgroundColor: '#f9f9f9',
              borderColor: '#CBD5E1',
            },
          }}
        >
          <img src={'/src/assets/settings/upload-image.svg'} />
          <Typography variant="h6" color={'#475569'} fontWeight={500}>
            {SETTINGS_UPLOAD_IMAGES?.uploadTitle}
          </Typography>
          <Typography fontSize={'14px'} fontWeight={500} color={'#94A3B8'}>
            {SETTINGS_UPLOAD_IMAGES?.supportedFormat}
          </Typography>
        </Box>

        <input
          ref={fileInputRef}
          type="file"
          accept={SETTINGS_UPLOAD_IMAGES?.image}
          onChange={(e) => handleFileSelect(e, setAvatar)}
          style={{ display: 'none' }}
        />
      </Stack>
    </Grid>
  );
};

export default SettingsUploadImages;
