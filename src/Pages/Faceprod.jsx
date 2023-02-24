
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFaceData } from '../Redux/Health&Beauty/actions';
import { Grid, GridItem } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import Facecard from "./Facecard";
// import ".../Css/hover-glow-shadow.css";
import "../Components/Css/hover-glow-shadow.css"
//import { getPosts } from "../Redux/action";
const Faceprod = () => {
  const [sortProduct,setSortProduct]=useState("asc")
  const products=useSelector((store)=>store.health.products)
  const dispatch=useDispatch()
  console.log(products)

  useEffect(()=>{
    dispatch(getFaceData(sortProduct))
  },[sortProduct])

  const handleChange=(e)=>{
    setSortProduct(e.target.value)
    }
  return (
    <Flex style={{ margin:"auto",justifyContent:"center",alignItems:"center",marginTop:"20px"}}>
      
    <Box width="15%" style={{border:"1px solid red",marginTop:"-2190px",padding:"10px",borderRadius:"5px"}} >
    <p>Select Functionalities</p>
      <h3><b>Sort By Price</b></h3>
      <select style={{marginTop:"10px",border:"1px solid black",borderRadius:"5px"}} onChange={(e)=>handleChange(e)} >
        <option value="" >Select</option>
        <option value="asc" >Low To High</option>
        <option value="desc">High To Low</option>
      </select>
    </Box>
    <Box>
<Box style={{marginBottom:"10px",fontFamily:"sans-serif",marginTop:"10px"}}>
        <Heading style={{fontFamily:"monospace"}} >Beauty Products</Heading>
</Box>
<Grid width="70%" templateColumns='repeat(4, 1fr)' m="auto"  justifyContent="center" gap='2' >

{products.map((item)=>(  
<Facecard  key={item.id} {...item}  />
))}
</Grid>
</Box>
</Flex>
  )
}

export default Faceprod