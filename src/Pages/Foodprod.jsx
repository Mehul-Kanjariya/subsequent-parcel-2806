// // import { Box, Button, Flex, SimpleGrid } from "@chakra-ui/react";
// // import React, { useEffect,useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { getFaceData } from '../Redux/Health&Beauty/actions';
// // import { Grid, GridItem,Heading } from '@chakra-ui/react'
// // import { Image } from '@chakra-ui/react'
// // import { getFoodData } from "../Redux/Health&Beauty/actions";
// // import { useNavigate } from "react-router-dom";
// // import Foodcard from "./Foodcard";
// // //import { getPosts } from "../Redux/action";
// // const Foodprod = () => {
// //   const [sortProduct,setSortProduct]=useState("asc")
// //   const products=useSelector((store)=>store.health.products)
// //   const dispatch=useDispatch()
// //   const navigate=useNavigate()
  

// //   useEffect(()=>{
// //     dispatch(getFoodData(sortProduct))
// //   },[sortProduct])
// //   const handleChange=(e)=>{
// //     setSortProduct(e.target.value)
// //     }
// //   return (
// //     <Flex style={{ margin:"auto",justifyContent:"center",alignItems:"center"}}>
// //     <Box width="15%" style={{border:"1px solid red",marginTop:"-2100px",padding:"10px",borderRadius:"5px",backgroundColor:"pink"}} >
// //       <p>Select Functionalities</p>
// //       <h3><b>Sort By Price</b></h3>
// //       <select style={{marginTop:"10px",border:"1px solid black",borderRadius:"5px"}} onChange={(e)=>handleChange(e)} >
// //         <option value="" >Select</option>
// //         <option value="asc" >Low To High</option>
// //         <option value="desc">High To Low</option>
// //       </select>
// //       <h3 style={{marginTop:"10px"}} ><b>Change Categories</b></h3>
// //       <button
// //       onClick={() => {
// //         navigate(`/productCategoryface`);
// //       }}
// //       >
// //       Beauty Products Page
// //       </button>
// //       <button
// //       onClick={() => {
// //         navigate(`/drinkprod`);
// //       }}
// //       >
// //      Nutrition  Page
// //       </button>
// //     </Box>
// //     <Box width="70%"  m="auto"  justifyContent="center"v>
// //     <Box style={{marginBottom:"10px",fontFamily:"sans-serif",marginTop:"10px"}}>
// //         <Heading style={{fontFamily:"monospace"}} >Food & Gourmet</Heading>
// // </Box>
// // {/* <Grid width="70%" templateColumns='repeat(4, 1fr)' m="auto"  justifyContent="center" gap='2' > */}
// // <SimpleGrid minChildWidth={250}   >
// // {products.map((item)=>(
// // <Foodcard key={item.id} {...item}  />
  
// // ))}
// // </SimpleGrid>
// // {/* </Grid> */}
// // </Box>
// // </Flex>
// //   )
// // }

// // export default Foodprod



// import React from "react";
// import { Spinner } from "@chakra-ui/spinner";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   Flex,
//   Box,
//   Image,
//   Icon,
//   chakra,
//   Tooltip,
//   useToast,
//   Card,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   Button,
//   Stack,
//   Radio,
//   RadioGroup,
//   Text,
//   Center
// } from "@chakra-ui/react";
// import { FiShoppingCart } from "react-icons/fi";
// import { useEffect } from "react";
// import axios from "axios";
// import { errProduct, reqProduct, sucProduct } from "../Redux/Health&Beauty/actions";
// import { Heading, SimpleGrid } from "@chakra-ui/layout";
// import "../Components/Css/hover-glow-shadow.css";
// import "../Components/Css/womens.css";
// import { useNavigate } from "react-router";
// import { ChevronDownIcon } from "@chakra-ui/icons";
// import { Link } from "react-router-dom";
// import styles from "../Components/Css/mens.module.css";
// const Foodprod = () => {
//   const { products, loading, error } = useSelector((state) => state.men);
//   const [sort, setSort] = React.useState("")
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const toast = useToast();

//   const FetchData= async () => {
//     dispatch(reqProduct());
//     try {
//       let res = await axios.get(
//         "https://alok-verma-rct.onrender.com/fooditem"
//       );
//       let data = res.data;
//       dispatch(sucProduct(data));
//     } catch (error) {
//       dispatch(errProduct());
//     }
//   };

//   const LowToHigh = async () => {
//     dispatch(reqProduct());
//     try {
//       let res = await axios.get(
//         "https://alok-verma-rct.onrender.com/fooditem"
//       );
//       let data = res.data;
//       data.sort((a, b) => a.price - b.price);
//       console.log(data);
//       dispatch(sucProduct(data));
//     } catch (error) {
//       dispatch(errProduct());
//     }
//   };

//   const HighToLow = async () => {
//     dispatch(reqProduct());
//     try {
//       let res = await axios.get(
//         "https://alok-verma-rct.onrender.com/fooditem"
//       );
//       let data = res.data;
//       data.sort((a, b) => b.price - a.price);
//       console.log(data);
//       dispatch(sucProduct(data));
//     } catch (error) {
//       dispatch(errProduct());
//     }
//   };

//   const AddToCartItem = async (id) => {
//     let data = await axios.get(
//       `https://alok-verma-rct.onrender.com/fooditem/${id}`
//     );
//     const NewProduct = { ...data.data, quantity: 1 };

//     axios
//       .post("https://alok-verma-rct.onrender.com/crankdealCart", NewProduct)
//       .then(() =>
//         toast({
//           title: "Item Added",
//           description: "Item added to cart successfully",
//           status: "success",
//           duration: 9000,
//           isClosable: true,
//           position: "top",
//         })
//       )
//       .catch((err) => console.log(err));
//   };

//   useEffect(() => {
//     FetchData();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <Flex direction={["column", "row"]} justifyContent="space-between">
//       <Card className={styles.prodsort} m="10px 0px" p="20px">
//         <Heading size={"md"} m="10px">
//         Sort price
//         </Heading>
//         <Center>
//         <RadioGroup value={sort} onChange={(value)=>setSort(value)}>
//             <Stack direction='column'>
//                 <Radio value='asc' onClick={LowToHigh}><Text onClick={LowToHigh}>Low to High</Text></Radio>
//                 <Radio value='desc' onClick={HighToLow}><Text onClick={HighToLow}>High to Low</Text></Radio>
//             </Stack>
//         </RadioGroup>
//         </Center>
//         <br/>
//         <Heading size={"md"} m="10px">
//           Categories
//         </Heading>
//         <Center>
//         <RadioGroup defaultValue="dresses">
//             <Stack direction='column' textAlign={"left"}>
//                 <Radio value={"dresses"}>Dresses</Radio>
//                 <Link to="/Womens/WomensFootwear"><Radio value={"footwear"}>Footwear</Radio></Link>
//                 <Link to="/Womens/WomensEthnicDresses"><Radio value={"ethnic Dresses"}>Ethnic Dresses</Radio></Link>
//             </Stack>
//         </RadioGroup>
//         </Center>
//         {/* <Menu p="30px">
//           <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
//             Dresses
//           </MenuButton>
//           <MenuList>
//             <Link to="/Womens/WomensFootwear"><MenuItem>Footwear</MenuItem></Link>
//             <Link to="/Womens/WomensEthnicDresses"><MenuItem>Ethnic Dresses</MenuItem></Link>
//           </MenuList>
//         </Menu> */}
//       </Card>
//       <SimpleGrid minChildWidth={250} m="20px" p="10px" w="80%">
//         {loading ? (
//           <div style={{ textAlign: "center", height:"47vh" }}>
//             <Spinner
//               thickness="4px"
//               speed="0.65s"
//               emptyColor="gray.200"
//               color="blue.500"
//               size="xl"
//             />
//           </div>
//         ) : error ? (
//           <div style={{ textAlign: "center" }}>"Something Went Wrong"</div>
//         ) : (
//           products?.map((item) => {
//             return (
//               <Link to={`/Womens/WomensEthnicDresses/${item.id}`}>
//               <Flex
//                 p={5}
//                 w="fit-content"
//                 alignItems="center"
//                 justifyContent="center"
//                 className="hvr-grow-shadow"
//                 key={item.id}
//               >
//                 <Box
//                   width="250px"
//                   borderWidth="1px"
//                   rounded="lg"
//                   shadow="lg"
//                   position="relative"
//                 >
//                   <Image
//                     src={item.image}
//                     alt={`Picture of ${item.title}`}
//                     roundedTop="lg"
//                     w="content-fit"
//                   />
//                   <Flex
//                     mt="1"
//                     justifyContent="space-between"
//                     alignContent="center"
//                   >
//                     <Box
//                       fontSize="20px"
//                       fontWeight="semibold"
//                       as="h4"
//                       lineHeight="tight"
//                       isTruncated
//                       p="10px 20px"
//                       cursor={"pointer"}
//                       className="product-title"
//                       onClick={() => {
//                         navigate(`/Womens/WomensEthnicDresses/${item.id}`);
//                       }}
//                     >
//                       {item.title}
//                     </Box>
//                     <Tooltip
//                       label="Add to cart"
//                       bg="white"
//                       placement={"top"}
//                       color={"gray.800"}
//                       fontSize={"1.2em"}
//                     >
//                       <chakra.a display={"flex"}>
//                         <Icon
//                           as={FiShoppingCart}
//                           h={7}
//                           w={7}
//                           alignSelf={"center"}
//                           m="0px 20px"
//                           onClick={() => AddToCartItem(item.id)}
//                         />
//                       </chakra.a>
//                     </Tooltip>
//                   </Flex>
//                   <Flex
//                     justifyContent="space-between"
//                     textAlign="center"
//                     p="10px 20px"
//                   >
//                     <Box fontSize="20px">
//                       <Box
//                         as="span"
//                         color={"gray.600"}
//                         fontSize="lg"
//                         m="0px 5px"
//                       ></Box>
//                     </Box>
//                     <Box fontSize="20px">
//                       <Box as="span" color={"gray.600"} fontSize="lg">
//                         ₹
//                       </Box>
//                       {item.price}
//                     </Box>
//                   </Flex>
//                 </Box>
//               </Flex>
//               </Link>
//             );
//           })
//         )}
//       </SimpleGrid>
//     </Flex>
//   );
// };

// export default Foodprod;


import React from "react";
import { Spinner } from "@chakra-ui/spinner";
import { useDispatch, useSelector } from "react-redux";
import {
  Flex,
  Box,
  Image,
  Icon,
  chakra,
  Tooltip,
  useToast,
  Card,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Stack,
  Radio,
  RadioGroup,
  Text,
  Center
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { useEffect } from "react";
import axios from "axios";
import { errProduct, reqProduct, sucProduct } from "../Redux/Health&Beauty/actions";
import { Heading, SimpleGrid } from "@chakra-ui/layout";
import "../Components/Css/hover-glow-shadow.css";
import "../Components/Css/womens.css";
import { useNavigate } from "react-router";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import styles from "../Components/Css/mens.module.css";

const Foodprod = () => {
  const { userId, isAuth } = useSelector((store) => store.auth);
  const { products, loading, error } = useSelector((state) => state.health);
  const [sort, setSort] = React.useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
   console.log(products)
  const FetchData = async () => {
    dispatch(reqProduct());
    try {
      let res = await axios.get(
        "https://alok-verma-rct.onrender.com/fooditem"
      );
      let data = res.data;
      dispatch(sucProduct(data));
    } catch (error) {
      dispatch(errProduct());
    }
  };

  const LowToHigh = async () => {
    dispatch(reqProduct());
    try {
      let res = await axios.get(
        "https://alok-verma-rct.onrender.com/fooditem"
      );
      let data = res.data;
      data.sort((a, b) => a.price - b.price);
      console.log(data);
      dispatch(sucProduct(data));
    } catch (error) {
      dispatch(errProduct());
    }
  };

  const HighToLow = async () => {
    dispatch(reqProduct());
    try {
      let res = await axios.get(
        "https://alok-verma-rct.onrender.com/fooditem"
      );
      let data = res.data;
      data.sort((a, b) => b.price - a.price);
      console.log(data);
      dispatch(sucProduct(data));
    } catch (error) {
      dispatch(errProduct());
    }
  };

  const AddToCartItem = async (id) => {
    if(!isAuth){
      return navigate("/userlogin")
    }

    let data = await axios.get(
      `https://alok-verma-rct.onrender.com/fooditem/${id}`
    );
    const NewProduct = { ...data.data, quantity: 1, userId };

    axios
      .post("https://alok-verma-rct.onrender.com/crankdealCart", NewProduct)
      .then(() =>
        toast({
          title: "Item Added",
          description: "Item added to cart successfully",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top",
        })
      )
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    FetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex direction={["column", "row"]} justifyContent="space-between">
      <Card className={styles.prodsort} m="10px 0px" p="20px">
        <Heading size={"md"} m="10px">
        Sort price
        </Heading>
        <Center>
        <RadioGroup value={sort} onChange={(value)=>setSort(value)}>
            <Stack direction='column'>
                <Radio value='asc' onClick={LowToHigh}><Text onClick={LowToHigh}>Low to High</Text></Radio>
                <Radio value='desc' onClick={HighToLow}><Text onClick={HighToLow}>High to Low</Text></Radio>
            </Stack>
        </RadioGroup>
        </Center>
        <br/>
        <Heading size={"md"} m="10px">
          Categories
        </Heading>
        <Center>
        <RadioGroup defaultValue="foodprod">
        <Stack direction='column' textAlign={"left"}>
                <Link to="/drinkprod"><Radio value={"drinkprod"}>Nutrition  Page</Radio></Link>
                <Radio value={"foodprod"}>Food & Gourmet Page</Radio>
                <Link to="/productCategoryface"><Radio value={"productCategoryface"}>Beauty Products Page</Radio></Link>
            </Stack>
        </RadioGroup>
        </Center>
        {/* <Menu p="30px">
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Dresses
          </MenuButton>
          <MenuList>
            <Link to="/Womens/WomensFootwear"><MenuItem>Footwear</MenuItem></Link>
            <Link to="/Womens/WomensEthnicDresses"><MenuItem>Ethnic Dresses</MenuItem></Link>
          </MenuList>
        </Menu> */}
      </Card>
      <SimpleGrid minChildWidth={250} m="20px" p="10px" w="80%">
        {loading ? (
          <div style={{ textAlign: "center", height:"47vh" }}>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </div>
        ) : error ? (
          <div style={{ textAlign: "center" }}>"Something Went Wrong"</div>
        ) : (
          products?.map((item) => {
            return (
              <Link to={`/fooditem/SinglePage/${item.id}`}>
              <Flex
                p={5}
                w="fit-content"
                alignItems="center"
                justifyContent="center"
                className="hvr-grow-shadow"
                key={item.id}
              >
                <Box
                  width="250px"
                  borderWidth="1px"
                  rounded="lg"
                  shadow="lg"
                  position="relative"
                >
                  <Image
                    src={item.image}
                    alt={`Picture of ${item.title}`}
                    roundedTop="lg"
                    w="content-fit"
                  />
                  <Flex
                    mt="1"
                    justifyContent="space-between"
                    alignContent="center"
                  >
                    <Box
                      fontSize="20px"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      isTruncated
                      p="10px 20px"
                      cursor={"pointer"}
                      className="product-title"
                      onClick={() => {
                        navigate(`/Womens/WomensEthnicDresses/${item.id}`);
                      }}
                    >
                      {item.title}
                    </Box>
                    <Tooltip
                      label="Add to cart"
                      bg="white"
                      placement={"top"}
                      color={"gray.800"}
                      fontSize={"1.2em"}
                    >
                      <chakra.a display={"flex"}>
                        <Icon
                          as={FiShoppingCart}
                          h={7}
                          w={7}
                          alignSelf={"center"}
                          m="0px 20px"
                          onClick={() => AddToCartItem(item.id)}
                        />
                      </chakra.a>
                    </Tooltip>
                  </Flex>
                  <Flex
                    justifyContent="space-between"
                    textAlign="center"
                    p="10px 20px"
                  >
                    <Box fontSize="20px">
                      <Box
                        as="span"
                        color={"gray.600"}
                        fontSize="lg"
                        m="0px 5px"
                      ></Box>
                    </Box>
                    <Box fontSize="20px">
                      <Box as="span" color={"gray.600"} fontSize="lg">
                        ₹
                      </Box>
                      {item.price}
                    </Box>
                  </Flex>
                </Box>
              </Flex>
              </Link>
            );
          })
        )}
      </SimpleGrid>
    </Flex>
  );
};

export default Foodprod;