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
  const [indiceVetor, setIndiceVetor] = useState('');
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cidade, setCidade] = useState('');
  const [vetor, setVetor] = useState([]);

  // Função para Cadastrat
  const cadastrar = () => {
    let obj = {'nome':nome, 'idade':idade, 'cidade':cidade}
    setVetor([...vetor, obj])

    setNome('');
    setIdade('');
    setCidade('');
  }

  // Função para selecionar o usuário
  const selecionar = (indice) => {
    setIndiceVetor(indice);
    setNome(vetor[indice].nome);
    setIdade(vetor[indice].idade);
    setCidade(vetor[indice].cidade)

    setBtnCadastrar(false)
  }

  // Função para alterar os dados
  const alterar = () => {
    let obj = {'nome':nome, 'idade':idade, 'cidade':cidade}
    let copiaVetor = [...vetor];
    copiaVetor[indiceVetor] = obj
    setVetor(copiaVetor);

    setNome('');
    setCidade('');
    setIdade('');
    setBtnCadastrar(true);
  }
  
  // Função para remover
  const remover = () => {
    let copiaVetor = [...vetor];
    copiaVetor.splice(indiceVetor, 1)
    setVetor(copiaVetor)

    setNome('');
    setIdade('');
    setCidade('');
    setBtnCadastrar(true);
  }

  // Função Cancelar
  const cancelar = () => {
    setNome('')
    setIdade('');
    setCidade('')
    setBtnCadastrar(true)
  }

  // Retorno
  return (
    <div>
      <Formulario btnCadastrar={btnCadastrar} setNome={setNome} setIdade={setIdade} setCidade={setCidade} cadastrar={cadastrar} nome={nome} idade={idade} cidade={cidade} alterar={alterar} remover={remover} cancelar={cancelar} />
      <Tabela vetor={vetor} selecionar={selecionar}/>
    </div>
  );
}

// Exportando o componente
export default App;