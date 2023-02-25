import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFaceData } from "../../Redux/Health&Beauty/actions";
import { Grid, GridItem } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

import Foodcard from "../../Pages/Foodcard";
import { fetchFootwareProducts } from "../../Redux/Mens/actions";
import MensFootwareCard from "./MensFootwareCard";

const MensFootware = () => {
  const products = useSelector((store) => store.men.products);
  const dispatch = useDispatch();
  console.log(products);

  useEffect(() => {
    dispatch(fetchFootwareProducts());
  }, []);
  return (
    <Flex
      style={{ margin: "auto", justifyContent: "center", alignItems: "center" }}
    >
      <Box
        width="15%"
        style={{ border: "1px solid red", marginTop: "-2250px" }}
      >
        <p>Select Functionalities</p>
      </Box>
      <Box>
        <Grid
          width="70%"
          templateColumns="repeat(4, 1fr)"
          m="auto"
          justifyContent="center"
          gap="2"
        >
          {products.map((item) => (
            <MensFootwareCard key={item.id} {...item} />
          ))}
        </Grid>
      </Box>
    </Flex>
  );
};

export default MensFootware;
