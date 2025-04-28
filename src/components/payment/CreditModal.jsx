import {
  Box,
  Button,
  IconButton,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/components/globals/Auth';

const CreditModal = ({ open, setOpen, data }) => {
  const [amount, setAmount] = useState('');
  const { title, text, field, bill, buttons, modalBoxStyle, iconButtonStyle } =
    data || {};
  const { label, name, type, placeholder, style } = field || {};
  const { onboardingPayment } = ROUTES || {};
  const nagivate = useNavigate();

  const handleClose = () => {
    setAmount('');
    setOpen(false);
  };

  const handleClick = (btnText) => {
    handleClose();
    if (btnText == buttons[0]?.btnText) {
      return handleClose();
    } else if (btnText == buttons[1]?.btnText) {
      setAmount('');
      return nagivate(onboardingPayment);
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalBoxStyle}>
          <Box sx={{ overflow: 'auto' }}>
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 3.5,
                p: 4.5,
              }}
            >
              <IconButton
                disableRipple
                onClick={handleClose}
                sx={iconButtonStyle}
              >
                <HighlightOffIcon fontSize="medium" />
              </IconButton>
              <Stack direction={'column'} spacing={0.5}>
                <Typography
                  sx={{
                    color: '#09102B',
                    fontSize: { xs: '20px', sm: '22px', md: '25px' },
                    fontWeight: 600,
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#212332',
                    fontSize: { xs: '13px', md: '14px' },
                    fontWeight: 400,
                  }}
                >
                  {text}
                </Typography>
              </Stack>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#212332',
                    fontSize: { xs: '12px' },
                    fontWeight: 500,
                  }}
                >
                  {label}
                </Typography>
                <TextField
                  name={name}
                  type={type}
                  value={amount}
                  placeholder={placeholder}
                  onChange={(e) => setAmount(e?.target?.value)}
                  sx={style}
                />
              </Box>

              <Stack direction={'column'} spacing={1}>
                {bill?.map(
                  ({ billText, billAmount, color, weight }, eachIndex) => (
                    <Stack
                      key={eachIndex}
                      direction={'row'}
                      justifyContent={'space-between'}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: color || '#77797D',
                          fontSize: { xs: '14px' },
                          fontWeight: weight || 500,
                        }}
                      >
                        {billText}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#09102B',
                          fontSize: { xs: '14px' },
                          fontWeight: 500,
                        }}
                      >
                        {billText === bill[1]?.billText
                          ? billAmount
                          : `€ ${amount}`}
                      </Typography>
                    </Stack>
                  )
                )}
                <Stack
                  spacing={2}
                  direction={{ xs: 'column', sm: 'row' }}
                  justifyContent={'flex-end'}
                >
                  {buttons?.map(({ btnText, buttonStyle }, btnIndex) => (
                    <Button
                      key={btnIndex}
                      sx={buttonStyle}
                      disableRipple
                      disabled={
                        btnText !== buttons[0]?.btnText &&
                        (!amount || amount?.length === 0)
                      }
                      onClick={() => handleClick(btnText)}
                    >
                      {btnText}
                    </Button>
                  ))}
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

CreditModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default CreditModal;
