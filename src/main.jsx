import ReactDOM from "react-dom/client";
import "./main.css";
import Add from "./components/Add.jsx";
import Post from "./components/Post.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/boards",
    element: <Add />,
  },
  {
    path: "/boards/:id",
    element: <Post />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
);
