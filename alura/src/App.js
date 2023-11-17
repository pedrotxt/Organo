import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';
import Time from './components/Time/Time';

function App() {

    const times = [
      {
        nome: 'Front-End',
        corPrimaria: '#82CFFA',
        corSecundaria: '#E8F8FF',
    },
    {
        nome: 'Data Sciense',
        corPrimaria: '#A6D157',
        corSecundaria: '#F0F8E2',
    },
    {
        nome: 'Devops',
        corPrimaria: '#E06B69',
        corSecundaria: '#FDE7E8',
    },
    {
        nome: 'UX e Design',
        corPrimaria: '#D86EBF',
        corSecundaria: '#FAE5F5',
    },
    {
        nome: 'Mobile',
        corPrimaria: '#FEBA05',
        corSecundaria: '#FFF5D9',
    },
    {
        nome: 'Inovação e Gestão',
        corPrimaria: '#FF8A29',
        corSecundaria: '#FFEEDF',
    }  
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }
  
  return (   
    <div className="App">
      <Banner />
      {/* 
      Transformar essa lista em um array só de nomes do time com map

      1 Parametro é o item da lista e digo o que retornar dessa lista no 2 Parametro, que é o nome dos times
      */}
      <Formulario nomeDosTimes={times.map(time => time.nome)} aoColaboradorCadastrado =
      {colaborador => aoNovoColaboradorAdicionado(colaborador)} />

      {times.map(time => <Time 
      key={time.nome} nome={time.nome} 
      corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
  

      />)}
    </div>
  );
}

export default App;
