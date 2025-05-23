const styles = {
  container: {
    width: '100%',
    height: '100%',
    maxWidth: '415px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: '0px 0px 11px 11px',
  },
  header: {
    display: 'flex',
    minHeight: '86px',
    backgroundColor: '#126D30',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '11px 11px 0 0',
    p: 2.5,
  },
  contentBox: {
    width: '100%',
    display: 'flex',
    minHeight: '275px',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #0000006B',
    borderRadius: '0 0 11px 11px',
    p: 2,
    gap: 2,
  },
  volumeStack: {
    p: 1,
    spacing: 0.4,
  },
  minimumAmountText: {
    color: '#09102B',
    fontSize: '12px',
    fontWeight: 400,
  },
  title: {
    color: '#fff',
    fontWeight: 700,
    textAlign: 'center',
  },
  textOne: { color: '#09102B', fontWeight: 700 },
  textTwo: { color: '#09102B', fontWeight: 400 },
};

export { styles };
