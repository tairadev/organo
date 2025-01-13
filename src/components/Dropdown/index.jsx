import PropTypes from 'prop-types';
import './styles.scss';

const Dropdown = ({ label, items, team, setTeam }) => {
  return (
    <div className="dropdown">
      <label>{label}</label>
      <select onChange={(e) => setTeam(e.target.value)} value={team}>
        <option value=""></option>
        {items.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  team: PropTypes.string.isRequired,
  setTeam: PropTypes.func.isRequired,
};

export default Dropdown;
