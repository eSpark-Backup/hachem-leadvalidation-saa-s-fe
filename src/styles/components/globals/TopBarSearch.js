const TOP_BAR_SEARCH_STYLE = {
  fieldStyle: {
    '& .MuiOutlinedInput-root': {
      display: { xs: 'none', sm: 'flex' },
      borderRadius: '12px',
      maxWidth: { md: '200px', lg: '341px' },
      height: '46px',

      '& fieldset': {
        border: '1px solid #263C2870',
      },
      '&:hover fieldset': {
        border: '1px solid #263C2870',
      },
      '&.Mui-focused fieldset': {
        border: '1px solid #263C2870',
      },
      '& input::placeholder': {
        color: '#8F9BBA',
        fontSize: '14px',
        fontWeight: 400,
      },
    },
    input: {
      color: '#7F8C8D',
    },
  },
};

export { TOP_BAR_SEARCH_STYLE };
