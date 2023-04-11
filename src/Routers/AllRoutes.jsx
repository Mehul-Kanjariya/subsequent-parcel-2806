import React from "react";
import { Route, Routes } from "react-router-dom";
import Faceprod from "../Pages/Faceprod";
import Signup from "../Components/Login/Signup";
import AddProductPage from "../Components/Admin/AddProduct/AddProductPage";
import WomensEthnicDresses from "../Components/Womens/WomensEthnicDresses";
import WomensFootwear from "../Components/Womens/WomensFootwear";
import WomensDresses from "../Components/Womens/WomensDresses";

import Homepage from "../Components/Homepage/homepage";
import Drinkprod from "../Pages/Drinkprod";
import Foodprod from "../Pages/Foodprod";

import UpdateProduct from "../Components/Admin/Update_Product/UpdateProduct";
import SingleUpdateProduct from "../Components/Admin/SingleUpdateProduct/UpdateProduct";

import Login from "../Components/Login/Login";

import WomensEthnicDressesSinglePage from "../Components/SinglePage/WomensSinglePage/WomensEthnicDressesSinglePage";
import WomenFootwearSinglePage from "../Components/SinglePage/WomensSinglePage/WomensFootwearSinglePage";
import WomenDressesSinglePage from "../Components/SinglePage/WomensSinglePage/WomenDressesSinglePage";
import Checkout from "../Pages/Checkout";

import MensClothing from "../Components/Mens/MensClothing";
import MensEyewear from "../Components/Mens/MensEyewear";
import MensFootware from "../Components/Mens/MensFootware";
import MensClothingSinglePage from "../Components/SinglePage/MensSinglePage/MensClothingSinglePage";
import MensEyewearSinglePage from "../Components/SinglePage/MensSinglePage/MensEyewearSinglePage";
import SinglePage from "../Pages/SinglePage";
import FaceSinglePage from "../Pages/FaceSinglePage";
import DrinkSinglePage from "../Pages/DrinkSinglePage";
import PrivateRoute from "../Components/ReqAuth/ReqAuth";
import MensFootwearSinglePage from "../Components/SinglePage/MensSinglePage/MensFootwearSinglePage";
import HomeFurnishing from "../Components/Home&Appliances/HomeFurnishing"
import KitchenAppliances from "../Components/Home&Appliances/KitchenAppliances"
import Tools from "../Components/Home&Appliances/Tools";
import HomeFurnishingSinglePage from "../Components/SinglePage/HomeSinglePage/HomeFurnishingSinglePage";
import KitchenAppliancesSinglePage from "../Components/SinglePage/HomeSinglePage/KitchenAppliancesSinglePage";
import ToolsSinglePage from "../Components/SinglePage/HomeSinglePage/ToolsSinglePage";
import Babycare from "../Components/Toys/Babycare";
import Toys from "../Components/Toys/Toys";
import Stationary from "../Components/Toys/Stationary";
import ToysSinglePage from "../Components/SinglePage/Toys&CareSinglePage/ToysSinglePage";
import StationarySinglePage from "../Components/SinglePage/Toys&CareSinglePage/StationarySinglePage";
import BabycareSinglePage from "../Components/SinglePage/Toys&CareSinglePage/BabycareSinglePage";
import Search from "../Components/Search"
import SearchSinglePage from "../Components/SearchSinglePage";
import Orders from "../Components/Admin/Orders"
import Userorders from "../Pages/Userorder"

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/productCategoryface" element={<Faceprod />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/addProduct" element={<PrivateRoute><AddProductPage /></PrivateRoute>} />
      <Route path="/foodprod" element={<Foodprod />} />
      <Route path="/drinkprod" element={<Drinkprod />} />
      <Route path="/adminProducts/:id/:category" element={<PrivateRoute><SingleUpdateProduct/></PrivateRoute>}/>
      <Route path="/admin" element={<PrivateRoute><UpdateProduct /></PrivateRoute>} />
      <Route path="/Womens/WomensEthnicDresses" element={<WomensEthnicDresses />}/>
      <Route path="/Womens/WomensFootwear" element={<WomensFootwear />} />
      <Route path="/Womens/WomensDresses" element={<WomensDresses />} />
      <Route path="/Womens/WomensEthnicDresses/:id" element={<WomensEthnicDressesSinglePage />} />
      <Route path="/Womens/WomensFootwear/:id" element={<WomenFootwearSinglePage />}/>
      <Route path="/Womens/WomensDresses/:id" element={<WomenDressesSinglePage />} />
      <Route path="fooditem/SinglePage/:id" element={<SinglePage />} />
      <Route path="beautyface/FaceSinglePage/:id" element={<FaceSinglePage />} />
      <Route path="healthdrinks/DrinkSinglePage/:id" element={<DrinkSinglePage />} />
      <Route path="/Mens/MensClothing/:id" element={<MensClothingSinglePage/>} />
      <Route path="/Mens/MensEyewear/:id" element={<MensEyewearSinglePage/>} />
      <Route path="/Mens/MensFootwear/:id" element={<MensFootwearSinglePage/>} />
      <Route path="/checkout" element={<PrivateRoute><Checkout/></PrivateRoute>} />
      <Route path="/Mens/MensClothing" element={<MensClothing />} />
      <Route path="/Mens/MensEyewear" element={<MensEyewear />} />
      <Route path="/Mens/MensFootwear" element={<MensFootware />} />
      <Route path="/homeFurnishing" element={<HomeFurnishing />} />
      <Route path="/kitchen" element={<KitchenAppliances />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/homeFurnishing/:id" element={<HomeFurnishingSinglePage />} />
      <Route path="/kitchen/:id" element={<KitchenAppliancesSinglePage />} />
      <Route path="/tools/:id" element={<ToolsSinglePage />} />
      <Route path="/babycare" element={<Babycare/>} />
      <Route path="/toys" element={<Toys/>} />
      <Route path="/stationary" element={<Stationary/>} />
      <Route path="/userlogin" element={<Login></Login>} />
      <Route path="/toys/:id" element={<ToysSinglePage/>} />
      <Route path="/stationary/:id" element={<StationarySinglePage/>} />
      <Route path="/babycare/:id" element={<BabycareSinglePage/>} />
      <Route path="/search" element={<Search/>} />
      <Route path="/search/:id" element={<SearchSinglePage/>} />
      <Route path="/orders" element={<PrivateRoute><Orders/></PrivateRoute>} />
      <Route path="/userorders" element={<PrivateRoute><Userorders/></PrivateRoute>} />
    </Routes>
  );
};

export default AllRoutes;