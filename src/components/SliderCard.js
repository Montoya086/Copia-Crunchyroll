import React from "react"
import './SliderCard.scss'

const SliderCard =({text, current})=>{
    return(
        <div className={`slider-info-card ${current ? "slider-info-card-secondary":"slider-info-card-principal"}`}>
            <div className={`slider-card-indicator ${current ? "is-current":""}`}>

            </div>
            <span className="slider-card-text">
                {text}
            </span>
        </div>
    )
}

export default SliderCard