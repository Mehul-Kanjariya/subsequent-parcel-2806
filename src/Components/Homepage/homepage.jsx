import Slider from "./slider";
import React from "react";
import SliderImages from "../../slides.json";
import "./homepage.css";

import Product_card from "./product";
// import searchlogo from "./HomepageImage/searchlogo"

const Homepage = () => {
  return (
    <div className="main-container">
      <div className="side-nav">
        <h2>TOP CATEGORIES</h2>
        <div>
          <div>
            <img
              src="https://i3.sdlcdn.com/img/leftnavicon09/30x30mobile4.png"
              alt=""
            />
          </div>
          <div>
            <p>Men's Fashion</p>
          </div>
        </div>
        <div>
        <div>
            <img
              src="https://i3.sdlcdn.com/img/leftnavicon09/30x30mobile4.png"
              alt=""
            />
          </div>
          <div>
            <p>Men's Fashion</p>
          </div>
        </div>
        <div>
        <div>
            <img
              src="https://i3.sdlcdn.com/img/leftnavicon09/30x30mobile4.png"
              alt=""
            />
          </div>
          <div>
            <p>Men's Fashion</p>
          </div>
        </div>
        <div>
        <div>
            <img
              src="https://i3.sdlcdn.com/img/leftnavicon09/30x30mobile4.png"
              alt=""
            />
          </div>
          <div>
            <p>Men's Fashion</p>
          </div>
        </div>
        <h2>MORE CATEGORIES</h2>
        <div className="more_categories">
          <p>Automotives</p>
        </div>
        <div  className="more_categories">
          <p>Automotives</p>
        </div>
        <div  className="more_categories">
          <p>Automotives</p>
        </div>
        <div  className="more_categories">
          <p>Automotives</p>
        </div>
        <div  className="more_categories">
          <p>Automotives</p>
        </div>
        <div  className="more_categories">
          <p>Automotives</p>
        </div>
      </div>
      <div className="slider-div">
        <div>
        <div className="slider">
        <Slider SliderImages={SliderImages} />
        </div>
       
        <div>
        <img src="https://i2.sdlcdn.com/img/artboardNext.png" alt="" />
        </div>
      </div>
      <div className="product_card">
        <div>
        <h1>RECENTLY VIEWED PRODUCTS</h1>
        </div>
       
        <div>
        <Product_card/>
        <Product_card/>
        <Product_card/>
        <Product_card/>
        </div>
    
      </div>
      </div>
      
    </div>
  );
};

export default Homepage;