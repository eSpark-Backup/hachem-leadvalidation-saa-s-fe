const CONTAINER_STYLE = {
  maxWidth: 600,
  borderRadius: 2,
};

const HEADER_CELL_STYLE = {
  py: 1,
  textAlign: 'center',
};

const HEADER_TEXT_STYLE = {
  fontWeight: 600,
  fontSize: '11px',
  color: '#555',
  textTransform: 'uppercase',
};

const ROW_TEXT_STYLE = {
  fontWeight: 600,
  fontSize: '11px',
  color: '#111',
};

const SUB_TEXT_STYLE = {
  fontWeight: 500,
  fontSize: '11px',
  color: '#111',
};

const COLOR_DOT_STYLE = (color) => ({
  width: 6,
  height: 6,
  borderRadius: '50%',
  backgroundColor: color,
  marginRight: 0.5,
});

export {
  CONTAINER_STYLE,
  HEADER_CELL_STYLE,
  HEADER_TEXT_STYLE,
  ROW_TEXT_STYLE,
  SUB_TEXT_STYLE,
  COLOR_DOT_STYLE,
};
