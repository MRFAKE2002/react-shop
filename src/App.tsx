// libraries
import { Route, Routes } from "react-router-dom";

// components
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Layout from "./components/layout/Layout";

function App() {
  return (
    /* 
      baraye inke code kamtar inja bashe va tamiztar bashe miaim ye component Layout misazim va Navbar ya Footer ya baghie ro 
      ounja mizarim va Routes ro ham besurat children mifrestim.
    */
    <Layout>
      <Routes>
        {/*
              dar inja ma har chand ta ke bekhaim 'Route' misazim hala baraye har 'Route' bayad 2 ta props barash befrestim :
              1- masir ya 'path' hast ke tush malum mishe kodum url data ferestade beshe.
              2- yek 'element' ke component migire be oun url ke gofti ersal mishe.
          */}
        <Route path="" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </Layout>
  );
}

export default App;
