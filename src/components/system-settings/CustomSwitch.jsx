import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { COLORS } from '../../constants/components/system-setting/CustomSwitch';

const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 48,
  height: 26,
  padding: 0,
  display: 'flex',
  '& .MuiSwitch-switchBase': {
    padding: 2,
    color: COLORS.thumbColor,
    '&.Mui-checked': {
      transform: 'translateX(22px)',
      color: COLORS.thumbColor,
      '& + .MuiSwitch-track': {
        backgroundColor: COLORS.checkedTrack,
        opacity: 1,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 22,
    height: 22,
    boxShadow: 'none',
  },
  '& .MuiSwitch-track': {
    borderRadius: 13,
    backgroundColor: COLORS.uncheckedTrack,
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export { CustomSwitch };
