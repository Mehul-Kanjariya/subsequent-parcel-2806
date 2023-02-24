import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useEffect ,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
//import { getFaceData } from '../Redux/Health&Beauty/actions';
import { Grid, GridItem,Heading,RadioGroup,Radio,Stack} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { getDrinkData } from "../Redux/Health&Beauty/actions";
import Foodcard from "./Foodcard";
//import { getPosts } from "../Redux/action";
const Drinkprod = () => {
  const [sortProduct,setSortProduct]=useState("asc")
  const products=useSelector((store)=>store.health.products)
  const dispatch=useDispatch()
  

  useEffect(()=>{
    dispatch(getDrinkData(sortProduct))
  },[sortProduct])

  const handleChange=(e)=>{
  setSortProduct(e.target.value)
  }
  return (
    <Flex style={{ margin:"auto",justifyContent:"center",alignItems:"center"}}>
    <Box width="15%" style={{border:"1px solid red",marginTop:"-2190px",padding:"10px",borderRadius:"5px"}} >
      <p>Select Functionalities</p>
      <h3><b>Sort By Price</b></h3>
      <select style={{marginTop:"10px",border:"1px solid black",borderRadius:"5px"}} onChange={(e)=>handleChange(e)} >
        <option  >Select</option>
        <option value="asc" >Low To High</option>
        <option value="desc">High To Low</option>
      </select>
    </Box>
    <Box>
    <Box style={{marginBottom:"10px",fontFamily:"sans-serif",marginTop:"10px"}}>
        <Heading style={{fontFamily:"monospace"}} >Nutrition & Supplements</Heading>
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

export default Drinkprod