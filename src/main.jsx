import React from "react"
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

/* Styles */
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/sass/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)
