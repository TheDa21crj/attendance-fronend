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
import MyAccount from "./Pages/MyAccount";
import Attendence from "./Pages/Attendence";

// state
import AuthContext from "./store/auth-context";

// axios
import axios from "axios";

// defaults baseURL
axios.defaults.baseURL = "https://attendance-re44.onrender.com";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Layout>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          {authCtx.isLoggedIn && (
            <Route path="/Attendence" element={<Attendence />} />
          )}
          {authCtx.isLoggedIn && (
            <Route path="/MyAccount" element={<MyAccount />} />
          )}
          {!authCtx.isLoggedIn && (
            <Route path="/Register" element={<Register />} />
          )}
          {!authCtx.isLoggedIn && <Route path="/Login" element={<Login />} />}
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
