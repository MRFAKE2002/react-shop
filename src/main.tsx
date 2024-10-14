// libraries
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// components
import App from "./App.tsx";

// css
import "./index.css";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* 
      dalil estefade az tag 'BrowserRouter' ine ke ma bedunim dar kodam safe budim va hastim yani mishe ham back zad ham forward va in ghabeliat tavasot 
      in tag be ma mide.
    */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
