import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../assets/5.png";
import img2 from "../assets/6.png";

const Reviews = () => {
  return (
    <Carousel infiniteLoop autoPlay showStatus={false} showArrows={true} showThumbs={false}
     interval={1000}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'black', width: '100%', height: '450px' }}>
            <div style={{ textAlign: 'center', maxWidth: '400px' }}>
                <div style={{ marginBottom: '20px' }}>
                    <img src={img1} alt="Item1" />
                </div>
                <p className="legend" style={{ color: 'white' }}>
                <b>Mahesh Kumar</b><br />
                Using the Electricity Corp. platform has been a game-changer for me. It's streamlined my bill payments and provided invaluable insights into my energy usage, empowering me to make smarter decisions. Highly recommend!
                </p>
            </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'black', width: '100%', height: '450px' }}>
            <div style={{ textAlign: 'center', maxWidth: '400px' }}>
                <div style={{ marginBottom: '20px' }}>
                    <img src={img2} alt="Item2" />
                </div>
                <p className="legend" style={{ color: 'white' }}>
                <b>Meghna Das</b><br />
                Electricity Corp. has revolutionized the 
                way I manage my electricity bills. With its user-friendly interface and helpful features
                , I've saved both time and money. Truly impressed!
                </p>
            </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'black', width: '100%', height: '450px' }}>
            <div style={{ textAlign: 'center', maxWidth: '400px' }}>
                <div style={{ marginBottom: '20px' }}>
                    <img src={img1} alt="Item1" />
                </div>
                <p className="legend" style={{ color: 'white' }}>
                <b>Sam Rana</b><br />
                Had an amazing experience. Must try it!
                </p>
            </div>
        </div>


        
    </Carousel>
    
  );
};

export default Reviews;