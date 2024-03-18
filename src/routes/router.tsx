import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Welcome from "../views/Welcome";
import CreateRoomForm from "../components/CreateRoomForm";
import PageNotFound from "../views/PageNotFound";

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
]);

export default router;
