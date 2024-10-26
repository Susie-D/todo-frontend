import { ChakraProvider, Box, Button } from '@chakra-ui/react'

function App() {

  return (
    <ChakraProvider>
      <Box>Hi</Box>
      <Button colorScheme='purple'>Button</Button>
    </ChakraProvider>
  )
}

export default App;