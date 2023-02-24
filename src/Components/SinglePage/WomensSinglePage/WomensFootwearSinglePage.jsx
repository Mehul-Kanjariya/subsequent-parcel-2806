import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  List,
  ListItem,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { MdLocalShipping } from "react-icons/md";

const WomenFootwearSinglePage = () => {
  const { id } = useParams();
  const [product, setProducts] = useState([]);
  const toast = useToast();

  const FetchIdData = async () => {
    let res = await axios.get(
      `https://alok-verma-rct.onrender.com/WomensFootwear/${id}`
    );
    setProducts(res.data);
  };

  const AddToCartItem = () => {
    axios
      .post("https://alok-verma-rct.onrender.com/crankdealCart", product)
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
    FetchIdData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={product.title}
            src={product.image}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {product.title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
              m="10px"
            >
              ₹{product.price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"lg"}>{product.description}</Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Category:
                  </Text>{" "}
                  {product.category}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Discount:
                  </Text>{" "}
                  {product.discount} Off
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Rating:
                  </Text>{" "}
                  {product.rating}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
            onClick={() => AddToCartItem()}
          >
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default WomenFootwearSinglePage;
