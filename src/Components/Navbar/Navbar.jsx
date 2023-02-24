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
  IconButton,Flex, Text
} from '@chakra-ui/react'
import { HamburgerIcon,AddIcon,ExternalLinkIcon,RepeatIcon,EditIcon,StarIcon } from '@chakra-ui/icons'
import { SearchIcon } from "@chakra-ui/icons";
import logo from "./logoo.png";
import { BsCart2, BsFillPersonFill } from "react-icons/bs";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid black",
        backgroundColor: "#e40046",
      }}
    >
      <Link to="/">
      <img src={logo} alt="err" style={{ width: "250px" }} />
      </Link>

      
      <div style={{  margin: "30px",border:"none"}} >
      <Menu   >
        
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
    />
  <MenuList>
    <MenuItem icon={<AddIcon />} command='⌘M'>
      Men's Fashion
    </MenuItem>
    <MenuItem icon={<ExternalLinkIcon />} command='⌘W'>
      Women's Fashion
    </MenuItem>
    <MenuItem icon={<RepeatIcon />} command='⌘⇧H'>
      Home & Kitchen
    </MenuItem>
    <MenuItem icon={<EditIcon />} command='⌘T'>
      Toys, Kid's Fashion
    </MenuItem>
    <MenuItem icon={<StarIcon />} command='⌘B'>
      Beauty & Health
    </MenuItem>
  </MenuList>
</Menu>

    </div>







      <input
        placeholder="search products & brands"
        type="text"
        style={{
          border: "1px solid black",
          width: "600px",
          padding: "3px",
          paddingLeft: "20px",
          margin: "30px",
        }}
      />

      

      <div
        style={{
          border: "1px solid black",
          display: "flex",
          padding: "3px",
          margin: "30px",
          width: "90px",
          backgroundColor: "#333333",
          justifyContent: "center",
          marginLeft: "-30px",
        }}
      >
        <p style={{ color: "white", pading: "3px" }}>
          <SearchIcon />
          
          Search
        </p>
      </div>



     <Flex m={30} gap={1}>
        <BsCart2 style={{ fontSize: "30px",color:"white" }}> </BsCart2>
      
        <Text style={{ fontSize: "25px",color:"white" }}>Cart</Text>
     </Flex>
      




   <Link to='/signup' >
     
        <Flex m={30} gap={5} >


        <Menu   >
  <MenuButton as={Button} >
    Sign Up
  </MenuButton>
  <MenuList>
    <MenuGroup title='Profile'>
      <MenuItem>Login</MenuItem>
      <MenuItem>Your Account</MenuItem>
    </MenuGroup>
    <MenuDivider />
   
  </MenuList>
</Menu>


        <BsFillPersonFill style={{ fontSize: "35px",color:"white" }}> </BsFillPersonFill>

    </Flex>
   
        </Link>
    </div>
  );
};

export default Navbar;
