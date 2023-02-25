import React, { useEffect, useRef, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuGroup,
  MenuDivider,
  IconButton,
  Flex,
  Text,
  Input,
  Show,
  Image,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  TableContainer,
  Table,
  Thead,
  Tr,
  Td,
  Th,
  Box,
  DrawerFooter,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
  StarIcon,
} from "@chakra-ui/icons";
import { SearchIcon } from "@chakra-ui/icons";
import logo from "./logoo.png";
import { BsCart2, BsFillPersonFill, BsShieldFillCheck } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { TableBody } from "@mui/material";
import "../Css/Navbar.css";
import { MdOutlinePayments } from "react-icons/md";
const Navbar = () => {
  const mynav = useNavigate();
  const [CartData, setCartData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(1);
  const [TotalSum, setTotalSum] = useState(0);

  const GetCartData = () => {
    axios
      .get("https://alok-verma-rct.onrender.com/crankdealCart")
      .then((res) => {
        setCartData(res.data);
        TotalPrice();
      });
  };

  const HandleDelete = (id) => {
    axios.delete(`https://alok-verma-rct.onrender.com/crankdealCart/${id}`);
    let NewData = CartData.filter((item) => item.id !== id);
    setCartData(NewData);
  };

  const HandleQuantityChange = (id, quan, num) => {
    console.log(quan);
    setCount((prev) => prev + num);
    axios({
      method: "patch",
      url: `https://alok-verma-rct.onrender.com/crankdealCart/${id}`,
      data: {
        quantity: quan + num,
      },
    }).catch((error) => console.log(error));

    const newData = CartData.filter((item) => {
      return item.id === id ? (item.quantity = item.quantity + num) : item;
    });
    setCartData(newData);
    TotalPrice();
  };

  const TotalPrice = () => {
    let sum = 0;
    CartData.forEach((item) => (sum += item.price * item.quantity));
    setTotalSum(sum);
  };

  useEffect(() => {
    TotalPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  useEffect(() => {
    GetCartData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex backgroundColor="#e40046" alignItems={"center"} w={"100%"}>
      <Flex flex={1} alignItems={"center"} gap={5}>
        <Image
          src={logo}
          onClick={() => mynav("/")}
          alt="err"
          cursor={"pointer"}
          width={{ base: "150px", md: "250px" }}
        />
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem icon={<AddIcon />} command="⌘M">
              Men's Fashion
            </MenuItem>
            <MenuItem icon={<ExternalLinkIcon />} command="⌘W">
              Women's Fashion
            </MenuItem>
            <MenuItem icon={<RepeatIcon />} command="⌘⇧H">
              Home & Kitchen
            </MenuItem>
            <MenuItem icon={<EditIcon />} command="⌘T">
              Toys, Kid's Fashion
            </MenuItem>
            <MenuItem icon={<StarIcon />} command="⌘B">
              Beauty & Health
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <Show above={"lg"}>
        <Flex flex={1}>
          <Input
            placeholder="search products & brands"
            type="text"
            w="100%"
            borderRadius="0"
            bgColor="white"
          />

          <Button
            bgColor={"#333333"}
            color="white"
            borderRadius="0"
            _hover={{}}
          >
            <SearchIcon />
            Search
          </Button>
        </Flex>
      </Show>

      <Flex
        flex={1}
        justifyContent="space-evenly"
        alignItems={"center"}
        cursor="pointer"
        ref={btnRef}
        onClick={onOpen}
      >
        <Flex gap={1}>
          <BsCart2
            style={{ fontSize: "30px", color: "white" }}
            onClick={() => {
              GetCartData();
            }}
          >
            {" "}
          </BsCart2>

          <Text
            style={{ fontSize: "25px", color: "white" }}
            onClick={() => {
              GetCartData();
            }}
          >
            Cart
          </Text>
        </Flex>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="full"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Shopping Cart ({CartData.length} Items)</DrawerHeader>

            <DrawerBody>
              <TableContainer p="20px">
                <Table variant={"simple"}>
                  <Thead>
                    <Tr>
                      <Th>Item Details</Th>
                      <Th>Price</Th>
                      <Th>Quantity</Th>
                      <Th>
                        <Box w="400px">
                          <span style={{ width: "10px" }}>
                            Delivery With Charges{" "}
                          </span>
                          <Input
                            placeholder="Enter Pincode"
                            w="120px"
                            required
                          />{" "}
                          <Button onClick={() => setShow(true)}>Check</Button>
                        </Box>
                      </Th>
                      <Th>Subtotal</Th>
                    </Tr>
                  </Thead>
                  <TableBody>
                    {CartData?.map((item) => {
                      return (
                        <>
                          <Tr key={item.id}>
                            <Td w="40px">{item.title.substring(1, 50)}....</Td>
                            <Td>{item.price}</Td>
                            <Td fontSize={"20px"}>
                              <button
                                className="add-reduce-btn"
                                onClick={() =>
                                  HandleQuantityChange(
                                    item.id,
                                    item.quantity,
                                    -1
                                  )
                                }
                                disabled={item.quantity <= 1}
                              >
                                -
                              </button>
                              {item.quantity}
                              <button
                                className="add-reduce-btn"
                                onClick={() =>
                                  HandleQuantityChange(
                                    item.id,
                                    item.quantity,
                                    1
                                  )
                                }
                              >
                                +
                              </button>
                            </Td>
                            <Td>
                              {show ? (
                                <span
                                  style={{ fontSize: "20px", color: "green" }}
                                >
                                  Available
                                </span>
                              ) : (
                                "Enter Pincode To Check"
                              )}
                            </Td>
                            <Td>{item.price * item.quantity}</Td>
                          </Tr>
                          <Button
                            m="10px"
                            variant={"outline"}
                            onClick={() => HandleDelete(item.id)}
                          >
                            Remove Item
                          </Button>
                        </>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </DrawerBody>
            <DrawerFooter>
              <SimpleGrid
                columns={[1, 2, 3]}
                gap="10px"
                textAlign={"center"}
                bg="blackAlpha.800"
                color="whiteAlpha.800"
                p="20px"
                w="100%"
              >
                <Box textAlign={"left"} m="10px">
                  <p>Delivery and payment options can be selected later</p>
                  <br />
                  <br />
                  <Flex alignItems={"center"}>
                    <BsShieldFillCheck />{" "}
                    <span style={{ margin: "0px 5px" }}>
                      Safe and Secure Payments
                    </span>
                  </Flex>
                  <Flex>
                    <MdOutlinePayments />{" "}
                    <span style={{ margin: "0px 5px" }}>
                      100% Payment Protection, Easy Returns
                    </span>
                    Policy
                  </Flex>
                </Box>
                <Box textAlign={"left"} m="10px">
                  <p>SubTotal : Rs. {TotalSum}</p>
                  <p>
                    Delivery Charges :{" "}
                    <span style={{ color: "red", fontWeight: "500" }}>
                      Free
                    </span>
                  </p>
                </Box>
                <Box textAlign={"left"} m="20px">
                  <Button fontSize={"20px"} p="30px 50px" colorScheme={"red"}>
                    PROCEED TO PAY Rs. {TotalSum}
                  </Button>
                </Box>
              </SimpleGrid>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <Link to="/signup">
          <Flex gap={5}>
            <Menu>
              <MenuButton as={Button}>Sign Up</MenuButton>
              <MenuList>
                <MenuGroup title="Profile">
                  <Link to="/userlogin">
                    <MenuItem>Login</MenuItem>
                  </Link>
                  <MenuItem>Your Account</MenuItem>
                </MenuGroup>
                <MenuDivider />
              </MenuList>
            </Menu>

            <BsFillPersonFill style={{ fontSize: "35px", color: "white" }}>
              {" "}
            </BsFillPersonFill>
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
