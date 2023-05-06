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
                        <h4>{fd&&(fd.t2)}</h4>
                        <ul>
                            <li onMouseEnter={()=>setYtHover(true)} onMouseLeave={()=>setYtHover(false)}>
                            <Image className="img_yt" src={ytHover?yt_white:yt_gray} alt=""/>
                            <p>{fd&&(fd.s2d1)}</p>
                            </li>
                            <li onMouseEnter={()=>setFbHover(true)} onMouseLeave={()=>setFbHover(false)}>
                            <Image className="img_fb" src={fbHover?fb_white:fb_gray} alt=""/>
                            <p>{fd&&(fd.s2d2)}</p>
                            </li>
                            <li onMouseEnter={()=>setTwHover(true)} onMouseLeave={()=>setTwHover(false)}>
                            <Image className="img_fb" src={twHover?tw_white:tw_gray} alt=""/>
                            <p>{fd&&(fd.s2d3)}</p>
                            </li>
                            <li onMouseEnter={()=>setIgHover(true)} onMouseLeave={()=>setIgHover(false)}>
                            <Image className="img_fb" src={igHover?ig_white:ig_gray} alt=""/>
                            <p>{fd&&(fd.s2d4)}</p>
                            </li>
                            <li onMouseEnter={()=>setTtHover(true)} onMouseLeave={()=>setTtHover(false)}>
                            <Image className="img_fb" src={ttHover?tt_white:tt_gray} alt=""/>
                            <p>{fd&&(fd.s2d5)}</p>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-section cruncyroll">
                        <h4>{fd&&(fd.t3)}</h4>
                        <ul>
                            <li className="premium" onMouseEnter={()=>setPremiumHover(true)} onMouseLeave={()=>setPremiumHover(false)}>
                                <Image src={premiumHover?crown_white:crown} className="img_crown" alt=""/>
                                <p>{fd&&(fd.s3d1)}</p>
                            </li>
                            <li>
                                <p>{fd&&(fd.s3d2)}</p>
                            </li>
                            <li>
                                <p>{fd&&(fd.s3d3)}</p>
                            </li>
                            <li>
                                <p>{fd&&(fd.s3d4)}</p>
                            </li>
                            <li>
                                <p>{fd&&(fd.s3d5)}</p>
                            </li>
                            <li>
                                <p>{fd&&(fd.s3d6)}</p>
                            </li>
                            <li>
                                <p>{fd&&(fd.s3d7)}</p>
                            </li>
                            <li>
                                <p>{fd&&(fd.s3d8)}</p>
                            </li>
                            <li>
                                <p>{fd&&(fd.s3d9)}</p>
                            </li>
                            <li>
                                <p>{fd&&(fd.s3d10)}</p>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-section cuenta">
                        <h4>{fd&&(fd.t4)}</h4>
                        <ul>
                            <li>
                                <p>{fd&&(fd.s4d1)}</p>
                            </li>
                            <li>
                                <p>{fd&&(fd.s4d2)}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-wrapper">
                <p>{fd&&(fd.t5)}</p>
                <div className="language-selector">
                    <div className={`content-wrapper ${langMenu?"is-open":""}`} onClick={()=>setLangMenu(!langMenu)}>
                        <div className="dropdown-arrow"/>
                        <span>{fd&&(fd.esp1)}</span>
                    </div>
                    <div className={`language-dropdown ${langMenu?"is-visible":""}`}>
                        <div className="dropdown-scrollbar">
                            <div className="dropdown-content">
                                <div className="language-option">
                                    <span>{fd&&(fd.deu)}</span>
                                </div>
                                <div className="language-option">
                                    <span>{fd&&(fd.ara)}</span>
                                </div>
                                <div className="language-option">
                                    <span>{fd&&(fd.eng)}</span>
                                </div>
                                <div className="language-option esp">
                                    <span>{fd&&(fd.esp2)}</span>
                                </div>
                                <div className="language-option">
                                    <span>{fd&&(fd.esp3)}</span>
                                </div>
                                <div className="language-option">
                                    <span>{fd&&(fd.fra)}</span>
                                </div>
                                <div className="language-option">
                                    <span>{fd&&(fd.ita)}</span>
                                </div>
                                <div className="language-option">
                                    <span>{fd&&(fd.por1)}</span>
                                </div>
                                <div className="language-option">
                                    <span>P{fd&&(fd.por2)}</span>
                                </div>
                                <div className="language-option">
                                    <span>{fd&&(fd.rus)}</span>
                                </div>
                                <div className="language-option">
                                    <span>{fd&&(fd.ind)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}