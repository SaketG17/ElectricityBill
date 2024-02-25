import React from 'react';
import vg from "../assets/4.jpg";

const Home = () => {
  return (
    <>
    <div className="home" id="home">
            <main>
                <h1>Electricity Corp.</h1>
                <p>Always at your service</p>
            </main>
    </div>
    <div className="home2">
    <img src={vg} alt="Graphics" />

    <div>
      <p>
      Experience seamless energy management with our user-friendly platform, designed for efficiency and convenience.
      Stay in control of your electricity expenses effortlessly, thanks to our electricity bill management solution.
      </p>
    </div>
  </div>
  <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
          Welcome to Electricity Corp., your trusted partner in managing your electricity 
          needs with ease and convenience. At Electricity Corp., we understand the importance 
          of reliable and efficient electricity services in your daily life. That's why we've 
          built an interactive platform where you can effortlessly pay your electricity bills 
          and access essential information related to your energy consumption. With our commitment 
          to transparency and customer satisfaction, we strive to empower you with the tools and 
          insights needed to make informed decisions about your energy usage. Join us at Electricity
           Corp. and experience the difference in managing your electricity expenses seamlessly.
           <br/>
          Join us today and discover the convenience and peace of mind that comes with our
           innovative electricity management services. Trust Electricity Corp. to be your 
           partner in navigating the world of energy management effortlessly.
          </p>
        </div>
    </div>
    
  </>
  );
};

export default Home;