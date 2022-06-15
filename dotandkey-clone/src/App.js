import React from 'react';
// import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import { Navbar } from './Header/Navbar';
// import { AllRoutes } from './Header/AllRoutes';
import { Box } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';

function App() {
  return (
    // <ChakraProvider theme={theme}>
      <Box>
        <Navbar />
        {/* <AllRoutes /> */}
      </Box>
    // </ChakraProvider>
  );
}

export default App;
