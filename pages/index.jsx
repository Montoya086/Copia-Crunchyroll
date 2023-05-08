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
import cat from "./images/cat.png"
//banner
import banner_1 from "./components/banner_images/banner_1.png"
import banner_2 from "./components/banner_images/banner_2.png"
import banner_3 from "./components/banner_images/banner_3.png"
//s2
import s1_1 from "./components/slider_images/series_1/s1_1.png"
import s1_2 from "./components/slider_images/series_1/s1_2.png"
import s1_3 from "./components/slider_images/series_1/s1_3.png"
import s1_4 from "./components/slider_images/series_1/s1_4.png"
import s1_5 from "./components/slider_images/series_1/s1_5.png"
import s1_6 from "./components/slider_images/series_1/s1_6.png"
import s1_7 from "./components/slider_images/series_1/s1_7.png"
import s1_8 from "./components/slider_images/series_1/s1_8.png"
import s1_9 from "./components/slider_images/series_1/s1_9.png"
import s1_10 from "./components/slider_images/series_1/s1_10.png"
import s1_11 from "./components/slider_images/series_1/s1_11.png"
import s1_12 from "./components/slider_images/series_1/s1_12.png"
//s2
import s2_1 from "./components/slider_images/series_2/s2_1.png"
import s2_2 from "./components/slider_images/series_2/s2_2.png"
import s2_3 from "./components/slider_images/series_2/s2_3.png"
import s2_4 from "./components/slider_images/series_2/s2_4.png"
import s2_5 from "./components/slider_images/series_2/s2_5.png"
import s2_6 from "./components/slider_images/series_2/s2_6.png"
import s2_7 from "./components/slider_images/series_2/s2_7.png"
import s2_8 from "./components/slider_images/series_2/s2_8.png"
import s2_9 from "./components/slider_images/series_2/s2_9.png"
import s2_10 from "./components/slider_images/series_2/s2_10.png"
import s2_11 from "./components/slider_images/series_2/s2_11.png"
import s2_12 from "./components/slider_images/series_2/s2_12.png"
//card
import card_1 from "./components/card_images/card_1.png"
import card_2 from "./components/card_images/card_2.png"
import card_3 from "./components/card_images/card_3.png"
import card_4 from "./components/card_images/card_4.png"
//elements
import ImageBanner from "./components/ImageBanner"
import FeedCard from "./components/FeedCard"
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
    const slider1Info=[
      {
        image: s1_1, title: "Hell's Paradise", type: "Serie", dob:"Sub | Dob"
      },
      {
        image: s1_2, title: "MASHLE: MAGIC AND MUSCLES", type: "Serie", dob:"Sub | Dob"
      },
      {
        image: s1_3, title: "The Legendary Hero is Dead!", type: "Serie", dob:"Sub | Dob"
      },
      {
        image: s1_4, title: "A Galaxy Next Door", type: "Serie", dob:"Sub | Dob"
      },
      {
        image: s1_5, title: "Dead Mount Death Play", type: "Serie", dob:"Sub | Dob"
      },
      {
        image: s1_6, title: "My One-Hit Kill Sister", type: "Serie", dob:"Sub | Dob"
      },
      {
        image: s1_7, title: "Sacrificial Princess and the King of Beasts", type: "Serie", dob:"Sub | Dob"
      },
      {
        image: s1_8, title: "Skip and Loafer", type: "Serie", dob:"Sub | Dob"
      },
      {
        image: s1_9, title: "The Aristocrat’s Otherworldly Adventure: Serving Gods Who Go Too Far", type: "Serie", dob:"Sub | Dob"
      },
      {
        image: s1_10, title: "The Café Terrace and Its Goddesses", type: "Serie", dob:"Sub | Dob"
      },
      {
        image: s1_11, title: "Why Raeliana Ended Up at the Duke's Mansion", type: "Serie", dob:"Sub | Dob"
      },
      {
        image: s1_12, title: "KamiKatsu: Working for God in a Godless World", type: "Serie", dob:"Sub | Dob"
      }
    ]
    const bottomPageData={
      d1: "¿Sigues buscando algo que ver?", d2: "Revisa todo nuestro catálogo", d3: "VER TODO"
    }
    const slider2Data={
      title:"¡Anime que puedes mirar gratis!",
      subtitle:"¡Disfruta aquí de algunos de nuestros títulos más populares!"
    }
    const slider2Info=[
      {
        image: s2_1, title: "JUJUTSU KAISEN", type: "Serie", dob:"Sub | Dob"
      },
      {
        image: s2_2, title: "One Piece", type: "Serie", dob:"Sub | Dob"
      },
      {
        image: s2_3, title: "Hunter x Hunter", type: "Serie", dob:"Sub | Dob"
      },
      {
        image: s2_4, title: "SPY x FAMILY", type: "Serie", dob:"Sub | Dob"
      },
      {
        image: s2_5, title: "My Hero Academia", type: "Serie", dob:"Sub | Dob"
      },
      {
        image: s2_6, title: "The Quintessential Quintuplets (Go-Toubun no Hanayome)", type: "Serie", dob:"Sub | Dob"
      },
      {
        image: s2_7, title: "BORUTO: NARUTO NEXT GENERATIONS", type: "Serie", dob:"Sub | Dob"
      },
      {
        image: s2_8, title: "Attack on Titan", type: "Serie", dob:"Sub | Dob"
      },
      {
        image: s2_9, title: "JoJo no Kimyō na Bōken", type: "Serie", dob:"Sub | Dob"
      },
      {
        image: s2_10, title: "Black Clover", type: "Serie", dob:"Sub | Dob"
      },
      {
        image: s2_11, title: "Nisekoi", type: "Serie", dob:"Sub | Dob"
      },
      {
        image: s2_12, title: "Haikyu!!", type: "Serie", dob:"Sub | Dob"
      },
    ]
    const feedCardData={
      goto:"IR A LA SERIE", start:"COMENZAR A VER T1 E1", add:"AÑADIR A MI LISTA"
    }
    const feedCard1Info={
      image: card_1, title: "Keep Your Hands Off Eizouken!", type: "Serie", dob:"Sub | Dob", desc:"Midori Asakusa es una estudiante de primero de instituto/preparatoria que adora el anime. Aunque se pasa los días dibujando todas las ideas que tiene, todavía no ha dado el primer paso para crear uno de sus amados animes, y es que sabe que es un objetivo imposible si está ella sola. La primera en descubrir el talento de Asakusa es Sayaka Kanamori, una chica con aspiraciones a ser productora. No tardan mucho en descubrir que una compañera de su clase, la carismática modelo Tsubame Mizusaki, en realidad tiene alma de animadora, así que juntas crean un club de animación."
    }
    const feedCard2Info={
      image: card_2, title: "Haikyu!!", type: "Serie", dob:"Subtitulado", desc:"Basada en el manga original de Haruichi Furudate, el cual se publica en la Weekly Shonen Jump, Haikyu!! es un anime deportivo protagonizado por Shoyo Hinata y su amor por el voleibol. Siendo de corta estatura, le inspira un jugador al que llamaban el \"Pequeño Gigante\", y decide jugar tal y como lo hizo él. En su último año de secundaria por fin consigue jugar su primer partido oficial, pero es derrotado por completo por el equipo rival y su mejor jugador, \"El rey de la cancha\", Tobio Kageyama. Ya en preparatoria, Hinata se inscribe en la misma escuela en la que jugaba Tobio y..."
    }
    const feedCard3Info={
      image: card_3, title: "TONIKAWA: Over The Moon For You", type: "Serie", dob:"Sub | Dob", desc:"Una comedia de vida matrimonial obra de Kenjiro Hata, autor de \"Hayate the Comat Butler\" y que ¡al fin da el salto al anime! Nasa Yuzaki se enamora a primera vista tras conocer a la misteriosa Tsukasa. Cuando Nasa reúne valor para declararle lo que siente, la respuesta de la chica le sorprende: \"Saldré contigo, pero solo si nos casamos\". ¡La entrañable vida de casados de Nasa y Tsukasa está a punto de comenzar!"
    }
    const feedCard4Info={
      image: card_4, title: "Bananya", type: "Serie", dob:"Subtitulado", desc:"Las bananas ocultan un secreto: cuando nadie las mira, de su interior salen lindos gatitos que pasean y juegan por las casa. Bananya es uno de estos gatitos."
    }
    return{
        props:{
            mainPageData, imageSliderData, footerData, slider1Data, slider1Info, bottomPageData, slider2Data,slider2Info,feedCardData,feedCard1Info,feedCard2Info,feedCard3Info,feedCard4Info
        }
    }
}

function Index({mainPageData, imageSliderData, footerData, slider1Data,slider1Info, bottomPageData, slider2Data,slider2Info,feedCardData,feedCard1Info,feedCard2Info,feedCard3Info,feedCard4Info}) {
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
          <ImageBanner src={banner_1}/>
          <SeriesSlider sd ={slider1Data} start="left" sinf={slider1Info}/>
          <FeedCard data={feedCardData} info={feedCard1Info}/>
          <ImageBanner src={banner_2}/>
          <SeriesSlider sd ={slider2Data} start="right" sinf={slider2Info}/>
          <FeedCard data={feedCardData} info={feedCard2Info}/>
          <FeedCard data={feedCardData} info={feedCard3Info}/>
          <FeedCard data={feedCardData} info={feedCard4Info}/>
          <ImageBanner src={banner_3}/>
          <div className="bottom-page">
            <Image alt="" src={cat} className="img"/>
            <h3>{bottomPageData&&(bottomPageData.d1)}</h3>
            <h3>{bottomPageData&&(bottomPageData.d2)}</h3>
            <div className="bottom-page-button">
              <p>{bottomPageData&&(bottomPageData.d3)}</p>
            </div>
          </div>
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