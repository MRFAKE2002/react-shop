// libraries
import { Navigate, Route, Routes } from "react-router-dom";

// components
import Layout from "./components/layout/Layout";
import PrivateRoute from "./components/privateRoute/PrivateRoute";

// pages
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import Logout from "./pages/logout/Logout";
import { useLoginContext } from "./context/loginContext/LoginContext";

function App() {
  const { isLogin } = useLoginContext();

  return (
    // miaim az 'context function' estefade mikonim baraye tamizi code 'App.tsx' va ferestadan data 'cart' be kol project.

    <>
      {/*
        baraye in ke code kamtar inja bashe va tamiztar bashe miaim ye component Layout misazim va Navbar ya Footer ya baghie ro
        ounja mizarim va Routes ro ham besurat children mifrestim.
      */}
      <Layout>
        <Routes>
          {/*
            dar inja ma har chand ta ke bekhaim 'Route' misazim hala baraye har 'Route' bayad 2 ta props barash beferestim :
            1- masir ya 'path' hast ke tush malum mishe kodum url data ferestade beshe.
            2- yek 'element' ke component migire be oun url ke gofti ersal mishe.
          */}
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          {/*
            ma mikhaim bebinim ke 'user' da in 'Route' login hast ya na ke age nabud be 'Route login' befreste age login bud pas biad
            befreste 'Route' ke mikhast bere.
            inja dige ma niazi nist address url befrestim be 'Route' faghat kafie oun 'component' ro be onvan 'element' pas bedim.
            inja ham miaim oun 'Route' hayi ke niazi be 'login budan user' dare ro be onvan 'children' mifrestim.
          */}
          <Route element={<PrivateRoute />}>
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route
            path="/login"
            element={isLogin ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

// ChatGPT

// import React from 'react';
// import ProductDetails from './pages/singleProduct/SingleProduct';

// const App: React.FC = () => {
//   return (
//     <ProductDetails
//       name="Sample Product"
//       price={99.99}
//       description="This is a great product with excellent quality."
//       features={['High-quality materials', 'Durable', 'Available in multiple colors']}
//       imageUrl="https://static.vecteezy.com/system/resources/previews/015/413/291/original/shopping-trolley-full-of-food-fruit-products-grocery-goods-grocery-shopping-cart-buying-food-in-supermarket-illustration-for-banner-vector.jpg"
//     />
//   );
// };

// export default App;
