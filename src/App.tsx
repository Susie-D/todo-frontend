import { ChakraProvider, Box, Button } from '@chakra-ui/react'
import axios from 'axios';


function App() {
const handleClick  = async () => {
  const response = axios.get('http://localhost:5001');
  console.log("Response", response);
}
  return (
    <ChakraProvider>
      <Box>Hi</Box>
      <Button colorScheme='purple' onClick={handleClick}>Button</Button>
    </ChakraProvider>
  )
}

export default App;