import { Box, HStack, Input, VStack } from "@chakra-ui/react";
import Button from "./common/Button";
import CardValuesGrid from "./common/CardValuesGrid";
import { useState } from "react";
import { useDispatch } from "react-redux";
//import { useNavigate } from "react-router-dom";
import { roomNameUpdate } from "../features/rooms/roomSlice";

function CreateRoomForm() {
  const [roomName, setRoomName] = useState("");
  const dispatch = useDispatch();
  //const navigate = useNavigate();
  
  function handleClick(){
    dispatch(roomNameUpdate(roomName));
    // navigate("/room");
  }

  return (
    <Box w="500px" h="500px" border="1px" borderColor="gray.700">
      <VStack spacing="40px" p="40px">
        <div>
          <h1>Create a new Room</h1>
        </div>
        <Input
          placeholder="Enter room name"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />
        <CardValuesGrid />
      </VStack>
      <HStack p="40px">
        <Button clickHandler={handleClick}>Create Room</Button>
        <Button>Cancel</Button>
      </HStack>
    </Box>
  );
}

export default CreateRoomForm;
