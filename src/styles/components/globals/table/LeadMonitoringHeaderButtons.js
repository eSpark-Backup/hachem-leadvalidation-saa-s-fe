const buttonStyles = {
  padding: '10px 21px',
  fontSize: '13px',
  lineHeight: '16px',
  fontWeight: 600,
  width: '100%',
};

const leadMonitoringButtonStackStyles = {
  width: '100%',
  flexDirection: 'row',
  gap: '11px',
};

const historyButtonStyles = {
  ...buttonStyles,
  backgroundColor: '#136BE5',
  border: '1px solid #FFFFFF',
  boxShadow: '1px 2px 3px rgba(70, 118, 251, 0.41)',
  borderRadius: '7px',
  color: '#E9EFF4',

  '&:hover': {
    backgroundColor: 'rgba(19, 107, 229, 0.8)',
  },
};

const monthButtonStyles = {
  ...buttonStyles,
  background:
    'linear-gradient(206.34deg, #FFFFFF 40.99%, rgba(239, 239, 239, 0.7) 83.87%), #FFFFFF',
  border: '1px solid #E1E6EA',
  boxShadow:
    '0px 0.810185px 0.810185px rgba(16, 16, 16, 0.08), 0px 4.72608px 11.0275px rgba(186, 186, 186, 0.2), 0px 1.21528px 1.62037px rgba(0, 0, 0, 0.09), inset 0px -3.15072px 3.15072px rgba(255, 255, 255, 0.6)',
  backdropFilter: 'blur(2px)',
  borderRadius: '7px',
};

const monthButtonSpanStyles = {
  background:
    'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #161922',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent',
};

export {
  leadMonitoringButtonStackStyles,
  historyButtonStyles,
  monthButtonStyles,
  monthButtonSpanStyles,
};