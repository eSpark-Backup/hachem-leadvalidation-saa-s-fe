import { Link } from '@mui/material';
import PropTypes from 'prop-types';

const Checkbox = ({ checked, setChecked, data }) => {
  const { text, link } = data || {};
  const handleCheckboxChange = () => {
    setChecked((prev) => ({
      ...prev,
      service_and_policy: !prev?.service_and_policy,
    }));
  };
  return (
    <label className="checkbox-container">
      <span
        className={`custom-checkbox ${checked ? 'checked' : ''}`}
        onClick={handleCheckboxChange}
      >
        {checked && (
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </span>

      <Link
        top={link || '#'}
        sx={{
          fontSize: '11px',
          color: '#616161',
          fontWeight: 400,
          textDecoration: 'underline',
        }}
      >
        {text || ''}
      </Link>
    </label>
  );
};

Checkbox.propTypes = {
  setChecked: PropTypes.func.isRequired,
  checked: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default Checkbox;
