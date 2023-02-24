import React, { useState } from "react";
import styles from "./update.module.css";
import {
  Heading,
  Center,
  FormControl,
  Input,
  Select,
  Button,
  Textarea,
  Flex,
  Box,
} from "@chakra-ui/react";
import UploadImage from "../UploadImage";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const {id,category} = useParams();
  const [cat, setCat] = useState(category);
  const [productdata, setData] = React.useState(null);
console.log(cat)
  const onInputChange = (e) => {
    let a = e.target.value;
    let b = e.target.name;
    if (e.target.type == "number") {
      a = +a;
    }

    setData({ ...productdata, [b]: a });
  };

  const handleUpdate = async (id,category) => {
    if (
      productdata.title &&
      productdata.image &&
      category &&
      productdata.price
    ) {
      try {
        let res = await fetch(`https://alok-verma-rct.onrender.com/${category}/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productdata),
        });
      } catch (err) {
        console.log(err);
        alert("Facing some issues please try again");
        return;
      }

      alert("Product Updated Successfully");
    } else {
      alert("Fill the data properly");
    }
  };

  const deleteProduct = async (id,category) => {
    try {
      let res = await fetch(`https://alok-verma-rct.onrender.com/${category}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      alert("Product deleted successfully");
      <Navigate to="/adminProducts" replace={true} />
    } catch (err) {
      alert("Facing some issues please try again");
    }
  };

const fetchSingleProduct = async (id,category) => {
    await axios
        .get(`https://alok-verma-rct.onrender.com/${category}/${id}`)
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err));
}

React.useEffect(()=>{
  fetchSingleProduct(id,category)
},[]);

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
            <Button>Update Products</Button>
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
                  <label
                    style={{
                      width: "fit-content",
                      fontFamily:
                        "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                      fontSize: "16px",
                      fontWeight: "bold",
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    Title:
                  </label>

                  <Input
                    value={productdata?.title}
                    placeholder="Title"
                    name="title"
                    onChange={onInputChange}
                  />

                  <label
                    style={{
                      width: "fit-content",
                      fontFamily:
                        "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                      fontSize: "16px",
                      fontWeight: "bold",
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    Price:
                  </label>

                  <Input
                    value={productdata?.price}
                    type="number"
                    placeholder="Price"
                    name="price"
                    onChange={onInputChange}
                  />

                  <label
                    style={{
                      width: "fit-content",
                      fontFamily:
                        "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                      fontSize: "16px",
                      fontWeight: "bold",
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    Discount:
                  </label>

                  <Input
                    value={productdata?.discount}
                    type="number"
                    placeholder="Discount"
                    name="discount"
                    onChange={onInputChange}
                  />

                  {/* <label
                    style={{
                      width: "fit-content",
                      fontFamily:
                        "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                      fontSize: "16px",
                      fontWeight: "bold",
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    Reviews:
                  </label>

                  <Input
                    value={productdata.reviews.rate}
                    type="number"
                    placeholder="Reviews"
                    name="reviews"
                    onChange={onInputChange}
                    disabled
                  /> */}

                  <label
                    style={{
                      width: "fit-content",
                      fontFamily:
                        "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                      fontSize: "16px",
                      fontWeight: "bold",
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    Description:
                  </label>

                  <Textarea
                    value={productdata?.description}
                    placeholder="Product Description"
                    name="description"
                    onChange={onInputChange}
                  />

                  <label
                    style={{
                      width: "fit-content",
                      fontFamily:
                        "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                      fontSize: "16px",
                      fontWeight: "bold",
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    Category:
                  </label>

                  <Select
                    value={cat}
                    placeholder="Select Category"
                    className={styles.option}
                    name="category"
                    onChange={(e)=>{setCat(e.target.value)}}
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
              <option value="MenseyeWear ">Mens EyeWear</option>
                  </Select>
                  <div className={styles.button}>
                    <Button
                      mt={4}
                      colorScheme="green"
                      type="submit"
                      onClick={() => handleUpdate(productdata.id,category)}
                    >
                      Update
                    </Button>
                    <Button
                      mt={4}
                      colorScheme="red"
                      type="submit"
                      onClick={() => deleteProduct(productdata.id,category)}
                    >
                      Delete
                    </Button>
                  </div>
                </FormControl>
              </div>
            </div>
          </Box>
          <Box width={"fit-content"} margin={"auto"}>
            <UploadImage product={productdata} img={productdata?.image} />
          </Box>
        </Flex>
      </div>
    </div>
  );
};

export default Update;