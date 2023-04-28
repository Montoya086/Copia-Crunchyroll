import { useState } from "react"
import logo_blanco from "./images/logo_blanco.png"
import logo_normal from "./images/logo_normal.png"
function App() {
  const[logoHover, setLogoHover]=useState(false)
  return (
    <div className="body">
      <nav className="header">
        <div className="header-logo" onMouseEnter={()=>setLogoHover(true)} onMouseLeave={()=>setLogoHover(false)}>
          <img src={logo_normal} className={`logo ${logoHover ? "" : "logo-top"}`}/>
          <img src={logo_blanco} className={`logo ${logoHover ? "logo-top" : ""}`}/>
        </div>
        <div className="header-menu">
          <div className="explorar-button header-button">
            <div className="header-menu-text">
              <p>Explorar</p>
              <div className="dropdown-arrow"/>
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
          <div className="noticias-button header-button">
            <div className="header-menu-text">
              <p>Noticias</p>
              <div className="dropdown-arrow"/>
            </div>
          </div>
        </div>
        <div className="header-options"></div>
      </nav>
    </div>
  );
}

export default App;
