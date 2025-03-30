import { Box, Heading, HStack, IconButton, Image, Text } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const ProductCard = ({product}) => {
  const TextColor = useColorModeValue('gray.600', 'gray.200');
  const bg =  useColorModeValue('white', 'gray.800');

  return (
    <Box shadow={'lg'} rounded={'lg'} overflow={'hidden'} bg={bg}>
      <Image src={product.image} alt={product.name} h={48} w='full' objectFit={'cover'}/>
      <Box p={4}>
        <Heading as={'h3'} size={'md'} mb={2}>
          {product.name}
        </Heading>

        <Text color={TextColor} mb={4} fontWeight={'bold'}>
          ${product.price}
        </Text> 

        <HStack spacing={2}>
          <IconButton icon={<EditIcon />} colorScheme="blue" />
          <IconButton icon={<DeleteIcon />} colorScheme="red" />
        </HStack>
      </Box>
    </Box>
  )
}

export default ProductCard;