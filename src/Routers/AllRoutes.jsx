import React from "react";
import { Route, Routes } from "react-router-dom";
import Faceprod from "../Pages/Faceprod";
import Signup from "../Components/Login/Signup";
import AddProductPage from "../Components/Admin/AddProductPage";
import Homepage from "../Components/Homepage/homepage";
import WomensEthnicDresses from "../Components/Womens/WomensEthnicDresses";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/productCategoryface" element={<Faceprod />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin" element={<AddProductPage />} />
      <Route
        path="/Womens/WomensEthnicDresses"
        element={<WomensEthnicDresses />}
      />
    </Routes>
  );
};

export default AllRoutes;
