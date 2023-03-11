import React from 'react';
import "./Home.css";
import Products from "./Products";
import BasicSlider from './BasicSlider';

function Home() {
  return (
    <div className='home'>
        <div className="home_container">
            {/* <img className='home_image' src="https://m.media-amazon.com/images/I/61mUo7Pxs2L._SX3000_.jpg" alt="Home Image" /> */}
            <BasicSlider />
            <div className="home_row">
              <Products />
            </div>
        </div>
    </div>
  )
}

export default Home