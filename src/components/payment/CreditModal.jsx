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
import { styles } from '../../styles/components/CreditModal';

const CreditModal = ({ open, setOpen, data }) => {
  const [amount, setAmount] = useState('');

  const {
    title,
    text,
    field,
    bill = [],
    buttons = [],
    modalBoxStyle,
    iconButtonStyle,
  } = data || {};

  const { label, name, type, placeholder, style } = field || {};

  const { onboardingPayment } = ROUTES || {};

  const navigate = useNavigate();

  const handleClose = () => {
    setAmount('');
    setOpen(false);
  };

  const handleClick = (btnText) => {
    handleClose();
    if (btnText === buttons[0]?.btnText) {
      return;
    }
    if (btnText === buttons[1]?.btnText) {
      setAmount('');
      navigate(onboardingPayment);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby={'modal-modal-title'}
      aria-describedby={'modal-modal-description'}
    >
      <Box sx={{ ...modalBoxStyle, ...styles.modalBox }}>
        <Box sx={styles.containerBox}>
          <IconButton
            disableRipple
            onClick={handleClose}
            sx={{ ...iconButtonStyle }}
          >
            <HighlightOffIcon fontSize="medium" />
          </IconButton>

          <Stack direction="column" spacing={0.5}>
            <Typography sx={styles.titleTypography}>{title}</Typography>
            <Typography variant="h6" sx={styles.textTypography}>
              {text}
            </Typography>
          </Stack>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant="h6" sx={styles.labelTypography}>
              {label}
            </Typography>
            <TextField
              name={name}
              type={type}
              value={amount}
              placeholder={placeholder}
              onChange={(e) => setAmount(e.target.value)}
              sx={style}
            />
          </Box>

          <Stack direction="column" spacing={1}>
            {bill.map(({ billText, billAmount, color, weight }, index) => (
              <Stack key={index} direction="row" justifyContent="space-between">
                <Typography variant="h6" sx={styles.billText(color, weight)}>
                  {billText}
                </Typography>
                <Typography variant="h6" sx={styles.billAmount}>
                  {billText === bill[1]?.billText ? billAmount : `€ ${amount}`}
                </Typography>
              </Stack>
            ))}

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="flex-end"
            >
              {buttons.map(({ btnText, buttonStyle }, idx) => (
                <Button
                  key={idx}
                  sx={buttonStyle}
                  disableRipple
                  disabled={
                    btnText !== buttons[0]?.btnText &&
                    (!amount || amount.length === 0)
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
    </Modal>
  );
};

CreditModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default CreditModal;
