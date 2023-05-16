import './rodape.css'

const Rodape = () => {
    return (
        <div className='rodape'>
            <div>
                <a href='http://facebook.com.br' rel="noreferrer" target='_blank'><img src="/imagens/fb.png" alt='logo facebook' /></a>
                <a href='http://twitter.com.br' rel="noreferrer" target='_blank'><img src="/imagens/tw.png" alt='logo twitter' /></a>
                <a href='http://instagran.com.br' rel="noreferrer" target='_blank'><img src="/imagens/ig.png" alt='logo insta' /></a>
            </div>
            <img src="/imagens/logo.png" alt='logo organo' />
            <p>Desenvolvido por <a href='http://github.com/mtavidal' rel="noreferrer" target='_blank'>Manuela Vidal</a></p>
        </div>
    )
}

export default Rodape