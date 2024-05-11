import React from 'react';
// import BackGround from "../assets/basket-product_image.jpg"
import BackGround from "../assets/bkgr.jpg"


function Home() {
    return (
        <div>
            <h1 className='title'>Welcome to our<br></br> E-Commerce Website!</h1>
          <img  className="background-image" src={BackGround} alt="" />
        </div>
    );
};

export default Home;
