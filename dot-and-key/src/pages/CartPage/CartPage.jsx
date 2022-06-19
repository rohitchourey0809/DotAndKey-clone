import { Box, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardItem } from "./CardItem";
import { Checkout } from "./Checkout";

export const Card = () => {
  const [carddata, setcarddata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/card")
      .then((response) => {
        console.log("carddata", response.data);
        setcarddata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Box>
      <>
        <Heading as="h2" size="xl" textAlign="center">
          Cart
        </Heading>
        {carddata.length &&
          carddata.map((e) => {
            return (
              <CardItem
                key={e.id}
                id={e.id}
                title={e.title}
                price={e.price}
                image={e.images}
                description={e.description}
              />
            );
          })}
      </>
      <Checkout />
    </Box>
  );
};
