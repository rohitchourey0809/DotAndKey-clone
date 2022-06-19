import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Box,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";

export const Checkout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const successfull = () => {
    alert("payment successful");
    navigate("/");
  };

  return (
    <Box>
      <Button
        rounded={"none"}
        w={1500}
        mt={20}
        size={"lg"}
        py={"7"}
        colorScheme="gold"
        bg={useColorModeValue("gray.900", "gray.50")}
        onClick={onOpen}
        textTransform={"uppercase"}
        _hover={{
          transform: "translateY(2px)",
          boxShadow: "lg",
        }}
      >
        Check Out
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm PurChase</ModalHeader>
          <ModalCloseButton />
          {/* <ModalBody>
            {card.map((e) => {
              return (
                <Box key={e.id}>
                  <Flex>
                    <Box>
                      <Image
                        border={"1px solid black"}
                        rounded={"lg"}
                        src={e.image}
                        // objectFit={"contain"}
                        alt="product image"
                        boxSize={"100px"}
                      />
                    </Box>

                    <Box maxWidth={"250px"} ml="1rem">
                      <Text fontSize={"lg"}>{e.title}</Text>
                    </Box>
                    <Box maxWidth={"250px"} ml="1rem">
                      <Text fontSize={"lg"}>
                        <Button >
                          Remove Item
                        </Button>
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              );
            })}
          </ModalBody> */}

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={successfull}>
              ConFirm
            </Button>
            {/* <Button variant="ghost">ConFirm</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
