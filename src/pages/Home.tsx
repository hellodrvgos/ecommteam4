import React from "react";

import backpack from "../assets/backpack.jpg";
import jacket from "../assets/jacket.jpg";
import wristband from "../assets/wristband.jpg";
import ring from "../assets/ring.jpg";
import drive from "../assets/drive.jpg";



export default function Home() {
    return (
        <div>
            <div className="home">
                <div className="home_title">
                    <h1>Our online store at your home</h1>
                </div>
            </div>
            <div className="sub_home">
                <h1>Meet the essentials</h1>
                <p>
                    We offer a variety of products for every style
                </p>
            </div>
            <div className="clothes_card">
                <img
                    className="clothes_img"
                    height="150px"
                    width="150px"
                    src={backpack}
                    alt="backpack"
                />
                <img
                    className="clothes_img"
                    height="150px"
                    width="150px"
                    src={jacket}
                    alt="jacket"
                />
                <img
                    className="clothes_img"
                    height="100px"
                    width="100px"
                    src={wristband}
                    alt="wristband"
                />
                <img
                    className="clothes_img"
                    height="100px"
                    width="100px"
                    src={ring}
                    alt="ring"
                />
                <img
                    className="clothes_img"
                    height="100px"
                    width="100px"
                    src={drive}
                    alt="drive"
                />
            </div>
        </div>
    )
}