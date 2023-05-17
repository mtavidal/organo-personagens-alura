import { useState } from 'react';
import Banner from './componentes/Banner/';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Pixar',
      cor: '#57C278',
    },
    {
      id: uuidv4(),
      nome: 'Disney',
      cor: '#82CFFA',
    },
    // {
    //   nome: 'Data Science',
    //   cor: '#A6D157',
    // },
    // {
    //   nome: 'Devops',
    //   cor: '#E06B69',
    // },
    {
      id: uuidv4(),
      nome: 'Warner Bros',
      cor: '#DB6EBF',
    },
    {
      id: uuidv4(),
      nome: 'Marvel',
      cor: '#FFBA05',
    },
    // {
    //   nome: 'Inovação e Gestão',
    //   cor: '#FF8A29',
    // },
  ]);
  const inicial = [{
    id: uuidv4(),
    favorito: false,
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAAthSZmysfpPgb_AT5IWvj-c3_mdRj0Jgvw&usqp=CAU',
    nome: 'Nemo',
    cargo: 'Procurando Nemo',
    time: times[0].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Dori',
    cargo: 'Procurando Nemo',
    imagem: 'https://th.bing.com/th/id/OIP.RdMCoFcrSt7m1xd3LZYxVgHaHa?pid=ImgDet&rs=1',
    time: times[0].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Michael Wazowski',
    cargo: 'Monstros SA',
    imagem: 'https://p.turbosquid.com/ts-thumb/La/QwW6K1/vM/mike_wazowski_front/png/1616235937/600x600/fit_q87/d81e7e21e192e9bdd22c42a110be88c15c5f5dfa/mike_wazowski_front.jpg',
    time: times[0].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Boo',
    cargo: 'Monstros SA',
    imagem: 'https://pm1.narvii.com/6704/b794ed169b2d403b0f0d075b7dfd07e82fcc7e9a_00.jpg',
    time: times[0].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    imagem: 'https://i.pinimg.com/736x/d9/d4/81/d9d4819165027f41965f14be54961091.jpg',
    nome: 'Scar',
    cargo: 'Rei Leão',
    time: times[1].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Madame Medusa',
    cargo: 'Bernardo e Bianca',
    imagem: 'https://www.zbrushcentral.com/uploads/default/original/4X/8/3/f/83f23629d4adfe68d17e4a941bd112e748e2aad2.jpeg',
    time: times[1].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Ariel',
    cargo: 'Pequena Sereia',
    imagem: 'https://festasquebragalho.com.br/wp-content/uploads/2022/11/ariel.jpg',
    time: times[1].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Abu',
    cargo: 'Aladdin',
    imagem: 'https://www.postavy.cz/foto/abu-foto.jpg',
    time: times[1].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    imagem: 'https://m.media-amazon.com/images/I/51cwZQjNA4L._AC_SY450_.jpg',
    nome: 'Taz',
    cargo: 'Taz-mania',
    time: times[2].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Wakko',
    cargo: 'Animaniacs',
    imagem: 'https://yt3.googleusercontent.com/KuCik91WKR7S0eSkjMIMTpyJRUDxXqQGy10xZtTqcmxMTaUkEGC-xMZRSwhS3WOaWw_ouhBD_A=s900-c-k-c0x00ffffff-no-rj',
    time: times[2].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Patolino',
    cargo: 'Pernalonga e Patolino',
    imagem: 'https://super.abril.com.br/wp-content/uploads/2022/02/AMP_patolino.png',
    time: times[2].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Cérebro',
    cargo: 'Pink e Cérebro',
    imagem: 'https://cf.shopee.com.br/file/e97f40c91f1565e9bb8479aff692dc4b',
    time: times[2].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    imagem: 'https://ovicio.com.br/wp-content/uploads/2023/01/20230111-captain-america-brings-back-his-very-first-superhero-team-featured-555x555.jpg',
    nome: 'Capitão América',
    cargo: 'Vingadores',
    time: times[3].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Ventania',
    cargo: 'X-men',
    imagem: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/003/911/products/storm_31-d730e362c006e4579616337182701012-1024-1024.webp',
    time: times[3].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Pantera Negra',
    cargo: 'Pantera Negra',
    imagem: 'https://ovicio.com.br/wp-content/uploads/2022/11/20221109-ovicio-pantera-negra-hot-toys-555x555.jpg',
    time: times[3].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Wolverine',
    cargo: 'X-men',
    imagem: 'https://assets.puzzlefactory.com/puzzle/300/044/original.jpg',
    time: times[3].nome
  },
  ]
  const [colaboradores, setColaboradores] = useState(inicial);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
      {times.map(times =>
        <Time
          aoFavoritar={resolverFavorito}
          mudarCor={mudarCorDoTime}
          nome={times.nome}
          key={times.nome}
          id={times.id}
          cor={times.cor}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === times.nome)}
          aoDeletar={deletarColaborador}
        />
      )}
      <Rodape />
    </div>
  );
}

export default App;
