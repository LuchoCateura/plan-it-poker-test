import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Welcome from "../views/Welcome";
import CreateRoomForm from "../components/CreateRoomForm";
import PageNotFound from "../views/PageNotFound";
import Room from "../views/Room";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "welcome",
        element: <Welcome />,
      },
      {
        path: "create-room",
        element: <CreateRoomForm />,
      },
    ],
  },
  {
    path: "rooms:roomId",
    element: <Room />,
  },
]);

export default router;
