import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout";
import { Users } from "../components/Users";
import { User } from "../components/User";
import { CreateUser } from "../components/CreateUser";
import { UpdateUser } from "../components/UpdateUser";
import { DeleteUser } from "../components/DeleteUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Users />,
      },
      {
        path: "/user/:id",
        element: <User />,
      },
      {
        path: "/update-user/:id",
        element: <UpdateUser />,
      },
    ],
  },
]);
