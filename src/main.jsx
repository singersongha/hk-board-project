import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
//import "./index.css";
import Add from "./components/Add.jsx";
import Post from "./components/Post.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Add />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/boards/:id",
    element: <Post />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
