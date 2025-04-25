import { Clear } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { useState, useRef } from 'react';

const SettingsUploadImages = () => {
  const [avatar, setAvatar] = useState('');
  const fileInputRef = useRef(null); // Reference to the hidden file input

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => setAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const clearAvatar = () => {
    setAvatar('');
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => setAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click(); // Trigger the file input when the box is clicked
  };

  return (
    <Grid item xs={12} my={1}>
      <Typography fontWeight={500} mb={1}>
        Change Avatar
      </Typography>

      <Stack direction="row" spacing={5} alignItems="top">
        <Box>
          <Box position="relative">
            <Avatar src={avatar} sx={{ width: 64, height: 64 }} />
            {avatar && (
              <IconButton
                size="small"
                onClick={clearAvatar}
                sx={{
                  position: 'absolute',
                  bottom: -10,
                  right: -10,
                  bgcolor: '#fff',
                  border: '1px solid #ccc',
                  zIndex: 1,
                }}
              >
                <Clear fontSize="small" />
              </IconButton>
            )}
          </Box>
        </Box>

        <Box
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={triggerFileInput} // Trigger the file input dialog on click
          sx={{
            border: '2px dashed  #CBD5E1',
            gap: '10px',
            borderRadius: '32px',
            padding: 3,
            textAlign: 'center',
            color: '#666',
            cursor: 'pointer',
            transition: '0.3s',
            minWidth: '70%',
            '&:hover': {
              backgroundColor: '#f9f9f9',
              borderColor: '#CBD5E1',
            },
          }}
        >
          <img src={'/src/assets/settings/upload-image.svg'} />
          <Typography variant="h6">
            Click Here to upload your file or drag.
          </Typography>
          <Typography>Supported Format: SVG, JPG, PNG (10mb each)</Typography>
        </Box>

        <input
          ref={fileInputRef} // Reference to the file input
          type="file"
          accept="image/*"
          onChange={handleFileSelect} // Handle file selection
          style={{ display: 'none' }} // Hide the input element
        />
      </Stack>
    </Grid>
  );
};

export default SettingsUploadImages;
