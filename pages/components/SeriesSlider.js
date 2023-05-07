import React from "react"

export default function SeriesSlider({sd, start}){
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
                                        <div className="carousel-card-wrapper">
                                            <div className="carousel-card">

                                            </div>
                                        </div>
                                        <div className="carousel-card-wrapper">
                                            <div className="carousel-card">

                                            </div>
                                        </div>
                                        <div className="carousel-card-wrapper">
                                            <div className="carousel-card">

                                            </div>
                                        </div>
                                        <div className="carousel-card-wrapper">
                                            <div className="carousel-card">

                                            </div>
                                        </div>
                                        <div className="carousel-card-wrapper">
                                            <div className="carousel-card">

                                            </div>
                                        </div>
                                        <div className="carousel-card-wrapper">
                                            <div className="carousel-card">

                                            </div>
                                        </div>
                                        <div className="carousel-card-wrapper">
                                            <div className="carousel-card">

                                            </div>
                                        </div>
                                        <div className="carousel-card-wrapper">
                                            <div className="carousel-card">

                                            </div>
                                        </div>
                                        <div className="carousel-card-wrapper">
                                            <div className="carousel-card">

                                            </div>
                                        </div>
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