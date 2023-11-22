import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <section className='section-banner'>

        <div className='container-info'>
          <div className='borda-gradiente'>
            <img src="./assets/neymar.jpg" alt="" title="" />
          </div>
          <h1 className='efeito-sombra'>Neymar Jr</h1>
        </div>

        <div className='container-links'>
          <a className="links" href="https://www.youtube.com/@NeymarJrReal" target="_blank" rel="noreferrer">
            <img src="./assets/youtube.png" alt="" title="" />
            <p>Siga meu canal no Youtube</p>
          </a>
          <a className="links" href="https://www.instagram.com/neymarjr/" target="_blank" rel="noreferrer">
            <img src="./assets/instagram.png" alt="" title="" />
            <p>Me siga no Instagram</p>
          </a>

          <a className="links" href="https://twitter.com/neymarjr" target="_blank" rel="noreferrer">
            <img src="./assets/twitter.png" alt="" title="" />
            <p>Me siga no Twitter</p>
          </a>

          <a className="links" href="https://www.facebook.com/neymarjr" target="_blank" rel="noreferrer">
            <img src="./assets/facebook.png" alt="" title="" />
            <p>Me siga no Facebook</p>
          </a>

          <a className="links" href="https://www.twitch.tv/neymarjr" target="_blank" rel="noreferrer">
            <img src="./assets/twitch.png" alt="" title="" />
            <p>Me siga no Twitch</p>
          </a>

        </div>
      </section>
      <section className='section-estatistica'>
        <h2 className='efeito-sombra'>Estatísticas</h2>
        <table className='tabela-estatistica'>
          <thead>
            <tr className="tabela-primeira-coluna">
              <th>Times</th>
              <th>Temporadas</th>
              <th>Jogos</th>
              <th>Gols</th>
              <th>Assistências</th>
              <th>Títulos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='primeira-coluna'>
                <img src="./assets/cbf.png" alt="" title="" />
                <p>Brasil</p>
              </td>
              <td>13</td>
              <td>124</td>
              <td>77</td>
              <td>77</td>
              <td>2</td>
            </tr>
            <tr>
              <td className='primeira-coluna'>
                <img src="./assets/santos.png" alt="" title="" />
                <p>Santos</p>
              </td>
              <td>5</td>
              <td>230</td>
              <td>138</td>
              <td>77</td>
              <td>6</td>
            </tr>
            <tr>
              <td className='primeira-coluna'>
                <img src="./assets/barcelona.png" alt="" title="" />
                <p>Barcelona</p>
              </td>
              <td>4</td>
              <td>186</td>
              <td>105</td>
              <td>77</td>
              <td>8</td>
            </tr>
            <tr>
              <td className='primeira-coluna'>
                <img src="./assets/psg.png" alt="" title="" />
                <p>PSG</p>
              </td>
              <td>6</td>
              <td>173</td>
              <td>118</td>
              <td>77</td>
              <td>13</td>
            </tr>
            <tr>
              <td className='primeira-coluna'>
                <img src="./assets/alhilal.png" alt="" title="" />
                <p>Al-Hilal</p>
              </td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>77</td>
              <td>0</td>
            </tr>
          </tbody>

        </table>
      </section>
    </div>
  );
}

export default App;
