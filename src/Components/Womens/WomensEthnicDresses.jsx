import { Spinner } from "@chakra-ui/spinner";
import { useSelector } from "react-redux";
import { Flex, Box, Image, Icon, chakra, Tooltip } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";

const WomensEthnicDresses = () => {
  const { products, loading, error } = useSelector((store) => store);

  return loading ? (
    <Spinner />
  ) : error ? (
    "Something Went Wrong"
  ) : (
    products?.map((item) => {
      return (
        <Flex p={50} w="full" alignItems="center" justifyContent="center">
          <Box
            bg="gray.800"
            maxW="sm"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative"
          >
            <Image
              src={item.imageURL}
              alt={`Picture of ${item.name}`}
              roundedTop="lg"
            />
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
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
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
                </chakra.a>
              </Tooltip>
            </Flex>
          </Box>
        </Flex>
      );
    })
  );
};

export default WomensEthnicDresses;
