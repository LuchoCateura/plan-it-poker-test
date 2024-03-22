import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import CardsGrid from "../components/cards/CardsGrid";

function Room() {
  const roomName = useSelector((state: RootState) => state.rooms.name);
  return (
    <Box>
      {roomName} view
      <CardsGrid/>
      {/* <StoriesSideBar/> */}
      {/* <StoriesStatusBox/> */}
    </Box>
  );
}

export default Room;
