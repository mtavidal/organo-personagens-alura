import Colaborador from '../Colaborador';
import './time.css'
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
    return (
        props.colaboradores.length > 0 ? <section className='time' style={{ backgroundColor: hexToRgba(props.cor, '0.5') }}>
            <input onChange={evento => props.mudarCor(evento.target.value, props.id)} value={props.cor} type='color' className='input-cor' />
            <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => {

                    return (
                        <Colaborador
                            key={colaborador.id}
                            id={colaborador.id}
                            aoFavoritar={props.aoFavoritar}
                            nome={colaborador.nome}
                            favorito={colaborador.favorito}
                            cargo={colaborador.cargo}
                            imagem={colaborador.imagem}
                            corDeFundo={props.cor}
                            aoDeletar={props.aoDeletar} />
                    );
                })}
            </div>
        </section>
            : ""
    )
}

export default Time;