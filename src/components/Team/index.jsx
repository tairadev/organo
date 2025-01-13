import PropTypes from 'prop-types';
import EmployeeCard from '../EmployeeCard';
import './styles.scss';

const Team = ({ name, primaryColor, secondaryColor, employees }) => {
  return (
    <>
      {employees.length > 0 && (
        <section className="team" style={{ backgroundColor: secondaryColor }}>
          <h3 style={{ borderColor: primaryColor }}>{name}</h3>
          <div className="employees">
            {employees.map((employee, index) => (
              <EmployeeCard
                {...employee}
                key={index}
                backgroundColor={primaryColor}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

Team.propTypes = {
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,
  employees: PropTypes.array.isRequired,
};

export default Team;
