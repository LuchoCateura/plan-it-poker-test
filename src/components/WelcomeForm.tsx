import { Box, Input, VStack } from "@chakra-ui/react"
import Button from "./common/Button"

function WelcomeForm () {
    return(
        <Box w='500px' h='500px' border='1px' borderColor='gray.700' alignContent='center'>
        <VStack spacing='40px' p='40px'>
            <div> 
                <h1>Let's start!</h1>
            </div>
            <p>Join a room by entering the ID</p>
            <Input placeholder='Enter room ID' />
            <Button>Enter room</Button>
            <p>You can also create a room</p>
            <Button>Create room</Button>
        </VStack>
       </Box>
    )
}

export default WelcomeForm