import { Link } from '@mui/material';
import PropTypes from 'prop-types';
import { LinkStyles } from '../../constants/components/auth/Checkbox';
import CheckBox from '../../assets/images/global/checkbox.svg';

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
        {checked && CheckBox}
      </span>
      <Link top={link || '#'} sx={LinkStyles}>
        {text || ''}
      </Link>
    </label>
  );
};

Checkbox.propTypes = {
  setChecked: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
};

export default Checkbox;
