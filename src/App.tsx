// libraries
import { Route, Routes } from "react-router-dom";

// components
import Home from "./pages/home/Home";


function App() {
  return (
    <Routes>
      {/*
          dar inja ma har chand ta ke bekhaim 'Route' misazim hala baraye har 'Route' bayad 2 ta props barash befrestim :
          1- masir ya 'path' hast ke tush malum mishe kodum url data ferestade beshe.
          2- yek 'element' ke component migire be oun url ke gofti ersal mishe.
      */}
      <Route path="" element={<Home />} />
    </Routes>
  );
}

export default App;
