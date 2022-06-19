import { Box, Flex, Img, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import { SKINCAREPRODUCTS } from "../../PRODUCTS/Skincare";
import Carousel from "./Carousel";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <Box className="topcontent">
        <Stack>
          <Flex align={"center"} gap={4} margin={"130px"}>
            <Box align={"center"}>
              <Link to="/skincare/bodycare">
                <Img
                  borderRadius="10px"
                  src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Untitled-1_6_256x256_18109629-935e-4b4a-b57d-bafd137dfc3d.jpg?v=1652335902"
                  alt=""
                />
                <Text fontSize="20px" fontWeight="bold">
                  BODY CARE
                </Text>
              </Link>
            </Box>

            <Box a align={"center"}>
              <Link to="/skincare/harecare">
                <Img
                  borderRadius="10px"
                  src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Untitled-1_7_256x256_e1449924-9374-406e-b826-3f1c0613bcec.jpg?v=1652336019"
                  alt=""
                />
                <Text fontSize="20px" fontWeight="bold">
                  HARECARE
                </Text>
              </Link>
            </Box>
            <Box align={"center"}>
              <Link to="/skincare/neutrition">
                <Img
                  borderRadius="10px"
                  src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Untitled-1_6_256x256_18109629-935e-4b4a-b57d-bafd137dfc3d.jpg?v=1652335902"
                  alt=""
                />
                <Text fontSize="20px" fontWeight="bold">
                  NUTRITION
                </Text>
              </Link>
            </Box>
            <Box align={"center"}>
              <Link to="/skincare/serum">
                <Img
                  borderRadius="10px"
                  src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/2_10_256x256_8bff7558-6bbe-48bf-ab39-7374e49719bf.jpg?v=1652335951"
                  alt=""
                />
                <Text fontSize="20px" fontWeight="bold">
                  SERUM
                </Text>
              </Link>
            </Box>
            <Box align={"center"}>
              {" "}
              <Link to="/skincare/moisturizer">
                <Img
                  borderRadius="10px"
                  src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/3_11_256x256_e7c09569-74b4-4d0c-9051-26ab4e442e4a.jpg?v=1652335973"
                  alt=""
                />

                <Text fontSize="20px" fontWeight="bold">
                  MOISTURISER
                </Text>
              </Link>
            </Box>
          </Flex>
        </Stack>
      </Box>
      <Box className="carosoulcontent">
        <Carousel />
      </Box>
      <Stack className="MainnContent">
        <Box margin={"auto"}>
          <Img
            src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Group_312_2_1.png?v=1655302240"
            alt="bgsale"
          />
        </Box>
        <Box align={"center"}>
          {" "}
          <Img
            src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Group_242_e001baf5-6cd0-47b4-a941-176f0233528c.png?v=1654493720"
            alt="bgsale"
          />
        </Box>
      </Stack>
      <VStack className="SkinProducts">
        <SKINCAREPRODUCTS />
      </VStack>
    </>
  );
};

export default LandingPage;
