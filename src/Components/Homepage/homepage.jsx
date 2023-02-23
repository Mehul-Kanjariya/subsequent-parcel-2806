
import React from "react";
import SliderImages from "../../slides.json";
import Products from "../../products.json";
import "./homepage.css";

import Product_card from "./product";
import Carousel from "./slider";
import { Box, Flex } from "@chakra-ui/layout";
import { Grid } from "swiper";
import Slider from "./slider2";
import {SimpleSlider} from "./slider2";
import BackToTopButton from "./BackToTopButton";
// import searchlogo from "./HomepageImage/searchlogo"

const Homepage = () => {
  return (
    <div>

    
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
        <div className="more_categories">
          <p>Automotives</p>
        </div>
        <div className="more_categories">
          <p>Automotives</p>
        </div>
        <div className="more_categories">
          <p>Automotives</p>
        </div>
        <div className="more_categories">
          <p>Automotives</p>
        </div>
        <div className="more_categories">
          <p>Automotives</p>
        </div>
      </div>
      <div className="slider-div">
        <div>
          <div className="slider">
            <Carousel SliderImages={SliderImages} />
          </div>

          <div style={{overflow:"hidden", height:"250px"}}>
            <img src="https://i2.sdlcdn.com/img/artboardNext.png" alt="" style={{height:"100%",width:"400%"}}/>
          </div>
        </div>
        <div className="product_card">
          <div>
            <h2>RECENTLY VIEWED PRODUCTS</h2>
          </div>

          <div className="products">
            
             {
              Products.length > 0  && Products.map(item =>{
                return <Product_card key={item.id} {...item}  />
              })
             }
           
              
             
            
          </div>
        </div>
        
      </div>
      
    </div>
    <div className="product_slider">
     
      <h2>TRENDING PRODUCTS</h2>
      <SimpleSlider SliderImages={SliderImages} />
      </div>
       <div className="banner">
           <div className="mobile-banner">
             <img src="https://i2.sdlcdn.com/img/appScreenshot@1x.png" alt="" />
           </div>
           <div className="heading">
             <h1>Download Snapdeal App <br /> Now</h1>
             <p>Fast, Simple & Delightful.</p>
             <p>All it takes is 30 seconds to Download.</p>
             <div className="BtnDiv">
             <button style={{backgroundColor:"black", width:"100px",height:"50px"}}>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPcznSqTNvgrYdPrTVrrlx1s7x__37h1jNnw&usqp=CAU" alt="" style={{width:"20px"}}/>
              </button><button>ADD</button>
             </div>
             
           </div>
          
       </div>
       <BackToTopButton/>
    </div>
  );
};

export default Homepage;
