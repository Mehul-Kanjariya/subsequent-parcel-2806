import {
  Heading,
  Center,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Textarea,
  Flex,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "./addproduct.module.css";
import UploadImage from "./UploadImage";
import axios from "axios";
import { Link } from "react-router-dom";

const productObject = {
  image: "",
  title: "",
  reviews: {
    rate: "",
    count: "",
  },
  price: "",
  discount: "",
  description: "",
};

const AddProductPage = () => {
  const [productdata, setData] = React.useState({
    id:Date.now(),
    image: "",
    title: "",
    price: "",
    reviews: {
      rate: "",
      count: "",
    },
    discount: "",
    description: "",
  });

  const [category, setCategory] = React.useState("");

  const onInputChange = (e) => {
    let a = e.target.value;
    let b = e.target.name;
    if (e.target.type == "number") {
      a = +a;
    }

    if (b == "reviews") {
      let r = {
        rate: a,
        count: 0,
      };
      setData({ ...productdata, [b]: r });
      return;
    }
    setData({ ...productdata, [b]: a });
  };

  const handleAdd = (category) => {
    if (
      productdata.title &&
      productdata.image &&
      productdata.reviews.rate &&
      productdata.price && category
    ) {
      try {
        axios({
          method: `post`,
          baseURL: `https://alok-verma-rct.onrender.com/${category}`,
          data: { ...productdata },
        });
      } catch (err) {
        alert("Facing some issues please try again");
        return;
      }

      alert("Product Added Successfully");
      window.location.reload();
    } else {
      alert("Fill the data properly");
    }
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.blurr}>
        <Center>
          <Heading
            size={{
              base: "md",
              sm: "lg",
              md: "lg",
              lg: "lg",
              xl: "lg",
              "2xl": "xl",
            }}
            style={{ marginTop: "25px", marginBottom: "20px" }}
          >
            ADD NEW PRODUCT
          </Heading>
        </Center>
        <div className={styles.updateButton}>
          <Link to="/admin">
            <Button>Update Product</Button>
          </Link>
        </div>
        <Flex
          width={"fit-content"}
          style={{ margin: "auto auto 50px auto" }}
          flexDirection={{ base: "column-reverse", md: "row" }}
          gap={{ md: "40px", lg: "150px", xl: "200px", "2xl": "200px" }}
          className={styles.table}
        >
          <Box width={"fit-content"}>
            <div>
              <div className={styles.form}>
                <FormControl isRequired>
                  <Input
                    value={productdata.title}
                    placeholder="Title"
                    name="title"
                    onChange={onInputChange}
                  />
                  <Input
                    value={productdata.price}
                    type="number"
                    placeholder="Price"
                    name="price"
                    onChange={onInputChange}
                  />
                  <Input
                    value={productdata.discount}
                    type="number"
                    placeholder="Discount"
                    name="discount"
                    onChange={onInputChange}
                  />
                  <Input
                    value={productdata.reviews.rate}
                    type="number"
                    placeholder="Reviews"
                    name="reviews"
                    onChange={onInputChange}
                  />
                  <Textarea
                    value={productdata.description}
                    placeholder="Product Description"
                    name="description"
                    onChange={onInputChange}
                  />
                  <Center>
                    <FormLabel
                      style={{
                        width: "fit-content",
                        fontFamily:
                          "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      Category:
                    </FormLabel>
                  </Center>
                  <Select
                    placeholder="Select Category"
                    className={styles.option}
                    name="category"
                    onChange={(e)=>setCategory(e.target.value)}
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
                    <option value="WomensEthnicWear">Women's Ethnic</option>
                    <option value="WomensFootwear">Women's Footwear</option>
                    <option value="WomensDresses">Women's Dresses</option>
                    <option value="MensFootwear">Men's Footwear</option>
                    <option value="MensClothing">Men's Clothing</option>
                    <option value="MenseyeWear">Men's EyeWear</option>
                  </Select>
                  <div className={styles.button}>
                    <Button
                      mt={4}
                      colorScheme="green"
                      type="submit"
                      onClick={()=>{handleAdd(category)}}
                    >
                      ADD
                    </Button>
                  </div>
                </FormControl>
              </div>
            </div>
          </Box>
          <Box width={"fit-content"} margin={"auto"}>
            <UploadImage product={productdata} />
          </Box>
        </Flex>
      </div>
    </div>
  );
};

export default AddProductPage;
