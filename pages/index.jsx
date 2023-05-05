import { useState } from "react"
import logo_blanco from "./images/logo_blanco.png"
import logo_normal from "./images/logo_normal.png"
import ImageSlider from "./components/ImageSlider"
import Image from "next/image"
import crown from "./images/crown.png"
import search from "./images/search.png"
import lists from "./images/list.png"
import user from "./images/user.png"
//import testImage from "./images/test.png"
import premium_info from "./images/premium_info.png"
import crown_black from "./images/crown_black.png"

export async function getStaticProps(){
    return{
        props:{

        }
    }
}

function Index() {
  const[logoHover, setLogoHover]=useState(false)
  const[explorarMenu, setExplorarMenu]=useState(false)
  const[noticiasMenu, setNoticiasMenu]=useState(false)
  const[premiumInfo, setPremiumInfo]=useState(false)
  const[userMenu, setUserMenu]=useState(false)
  const handleCloseAll =()=>{
    setExplorarMenu(false)
    setNoticiasMenu(false)
    setUserMenu(false)
  }
  return (
    <div className="content-app">
      <div className="header-container">
        <nav className="header">
          <div className="header-logo" onMouseEnter={()=>setLogoHover(true)} onMouseLeave={()=>setLogoHover(false)}>
            <Image alt="" src={logo_normal} className={`logo ${logoHover ? "" : "logo-top"}`}/>
            <Image alt="" src={logo_blanco} className={`logo ${logoHover ? "logo-top" : ""}`}/>
          </div>
          <div className="header-menu">
            <div className={`explorar-button header-button ${explorarMenu ? "menu-opened" : ""}`}>
              <div className="header-menu-text" onClick={()=>{setExplorarMenu(!explorarMenu); if(noticiasMenu||userMenu){setNoticiasMenu(false); setUserMenu(false)} }}>
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
            <div className={`explorar-button header-button ${noticiasMenu ? "menu-opened" : ""}`} onClick={()=>{setNoticiasMenu(!noticiasMenu); if(explorarMenu||userMenu){setExplorarMenu(false); setUserMenu(false)}}}>
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
            <div className="header-premium header-button" onMouseEnter={()=>setPremiumInfo(true)} onMouseLeave={()=>setPremiumInfo(false)}>
              <div className="button-elements">
                <Image alt="" src={crown} className="premium-crown"/>
                <div className="premium-text">
                  <p className="text-yellow">PROBAR</p>
                  <p className="text-yellow">GRATIS</p>
                  <p className="text-white">PREMIUM</p>
                </div>
              </div>
              <div className={`premium-info ${premiumInfo ? "state-open" : ""}`}>
                <Image src={premium_info} alt="" className="image"/>
              </div>
            </div>
            <div className="header-search header-button">
              <Image alt="" src={search} className="options-image"></Image>
            </div>
            <div className="header-list header-button">
              <Image alt="" src={lists} className="options-image"></Image>
            </div>
            <div className="header-profile header-button" onClick={()=>{setUserMenu(!userMenu); if(explorarMenu||noticiasMenu){setExplorarMenu(false); setNoticiasMenu(false)}}}>
              <Image alt="" src={user} className="options-image"></Image>
              <div className={`user-menu ${userMenu ? "state-open" : ""}`}>
                <div className="user-menu-container">
                  <li>
                    <p className="user-menu-title">Crear cuenta</p>
                    <p className="user-menu-desc">Suscríbete gratis o hazte premium</p>
                  </li>
                  <li>
                    <p className="user-menu-title">Acceder</p>
                    <p className="user-menu-desc">¿Ya eres miembro de Cruncyroll? Te damos la bienvenida</p>
                  </li>
                  <div className="button-wrapper">
                    <button className="free-trial-button">
                      <Image src={crown_black} alt="" className="image"/>
                      <p>PRUEBA GRATUITA DE 14 DÍAS</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="app-body">
        <div className={`app-body-overlay ${(explorarMenu||noticiasMenu||userMenu) ? "is-fade" : ""}`} onClick={handleCloseAll}/>
        <div className="app-body-content">
          <ImageSlider/>
        </div>
      </div>
      <div className="app-footer">
        <div className="app-footer-wrapper">
          
        </div>
      </div>
    </div>
  );
}

export default Index;