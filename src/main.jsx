import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
import "./index.css";
import Add from "./components/Add.jsx";
import Post from "./components/Post.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
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
