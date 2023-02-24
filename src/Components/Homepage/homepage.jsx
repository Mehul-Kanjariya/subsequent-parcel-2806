import React from "react";
import SliderImages from "../../slides.json";
import Products from "../../products.json";
import "./homepage.css";

import Product_card from "./product";
import Carousel from "./slider";

import { SimpleSlider } from "./slider2";
import BackToTopButton from "./BackToTopButton";
import searchlogo from "./HomepageImage/searchlogo.png";
import AppleButton from "./HomepageImage/AppleButton.png";
import google from "./HomepageImage/GooglePlayButton.png";


const Homepage = () => {
  return (
    <div className="container">
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
                src="https://i2.sdlcdn.com/img/leftnavicon09/30x30home_living2.png"
                alt=""
              />
            </div>
            <div>
              <p>Women's Fashion</p>
            </div>
          </div>
          <div>
            <div style={{width:"15%"}}>
              <img
                src="https://n2.sdlcdn.com/imgs/c/0/x/Homekitchenfurnishing-3eda1.jpg"
                alt=""
                
              />
            </div>
            <div>
              <p>Home & Kitchen Ap..</p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://i3.sdlcdn.com/img/leftnavicon09/30x30music1.png"
                alt=""
              />
            </div>
            <div>
              <p>Toy Kid's fashion & more</p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://i1.sdlcdn.com/img/leftnavicon09/fashion30x30_3.png"
                alt=""
              />
            </div>
            <div>
              <p>Beauty, Health & Daily..</p>
            </div>
          </div>
          <h2>MORE CATEGORIES</h2>
          <div className="more_categories">
            <p>Automotives</p>
          </div>
          <div className="more_categories">
            <p>Mobile & Accesorries</p>
          </div>
          <div className="more_categories">
            <p>Electronics</p>
          </div>
          <div className="more_categories">
            <p>Sport's Fitness & Outdoor</p>
          </div>
          <div className="more_categories">
            <p>Computer & Gaming</p>
          </div>
          <div className="more_categories">
            <p>Book , Media & Music</p>
          </div>
        </div>
        <div className="slider-div">
          <div>
            <div className="slider">
              <Carousel SliderImages={SliderImages} />
              
            </div>

            <div className="search_div">
              <img src={searchlogo} alt="" />
            </div>
          </div>
          <div className="product_card">
            <div>
              <h2>RECENTLY VIEWED PRODUCTS</h2>
            </div>

            <div className="products">
              {Products.length > 0 &&
                Products.map((item) => {
                  return <Product_card key={item.id} {...item} />;
                })}
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
          <h1>
            Download Snapdeal App Now
          </h1>
          <p>Fast, Simple & Delightful.</p>
          <p>All it takes is 30 seconds to Download.</p>
          <div className="BtnDiv">
            <a href="https://apps.apple.com/in/app/snapdeal-online-shopping-india/id721124909?ls=1&utm_campaign=ios&utm_source=mobileAppLp">
              <button>
                <img src={AppleButton} alt="" />
              </button>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.snapdeal.main&utm_source=mobileAppLp&utm_campaign=android">
            <button>
              <img src={google} alt="" />
            </button>
            </a>
            
          </div>
        </div>
      </div>
      <BackToTopButton />
    </div>
  );
};

export default Homepage;
