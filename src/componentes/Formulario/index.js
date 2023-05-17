import './formulario.css'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            id: uuidv4(),
            favorito: false,
            time
        });
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do personagem.</h2>
                <Campo label="Personagem" obrigatorio={true} placeholder="Digite o nome do personagem" valor={nome} aoAlterado={valor => setNome(valor)} />
                <Campo label="Animação" obrigatorio={true} placeholder="Digite a animação" valor={cargo} aoAlterado={valor => setCargo(valor)} />
                <Campo label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa label="Estúdio/Empresa" obrigatorio={true} itens={props.times} valor={time} aoAlterado={valor => setTime(valor)} />
                <Botao>Criar Card</Botao>
            </form>
            <form onSubmit={(evento) => {
                evento.preventDefault()
                props.cadastrarTime({ nome: nomeTime, cor: corTime });
            }}>
                <h2>Preencha os dados para cadastrar um novo estúdio/empresa.</h2>
                <Campo
                    label="Nome"
                    obrigatorio
                    placeholder="Digite o nome do estúdio/empresa"
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <Campo
                    label="Cor"
                    type='color'
                    obrigatorio
                    placeholder="Digite a cor do estúdio/empresa"
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao> Cadastrar novo estúdio/empresa</Botao>
            </form>
        </section>
    )
}

export default Formulario