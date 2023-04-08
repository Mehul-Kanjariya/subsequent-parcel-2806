import React from 'react';
import { Box, Flex, Image, Tooltip, Icon, chakra, useToast, Show } from '@chakra-ui/react';
import { FiShoppingCart } from "react-icons/fi";
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductCard = ({id, title, image, price}) => {
    const toast = useToast();

    const AddToCartItem = async (id) => {
        let data = await axios.get(
          `https://alok-verma-rct.onrender.com/navSearch/${id}`
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
    <div>
        <Link to={`/search/${id}`}>
        <Flex
            p={5}
            w="fit-content"
            alignItems="center"
            justifyContent="center"
            key={id}
            _hover={{
                cursor:"pointer"
            }}
        >
            <Box
                width={{base:"223px", sm:"190px", md:"250px", lg:"204px", xl:"250px"}}
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative"
            >
                <Image
                    src={image}
                    alt={`Picture of ${title}`}
                    roundedTop="lg"
                    w="content-fit"
                />
                    <Flex
                        mt="1"
                        justifyContent="space-between"
                        alignContent="center"
                    >
                        <Box
                            fontSize="18px"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated
                            p="10px 20px"
                            cursor={"pointer"}
                            // className="product-title"
                            // onClick={() => {
                            //     navigate(`/Mens/MensClothing/${id}`);
                            // }}
                        >
                            {title}
                        </Box>
                        <Show above={"md"}>
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
                                onClick={() => AddToCartItem(id)}
                                />
                            </chakra.a>
                        </Tooltip>
                        </Show>
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
                      {price}
                    </Box>
                </Flex>
            </Box>
        </Flex>
        </Link>
    </div>
  )
}

export default ProductCard