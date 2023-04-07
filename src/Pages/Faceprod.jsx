
import { Box, Button, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFaceData } from '../Redux/Health&Beauty/actions';
import { Grid, GridItem } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import Facecard from "./Facecard";
// import ".../Css/hover-glow-shadow.css";
import "../Components/Css/hover-glow-shadow.css"
import Foodcard from "./Foodcard";
import { useNavigate } from "react-router-dom";
//import { getPosts } from "../Redux/action";
const Faceprod = () => {
  const [sortProduct,setSortProduct]=useState("asc")
  const products=useSelector((store)=>store.health.products)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  console.log(products)

  useEffect(()=>{
    dispatch(getFaceData(sortProduct))
  },[sortProduct])

  const handleChange=(e)=>{
    setSortProduct(e.target.value)
    }
  return (
    <Flex style={{ margin:"auto",justifyContent:"center",alignItems:"center",marginTop:"20px"}}>
      
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
        navigate(`/foodprod`);
      }}
      >
      Food & Gourmet Page
      </button>
      <button
      onClick={() => {
        navigate(`/drinkprod`);
      }}
      >
     Nutrition  Page
      </button>
    </Box>
    <Box width="70%"  m="auto"  justifyContent="center">
<Box style={{marginBottom:"10px",fontFamily:"sans-serif",marginTop:"10px"}}>
        <Heading style={{fontFamily:"monospace"}} >Beauty Products</Heading>
</Box>
{/* <Grid width="70%" templateColumns='repeat(4, 1fr)' m="auto"  justifyContent="center" gap='2' > */}
<SimpleGrid minChildWidth={250}   >
{products.map((item)=>(  
<Facecard  key={item.id} {...item}  />
))}
{/* </Grid> */}
</SimpleGrid>
</Box>
</Flex>
  )
}

export default Faceprod