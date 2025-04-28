const APP_INPUT_FIELD_STYLE = {
  styles: {
    titleStyle: { fontSize: '14px', fontWeight: 700, color: '#1E293B' },
    inputStyle: (
      fontSize,
      py = 1.6,
      px = 1,
      color,
      borderRadius,
      border,
      fontWeight,
      type
    ) => ({
      '& input': {
        fontSize: fontSize,
        py: py,
        px: px,
        color: color,
        borderRadius: borderRadius,
        sition: 'relative',
        zIndex: 1,
        cursor: type === 'date' || type === 'month' ? 'pointer' : 'text',
      },
      '& fieldset': {
        border: border,
        borderRadius: borderRadius,
      },
      textAlign: 'left',
      '& input::placeholder': {
        fontSize: fontSize,
        fontWeight: fontWeight,
        color: color,
      },
      '& input[type=number]::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        margin: 0,
      },
      '.MuiFormHelperText-contained': {
        marginLeft: 0.5,
      },
      '& input:-webkit-autofill': {
        WebkitBoxShadow: '0 0 0 1000px white inset !important',
        WebkitTextFillColor: '#000 !important',
        transition: 'background-color 5000s ease-in-out 0s !important',
        padding: py,
        fontSize: fontSize,
        color: color,
      },
      '& .MuiOutlinedInput-root': {
        color: color,
      },
      "& input[type='date']::-webkit-calendar-picker-indicator": {
        opacity: 0,
        display: 'none',
      },
      "& input[type='month']::-webkit-calendar-picker-indicator": {
        opacity: 0,
        display: 'none',
      },
    }),
  },
};

export { APP_INPUT_FIELD_STYLE };
