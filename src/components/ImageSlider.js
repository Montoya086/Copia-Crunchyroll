import React, {useEffect, useRef, useState } from "react";
import './ImageSlider.scss'
import rigth_arrow from "./slider_images/arrow_right.png"
import left_arrow from "./slider_images/arrow_left.png"
import { SliderData } from "./SliderData"
import SliderCard from "./SliderCard"
const ImageSlider =()=>{
    const [currentSlide, setCurrentSlide] = useState(SliderData[0])
    const [currentCount, setCurrentCount] = useState(0)
    const [leftArrowHover, setLeftArrowHover] = useState(false)
    const [rightArrowHover, setRightArrowHover] = useState(false)
    const [isFirst, setIsFirst]=useState(true)
    const [isLast, setIsLast]=useState(false)
    const [timeElapsed, setTimeElapsed]=useState(0)
    const [isPaused, setIsPaused]=useState(false)
    const [allowNext, setAllowNext]=useState(false)
    const handleLast=()=>{
        if(currentCount===0){
            setCurrentCount(5)
        }else{
            setCurrentCount(currentCount-1)
        }
    }
    const handleNext=()=>{
        if(currentCount===5){
            setCurrentCount(0)
        }else{
            setCurrentCount(currentCount+1)
        }
    }
    const interval = useRef(null)
    useEffect(()=>{
        interval.current = setInterval(()=>{
            if(!isPaused){
                if(timeElapsed!==800){
                    setTimeElapsed(timeElapsed+1)
                }else{
                    setTimeElapsed(0)
                    setAllowNext(false)
                }
                if(allowNext){
                    handleNext()
                }
            }
        },10)
        return () => clearInterval(interval.current);
    })
    useEffect(()=>{
        if(timeElapsed===800){
            setAllowNext(true)
        }
    },[timeElapsed])
    useEffect(()=>{
        setTimeElapsed(0)
        setCurrentSlide(SliderData[currentCount])
        if(currentCount!==0){
            setIsFirst(false)
        }else{
            setIsFirst(true)
        }
        if(currentCount!==5){
            setIsLast(false)
        }else{
            setIsLast(true)
        }
    },[currentCount])
    const handleStopInterval =()=>{
        setIsPaused(true)
    }
    const handleStartInterval =()=>{
        setIsPaused(false)
    }
    return(
        <>
            <section className="slider">
                <div style={{backgroundImage: `url(${currentSlide.bgimage})`, minHeight:"460px", width: "100%", position: "absolute", display: "flex", justifyContent: "center", alignItems: "center",backgroundRepeat:"no-repeat",backgroundSize:"cover", overflow:"hidden", transition: "background .5s ease-out", transitionDelay:".4s"}}>
                    <div className="slider-items">
                        <div className={`slider-left-arrow ${isFirst ? "no-visible":""}`} onMouseEnter={()=>setLeftArrowHover(true)} onMouseLeave={()=>setLeftArrowHover(false)} onClick={()=>{handleLast(); setTimeElapsed(0)}}>
                            <img src={left_arrow} alt="" className={`${leftArrowHover ? "change-contrast" : ""}`}/>
                        </div>
                        <div className="slider-image-display-of">
                            <div style={{margin: "40px", display: "flex", transition: "transform .3s", transform: `translateX(${currentCount*-1025}px)`}} onMouseEnter={handleStopInterval} onMouseLeave={handleStartInterval}>
                                <img src={SliderData[0].image} alt="" />
                                <img src={SliderData[1].image} alt="" />
                                <img src={SliderData[2].image} alt="" />
                                <img src={SliderData[3].image} alt="" />
                                <img src={SliderData[4].image} alt="" />
                                <img src={SliderData[5].image} alt="" />
                            </div>
                        </div>
                        <div className={`slider-right-arrow ${isLast ? "no-visible":""}`} onMouseEnter={()=>setRightArrowHover(true)} onMouseLeave={()=>setRightArrowHover(false)} onClick={()=>{handleNext(); setTimeElapsed(0)}}>
                            <img src={rigth_arrow} alt="" className={`${rightArrowHover ? "change-contrast" : ""} ${isLast ? "no-visible":""}`}/>
                        </div>
                    </div>
                </div>
            </section>
            <div className="slider-cards">
                <div className="slider-cards-wrap">
                    <SliderCard text="MASHLE: MAGIA Y MÚSCULOS Nuevo Episodio" current={currentCount===0 ? true: false} id={0} setCurrent={setCurrentCount} currentTime={timeElapsed} handleStop={handleStopInterval} handleStart={handleStartInterval}/>
                    <SliderCard text="KONOSUBA - An Explosion on This Wonderful World" current={currentCount===1 ? true: false} id={1} setCurrent={setCurrentCount} currentTime={timeElapsed} handleStop={handleStopInterval} handleStart={handleStartInterval}/>
                    <SliderCard text="Dr. STONE T3 Nuevo Episodio" current={currentCount===2 ? true: false} id={2} setCurrent={setCurrentCount} currentTime={timeElapsed} handleStop={handleStopInterval} handleStart={handleStartInterval}/>
                    <SliderCard text="Crunchyroll Music: ASIAN KUNG-FU GENERATION" current={currentCount===3 ? true: false} id={3} setCurrent={setCurrentCount} currentTime={timeElapsed} handleStop={handleStopInterval} handleStart={handleStartInterval}/>
                    <SliderCard text="Suzume: ¡Boletos ya a la venta!" current={currentCount===4 ? true: false} id={4} setCurrent={setCurrentCount} currentTime={timeElapsed} handleStop={handleStopInterval} handleStart={handleStartInterval}/>
                    <SliderCard text="The Quintessential Quintuplets Movie" current={currentCount===5 ? true: false} id={5} setCurrent={setCurrentCount} currentTime={timeElapsed} handleStop={handleStopInterval} handleStart={handleStartInterval}/>
                </div>
            </div>
        </>
    )
}

export default ImageSlider