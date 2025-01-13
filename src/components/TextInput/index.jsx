import PropTypes from 'prop-types';
import './styles.scss';

const TextInput = ({ label, mustDigit = false, value, setValue }) => {
  const placeholder = `Digite o seu ${label.toLowerCase()}...`;

  const onDigit = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className='text-input'>
      <label>{label}</label>
      <input
        type='text'
        placeholder={placeholder}
        required={mustDigit}
        onChange={onDigit}
        value={value}
      />
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  mustDigit: PropTypes.bool,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default TextInput;
