import React from 'react';
import { Box, ButtonGroup, Button, Flex } from '@chakra-ui/react';

const Header = () => {
  return (    
    <>
  <Box 
    className="boxContainer"
    bgSize="cover" 
    display='flex'        
    alignItems='end'
    justifyContent='center'
    w='900px'
    h='300px'
    py={12}
    bgImage="url('/src/Image/amanecer-bicicleta-ciclista-cielo-1619299.jpg')"
    bgPosition='center'
    bgRepeat='no-repeat'
    mb={2}    
  >
    <Flex
        direction='column'
        align='center'
        justify='space-between'
        h='50%'
    >
    <h1 style={{ fontSize: '2em', color: 'white' }}>DOMINA EL TERRENO</h1>

        <ButtonGroup mt={4} gap='4' className="buttonGroupContainer">
            <Button colorScheme='whiteAlpha'>VER DETALLES</Button>
            <Button colorScheme='whiteAlpha'>VER VIDEO</Button>
        </ButtonGroup>
    </Flex> 
  </Box> 
  
  <Box     
    bgSize="cover" 
    display='flex'        
    alignItems='end'
    justifyContent='center'
    w='300px'
    h='300px'
    py={12}
    bgImage="url('/src/Image/amanecer-bicicleta-ciclista-cielo-1619299.jpg')"
    bgPosition='center'
    bgRepeat='no-repeat'
    mb={2}    
  >
    <Flex
        direction='column'
        align='center'
        justify='space-between'
        h='50%'
    >
    <h1 style={{ fontSize: '1.5em', color: 'white' }}>DOMINA EL TERRENO</h1>

        <ButtonGroup mt={4} gap='4' className="buttonGroupContainerA">
            <Button colorScheme='whiteAlpha'>VER DETALLES</Button>
            <Button colorScheme='whiteAlpha'>VER VIDEO</Button>
        </ButtonGroup>
    </Flex> 
  </Box> 
  
  </> 
 );
};

export default Header;

  