import { Box, Input, VStack } from "@chakra-ui/react";
import Button from "./common/Button";

function Start() {

  return (
    <Box
      w="500px"
      h="500px"
      border="1px"
      borderColor="gray.700"
      alignContent="center"
    >
      <VStack spacing="40px" p="40px">
        <h1>Welcome to Planit Poker Clone!</h1>
        <Input
          isRequired
          placeholder="Enter your name"
        />
        <Button>Start</Button>
      </VStack>
    </Box>
  );
}

export default Start;
