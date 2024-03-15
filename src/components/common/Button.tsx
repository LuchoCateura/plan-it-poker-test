import { Box } from "@chakra-ui/react";

function Button ({children}) {

    return (
        <Box as='button' bg='blue' w='100%' p={4} color='white' borderRadius='10px' >
            {children}
        </Box>
    )
}

export default Button;