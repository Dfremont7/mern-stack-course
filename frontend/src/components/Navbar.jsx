import { Container, Flex, Text, HStack, Button, useColorMode } from "@chakra-ui/react";
import { PlusSquareIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return <Container maxW={'1140px'} px={4}>
      <Flex 
        h={16} 
        alignItems={'center'}
        justifyContent={'space-between'}
        flexDir={{
          base: 'column',
          sm: 'row'
        }}
      >
        <Text
          fontSize={{base: '22px', sm: '28px'}}
          textAlign={'center'}
          fontWeight={'bold'}
        >
          <Link to={'/'}>Store</Link>
        </Text>
        <HStack spacing={2} alignItems={'center'}>
          <Link to={'/create'} px={2}>
            <Button>
              <PlusSquareIcon />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </HStack>
      </Flex>
  </Container>
}

export default Navbar;