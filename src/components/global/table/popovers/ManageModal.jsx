import PropTypes from 'prop-types';

import {
  Box,
  Button,
  ClickAwayListener,
  Popover,
  Stack,
  Typography,
} from '@mui/material';

import {
  ALT_ATTRIBUTE,
  ICONS,
  TABLE_STATIC_TEXTS,
} from '../../../../constants/components/globals/Table';

import {
  acceptButtonStyles,
  actionButtonStackStyles,
  assignButtonStyles,
  boxContainerSyles,
  contactDetailsBoxStyles,
  detailStyles,
  iconStyles,
  imageBoxStyles,
  imageStyles,
  itemIdStyles,
  itemNameStyles,
  manageModalPaperPropsStyles,
  rejectButtonStyles,
} from '../../../../styles/components/globals/table/popovers/ManageModal';
import {
  paperPropsStyles,
  slotsCommonPropsStyles,
} from '../../../../styles/components/globals/table/Common';

const ManageModal = ({ item, client, anchorEl, handleClose }) => {
  const { profile, name, id, service, contact, email } = item;

  const open = Boolean(anchorEl);

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      onClose={handleClose}
      slotProps={{
        root: {
          sx: slotsCommonPropsStyles,
        },
        paper: {
          sx: { ...paperPropsStyles, ...manageModalPaperPropsStyles },
        },
      }}
    >
      <ClickAwayListener onClickAway={handleClose}>
        <Box sx={boxContainerSyles}>
          <Box sx={imageBoxStyles}>
            <Box component={'img'} src={profile} sx={imageStyles} />
          </Box>

          <Box>
            <Typography variant="h1" sx={itemNameStyles}>
              {name}
            </Typography>

            <Typography
              variant="h3"
              sx={itemIdStyles}
            >{`${TABLE_STATIC_TEXTS.idText} ${id}`}</Typography>

            <Stack
              sx={{
                ...contactDetailsBoxStyles,
                marginTop: client ? '21px' : 0,
              }}
            >
              <Stack flexDirection={'row'}>
                {client && (
                  <>
                    <Box
                      component={'img'}
                      src={ICONS.service}
                      alt={ALT_ATTRIBUTE.service}
                      sx={iconStyles}
                    />

                    <Typography variant="h6" sx={detailStyles}>
                      {service}
                    </Typography>
                  </>
                )}
              </Stack>

              <Stack flexDirection={'row'}>
                <Box
                  component={'img'}
                  src={ICONS.contact}
                  alt={ALT_ATTRIBUTE.contact}
                  sx={iconStyles}
                />

                <Typography variant="h6" sx={detailStyles}>
                  {contact}
                </Typography>
              </Stack>

              <Stack flexDirection={'row'}>
                <Box
                  component={'img'}
                  src={ICONS.email}
                  alt={ALT_ATTRIBUTE.email}
                  sx={iconStyles}
                />

                <Typography variant="h6" sx={detailStyles}>
                  {email}
                </Typography>
              </Stack>
            </Stack>

            <Stack sx={actionButtonStackStyles}>
              {client ? (
                <>
                  <Button sx={rejectButtonStyles}>
                    {TABLE_STATIC_TEXTS.reject}
                  </Button>

                  <Button sx={acceptButtonStyles}>
                    {TABLE_STATIC_TEXTS.accept}
                  </Button>
                </>
              ) : (
                <Button sx={assignButtonStyles}>
                  {TABLE_STATIC_TEXTS.assign}
                </Button>
              )}
            </Stack>
          </Box>
        </Box>
      </ClickAwayListener>
    </Popover>
  );
};

ManageModal.propTypes = {
  item: PropTypes.object,
  client: PropTypes.bool,
  anchorEl: PropTypes.object,
  handleClose: PropTypes.func,
};

export default ManageModal;
