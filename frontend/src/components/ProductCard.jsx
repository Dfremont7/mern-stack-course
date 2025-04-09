import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
  Toast,
} from "@chakra-ui/react";
import { useColorModeValue, useToast } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import ReactImageFallback from "react-image-fallback";

import { useProductStore } from "../store/product.js";

const ProductCard = ({ product }) => {
  const TextColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");

  const { deleteProduct } = useProductStore();
  const toast = useToast();

  const handleDelete = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    }
  };

  return (
    <Box shadow={"lg"} rounded={"lg"} overflow={"hidden"} bg={bg}>
      <ReactImageFallback
        src={product.image}
        alt={product.name}
        minH={48}
        maxH={48}
        w={"100%"}
        objectFit="cover"
        fallbackImage="../../public/placeholder.svg"
      />
      <Box p={4}>
        <Heading as={"h3"} size={"md"} mb={2}>
          {product.name}
        </Heading>

        <Text color={TextColor} mb={4} fontWeight={"bold"} fontSize={"xl"}>
          ${product.price}
        </Text>

        <HStack spacing={2}>
          <IconButton icon={<EditIcon />} colorScheme="blue" />
          <IconButton
            icon={<DeleteIcon />}
            colorScheme="red"
            onClick={() => handleDelete(product._id)}
          />
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
