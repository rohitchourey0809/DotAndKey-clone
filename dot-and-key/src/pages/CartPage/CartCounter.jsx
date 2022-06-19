import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

import axios from "axios";

export const CartCounter = () => {
  const [carddata, setcarddata] = useState([]);
  useEffect(() => {
    if (carddata?.length === 0)
      axios
        .get("http://localhost:8080/card")
        .then((response) => {
          console.log("carddatalength", response.data.length);
          setcarddata(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, [carddata?.length]);

  return (
    <Box
      colorScheme={"golden"}
      backgroundColor="black"
      textColor={"white"}
      borderRadius="30%"
      width="20px"
      height="20px"
      textAlign="center"
      paddinBottom="30px"
      position="absolute"
      right="0"
      top="0"
    >
      {carddata?.length ? carddata.length : 0}
    </Box>
  );
};
