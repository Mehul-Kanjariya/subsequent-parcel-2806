
import { Button, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFaceData } from '../Redux/Health&Beauty/actions';
import { Grid, GridItem } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
//import { getPosts } from "../Redux/action";
const Faceprod = () => {
  const products=useSelector((store)=>store.health.products)
  const dispatch=useDispatch()
  console.log(products)

  useEffect(()=>{
    dispatch(getFaceData())
  },[])
  return (
<Grid templateColumns='repeat(4, 1fr)' m="auto" justifyContent="center" gap='2' >
{products.map((item)=>(
    
<GridItem w='250px'  h='350px' m="auto" justifyItems="center"   >
<Image src={item.image1} style={{height:"70%",width:"100%"}} alt="pic" />
<p style={{fontSize:"12px"}} >{item.title}</p>
<div style={{display:"flex",margin:"auto",justifyContent:"center",gap:"10px"}} >
    <div><p style={{fontSize:"16px"}} >Rs.{item.price}</p></div>
    <div style={{backgroundColor:"wheat"}} ><button>{item.discount}%off</button></div>
</div>
<Button style={{marginTop:"7px",backgroundColor:"#D1203C",color:"white",height:"30px"}} >ADD</Button>
</GridItem>
    
))}
</Grid>
  )
}

export default Faceprod