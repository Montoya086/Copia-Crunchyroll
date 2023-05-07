import React, { useRef, useState } from "react"
import Image from "next/image"
import arrow_right from "./slider_images/arrow_right_white.png"
import arrow_left from "./slider_images/arrow_left_white.png"
export default function SeriesSlider({sd, start, sinf}){
    const [leftState, setLeftState] = useState(false)
    const [rightState, setRightState] = useState(true)
    const scrollerRef = useRef(null)

    const handleScroll=()=>{
        setLeftState(!leftState)
        setRightState(!rightState)
        if(leftState){
            scrollerRef.current.scrollTo({
                left: -1080,
                behavior: 'smooth'
              });
        }
        if(rightState){
            scrollerRef.current.scrollTo({
                left: 1080,
                behavior: 'smooth'
              });
        }
    }
    return(
        <div className="series-container">
            <div className="header-wrapper">
                <h2>{sd&&(sd.title)}</h2>
                <p>{sd&&(sd.subtitle)}</p>
                <div className={`content-divisor ${start}`}/>
            </div>
            <div className="cards-carousel-container">
                <div className="cards-carousel">
                    <div className="cards-carousel-content-wrapper">
                        <div className={`cards-carousel-left-arrow ${leftState?"":"hidden"}`} onClick={handleScroll}>
                            <Image src={arrow_left} alt="" className="img"/>
                        </div>
                        <div className="cards-carousel-cards">
                            <div className="carousel-scroller">
                                <div className="carousel-scroller-wrapper">
                                    <div className="carousel-scroller-track" ref={scrollerRef}>
                                        {sinf&&(
                                            <>
                                                {sinf.map(card=>(
                                                    <div className="carousel-card-wrapper" key={card.title}>
                                                        <div className="carousel-card">
                                                            <div className="carousel-image">
                                                                {card&&(<Image alt="" className="img" src={card&&(card.image)}/>)}
                                                            </div>
                                                            <div className="carousel-info">
                                                                <p className="card-title">{card&&(card.title)}</p>
                                                                <div className="serie-state">
                                                                    <p className="type">{card&&(card.type)}</p>
                                                                    <p className="sub-dub">{"♦ "+ card&&(card.dob)}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`cards-carousel-right-arrow ${rightState?"":"hidden"}`} onClick={handleScroll}>
                            <Image src={arrow_right} alt="" className="img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}