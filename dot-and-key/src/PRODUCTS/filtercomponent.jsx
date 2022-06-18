import { Box, Button, Center, Flex, Stack, VStack } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Filtercomponent = () => {
     const [filterTitle, setfilterTitle] = useState();
     const [data, setdata] = useState([])
     const [page, setpage] = useState(1);
       useEffect(() => {
         axios({
           url: " http://localhost:8080/skincare",
           method: "GET",
           params: {
             category: filterTitle,
             _page: page,
             _limit: 9,
           },
         })
           .then((response) => {
             setdata(response.data);
             console.log(response.data);
           })
           .catch((err) => {
             console.log(err);
           });
       }, [filterTitle, page]);
  return (
    <>
      {/* <VStack>
        <Stack marginTop={"100px"}>
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
      </VStack> */}
      
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
     
    </>
  );
}
