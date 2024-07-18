import React from "react";
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

const root = document.getElementById("root");
if (root === null) {
  throw new Error("can't find root element");
}
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
