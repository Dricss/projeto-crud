// Hooks
import { useState } from 'react';

// Importando o CSS
import './App.css';

// Importando o componente formulário
import Formulario from './Formulario'

// Importando o Componente Tabela
import Tabela from './Tabela'

// Componente
function App() {

  // useState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cidade, setCidade] = useState('');

  // Retorno
  return (
    <div>
      <Formulario btnCadastrar={btnCadastrar} setNome={setNome} setIdade={setIdade} setCidade={setCidade} />
      <Tabela />
    </div>
  );
}

// Exportando o componente
export default App;
