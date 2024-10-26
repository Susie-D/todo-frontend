import { ChakraProvider, Box, Button } from '@chakra-ui/react'
import axios from 'axios';


function App() {
const handleClick  = async () => {
  const response = await axios.post("http://localhost:5001/name", {
    name: "Susie",
  });
  console.log("Response", response.data);
}
  return (
    <ChakraProvider>
      <Box m={10}>
      <Button colorScheme='purple' onClick={handleClick}>Test Connection</Button>
      </Box>
    </ChakraProvider>
  )
}

export default App;