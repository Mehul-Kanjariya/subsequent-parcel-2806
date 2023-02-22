import  Slider  from "./slider";
import React from "react";
import SliderImages from '../slides.json'
import "./homepage.css"

const Homepage = () => {
  return (
<div className="main-container">
    <div className="side-nav">
       <p>TOP CATEGORIES</p>
       <div >
        <img src="https://t4.ftcdn.net/jpg/02/48/41/93/360_F_248419312_JiP5h9OBTgZsTRnHZwntiiShjHveffPp.jpg" alt=""  />
        <p>Men's Fashion</p>
       </div>
       <div >
        <img src="https://i.pinimg.com/originals/cb/ac/d4/cbacd4816617e88cc7b9528d841b6084.png" alt=""  />
        <p>Women's Fashion</p>
       </div>
       <div >
        <img src="https://t4.ftcdn.net/jpg/02/48/41/93/360_F_248419312_JiP5h9OBTgZsTRnHZwntiiShjHveffPp.jpg" alt=""  />
        <p>Home's & Kitchen</p>
       </div>
       <div >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlQN2UvPCrMh0hmjyH-Uqz7Pacl_JjAN30bw&usqp=CAU" alt=""  />
        <p>Toy's, Kid's Fashion</p>
       </div>
    </div>
    <div >
     <Slider SliderImages={SliderImages}/>
    </div>
    <div >

    </div>
</div>
  );
};

export default Homepage;
