import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import WrappedApolloClient from "./ApolloClient";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WrappedApolloClient>
      <App />
    </WrappedApolloClient>
  </React.StrictMode>
);
