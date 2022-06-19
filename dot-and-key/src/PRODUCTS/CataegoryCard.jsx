import axios from "axios";
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Rating } from "./Rating";
import { Filtercomponent } from "./filtercomponent";
import { Checkout } from "./Checkout";

export const CategoryComponent = ({ categoryprop }) => {
  console.log(categoryprop, "categoepop");
  const [filterTitle, setfilterTitle] = useState();
  const [data, setdata] = useState([]);
  const [page, setpage] = useState(1);

  useEffect(() => {
    axios({
      url: `http://localhost:8080/skincare`,
      method: "GET",
      params: {
        category: filterTitle,
        _page: page,
        _limit: 9,
      },
    })
      .then((response) => {
        setdata(response.data.filter((e) => e.category === categoryprop));
        console.log(response.data.filter((e) => e.category === categoryprop));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryprop, filterTitle, page]);

  const addtoCard = (e) => {
    console.log("categoryselectedcard", e);

    axios({
      url: "http://localhost:8080/card",
      method: "POST",
      e,
      params: {
        category: filterTitle,
        _page: page,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Box>
        <Center>
          <Box marginTop={"100px"}>
            <Center>
              <Button
                disabled={page === 1}
                onClick={() => setpage(page - 1)}
                backgroundColor={"black"}
                color={"gold"}
              >
                Prev
              </Button>
              <Button
                onClick={() => setpage(page + 1)}
                backgroundColor={"black"}
                color={"gold"}
              >
                Next
              </Button>
            </Center>
          </Box>
        </Center>
      </Box>
      <VStack
        className="product-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,3fr)",
          gap: "3px",
        }}
      >
        {data.map((e, index) => (
          <Link to={`/skincare/${e.id}`}>
            <Box key={e.id}>
              <Flex>
                <Box>
                  <Image
                    src={e.images}
                    alt={""}
                    height={"300px"}
                    width={"400px"}
                  />
                  <Text>{e.title}</Text>
                  <Text>
                    <Rating />
                  </Text>
                  <Text fontSize="20" fontWeight="bold">
                    Price:${e.price}
                  </Text>
                  <Text fontSize="15" fontWeight="bold">
                    Size: {e.size}
                  </Text>
                  {/* <Center overflow={"hidden"} width="80%">
                  {e.description}
                </Center> */}
                  <Link to="/card">
                    {" "}
                    <Button
                      height="50px"
                      width="400px"
                      bg={"grey"}
                      onClick={() => addtoCard(e)}
                    >
                      ADD TO CART
                    </Button>
                  </Link>
                </Box>
              </Flex>
            </Box>
          </Link>
        ))}
      </VStack>
      <Box> </Box>
    </>
  );
};
