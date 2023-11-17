import Colaborador from '../Colaborador/Colaborador';
import './Time.css';

const Time = (props)=>{

    const corSecundaria = { backgroundColor: props.corSecundaria }
    const corPrimaria = { borderColor: props.corPrimaria }

    return (
        props.colaboradores.length > 0 ? 
        <section className='time' style={corSecundaria}>
            <h3 style={corPrimaria}>{props.nome}</h3>
            <div className='colaboradores'>
              {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section> : ''
    )
}

export default Time;