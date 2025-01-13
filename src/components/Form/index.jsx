import { useState } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../TextInput';
import Dropdown from '../Dropdown';
import Button from '../Button';
import './styles.scss';

const Form = ({ onRegister, teams }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');
  const [team, setTeam] = useState('Programação');

  const onSave = (e) => {
    e.preventDefault();
    onRegister({ name, role, image, team });
    setName('');
    setRole('');
    setImage('');
    setTeam('');
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextInput
          mustDigit={true}
          label="Nome"
          value={name}
          setValue={setName}
        />
        <TextInput
          mustDigit={true}
          label="Cargo"
          value={role}
          setValue={setRole}
        />
        <TextInput
          mustDigit={true}
          label="Imagem"
          value={image}
          setValue={setImage}
        />
        <Dropdown
          label="Time"
          items={teams}
          team={team}
          setTeam={(newTeam) => setTeam(newTeam)}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

Form.propTypes = {
  onRegister: PropTypes.func.isRequired,
  teams: PropTypes.array.isRequired,
};

export default Form;
