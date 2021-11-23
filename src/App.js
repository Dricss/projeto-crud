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

  // Retorno
  return (
    <div>
      <Formulario btnCadastrar={btnCadastrar} />
      <Tabela />
    </div>
  );
}

// Exportando o componente
export default App;
