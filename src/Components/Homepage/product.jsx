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
import "./homepage.css";
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



// function Rating({ rating, numReviews }) {
//   return (
//     <Box d="flex" alignItems="center">
//       {Array(5)
//         .fill('')
//         .map((_, i) => {
//           const roundedRating = Math.round(rating * 2) / 2;
//           if (roundedRating - i >= 1) {
//             return (
//               <BsStarFill
//                 key={i}
//                 style={{ marginLeft: '1' }}
//                 color={i < rating ? 'teal.500' : 'gray.300'}
//               />
//             );
//           }
//           if (roundedRating - i === 0.5) {
//             return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
//           }
//           return <BsStar key={i} style={{ marginLeft: '1' }} />;
//         })}
//       <Box as="span" ml="2" color="gray.600" fontSize="sm">
//         {numReviews} review{numReviews > 1 && 's'}
//       </Box>
//     </Box>
//   );
// }

function Product_card({id, title, image,description,price,discount,link}) {
  return (

    <Flex className="hvr-icon-buzz-out hvr-icon product_flex" padding={2} w="fit-content" alignItems="center" justifyContent="center">
      <Link  to={`/${link}`}>
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        // maxW="sm"
        className="product_box"
        // width="200px"
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
           // bg="red.200"
          />
        )}

        <Image
          src={image}
          alt={`Picture of ${title}`}
          roundedTop="lg"
          // height="50%"
        />

        <Box p="6">
          {/* <Box d="flex" alignItems="baseline"> */}
            {data.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          {/* </Box> */}
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="sm"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {title}
            </Box>
            {/* <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <chakra.a href={'#'} display={'flex'}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
              </chakra.a>
            </Tooltip> */}
          </Flex>

          <Flex justifyContent="space-between" alignContent="center" >
            {/* <Rating rating={data.rating} numReviews={data.numReviews} display={"flex"} />  */}
            <Box fontSize="xl" mt={2} color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="sm">
              {discount}
              </Box>
              
            </Box>
          </Flex>
        </Box>
      </Box>
      </Link>
    </Flex>
  );
}

export default Product_card;