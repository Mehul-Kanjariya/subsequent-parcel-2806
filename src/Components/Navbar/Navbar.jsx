import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux/Auth/actions";

const Navbar = () => {
  const {isAuth} = useSelector((store)=>store.auth)
  const mynav = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    let id = JSON.parse(localStorage.getItem("id"))
    let data = JSON.parse(localStorage.getItem("Auth"))
    data.Auth=!data.Auth;
    if(id && data){
      dispatch(fetchData(id,data));
    }else{
      return;
    }
    localStorage.removeItem("id");
    localStorage.removeItem("Auth");
    window.location.reload();
  }

  useEffect(()=>{
    let id = JSON.parse(localStorage.getItem("id"))
    let data = JSON.parse(localStorage.getItem("Auth"))
    if(id && data){
      dispatch(fetchData(id,data));
    }else{
      return;
    }
  },[])

  return (
    <Flex backgroundColor="#e40046" alignItems={"center"} w={"100%"}>

    <Flex flex={1} alignItems={"center"} gap={5}>
        <Image src={logo} onClick={() => mynav("/")} alt="err" cursor={'pointer'} width={{base:"150px", md:"250px"}} />
        <Menu   >
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
            <Link to="/Womens/WomensEthnicDresses"><MenuItem icon={<ExternalLinkIcon />} command="⌘W">
              Women's Fashion
            </MenuItem></Link>
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



      <Flex flex={1} justifyContent="space-evenly"  alignItems={"center"} >
        <Flex gap={1}>
          <BsCart2 style={{ fontSize: "30px", color: "white" }}> </BsCart2>

          <Text style={{ fontSize: "25px", color: "white" }}>Cart</Text>
        </Flex>

        {isAuth && <Button onClick={logout}>Log Out</Button>}
        {!isAuth && <Flex gap={5}>
            <Menu>
              <MenuButton as={Button}>Sign Up</MenuButton>
              <MenuList>
                <MenuGroup title="Profile">
                  <MenuDivider />
                  <Link to="/userlogin">
                    <MenuItem>Log In</MenuItem>
                  </Link>
                  <Link to="/signup">
                    <MenuItem>Sign Up</MenuItem>
                  </Link>
                </MenuGroup>
                <MenuDivider />
              </MenuList>
            </Menu>
            <BsFillPersonFill style={{ fontSize: "35px", color: "white" }}>
              {" "}
            </BsFillPersonFill>
          </Flex>
      }
      </Flex>
    </Flex>
  );
};

export default Navbar;
