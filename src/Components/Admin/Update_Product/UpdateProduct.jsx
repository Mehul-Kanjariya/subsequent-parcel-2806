import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../Redux/Admin/actions";
import { Link, useSearchParams } from "react-router-dom";

const UpdateProduct = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const initialfilterValue = searchParams.getAll('category')
  // console.log()
  const data = useSelector((store) => store.admin.products);
  const [filterBy, setFilterBy] = React.useState(initialfilterValue[0] || "WomensEthnicWear");

  React.useEffect(() => {
    let params={}
    if(filterBy.length){
      params.category = filterBy;
    }
    setSearchParams(params)
    dispatch(fetchProducts(filterBy));
  }, [filterBy]);

  return (
    <div>
      <Box>
        <Center background={"#c9c3cd"}>
          <Heading>Products</Heading>
        </Center>
        <Flex
          margin={"20px"}
          gap={"20px"}
          flexDirection={{ base: "column", sm: "row" }}
        >
          <Box width="fit-content">
            <Button
              fontWeight={"bold"}
              background={"black"}
              color={"white"}
              _hover={{ background: "#444444", color: "white" }}
            >
              <Link to={"/addProduct"}>Add Product</Link>
            </Button>
          </Box>
          <Box width="200px">
            <Select
              value={filterBy}
              placeholder="Select Category"
              name="category"
              fontWeight={"bold"}
              _hover={{ cursor: "pointer" }}
              onChange={(e)=>setFilterBy(e.target.value)}
            >
              <option value="beautyface">Beauty Face</option>
              <option value="fooditem">Food Item</option>
              <option value="healthdrinks">Healthy Drinks</option>
              <option value="kitchenAppliances">Kitchen Appliances </option>
              <option value="homeFurnishing">Home Furnishing</option>
              <option value="tools">Tools</option>
              <option value="toys">Toys</option>
              <option value="babycare">Babycare</option>
              <option value="stationary">Stationary</option>
              <option value="WomensEthnicWear">Womens Ethnic</option>
              <option value="WomensFootwear ">Womens Footwear</option>
              <option value="WomensDresses ">Womens Dresses</option>
              <option value="MensFootwear ">Mens Footwear</option>
              <option value="MensClothing">Men's Clothing</option>
              <option value="MenseyeWear ">Mens EyeWear</option>
            </Select>
          </Box>
          <Box width="fit-content">
            <Button
              fontWeight={"bold"}
              background={"black"}
              color={"white"}
              _hover={{ background: "#444444", color: "white" }}
            >
              <Link to={"/orders"}>User Orders</Link>
            </Button>
          </Box>
        </Flex>
        <Box
          style={{ width: "fit-content" }}
          margin={"20px auto"}
          padding={{
            base: "0px 10px",
            sm: "0px 10px",
            md: "0px 10px",
            lg: "",
            xl: "",
            "2xl": "",
          }}
        >
          <SimpleGrid
            columns={{
              base: "1",
              sm: "2",
              md: "3",
              lg: "3",
              xl: "4",
              "2xl": "4",
            }}
            gap="20px"
          >
            {data?.map((product) => {
              return <ProductCard key={product.id} {...product} filterBy={filterBy}/>;
            })}
          </SimpleGrid>
        </Box>
      </Box>
    </div>
  );
};

export default UpdateProduct;
