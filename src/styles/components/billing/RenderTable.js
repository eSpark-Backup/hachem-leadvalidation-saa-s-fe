export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    mb: 4,
  },
  title: {
    fontWeight: 'bold',
    mb: 1,
    fontSize: '25px',
  },
  paperBox: {
    borderRadius: 3,
    p: { xs: 1.5, sm: 2 },
    bgcolor: '#fff',
    width: '100%',
    maxWidth: 500,
  },
  headerRow: {
    backgroundColor: '#54D14D8F',
    borderRadius: '20px',
  },
  headerCell: {
    fontWeight: 500,
    fontSize: '14px',
  },
  getBodyCell: (highlight) => ({
    fontWeight: highlight ? 600 : 400,
    fontSize: '14px',
  }),
  highlightRow: {
    backgroundColor: '#C6D9FD',
  },
};
