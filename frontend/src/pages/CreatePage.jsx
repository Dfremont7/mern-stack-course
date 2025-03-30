import { VStack, Container, Heading, useColorModeValue, Box, Input, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";

import { useProductStore } from "../store/product.js";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: ''
  });

  const toast = useToast();
  const {createProduct} = useProductStore();

  const handleAddProduct = async () => {
    const {success, message} = await createProduct(newProduct);
    if (!success) {
      toast({
        title: 'Error',
        description: message,
        status: 'error',
        isClosable: true
      })
    } else {
      toast({
        title: 'Success',
        description: message,
        status: 'success',
        isClosable: true
      })
    }

    setNewProduct({
      name: '',
      price: '',
      image: ''
    });
 }

  return (
    <Container maxW={'container.sm'}>
      <VStack spacing={'8px'}>
        <Heading as={'h1'} size={'2xl'} mb={'8px'}>Create new product</Heading>
        <Box as={'form'} w={'full'} bg={useColorModeValue('white', 'gray.800')} p={'6'} rounded={'lg'} shadow={'md'}>
          <VStack spacing={'4'}>
            <Input type={'text'} placeholder={'Name'} value={newProduct.name} onChange={(e) => setNewProduct({...newProduct, name: e.target.value})} />
            <Input type={'number'} placeholder={'Price'} value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price: e.target.value})} />
            <Input type={'text'} placeholder={'Image'} value={newProduct.image} onChange={(e) => setNewProduct({...newProduct, image: e.target.value})} />
            <Button onClick={handleAddProduct} w={'full'}>Create</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage;