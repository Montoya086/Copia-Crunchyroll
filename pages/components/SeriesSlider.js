import React from "react"
import Image from "next/image"
export default function SeriesSlider({sd, start, sinf}){
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
                        <div className="cards-carousel-left-arrow"></div>
                        <div className="cards-carousel-cards">
                            <div className="carousel-scroller">
                                <div className="carousel-scroller-wrapper">
                                    <div className="carousel-scroller-track">
                                        {sinf&&(
                                            <>
                                                {sinf.map(card=>(
                                                    <div className="carousel-card-wrapper">
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
                        <div className="cards-carousel-right-arrow"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}