import { Flex } from "@chakra-ui/react";
import Start from "./components/forms/Start";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { Outlet } from "react-router-dom";

function App() {
  const userName = useSelector((state: RootState) => state.users.name);
  return (
    <Flex justify="center" pt="70px">
      {!userName ? <Start /> : <Outlet />}
    </Flex>
  );
}

export default App;
