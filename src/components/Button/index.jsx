import PropTypes from 'prop-types';
import './styles.scss';

const Button = ({ children }) => {
  return <button className='button'>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
