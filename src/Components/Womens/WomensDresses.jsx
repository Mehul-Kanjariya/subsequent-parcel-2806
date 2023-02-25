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
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { useEffect } from "react";
import axios from "axios";
import { errProduct, reqProduct, sucProduct } from "../../Redux/Women/actions";
import { Heading, SimpleGrid } from "@chakra-ui/layout";
import "../Css/hover-glow-shadow.css";
import "../Css/womens.css";
import { useNavigate } from "react-router";
import { ChevronDownIcon } from "@chakra-ui/icons";

const WomensDresses = () => {
  const { products, loading, error } = useSelector((state) => state.women);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const FetchData = async () => {
    dispatch(reqProduct());
    try {
      let res = await axios.get(
        "https://alok-verma-rct.onrender.com/WomensDresses"
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
        "https://alok-verma-rct.onrender.com/WomensEthnicWear"
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
        "https://alok-verma-rct.onrender.com/WomensEthnicWear"
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
    let data = await axios.get(
      `https://alok-verma-rct.onrender.com/WomensDresses/${id}`
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

  useEffect(() => {
    FetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex>
      <Card m="10px 0px" w="20%" p="20px">
        <Heading size={"md"} m="10px">
          Sorting
        </Heading>
        <Menu p="30px">
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Price
          </MenuButton>
          <MenuList>
            <MenuItem onClick={HighToLow}> High to Low</MenuItem>
            <MenuItem onClick={LowToHigh}>Low to High</MenuItem>
          </MenuList>
        </Menu>
      </Card>
      <SimpleGrid columns={[1, 2, 4]} m="20px" p="10px" textAlign="center">
        {loading ? (
          <div style={{ textAlign: "center" }}>
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
              <Flex
                p={5}
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
                      cursor={"pointer"}
                      className="product-title"
                      onClick={() => {
                        navigate(`/Womens/WomensDresses/${item.id}`);
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
            );
          })
        )}
      </SimpleGrid>
    </Flex>
  );
};

export default WomensDresses;
