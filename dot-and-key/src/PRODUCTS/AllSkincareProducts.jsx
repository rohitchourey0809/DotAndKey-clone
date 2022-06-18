import { Box } from "@chakra-ui/react";
import React from "react";
import { CategoryComponent } from "./CataegoryCard";

export const Bodycare = () => {
  return (
    <Box>
      <CategoryComponent categoryprop="Skin Glow" />
    </Box>
  );
};

export const Haircare = () => {
  return (
    <Box>
      <CategoryComponent categoryprop="Acne" />
    </Box>
  );
};

export const Neutrition = () => {
  return (
    <Box>
      <CategoryComponent categoryprop="Clay Masks" />
    </Box>
  );
};
export const Serum = () => {
  return (
    <Box>
      <CategoryComponent categoryprop="Serum and Oil" />
    </Box>
  );
};

export const Moisturizer = () => {
  return (
    <Box>
      <CategoryComponent categoryprop="Moisturizer" />
    </Box>
  );
};
