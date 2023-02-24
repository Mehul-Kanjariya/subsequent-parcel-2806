import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
  Flex,
  Text,
  Input,
  Show,
  Image,
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
import { BsCart2, BsFillPersonFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const mynav = useNavigate();

  return (
    <Flex backgroundColor="#e40046" alignItems={"center"} w={"100%"}>

    <Flex flex={1} alignItems={"center"} gap={5}>
        <Image src={logo} onClick={() => mynav("/")} alt="err" width={{base:"150px", md:"250px"}} />
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
            color="white"
            textColor={"white"}
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



      <Flex flex={1} justifyContent="space-evenly"  alignItems={"center"} >
        <Flex gap={1}>
          <BsCart2 style={{ fontSize: "30px", color: "white" }}> </BsCart2>

          <Text style={{ fontSize: "25px", color: "white" }}>Cart</Text>
        </Flex>

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
