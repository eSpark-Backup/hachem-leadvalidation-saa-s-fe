const ContainerStyle = {
  maxWidth: 600,
  borderRadius: 2,
};

const HeaderCellStyle = {
  py: 1,
  textAlign: 'center',
};

const HeaderTextStyle = {
  fontWeight: 600,
  fontSize: '11px',
  color: '#555',
  textTransform: 'uppercase',
};

const RowTextStyle = {
  fontWeight: 600,
  fontSize: '11px',
  color: '#111',
};

const SubTextStyle = {
  fontWeight: 500,
  fontSize: '11px',
  color: '#111',
};

const ColorDotStyle = (color) => ({
  width: 6,
  height: 6,
  borderRadius: '50%',
  backgroundColor: color,
  marginRight: 0.5,
});

const CellStyles = { py: 0.5 };

export {
  ContainerStyle,
  HeaderCellStyle,
  HeaderTextStyle,
  RowTextStyle,
  SubTextStyle,
  ColorDotStyle,
  CellStyles,
};
