import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFaceData } from '../Redux/Health&Beauty/actions';
import { Grid, GridItem,Heading } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { getFoodData } from "../Redux/Health&Beauty/actions";
import { useNavigate } from "react-router-dom";
import Foodcard from "./Foodcard";
//import { getPosts } from "../Redux/action";
const Foodprod = () => {
  const [sortProduct,setSortProduct]=useState("asc")
  const products=useSelector((store)=>store.health.products)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  

  useEffect(()=>{
    dispatch(getFoodData(sortProduct))
  },[sortProduct])
  const handleChange=(e)=>{
    setSortProduct(e.target.value)
    }
  return (
    <Flex style={{ margin:"auto",justifyContent:"center",alignItems:"center"}}>
    <Box width="15%" style={{border:"1px solid red",marginTop:"-2100px",padding:"10px",borderRadius:"5px",backgroundColor:"pink"}} >
      <p>Select Functionalities</p>
      <h3><b>Sort By Price</b></h3>
      <select style={{marginTop:"10px",border:"1px solid black",borderRadius:"5px"}} onChange={(e)=>handleChange(e)} >
        <option value="" >Select</option>
        <option value="asc" >Low To High</option>
        <option value="desc">High To Low</option>
      </select>
      <h3 style={{marginTop:"10px"}} ><b>Change Categories</b></h3>
      <button
      onClick={() => {
        navigate(`/productCategoryface`);
      }}
      >
      Beauty Products Page
      </button>
      <button
      onClick={() => {
        navigate(`/drinkprod`);
      }}
      >
     Nutrition  Page
      </button>
    </Box>
    <Box>
    <Box style={{marginBottom:"10px",fontFamily:"sans-serif",marginTop:"10px"}}>
        <Heading style={{fontFamily:"monospace"}} >Food & Gourmet</Heading>
</Box>
<Grid width="70%" templateColumns='repeat(4, 1fr)' m="auto"  justifyContent="center" gap='2' >
{products.map((item)=>(
<Foodcard key={item.id} {...item}  />
  
))}
</Grid>
</Box>
</Flex>
  )
}

export default Foodprod