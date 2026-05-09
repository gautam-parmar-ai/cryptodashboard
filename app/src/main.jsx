import { Button, ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { system } from "./theme/index.js";
import { BrowserRouter } from "react-router";
import AuthProvider from "./provider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ChakraProvider value={system}>
        <App />
      </ChakraProvider>
    </AuthProvider>
  </StrictMode>,
);
