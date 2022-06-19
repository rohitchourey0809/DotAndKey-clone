import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Image,
  Img,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsCaretUpSquareFill, BsCartPlusFill } from "react-icons/bs";

import { Rating } from "../../PRODUCTS/Rating";
import { Checkout } from "./Checkout";

export const CardItem = ({
  id,
  size,
  title,
  images,
  description,
  price,
  perks,
}) => {
  // const [deletedata, setdeletedata] = useState([]);
  // const RemoveProduct = (id) => {
  //   useEffect(() => {
  // eslint-disable-next-line no-use-before-define
  // deleteProductCard(id);
  //   }, [id]);
  // };

  const RemoveProduct = (id) => {
    console.log("deleter id", id);
    axios
      .delete(`http://localhost:8080/card/${id}`)
      .then((response) => {
        console.log("deleteresponse", response);
      })
      // .then((data) => {
      //   const updateded = axios
      //     .get("http://localhost:8080/card")
      //     .then((response) => {
      //       console.log("deleteresponse", ...updateded);
      //     });
      // })
      .catch((error) => {
        console.log("deleteresponse", error);
      });
  };

  return (
    <VStack>
      <Center
        bordercolor="silver"
        border="2px"
        height="100%"
        width="100%"
        marginTop={"100px"}
      >
        <Box display="flex" marginTop={"100px"}>
          <Box>
            <Img src={images} alt={title} />
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
                {title}
              </Text>
            </Center>
            <Center>
              <Text fontSize="20px" fontWeight="bold" color="brown">
                ${price}
              </Text>
            </Center>
            <Center>
              <Rating />
            </Center>
            <Center>
              <Text color="dark green">{size}</Text>
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
                {description}
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
                {perks}
              </Text>
            </Center>
            <Center>
              <Button
                onClick={() => RemoveProduct(id)}
                variant={"outline"}
                leftIcon={<DeleteIcon />}
              >
                Remove
              </Button>
            </Center>
          </Box>
        </Box>
      </Center>
    </VStack>
  );
};
