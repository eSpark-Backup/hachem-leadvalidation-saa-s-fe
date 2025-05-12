import {
  buttonStyles,
  headingStyles,
  modalStyles,
} from '../../pages/LeadScoringSetting';

const generateLeadAIModalBoxStyles = {
  ...modalStyles,
  width: { xs: '90%', sm: '703px' },
  padding: '25px 18.5px 71px 20px',
};

const closeIconStyles = {
  padding: 0,
  position: 'absolute',
  top: '31px',
  right: '27px',
};

const generateLeadAIHeadingStyles = {
  ...headingStyles,
  color: '#1B2559',
  fontWeight: 600,
  marginBottom: '16px',
};

const pieChartBoxStyles = {
  textAlign: 'center',
  marginBottom: '10px',
};

const checkingStackStyles = {
  flexDirection: { xs: 'column', sm: 'row' },
  gap: 1.5,
};

const aiCheckingBoxStyles = {
  border: '1px solid #CACACA',
  borderRadius: '6px',
  padding: '16px',
  width: '100%',
};

const aiCheckingChildBoxStyles = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
};

const checkHeadingBoxStyles = {
  flex: 1,
  justifyContent: 'start',
  marginLeft: 1.5,
};

const aiCheckHeadingStyles = {
  fontWeight: 600,
  fontSize: '14px !important',
  lineHeight: '20px',
  color: '#353535',
};

const viewButtonStyles = (complete) => {
  return {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    color: complete ? '#50C878' : '#136BE5',
    padding: 0,
    backgroundColor: 'transparent !important',
  };
};

const progressContainerStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  width: '100%',
  marginTop: '11px',
};

const customLinearProgressStyles = (complete) => {
  return {
    flex: 1,
    height: '8px',
    borderRadius: '8px',
    backgroundColor: '#f5f5f5',

    '& .MuiLinearProgress-bar': {
      backgroundColor: complete ? '#50C878' : '#136BE5',
      borderRadius: '8px',
    },
  };
};

const progressLabelStyles = {
  fontSize: '12px',
  color: '#353535',
  lineHeight: '20px',
};

const okButtonStyles = {
  ...buttonStyles,
  padding: '10px 42px',
  marginTop: '15px',
};

export {
  generateLeadAIModalBoxStyles,
  closeIconStyles,
  generateLeadAIHeadingStyles,
  pieChartBoxStyles,
  checkingStackStyles,
  aiCheckingBoxStyles,
  aiCheckingChildBoxStyles,
  checkHeadingBoxStyles,
  aiCheckHeadingStyles,
  viewButtonStyles,
  progressContainerStyles,
  customLinearProgressStyles,
  progressLabelStyles,
  okButtonStyles,
};
