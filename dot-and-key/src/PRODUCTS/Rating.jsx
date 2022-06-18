import { Box, Flex } from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Rating = ({ rating }) => {
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
};
