import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    useToast,
  } from '@chakra-ui/react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
  import { useNavigate } from "react-router";
import axios from 'axios';
import { Link } from 'react-router-dom';

  const data = {
    isNew: true,
    imageURL:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Wayfarer Classic',
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  };


function Foodcard({id, title, image,description,price,rate,count}) {
  const navigate=useNavigate();
  const toast = useToast();

  const AddToCartItem = async (id) => {
    let data = await axios.get(
      `https://alok-verma-rct.onrender.com/fooditem/${id}`
    );
    const NewProduct = { ...data.data, quantity: 1 };

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

    return (
      <Link to={`/fooditem/SinglePage/${id}`}>
      <Flex p={4} margin="auto" w="fit-content" alignItems="center" justifyContent="center" className="hvr-grow-shadow">
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          // maxW="sm"
          width="250px"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
          {data.isNew && (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          )}        <Image
            src={image}
            alt={`Picture of ${title}`}
            roundedTop="lg"
            padding="5px"
            // height="50%"
          />        <Box p="6">
            {/* <Box d="flex" alignItems="baseline"> */}
              {data.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              )}
            {/* </Box> */}
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
                onClick={() => {
                  navigate(`/fooditem/SinglePage/${id}`);
                }}
                >
                {title}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}
                
                >
                <chakra.a href={'#'} display={'flex'}>
                  <Icon  onClick={()=>AddToCartItem(id)} as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                </chakra.a>
              </Tooltip>
            </Flex>          <Flex justifyContent="space-between" alignContent="center" >
              {/* <Rating rating={data.rating} numReviews={data.numReviews} display={"flex"} /> */}
              <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                <Box as="span" color={'gray.600'} fontSize="lg">
                 ₹  
                </Box>
                {price}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
      </Link>
    );
  }export default Foodcard;