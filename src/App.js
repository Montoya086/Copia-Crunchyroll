import { useState } from "react"
import logo_blanco from "./images/logo_blanco.png"
import logo_normal from "./images/logo_normal.png"
import crown from "./images/crown.png"
import search from "./images/search.png"
import lists from "./images/list.png"
import user from "./images/user.png"
function App() {
  const[logoHover, setLogoHover]=useState(false)
  return (
    <div className="body">
      <nav className="header">
        <div className="header-logo" onMouseEnter={()=>setLogoHover(true)} onMouseLeave={()=>setLogoHover(false)}>
          <img alt="" src={logo_normal} className={`logo ${logoHover ? "" : "logo-top"}`}/>
          <img alt="" src={logo_blanco} className={`logo ${logoHover ? "logo-top" : ""}`}/>
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
    </div>
  );
}

export default App;
