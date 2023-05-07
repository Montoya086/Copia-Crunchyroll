import { useState } from "react"
import logo_blanco from "./images/logo_blanco.png"
import logo_normal from "./images/logo_normal.png"
import ImageSlider from "./components/ImageSlider"
import Image from "next/image"
import crown from "./images/crown.png"
import search from "./images/search.png"
import lists from "./images/list.png"
import user from "./images/user.png"
import Head from "next/head"
//import testImage from "./images/test.png"
import premium_info from "./images/premium_info.png"
import crown_black from "./images/crown_black.png"
import Footer from "./components/Footer"
import SeriesSlider from "./components/SeriesSlider"

export async function getStaticProps(){
    const mainPageData = {
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
    const imageSliderData ={
        card1: "MASHLE: MAGIA Y MÚSCULOS Nuevo Episodio",
        card2: "KONOSUBA - An Explosion on This Wonderful World",
        card3: "Dr. STONE T3 Nuevo Episodio",
        card4: "Crunchyroll Music: ASIAN KUNG-FU GENERATION",
        card5: "Suzume: ¡Boletos ya a la venta!",
        card6: "The Quintessential Quintuplets Movie"
    }
    const footerData={
      t1: "Navegación",
      s1d1:"Explorar lo más popular",
      s1d2:"Explorar los Simulcasts",
      s1d3:"Explorar Manga",
      s1d4:"Calendario de lanzamientos",
      s1d5:"Noticias",
      s1d6:"Juegos",
      t2:"Conecta con nosotros",
      s2d1:"Youtube",
      s2d2:"Facebook",
      s2d3:"Twitter",
      s2d4:"Instagram",
      s2d5:"TikTok",
      t3:"Crunchyroll",
      s3d1:"Comienza tu Prueba Gratuita",
      s3d2:"Acerca",
      s3d3:"Ayuda/FAQ",
      s3d4:"Términos de Uso",
      s3d5:"Política de Privacidad",
      s3d6:"Herramienta de aceptación de cookies",
      s3d7:"Contacto de prensa",
      s3d8:"Hazte con nuestras aplicaciones",
      s3d9:"Canjear tarjeta de regalo",
      s3d10:"Empleo",
      t4:"Cuenta",
      s4d1:"Crear cuenta",
      s4d2:"Acceder",
      t5:"© Crunchyroll, LLC",
      esp1:"ESPAÑOL",
      deu:"Deutsch",
      ara:"العربية",
      eng:"English (US)",
      esp2:"Español",
      esp3:"Español (España)",
      fra:"Français (France)",
      ita:"Italiano",
      por1:"Português (Brasil)",
      por2:"Português (Portugal)",
      rus:"Русский",
      ind:"Hindi (India)"
    }
    const slider1Data={
      title:"Muestra de la temporada de primavera 2023",
      subtitle:"¡Disfruta gratis de los tres primeros episodios de estos simulcasts de primavera 2023!"
    }
    return{
        props:{
            mainPageData, imageSliderData, footerData, slider1Data
        }
    }
}

function Index({mainPageData, imageSliderData, footerData, slider1Data}) {
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
    <>
    <Head>
      <title>Crunchyroll - Disfruta del anime más popular y lee manga online</title>
    </Head>
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
                <p>{mainPageData&&(mainPageData.explorar)}</p>
                <div className="dropdown-arrow"/>
              </div>
              <div className={`explorar-menu-dropdown ${explorarMenu ? "state-open" : ""}`}>
                <div className="content">
                  <div className="menu-selection">
                    <ul className="menu-list">
                      <li className="list-item">
                        <p>{mainPageData&&(mainPageData.popular)}</p>
                      </li>
                      <li className="list-item">
                        <p>{mainPageData&&(mainPageData.novedades)}</p>
                      </li>
                      <li className="list-item">
                        <p>{mainPageData&&(mainPageData.alfabetico)}</p>
                      </li>
                      <li className="list-item">
                        <p>{mainPageData&&(mainPageData.temdesim)}</p>
                      </li>
                      <li className="list-item">
                        <p>{mainPageData&&(mainPageData.caldelans)}</p>
                      </li>
                      <li className="list-item">
                        <p>{mainPageData&&(mainPageData.vidycons)}</p>
                      </li>
                    </ul>
                  </div>
                  <div className="genero-selection">
                    <p className="genero-title">{mainPageData&&(mainPageData.generos)}</p>
                    <div className="genero-elements">
                      <li><p>{mainPageData&&(mainPageData.accion)}</p></li>
                      <li><p>{mainPageData&&(mainPageData.aventura)}</p></li>
                      <li><p>{mainPageData&&(mainPageData.comedia)}</p></li>
                      <li><p>{mainPageData&&(mainPageData.drama)}</p></li>
                      <li><p>{mainPageData&&(mainPageData.fantasia)}</p></li>
                      <li><p>{mainPageData&&(mainPageData.musical)}</p></li>
                      <li><p>{mainPageData&&(mainPageData.romance)}</p></li>
                      <li><p>{mainPageData&&(mainPageData.cf)}</p></li>
                      <li><p>{mainPageData&&(mainPageData.seinen)}</p></li>
                      <li><p>{mainPageData&&(mainPageData.shoujo)}</p></li>
                      <li><p>{mainPageData&&(mainPageData.shounen)}</p></li>
                      <li><p>{mainPageData&&(mainPageData.recdevid)}</p></li>
                      <li><p>{mainPageData&&(mainPageData.deportes)}</p></li>
                      <li><p>{mainPageData&&(mainPageData.sobrenat)}</p></li>
                      <li><p>{mainPageData&&(mainPageData.thriller)}</p></li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="manga-button header-button">
              <div className="header-menu-text">
                <p>{mainPageData&&(mainPageData.manga)}</p>
              </div>
            </div>
            <div className="juegos-button header-button">
              <div className="header-menu-text">
                <p>{mainPageData&&(mainPageData.juegos)}</p>
              </div>
            </div>
            <div className={`explorar-button header-button ${noticiasMenu ? "menu-opened" : ""}`} onClick={()=>{setNoticiasMenu(!noticiasMenu); if(explorarMenu||userMenu){setExplorarMenu(false); setUserMenu(false)}}}>
              <div className="header-menu-text">
                <p>{mainPageData&&(mainPageData.noticias)}</p>
                <div className="dropdown-arrow"/>
              </div>
              <div className={`noticias-menu-dropdown ${noticiasMenu ? "state-open" : ""}`}>
                <div className="noticias-list">
                  <ul>
                    <li><p>{mainPageData&&(mainPageData.todlasnot)}</p></li>
                    <li><p>{mainPageData&&(mainPageData.animeaw)}</p></li>
                    <li><p>{mainPageData&&(mainPageData.crunexp)}</p></li>
                    <li><p>{mainPageData&&(mainPageData.animemovni)}</p></li>
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
                  <p className="text-yellow">{mainPageData&&(mainPageData.pprobar)}</p>
                  <p className="text-yellow">{mainPageData&&(mainPageData.pgratis)}</p>
                  <p className="text-white">{mainPageData&&(mainPageData.ppremium)}</p>
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
                    <p className="user-menu-title">{mainPageData&&(mainPageData.createacc)}</p>
                    <p className="user-menu-desc">{mainPageData&&(mainPageData.susgratprem)}</p>
                  </li>
                  <li>
                    <p className="user-menu-title">{mainPageData&&(mainPageData.acceder)}</p>
                    <p className="user-menu-desc">{mainPageData&&(mainPageData.yamiemb)}</p>
                  </li>
                  <div className="button-wrapper">
                    <button className="free-trial-button">
                      <Image src={crown_black} alt="" className="image"/>
                      <p>{mainPageData&&(mainPageData.pruebgrat)}</p>
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
          <ImageSlider imageSliderData={imageSliderData&&(imageSliderData)}/>
          <SeriesSlider sd ={slider1Data} start="left"/>
        </div>
      </div>
      <div className="app-footer">
        <div className="app-footer-wrapper">
          {footerData&&(
            <Footer fd={footerData}/>
          )}
        </div>
      </div>
    </div>
    </>
  );
}

export default Index;