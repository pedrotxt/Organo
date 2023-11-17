import { useState } from "react";
import Botao from "../Botao/Botao";
import Input from "../Input/Input";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import "./Formulario.css"

const Formulario = (props)=> {

    const [nome,setNome] = useState('');    
    const [cargo,setCargo] = useState('');    
    const [imagem,setImagem] = useState('');      
    const [time,setTime] = useState('');      

    /* evento = evento de submit do javascript */
    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        })
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Input 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    // vamos ter acesso ao valor que foi alterado para nome e setamos esse valor em nome
                    aoAlterar={valor => setNome(valor)}
                />
                <Input 
                    obrigatorio={true}
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)}
                />
                <Input 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem "
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.nomeDosTimes}
                    valor={time}
                    aoAlterar={valor => setTime(valor)}
                />
                <Botao>Criar Card</Botao>
            </form>    
        </section>

    )
}

export default Formulario;