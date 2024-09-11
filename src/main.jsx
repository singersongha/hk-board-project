import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import App from "./App.jsx";
//import "./index.css";
import Add from "./components/Add";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Add />
  </StrictMode>
);
