import React, { useState } from "react"
import Image from "next/image"
import yt_white from "./footer_images/yt_blanco.png"
import yt_gray from "./footer_images/yt_gris.png"
import fb_white from "./footer_images/fb_blanco.png"
import fb_gray from "./footer_images/fb_gris.png"
import tw_white from "./footer_images/tw_blanco.png"
import tw_gray from "./footer_images/tw_gris.png"
import ig_white from "./footer_images/ig_blanco.png"
import ig_gray from "./footer_images/ig_gris.png"
import tt_white from "./footer_images/tt_blanco.png"
import tt_gray from "./footer_images/tt_gris.png"
import crown from "../images/crown.png"
import crown_white from "./footer_images/crown_white.png"
export default function Footer({fd}){
    const [ytHover, setYtHover] = useState(false)
    const [fbHover, setFbHover] = useState(false)
    const [twHover, setTwHover] = useState(false)
    const [igHover, setIgHover] = useState(false)
    const [ttHover, setTtHover] = useState(false)
    const [premiumHover, setPremiumHover] = useState(false)
    const [langMenu, setLangMenu] = useState(false)
    return(
        <>
            <div className="footer-top-wrapper">
                <div className="footer-sections">
                    <div className="footer-section navigation">
                        <h4>{fd&&(fd.t1)}</h4>
                        <ul>
                            <li><p>{fd&&(fd.s1d1)}</p></li>
                            <li><p>{fd&&(fd.s1d2)}</p></li>
                            <li><p>{fd&&(fd.s1d3)}</p></li>
                            <li><p>{fd&&(fd.s1d4)}</p></li>
                            <li><p>{fd&&(fd.s1d5)}</p></li>
                            <li><p>{fd&&(fd.s1d6)}</p></li>
                        </ul>
                    </div>
                    <div className="footer-section connect">
                        <h4>Conecta con nosotros</h4>
                        <ul>
                            <li onMouseEnter={()=>setYtHover(true)} onMouseLeave={()=>setYtHover(false)}>
                            <Image className="img_yt" src={ytHover?yt_white:yt_gray} alt=""/>
                            <p>Youtube</p>
                            </li>
                            <li onMouseEnter={()=>setFbHover(true)} onMouseLeave={()=>setFbHover(false)}>
                            <Image className="img_fb" src={fbHover?fb_white:fb_gray} alt=""/>
                            <p>Facebook</p>
                            </li>
                            <li onMouseEnter={()=>setTwHover(true)} onMouseLeave={()=>setTwHover(false)}>
                            <Image className="img_fb" src={twHover?tw_white:tw_gray} alt=""/>
                            <p>Twitter</p>
                            </li>
                            <li onMouseEnter={()=>setIgHover(true)} onMouseLeave={()=>setIgHover(false)}>
                            <Image className="img_fb" src={igHover?ig_white:ig_gray} alt=""/>
                            <p>Instagram</p>
                            </li>
                            <li onMouseEnter={()=>setTtHover(true)} onMouseLeave={()=>setTtHover(false)}>
                            <Image className="img_fb" src={ttHover?tt_white:tt_gray} alt=""/>
                            <p>TikTok</p>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-section cruncyroll">
                        <h4>Crunchyroll</h4>
                        <ul>
                            <li className="premium" onMouseEnter={()=>setPremiumHover(true)} onMouseLeave={()=>setPremiumHover(false)}>
                                <Image src={premiumHover?crown_white:crown} className="img_crown" alt=""/>
                                <p>Comienza tu Prueba Gratuita</p>
                            </li>
                            <li>
                                <p>Acerca</p>
                            </li>
                            <li>
                                <p>Ayuda/FAQ</p>
                            </li>
                            <li>
                                <p>Términos de Uso</p>
                            </li>
                            <li>
                                <p>Política de Privacidad</p>
                            </li>
                            <li>
                                <p>Herramienta de aceptación de cookies</p>
                            </li>
                            <li>
                                <p>Contacto de prensa</p>
                            </li>
                            <li>
                                <p>Hazte con nuestras aplicaciones</p>
                            </li>
                            <li>
                                <p>Canjear tarjeta de regalo</p>
                            </li>
                            <li>
                                <p>Empleo</p>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-section cuenta">
                        <h4>Cuenta</h4>
                        <ul>
                            <li>
                                <p>Crear cuenta</p>
                            </li>
                            <li>
                                <p>Acceder</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-wrapper">
                <p>© Crunchyroll, LLC</p>
                <div className="language-selector">
                    <div className={`content-wrapper ${langMenu?"is-open":""}`} onClick={()=>setLangMenu(!langMenu)}>
                        <div className="dropdown-arrow"/>
                        <span>ESPAÑOL</span>
                    </div>
                    <div className={`language-dropdown ${langMenu?"is-visible":""}`}>
                        <div className="dropdown-scrollbar">
                            <div className="dropdown-content">
                                <div className="language-option">
                                    <span>Deutsch</span>
                                </div>
                                <div className="language-option">
                                    <span>العربية</span>
                                </div>
                                <div className="language-option">
                                    <span>English (US)</span>
                                </div>
                                <div className="language-option esp">
                                    <span>Español</span>
                                </div>
                                <div className="language-option">
                                    <span>Español (España)</span>
                                </div>
                                <div className="language-option">
                                    <span>Français (France)</span>
                                </div>
                                <div className="language-option">
                                    <span>Italiano</span>
                                </div>
                                <div className="language-option">
                                    <span>Português (Brasil)</span>
                                </div>
                                <div className="language-option">
                                    <span>Português (Portugal)</span>
                                </div>
                                <div className="language-option">
                                    <span>Русский</span>
                                </div>
                                <div className="language-option">
                                    <span>Hindi (India)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}