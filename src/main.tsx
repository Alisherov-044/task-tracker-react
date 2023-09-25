import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { LayoutProvider } from "./context/layoutContext.tsx";
import "./assets/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LayoutProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LayoutProvider>
  </React.StrictMode>
);
