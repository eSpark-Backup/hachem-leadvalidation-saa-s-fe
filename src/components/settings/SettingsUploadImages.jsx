// components/settings/SettingsUploadImages.tsx

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
  handleChange,
  handleClick,
  clearAvatar,
  handleDrop,
} from '../../utils/components/settings/SettingsUploadImages';
import {
  clearIconStyles,
  styles,
} from '../../styles/components/settings/SettingsUploadImages';
import { SETTINGS_UPLOAD_IMAGES } from '../../constants/components/settings/SettingsUploadImages';

const SettingsUploadImages = () => {
  const [avatar, setAvatar] = useState(null);
  const fileInputRef = useRef(null);

  return (
    <Grid item xs={12} my={1}>
      <Typography variant="h6" sx={styles.title}>
        {SETTINGS_UPLOAD_IMAGES.title}
      </Typography>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 4, sm: 5 }}
        alignItems="top"
      >
        <Box>
          <Box position="relative">
            <Avatar src={avatar ?? undefined} sx={styles.avatar} />
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
          sx={styles.dropzone}
        >
          <img
            src="/src/assets/settings/upload-image.svg"
            alt={SETTINGS_UPLOAD_IMAGES.uploadImageAlt}
          />
          <Typography variant="h6" sx={styles.uploadDescriptionText}>
            <Typography component="span" sx={styles.uploadTitleText}>
              {SETTINGS_UPLOAD_IMAGES.uploadTitle}
            </Typography>
            {SETTINGS_UPLOAD_IMAGES.uploadText}
          </Typography>
          <Typography sx={styles.supportedFormatText}>
            {SETTINGS_UPLOAD_IMAGES.supportedFormat}
          </Typography>
        </Box>

        <input
          ref={fileInputRef}
          type="file"
          accept={SETTINGS_UPLOAD_IMAGES.image}
          style={{ display: 'none' }}
          onChange={(e) => handleChange(e, setAvatar)}
        />
      </Stack>
    </Grid>
  );
};

export default SettingsUploadImages;
