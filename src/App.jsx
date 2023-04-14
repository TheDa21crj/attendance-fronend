import React from "react";
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

// PrivateRouting
import PrivateRoute from "./route/PrivateRouting";

// redux
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <Nav />
          <Routes>
            <Route exact path="/" element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Layout>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
