import React from "react"

const SliderCard =({text, current, id, setCurrent, currentTime, handleStop, handleStart})=>{
    return(
        <div className={`slider-info-card ${current ? "slider-info-card-secondary":"slider-info-card-principal"}`} onClick={()=>setCurrent(id)} onMouseEnter={handleStop} onMouseLeave={handleStart}>
            <div className={`slider-card-indicator ${current ? "is-current":""}`}>
                <div style={{backgroundColor: "#f47521", position: "absolute", top:"0", left:"0", width: `${100/800*currentTime}%`, height:"0.1875rem", zIndex:"2"}}>

                </div>
            </div>
            <span className="slider-card-text">
                {text}
            </span>
        </div>
    )
}

export default SliderCard