import { Box, Input, VStack } from "@chakra-ui/react";
import Button from "../common/Button";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";

function WelcomeForm() {
  const userName = useSelector((state: RootState) => state.users.name);
  const navigate = useNavigate();

  function handleCreateRoom() {
    if (!userName) {
      return;
    }
    navigate("/create-room");
  }

  return (
    <Box
      w="500px"
      h="500px"
      border="1px"
      borderColor="gray.700"
      alignContent="center"
    >
      <VStack spacing="40px" p="40px">
        <div>
          <h1>Hello there, {userName}! You can enter a room or create one!</h1>
        </div>
        <p>Join a room by entering the ID</p>
        <Input placeholder="Enter room ID" />
        <Button>Enter room</Button>
        <p>Create a room</p>
        <Button clickHandler={handleCreateRoom}>Create room</Button>
      </VStack>
    </Box>
  );
}

export default WelcomeForm;
