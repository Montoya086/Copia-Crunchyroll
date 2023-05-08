import React from "react"
import test from "./card_images/card_1.png"
import play from "./card_images/play.png"
import add from "./card_images/add.png"
import Image from "next/image"

export default function FeedCard(){
    return(
        <div className="feed-card">
            <div className="content-wrapper">
                <div className="card-wrapper">
                    <div className="image-wrapper">
                        <Image src={test} className="img" alt=""/>
                        <div className="text-image">
                            <p>IR A LA SERIE</p>
                        </div>
                    </div>
                    <div className="info-wrapper">
                        <h4>Keep Your Hands Off Eizouken!</h4>
                        <div className="tags">
                            <p className="type">Serie</p>
                            <p className="sub">♦ Sub | Dob</p>
                        </div>
                        <p className="description">Midori Asakusa es una estudiante de primero de instituto/preparatoria que adora el anime. Aunque se pasa los días dibujando todas las ideas que tiene, todavía no ha dado el primer paso para crear uno de sus amados animes, y es que sabe que es un objetivo imposible si está ella sola. La primera en descubrir el talento de Asakusa es Sayaka Kanamori, una chica con aspiraciones a ser productora. No tardan mucho en descubrir que una compañera de su clase, la carismática modelo Tsubame Mizusaki, en realidad tiene alma de animadora, así que juntas crean un club de animación.</p>
                        <div className="buttons-wrapper">
                            <div className="start">
                                <Image alt="" className="img" src={play}/>
                                <p>COMENZAR A VER T1 E1</p>
                            </div>
                            <div className="add">
                                <Image alt="" className="img" src={add}/>
                                <p>AÑADIR A MI LISTA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}