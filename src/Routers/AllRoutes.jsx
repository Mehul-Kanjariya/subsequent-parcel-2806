
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
import Login from "../Components/Login/Login";
const AllRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/productCategoryface" element={<Faceprod/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/admin" element={<AddProductPage/>}/>
        <Route  path="/foodprod" element={<Foodprod />}  />
        <Route path="/drinkprod"  element={<Drinkprod />} />
        <Route
          path="/Womens/WomensEthnicDresses"
          element={<WomensEthnicDresses />}
        />
        <Route path="/Womens/WomensFootwear" element={<WomensFootwear />} />
        <Route path="/Womens/WomensDresses" element={<WomensDresses />} />
        <Route  path="/userlogin" element={<Login></Login>} />
    </Routes>
  );
};

export default AllRoutes;