import { useState } from "react"
import logo_blanco from "./images/logo_blanco.png"
import logo_normal from "./images/logo_normal.png"
import crown from "./images/crown.png"
import search from "./images/search.png"
import lists from "./images/list.png"
import user from "./images/user.png"
function App() {
  const[logoHover, setLogoHover]=useState(false)
  const[explorarMenu, setExplorarMenu]=useState(false)
  const[noticiasMenu, setNoticiasMenu]=useState(false)
  return (
    <div className="content">
      <nav className="header">
        <div className="header-logo" onMouseEnter={()=>setLogoHover(true)} onMouseLeave={()=>setLogoHover(false)}>
          <img alt="" src={logo_normal} className={`logo ${logoHover ? "" : "logo-top"}`}/>
          <img alt="" src={logo_blanco} className={`logo ${logoHover ? "logo-top" : ""}`}/>
        </div>
        <div className="header-menu">
          <div className={`explorar-button header-button ${explorarMenu ? "menu-opened" : ""}`}>
            <div className="header-menu-text" onClick={()=>{setExplorarMenu(!explorarMenu); if(noticiasMenu){setNoticiasMenu(false)} }}>
              <p>Explorar</p>
              <div className="dropdown-arrow"/>
            </div>
            <div className={`explorar-menu-dropdown ${explorarMenu ? "state-open" : ""}`}>
              <div className="content">
                <div className="menu-selection">
                  <ul className="menu-list">
                    <li className="list-item">
                      <p>Popular</p>
                    </li>
                    <li className="list-item">
                      <p>Novedades</p>
                    </li>
                    <li className="list-item">
                      <p>Alfabético</p>
                    </li>
                    <li className="list-item">
                      <p>Temporada de Simulcasts</p>
                    </li>
                    <li className="list-item">
                      <p>Calendario de lanzamientos</p>
                    </li>
                    <li className="list-item">
                      <p>Videos musicales y conciertos</p>
                    </li>
                  </ul>
                </div>
                <div className="genero-selection">
                  <p className="genero-title">GÉNEROS</p>
                  <div className="genero-elements">
                    <li><p>Acción</p></li>
                    <li><p>Aventura</p></li>
                    <li><p>Comedia</p></li>
                    <li><p>Drama</p></li>
                    <li><p>Fantasia</p></li>
                    <li><p>Musical</p></li>
                    <li><p>Romance</p></li>
                    <li><p>Ciencia Ficción</p></li>
                    <li><p>Seinen</p></li>
                    <li><p>Shoujo</p></li>
                    <li><p>Shounen</p></li>
                    <li><p>Recuentos de la Vida</p></li>
                    <li><p>Deportes</p></li>
                    <li><p>Sobrenatural</p></li>
                    <li><p>Thriller</p></li>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="manga-button header-button">
            <div className="header-menu-text">
              <p>Manga</p>
            </div>
          </div>
          <div className="juegos-button header-button">
            <div className="header-menu-text">
              <p>Juegos</p>
            </div>
          </div>
          <div className={`explorar-button header-button ${noticiasMenu ? "menu-opened" : ""}`} onClick={()=>{setNoticiasMenu(!noticiasMenu); if(explorarMenu){setExplorarMenu(false)}}}>
            <div className="header-menu-text">
              <p>Noticias</p>
              <div className="dropdown-arrow"/>
            </div>
            <div className={`noticias-menu-dropdown ${noticiasMenu ? "state-open" : ""}`}>
              <div className="noticias-list">
                <ul>
                  <li><p>Todas las noticias</p></li>
                  <li><p>Anime Awards</p></li>
                  <li><p>Crunchyroll Expo</p></li>
                  <li><p>Anime Movie Night</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header-options">
          <div className="header-premium header-button">
            <div className="button-elements">
              <img alt="" src={crown} className="premium-crown"/>
              <div className="premium-text">
                <p className="text-yellow">PROBAR</p>
                <p className="text-yellow">GRATIS</p>
                <p className="text-white">PREMIUM</p>
              </div>
            </div>
          </div>
          <div className="header-search header-button">
            <img alt="" src={search} className="options-image"></img>
          </div>
          <div className="header-list header-button">
            <img alt="" src={lists} className="options-image"></img>
          </div>
          <div className="header-profile header-button">
            <img alt="" src={user} className="options-image"></img>
          </div>
        </div>
      </nav>
      <div className="app-body">

      </div>
    </div>
  );
}

export default App;
