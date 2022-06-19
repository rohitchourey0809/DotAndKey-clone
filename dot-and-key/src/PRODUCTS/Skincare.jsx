import axios from "axios";
import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";

export const SKINCAREPRODUCTS = () => {
  const [filterTitle, setfilterTitle] = useState();
  const [data, setdata] = useState([]);
  const [page, setpage] = useState(1);
  const [query, setquery] = useState("");

  useEffect(() => {
    axios({
      url: " http://localhost:8080/skincare",
      method: "GET",
      params: {
        category: filterTitle,
        _page: page,
        _limit: 9,
        q: query,
      },
    })
      .then((response) => {
        setdata(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filterTitle, page, query]);

  const addtoCard = (e) => {
    console.log("selectedcard", e);

    axios.post("http://localhost:8080/card", e);
  };
  return (
    <>
      <VStack>
        <Stack>
          <Flex
            gap={"10px"}
            cursor={"pointer"}
            color="pink"
            bg={"black"}
            borderRadius={"10px"}
          >
            <Box>
              <Button
                borderRadius={"10px"}
                radius="10px"
                onClick={() => setfilterTitle("Skin Glow")}
                backgroundColor={"black"}
                color={"gold"}
              >
                SkinCare |
              </Button>
            </Box>
            <Box>
              <Button
                onClick={() => setfilterTitle("Clay Masks")}
                backgroundColor={"black"}
                color={"gold"}
              >
                BodyCare |
              </Button>
            </Box>
            <Box>
              <Button
                onClick={() => setfilterTitle("Moisturizer")}
                backgroundColor={"black"}
                color={"gold"}
              >
                Nutrition |
              </Button>
            </Box>
            <Box>
              <Button
                onClick={() => setfilterTitle("Serum and Oil")}
                backgroundColor={"black"}
                color={"gold"}
              >
                Haircare |
              </Button>
            </Box>
          </Flex>
        </Stack>
      </VStack>
      <Box>
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
                    height={"350px"}
                    width={"350px"}
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
    </>
  );
};

function Rating({ rating }) {
  return (
    <Box d="flex" alignItems="center">
      <Flex>
        {" "}
        {Array(5)
          .fill("")
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: "1" }}
                  color={i < rating ? "teal.500" : "gray.300"}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return (
                <BsStarHalf
                  key={i}
                  style={{
                    marginLeft: "1",

                    Color: "black",
                  }}
                />
              );
            }
            return (
              <BsStar
                key={i}
                style={{
                  marginLeft: "1",
                  backgroundColor: "brown.1000",
                  bg: "red",
                }}
              />
            );
          })}
      </Flex>
      <Box as="span" ml="2" color="gray.600" fontSize="sm"></Box>
    </Box>
  );
}
