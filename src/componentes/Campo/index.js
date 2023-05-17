import './campo.css';

const Campo = ({ type = 'text', label, placeholder, valor, aoAlterado, obrigatorio = false }) => {

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value);
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input
                type={type}
                value={valor}
                onChange={aoDigitado}
                placeholder={placeholder}
                required={obrigatorio}
            />
        </div>
    )
}

export default Campo;