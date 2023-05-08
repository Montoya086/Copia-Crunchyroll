import React from "react"
import play from "./card_images/play.png"
import add from "./card_images/add.png"
import Image from "next/image"

export default function FeedCard({data,info}){
    return(
        <div className="feed-card">
            <div className="content-wrapper">
                <div className="card-wrapper">
                    <div className="image-wrapper">
                        <Image src={info&&(info.image)} className="img" alt=""/>
                        <div className="text-image">
                            <p>{data&&(data.goto)}</p>
                        </div>
                    </div>
                    <div className="info-wrapper">
                        <h4>{info&&(info.title)}</h4>
                        <div className="tags">
                            <p className="type">{info&&(info.type)}</p>
                            <p className="sub">{info&&("♦ "+ info.dob)}</p>
                        </div>
                        <p className="description">{info&&(info.desc)}</p>
                        <div className="buttons-wrapper">
                            <div className="start">
                                <Image alt="" className="img" src={play}/>
                                <p>{data&&(data.start)}</p>
                            </div>
                            <div className="add">
                                <Image alt="" className="img" src={add}/>
                                <p>{data&&(data.add)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}