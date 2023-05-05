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
    const mainPageData = [
        {
            explorar:"Explorar", 
            popular:"Popular",
            novedades:"Novedades", 
            alfabetico: "Alfabético", 
            temdesim:"Temporada de Simulcasts",
            caldelans:"Calendario de lanzamientos",
            vidycons:"Videos musicales y conciertos",
            generos:"GÉNEROS",
            accion:"Acción",
            aventura:"Aventura",
            comedia:"Comedia",
            drama:"Drama",
            fantasia:"Fantasia",
            musical:"Musical",
            romance:"Romance",
            cf:"Ciencia Ficción",
            seinen:"Seinen",
            shoujo:"Shoujo",
            shounen:"Shounen",
            recdevid:"Recuentos de la Vida",
            deportes:"Deportes",
            sobrenat:"Sobrenatural",
            thriller:"Thriller",
            manga:"Manga",
            juegos:"Juegos",
            noticias:"Noticias",
            todlasnot:"Todas las noticias",
            animeaw:"Anime Awards",
            crunexp:"Crunchyroll Expo",
            animemovni:"Anime Movie Night",
            pprobar:"PROBAR",
            pgratis:"GRATIS",
            ppremium:"PREMIUM",
            createacc:"Crear cuenta",
            susgratprem:"Suscríbete gratis o hazte premium",
            acceder:"Acceder",
            yamiemb:"¿Ya eres miembro de Cruncyroll? Te damos la bienvenida",
            pruebgrat:"PRUEBA GRATUITA DE 14 DÍAS"

        }
    ]
    return{
        props:{
            mainPageData
        }
    }
}

function Index({mainPageData}) {
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
                <p>{mainPageData&&(mainPageData[0].explorar)}</p>
                <div className="dropdown-arrow"/>
              </div>
              <div className={`explorar-menu-dropdown ${explorarMenu ? "state-open" : ""}`}>
                <div className="content">
                  <div className="menu-selection">
                    <ul className="menu-list">
                      <li className="list-item">
                        <p>{mainPageData&&(mainPageData[0].popular)}</p>
                      </li>
                      <li className="list-item">
                        <p>{mainPageData&&(mainPageData[0].novedades)}</p>
                      </li>
                      <li className="list-item">
                        <p>{mainPageData&&(mainPageData[0].alfabetico)}</p>
                      </li>
                      <li className="list-item">
                        <p>{mainPageData&&(mainPageData[0].temdesim)}</p>
                      </li>
                      <li className="list-item">
                        <p>{mainPageData&&(mainPageData[0].caldelans)}</p>
                      </li>
                      <li className="list-item">
                        <p>{mainPageData&&(mainPageData[0].vidycons)}</p>
                      </li>
                    </ul>
                  </div>
                  <div className="genero-selection">
                    <p className="genero-title">{mainPageData&&(mainPageData[0].generos)}</p>
                    <div className="genero-elements">
                      <li><p>{mainPageData&&(mainPageData[0].accion)}</p></li>
                      <li><p>{mainPageData&&(mainPageData[0].aventura)}</p></li>
                      <li><p>{mainPageData&&(mainPageData[0].comedia)}</p></li>
                      <li><p>{mainPageData&&(mainPageData[0].drama)}</p></li>
                      <li><p>{mainPageData&&(mainPageData[0].fantasia)}</p></li>
                      <li><p>{mainPageData&&(mainPageData[0].musical)}</p></li>
                      <li><p>{mainPageData&&(mainPageData[0].romance)}</p></li>
                      <li><p>{mainPageData&&(mainPageData[0].cf)}</p></li>
                      <li><p>{mainPageData&&(mainPageData[0].seinen)}</p></li>
                      <li><p>{mainPageData&&(mainPageData[0].shoujo)}</p></li>
                      <li><p>{mainPageData&&(mainPageData[0].shounen)}</p></li>
                      <li><p>{mainPageData&&(mainPageData[0].recdevid)}</p></li>
                      <li><p>{mainPageData&&(mainPageData[0].deportes)}</p></li>
                      <li><p>{mainPageData&&(mainPageData[0].sobrenat)}</p></li>
                      <li><p>{mainPageData&&(mainPageData[0].thriller)}</p></li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="manga-button header-button">
              <div className="header-menu-text">
                <p>{mainPageData&&(mainPageData[0].manga)}</p>
              </div>
            </div>
            <div className="juegos-button header-button">
              <div className="header-menu-text">
                <p>{mainPageData&&(mainPageData[0].juegos)}</p>
              </div>
            </div>
            <div className={`explorar-button header-button ${noticiasMenu ? "menu-opened" : ""}`} onClick={()=>{setNoticiasMenu(!noticiasMenu); if(explorarMenu||userMenu){setExplorarMenu(false); setUserMenu(false)}}}>
              <div className="header-menu-text">
                <p>{mainPageData&&(mainPageData[0].noticias)}</p>
                <div className="dropdown-arrow"/>
              </div>
              <div className={`noticias-menu-dropdown ${noticiasMenu ? "state-open" : ""}`}>
                <div className="noticias-list">
                  <ul>
                    <li><p>{mainPageData&&(mainPageData[0].todlasnot)}</p></li>
                    <li><p>{mainPageData&&(mainPageData[0].animeaw)}</p></li>
                    <li><p>{mainPageData&&(mainPageData[0].crunexp)}</p></li>
                    <li><p>{mainPageData&&(mainPageData[0].animemovni)}</p></li>
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
                  <p className="text-yellow">{mainPageData&&(mainPageData[0].pprobar)}</p>
                  <p className="text-yellow">{mainPageData&&(mainPageData[0].pgratis)}</p>
                  <p className="text-white">{mainPageData&&(mainPageData[0].ppremium)}</p>
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
                    <p className="user-menu-title">{mainPageData&&(mainPageData[0].createacc)}</p>
                    <p className="user-menu-desc">{mainPageData&&(mainPageData[0].susgratprem)}</p>
                  </li>
                  <li>
                    <p className="user-menu-title">{mainPageData&&(mainPageData[0].acceder)}</p>
                    <p className="user-menu-desc">{mainPageData&&(mainPageData[0].yamiemb)}</p>
                  </li>
                  <div className="button-wrapper">
                    <button className="free-trial-button">
                      <Image src={crown_black} alt="" className="image"/>
                      <p>{mainPageData&&(mainPageData[0].pruebgrat)}</p>
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