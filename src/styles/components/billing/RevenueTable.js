const ContainerStyle = {
  maxWidth: 600,
  mt: 2,
};

const tableCellStyles = {
  py: 0.5,
};

const recordIconStyles = ({ dot, index, row }) => ({
  height: 10,
  width: 10,
  color: dot[index] || row.color,
});

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

const RowStyle = {
  transition: 'background-color 0.2s',
  '&:hover': {
    backgroundColor: '#f5f5f5',
  },
};

export {
  recordIconStyles,
  tableCellStyles,
  ContainerStyle,
  HeaderCellStyle,
  HeaderTextStyle,
  RowTextStyle,
  SubTextStyle,
  RowStyle,
};
