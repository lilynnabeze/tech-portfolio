import React from "react";
import ReactDOM from "react-dom/client";
import PortfolioWebsite from "./PortfolioWebsite"
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PortfolioWebsite />
    </BrowserRouter>
  </React.StrictMode>
);
