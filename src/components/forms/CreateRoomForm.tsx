import { Box, HStack, Input, VStack } from "@chakra-ui/react";
import Button from "../common/Button";
import CardValuesGrid from "../cards/CardValuesGrid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { roomNameUpdate } from "../../features/rooms/roomSlice";
import { RootState } from "../../store";

function CreateRoomForm() {
  const roomId = useSelector((state: RootState) => state.rooms.id);

  const [roomName, setRoomName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleCreateRoom() {
    dispatch(roomNameUpdate(roomName));
    navigate(`/rooms/${roomId}`);
  }

  function handleCancel() {
    navigate("/welcome")
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
        <Button clickHandler={handleCreateRoom}>Create Room</Button>
        <Button clickHandler={handleCancel}>Cancel</Button>
      </HStack>
    </Box>
  );
}

export default CreateRoomForm;
