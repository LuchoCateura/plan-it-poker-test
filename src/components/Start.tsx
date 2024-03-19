import { Box, Input, VStack } from "@chakra-ui/react";
import Button from "./common/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userNameUpdate } from "../features/users/userSlice";
import { useNavigate } from "react-router-dom";

function Start() {
  const [userName, setUserName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleStart() {
    if (!userName) {
      return;
    }

    dispatch(userNameUpdate(userName));
    navigate("/welcome");
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
        <h1>Welcome to Planit Poker Clone!</h1>
        <Input
          isRequired
          placeholder="Enter your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <Button clickHandler={handleStart}>Start</Button>
      </VStack>
    </Box>
  );
}

export default Start;
