import { paperCommonPropsStyles, slotsCommonPropsStyles } from '../Common';

const buttonStyles = {
  border: '0.5px solid #136BE5',
  borderRadius: '3px',
  color: '#4A5154',
  zIndex: 1302,
  padding: '5px 9px',

  '& .MuiButton-endIcon': {
    marginRight: 0,
    marginLeft: '5px',
  },
};

const paperPropsPickerStyles = {
  ml: '-16px',
  ...paperCommonPropsStyles,
};

const slotsPropsPickerStyles = {
  ...slotsCommonPropsStyles,
  marginTop: '14px',
};

export { buttonStyles, paperPropsPickerStyles, slotsPropsPickerStyles };
