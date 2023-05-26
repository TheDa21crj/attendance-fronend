import React from "react";
import ReactDOM from "react-dom/client";

// Components
import App from "./App";

// state
import { AuthContextProvider } from "./store/auth-context";

// css
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
