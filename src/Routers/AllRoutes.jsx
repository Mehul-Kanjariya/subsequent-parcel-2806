import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Faceprod from '../Pages/Faceprod'
import Signup from '../Components/Login/Signup'
import AddProductPage from "../Components/Admin/AddProductPage";
import Homepage from '../Components/Homepage/homepage';
import Foodcard from '../Pages/Foodcard';
import Drinkprod from '../Pages/Drinkprod';
import Foodprod from '../Pages/Foodprod';

const AllRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/productCategoryface" element={<Faceprod/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/admin" element={<AddProductPage/>}/>
        <Route  path="/foodprod" element={<Foodprod />}  />
        <Route path="/drinkprod"  element={<Drinkprod />} />
      </Routes>
  )
}

export default AllRoutes