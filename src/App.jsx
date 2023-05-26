import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Layout
import Layout from "./Pages/Layout";

// Fixed Components
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

// Components
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Error from "./Pages/Error";
import Register from "./Pages/Register";

// state
import AuthContext from "./store/auth-context";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
