import React from "react";
import Image from "next/image";

export default function ImageBanner({src}){
    return(
        <div className="image-banner">
            <div className="image-banner-wrapper">
                <Image src={src} className="img" alt=""/>
            </div>
        </div>
    )
}