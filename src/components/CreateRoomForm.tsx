import { Box, HStack, Input, VStack } from "@chakra-ui/react";
import Button from "./common/Button";
import CardValuesGrid from "./common/CardValuesGrid";

function CreateRoomForm() {
  return (
    <Box w="500px" h="500px" border="1px" borderColor="gray.700">
      <VStack spacing="40px" p="40px">
        <div>
          <h1>Create a new Room</h1>
        </div>
        <Input placeholder="Enter room name" />
        <CardValuesGrid />
      </VStack>
      <HStack p="40px">
        <Button>Create Room</Button>
        <Button>Cancel</Button>
      </HStack>
    </Box>
  );
}

export default CreateRoomForm;
