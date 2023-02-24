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
  } from '@chakra-ui/react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';


  const data = {
    isNew: true,
    imageURL:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Wayfarer Classic',
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  };

function Foodcard({id, title, image1,description,price}) {
    return (
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
            src={image1}
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
                isTruncated>
                {title}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}>
                <chakra.a href={'#'} display={'flex'}>
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
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
    );
  }export default Foodcard;