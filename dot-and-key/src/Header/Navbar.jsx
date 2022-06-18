import React, { useEffect, useState } from "react";
import {
  AddIcon,
  HamburgerIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  VStack,
  IconButton,
  Button,
  Input,
  Stack,
  AvatarGroup,
  Avatar,
  Center,
  Text,
  //   useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Navbar = () => {
  const [text, settext] = useState("");
  const [query, setquery] = useState("");
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios({
      url: " http://localhost:8080/skincare",
      method: "GET",
      params: {
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
  }, [query]);
  return (
    <>
      <VStack
        position="fixed"
        overflow={"hidden"}
        border="3px"
        bordercolor={"red"}
        body="0"
      >
        <Flex
          boxShadow={"dark-lg"}
          gap={"400"}
          border="2px"
          borderColor="black.50"
          backgroundColor="rgb(253,253,254)"
          color="white"
          justifyContent="space-between"
        >
          <Box overflow={"hidden"} marginLeft={"50px"}>
            <Menu>
              <MenuButton
                width="10"
                color="black"
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <MenuItem icon={<AddIcon />} command="⌘T" color="black">
                  New Tab
                </MenuItem>
                <MenuItem
                  color="black"
                  icon={<ExternalLinkIcon />}
                  command="⌘N"
                >
                  New Window
                </MenuItem>
                <MenuItem color="black" icon={<RepeatIcon />} command="⌘⇧N">
                  Open Closed Tab
                </MenuItem>
                <MenuItem color="black" icon={<EditIcon />} command="⌘O">
                  Open File...
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Center margin={"auto"}>
            <Box
              color="black"
              borderColor="red.500"
              height="70px"
              width="200px"
              alignItems="center"
            >
              <Image
                src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/unnamed_250x_200x_2x_260x_24408e11-6e3a-4a0c-8327-74d0455f7696_260x.jpg?v=1646547348"
                alt="noimage"
                height="100%"
                width="100%"
              />
            </Box>
          </Center>
          <Box>
            <Stack>
              <Flex gap="2">
                <Box class="topnav">
                  <Flex>
                    <Input
                      color="black"
                      type="text"
                      placeholder="Search.."
                      value={text}
                      onChange={(e) => settext(e.target.value)}
                    />
                    <Button
                      type="submit"
                      color="black"
                      onClick={() => setquery(text)}
                    >
                      <SearchIcon />
                    </Button>
                  </Flex>
                </Box>
                <Box>
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Group_346.svg?v=1655211633"
                    height="10"
                  />
                </Box>

                <Box>
                  <a
                    onclick="viewcart()"
                    href="/card"
                    class="cart_icon site-nav__link site-nav__link--icon js-drawer-open-cart js-no-transition"
                    aria-controls="CartDrawer"
                    data-icon="bag"
                    aria-expanded="false"
                  >
                    <span class="cart-link">
                      <svg
                        height="32"
                        viewBox="-35 0 512 512.00102"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m443.054688 495.171875-38.914063-370.574219c-.816406-7.757812-7.355469-13.648437-15.15625-13.648437h-73.140625v-16.675781c0-51.980469-42.292969-94.273438-94.273438-94.273438-51.984374 0-94.277343 42.292969-94.277343 94.273438v16.675781h-73.140625c-7.800782 0-14.339844 5.890625-15.15625 13.648437l-38.9140628 370.574219c-.4492192 4.292969.9453128 8.578125 3.8320308 11.789063 2.890626 3.207031 7.007813 5.039062 11.324219 5.039062h412.65625c4.320313 0 8.4375-1.832031 11.324219-5.039062 2.894531-3.210938 4.285156-7.496094 3.835938-11.789063zm-285.285157-400.898437c0-35.175782 28.621094-63.796876 63.800781-63.796876 35.175782 0 63.796876 28.621094 63.796876 63.796876v16.675781h-127.597657zm-125.609375 387.25 35.714844-340.097657h59.417969v33.582031c0 8.414063 6.824219 15.238282 15.238281 15.238282s15.238281-6.824219 15.238281-15.238282v-33.582031h127.597657v33.582031c0 8.414063 6.824218 15.238282 15.238281 15.238282 8.414062 0 15.238281-6.824219 15.238281-15.238282v-33.582031h59.417969l35.714843 340.097657zm0 0"></path>
                      </svg>
                      <span class="icon__fallback-text">Cart</span>
                      <span class="cart-link__bubble"></span>
                    </span>
                  </a>
                </Box>
                <Box height="1">
                  <Link to="/signup">
                    {/* <AvatarGroup> */}
                    <Avatar bg="teal.500" height="9" width="9" />
                    {/* </AvatarGroup> */}
                  </Link>
                </Box>
                <Box>
              
                </Box>
              </Flex>
            </Stack>
          </Box>
        </Flex>
      </VStack>
    </>
  );
};
