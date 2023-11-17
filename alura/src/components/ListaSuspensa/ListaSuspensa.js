import './ListaSuspensa.css';

const ListaSuspensa = (props) => {

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select 
            required={props.obrigatorio} 
            value={props.valor}
            onChange={evento => props.aoAlterar(evento.target.value)}
            >
                <option value=""></option>
                {/* 
                Temos uma função item, e pra cada item que recebmos como parametro no map, a gente vai percorrer o array e retorna uma option com o valor de item dentro dela
                 */}
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;