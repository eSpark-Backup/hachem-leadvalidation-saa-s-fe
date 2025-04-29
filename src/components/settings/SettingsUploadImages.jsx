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
  uploadBoxStyles,
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
      <Typography fontWeight={500} mb={1}>
        {SETTINGS_UPLOAD_IMAGES.title}
      </Typography>

      <Stack direction="row" spacing={5} alignItems="top">
        <Box>
          <Box position="relative">
            <Avatar src={avatar} sx={{ width: 64, height: 64 }} />
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
          sx={uploadBoxStyles}
        >
          <img src={'/src/assets/settings/upload-image.svg'} />
          <Typography variant="h6">
            {SETTINGS_UPLOAD_IMAGES.uploadTitle}
          </Typography>
          <Typography>{SETTINGS_UPLOAD_IMAGES.supportedFormat}</Typography>
        </Box>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => handleFileSelect(e, setAvatar)}
          style={{ display: 'none' }}
        />
      </Stack>
    </Grid>
  );
};

export default SettingsUploadImages;
