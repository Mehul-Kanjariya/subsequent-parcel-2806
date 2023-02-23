import { Spinner } from "@chakra-ui/spinner";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Box, Image, Icon, chakra, Tooltip } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { useEffect } from "react";
import axios from "axios";
import { errProduct, reqProduct, sucProduct } from "../../Redux/Women/actions";
import { SimpleGrid } from "@chakra-ui/layout";
import "../Css/hover-glow-shadow.css";

const WomensFootwear = () => {
  const { products, loading, error } = useSelector((state) => state.women);
  const dispatch = useDispatch();

  const FetchData = async () => {
    let temp = reqProduct();
    console.log(temp);
    dispatch(reqProduct());
    try {
      let res = await axios.get(
        "https://alok-verma-rct.onrender.com/WomensFootwear"
      );
      let data = res.data;
      dispatch(sucProduct(data));
    } catch (error) {
      dispatch(errProduct());
    }
  };

  useEffect(() => {
    FetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SimpleGrid columns={[1, 2, 4]} m="20px" p="10px" textAlign="center">
      {loading ? (
        <Spinner />
      ) : error ? (
        "Something Went Wrong"
      ) : (
        products?.map((item) => {
          return (
            <Flex
              p={4}
              w="fit-content"
              alignItems="center"
              justifyContent="center"
              className="hvr-grow-shadow"
            >
              <Box
                width="300px"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative"
              >
                <Image
                  src={item.image}
                  alt={`Picture of ${item.title}`}
                  roundedTop="lg"
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
                    <chakra.a href={"#"} display={"flex"}>
                      <Icon
                        as={FiShoppingCart}
                        h={7}
                        w={7}
                        alignSelf={"center"}
                        m="0px 20px"
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
          );
        })
      )}
    </SimpleGrid>
  );
};

export default WomensFootwear;
