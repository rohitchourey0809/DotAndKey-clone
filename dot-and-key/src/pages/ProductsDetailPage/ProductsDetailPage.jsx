import { Box, Button, Center, Image, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Rating } from "../../PRODUCTS/Rating";

export const ProductsDetailPage = () => {
  const { id } = useParams();
  console.log("id", id);
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/skincare/${id}`)

      .then((response) => {
        console.log(response);
        setdata(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const addtoCard = (e) => {
    console.log("selectedcard", e);

    axios.post("http://localhost:8080/card", e);
  };
  return (
    <>
      <VStack>
        <Center
          bordercolor="silver"
          border="2px"
          height="70%"
          width="90%"
          marginTop={"100px"}
        >
          <Box key={id} display="flex" marginTop={"100px"}>
            <Box>
              <Image
                src={data.images}
                alt={"data.title"}
                margin={"auto"}
                width="80%"
                height="90%"
              />
            </Box>
            <Box>
              <Center>
                <Text
                  fontSize="30px"
                  fontWeight="bold"
                  margin={"auto"}
                  colorScheme="pink"
                  fontStyle="italic"
                >
                  {data.title}
                </Text>
              </Center>
              <Center>
                <Text fontSize="20px" fontWeight="bold" color="brown">
                  ${data.price}
                </Text>
              </Center>
              <Center>
                <Rating />
              </Center>
              <Center>
                <Text color="dark green">{data.size}</Text>
              </Center>
              <Center>
                {" "}
                <Text
                  fontSize="20px"
                  fontWeight="bold"
                  overflow="hidden"
                  margin="auto"
                  width="1000px"
                >
                  {data.description}
                </Text>
              </Center>
              <Center>
                {" "}
                <Text
                  fontSize="20px"
                  fontWeight="bold"
                  overflow="hidden"
                  margin="auto"
                  width="1000px"
                >
                  {data.perks}
                </Text>
              </Center>
              <Center>
                <Link to="/card">
                  {" "}
                  <Button
                    height="50px"
                    width="1000px"
                    bg={"grey"}
                    onClick={() => addtoCard()}
                  >
                    ADD TO CART
                  </Button>
                </Link>
              </Center>
            </Box>
          </Box>
        </Center>
      </VStack>
    </>
  );
};
