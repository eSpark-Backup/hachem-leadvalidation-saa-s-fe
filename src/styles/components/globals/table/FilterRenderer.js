import { flexStyles } from './Table';

const filterBoxStyles = {
  ...flexStyles,
  gap: '5px',
  flexDirection: { xs: 'column', sm: 'row' },
  width: { xs: '100%', sm: 'auto' },
  rowGap: { xs: 1.5, sm: 0 },
};

const externalActionButtonsStyles = {
  display: 'flex',
  gap: '5px',
  width: { xs: '100%', sm: 'auto' },
};

export { filterBoxStyles, externalActionButtonsStyles };