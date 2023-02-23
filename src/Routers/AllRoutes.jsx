import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Faceprod from '../Pages/Faceprod'
import Signup from '../Components/Login/Signup'
import AddProductPage from "../Components/Admin/AddProductPage";
import Home from '../Pages/home';

const AllRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/productCategoryface" element={<Faceprod/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/admin" element={<AddProductPage/>}/>
      </Routes>
  )
}

export default AllRoutes