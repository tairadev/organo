import PropTypes from 'prop-types';
import './styles.scss';

const EmployeeCard = ({ name, role, image, backgroundColor }) => {
  return (
    <div className="employee">
      <div className="header" style={{ backgroundColor }}>
        <img src={image} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  );
};

EmployeeCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default EmployeeCard;
