
import './Input.css'

const Input = (props) => {

    const textoPlaceHolder = `${props.placeholder}...`

    // Chamar um hook
    // Algo que o React entrega pra gente, para conseguirmos manter um state(estado) dentro de uma função
    // Sempre que tiver 'use' é um Hook

    // nós passamos declaramos onde vamos guardar os valores(valor), e um Setter, que é o que usamos para setar novos valores(setValor)

    // ele me retorna um array com esses dois valores -valor, setValor-

    const aoDigitar = (evento) => {
        props.aoAlterar(evento.target.value);
    }

 return (
    
    <div className="input">
        <label>{props.label}</label>
        <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={textoPlaceHolder}/>
        {/* <input placeholder={`${props.placeholder}...`}/> */}
    </div>
 )
}

export default Input