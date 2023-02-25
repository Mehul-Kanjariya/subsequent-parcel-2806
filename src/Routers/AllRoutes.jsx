import React from "react";
import { Route, Routes } from "react-router-dom";
import Faceprod from "../Pages/Faceprod";
import Signup from "../Components/Login/Signup";
import AddProductPage from "../Components/Admin/AddProduct/AddProductPage";
import WomensEthnicDresses from "../Components/Womens/WomensEthnicDresses";
import WomensFootwear from "../Components/Womens/WomensFootwear";
import WomensDresses from "../Components/Womens/WomensDresses";

import Homepage from '../Components/Homepage/homepage';
import Drinkprod from '../Pages/Drinkprod';
import Foodprod from '../Pages/Foodprod';

import UpdateProduct from "../Components/Admin/Update_Product/UpdateProduct";
import SingleUpdateProduct from "../Components/Admin/SingleUpdateProduct/UpdateProduct";

import Login from "../Components/Login/Login";

import WomensEthnicDressesSinglePage from "../Components/SinglePage/WomensSinglePage/WomensEthnicDressesSinglePage";
import WomenFootwearSinglePage from "../Components/SinglePage/WomensSinglePage/WomensFootwearSinglePage";
import WomenDressesSinglePage from "../Components/SinglePage/WomensSinglePage/WomenDressesSinglePage";

import MensClothing from "../Components/Mens/MensClothing";
import MensEyewear from "../Components/Mens/MensEyewear";
import MensFootware from "../Components/Mens/MensFootware";
import MensClothingSinglePage from "../Components/SinglePage/MensSinglePage/MensClothingSinglePage";


import SinglePage from "../Pages/SinglePage";
import FaceSinglePage from "../Pages/FaceSinglePage";
import DrinkSinglePage from "../Pages/DrinkSinglePage";
//import FaceSinglePage from "../Pages/SinglePage";





const AllRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/productCategoryface" element={<Faceprod/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/addProduct" element={<AddProductPage/>}/>
        <Route  path="/foodprod" element={<Foodprod />}  />
        <Route path="/drinkprod"  element={<Drinkprod />} />
        <Route path="/adminProducts/:id/:category" element={<SingleUpdateProduct/>}/>
        <Route path="/admin" element={<UpdateProduct/>}/>
        <Route
          path="/Womens/WomensEthnicDresses"
          element={<WomensEthnicDresses />}
        />
        <Route path="/Womens/WomensFootwear" element={<WomensFootwear />} />
        <Route path="/Womens/WomensDresses" element={<WomensDresses />} />
        
        <Route
          path="/Womens/WomensEthnicDresses/:id"
          element={<WomensEthnicDressesSinglePage />}
        />
        <Route
          path="/Womens/WomensFootwear/:id"
          element={<WomenFootwearSinglePage />}
        />
        <Route
          path="/Womens/WomensDresses/:id"
          element={<WomenDressesSinglePage />}
        />


        <Route
          path="fooditem/SinglePage/:id"
          element={<SinglePage />}
        />

        <Route
          path="beautyface/FaceSinglePage/:id"
          element={<FaceSinglePage />}
        />

      <Route
          path="healthdrinks/DrinkSinglePage/:id"
          element={<DrinkSinglePage />}
        />


        <Route path="/Mens/MensClothing" element={<MensClothing />} />
        <Route path="/Mens/MensEyewear" element={<MensEyewear />} />
        <Route path="/Mens/MensFootwear" element={<MensFootware />} />

        <Route
          path="/Mens/MensClothing/:id"
          element={<MensClothingSinglePage/>}
        />
        <Route  path="/userlogin" element={<Login></Login>} />


       
    </Routes>
  );
};

export default AllRoutes;
