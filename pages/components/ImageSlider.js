import React, {useEffect, useRef, useState } from "react";
import Image from "next/image";
import rigth_arrow from "./slider_images/arrow_right.png"
import left_arrow from "./slider_images/arrow_left.png"
import SliderCard from "./SliderCard"
import bg1 from './slider_images/bg1.png'
import bg2 from './slider_images/bg2.png'
import bg3 from './slider_images/bg3.png'
import image1 from "./slider_images/image_slider_1.png"
import image2 from "./slider_images/image_slider_2.png"
import image3 from "./slider_images/image_slider_3.png"
import image4 from "./slider_images/image_slider_4.png"
import image5 from "./slider_images/image_slider_5.png"
import image6 from "./slider_images/image_slider_6.png"
const SliderData = [
    {
        bgimage: bg1, image: image1
    },
    {
        bgimage: bg2, image: image2
    },
    {
        bgimage: bg3, image: image3
    },
    {
        bgimage: bg2, image: image4
    },
    {
        bgimage: bg1, image: image5
    },
    {
        bgimage: bg2, image: image6
    }
]
const ImageSlider =({imageSliderData})=>{
    const [currentSlide, setCurrentSlide] = useState(SliderData[0])
    const [nextSlide, setNextSlide] = useState(SliderData[1])
    const [currentCount, setCurrentCount] = useState(0)
    const [leftArrowHover, setLeftArrowHover] = useState(false)
    const [rightArrowHover, setRightArrowHover] = useState(false)
    const [isFirst, setIsFirst]=useState(true)
    const [isLast, setIsLast]=useState(false)
    const [timeElapsed, setTimeElapsed]=useState(0)
    const [isPaused, setIsPaused]=useState(false)
    const [allowNext, setAllowNext]=useState(false)
    const [transition, setTransition]=useState(false)
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
        setTransition(false)
        setTimeout(() => {
            setTimeout(() => {
                setCurrentSlide(SliderData[currentCount])
            }, 1000);
            setNextSlide(SliderData[currentCount])
            setTransition(true)
        }, 800);
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
    useEffect(()=>{
        //console.log(window.innerWidth)
    })
    const handleStopInterval =()=>{
        setIsPaused(true)
    }
    const handleStartInterval =()=>{
        setIsPaused(false)
    }
    return(
        <>
            <section className="slider">
                <div style={{minHeight:"460px", width: "100%", position: "absolute", display: "flex", justifyContent: "center", alignItems: "center", overflow:"hidden"}}>
                    <Image src={currentSlide.bgimage} style={{width:"100%", minHeight:"460px", position: "absolute", top:"-108px", opacity: `${transition?"0":"1"}`, transition: "opacity .5s"}} alt=""/>
                    <Image src={nextSlide.bgimage} style={{width:"100%", minHeight:"460px", position: "absolute", top:"-105px", zIndex:"-2"}} alt=""/>
                    <div className="slider-items">
                        <div className={`slider-left-arrow ${isFirst ? "no-visible":""}`} onMouseEnter={()=>setLeftArrowHover(true)} onMouseLeave={()=>setLeftArrowHover(false)} onClick={()=>{handleLast(); setTimeElapsed(0)}}>
                            <Image src={left_arrow} alt="" className={`${leftArrowHover ? "change-contrast" : ""}`}/>
                        </div>
                        <div className="slider-image-display-of">
                            <div style={{margin: "40px", display: "flex", transition: "transform .3s", transform: `translateX(${currentCount*-1025}px)`}} onMouseEnter={handleStopInterval} onMouseLeave={handleStartInterval}>
                                <Image src={SliderData[0].image} alt="" />
                                <Image src={SliderData[1].image} alt="" />
                                <Image src={SliderData[2].image} alt="" />
                                <Image src={SliderData[3].image} alt="" />
                                <Image src={SliderData[4].image} alt="" />
                                <Image src={SliderData[5].image} alt="" />
                            </div>
                        </div>
                        <div className={`slider-right-arrow ${isLast ? "no-visible":""}`} onMouseEnter={()=>setRightArrowHover(true)} onMouseLeave={()=>setRightArrowHover(false)} onClick={()=>{handleNext(); setTimeElapsed(0)}}>
                            <Image src={rigth_arrow} alt="" className={`${rightArrowHover ? "change-contrast" : ""} ${isLast ? "no-visible":""}`}/>
                        </div>
                    </div>
                </div>
            </section>
            <div className="slider-cards">
                <div className="slider-cards-wrap">
                    <SliderCard text={imageSliderData&&(imageSliderData.card1)} current={currentCount===0 ? true: false} id={0} setCurrent={setCurrentCount} currentTime={timeElapsed} handleStop={handleStopInterval} handleStart={handleStartInterval}/>
                    <SliderCard text={imageSliderData&&(imageSliderData.card2)} current={currentCount===1 ? true: false} id={1} setCurrent={setCurrentCount} currentTime={timeElapsed} handleStop={handleStopInterval} handleStart={handleStartInterval}/>
                    <SliderCard text={imageSliderData&&(imageSliderData.card3)} current={currentCount===2 ? true: false} id={2} setCurrent={setCurrentCount} currentTime={timeElapsed} handleStop={handleStopInterval} handleStart={handleStartInterval}/>
                    <SliderCard text={imageSliderData&&(imageSliderData.card4)} current={currentCount===3 ? true: false} id={3} setCurrent={setCurrentCount} currentTime={timeElapsed} handleStop={handleStopInterval} handleStart={handleStartInterval}/>
                    <SliderCard text={imageSliderData&&(imageSliderData.card5)} current={currentCount===4 ? true: false} id={4} setCurrent={setCurrentCount} currentTime={timeElapsed} handleStop={handleStopInterval} handleStart={handleStartInterval}/>
                    <SliderCard text={imageSliderData&&(imageSliderData.card6)} current={currentCount===5 ? true: false} id={5} setCurrent={setCurrentCount} currentTime={timeElapsed} handleStop={handleStopInterval} handleStart={handleStartInterval}/>
                </div>
            </div>
        </>
    )
}

export default ImageSlider