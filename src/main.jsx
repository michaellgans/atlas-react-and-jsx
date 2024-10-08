// Entry point into the React App: index.html

import "./index.css";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";

// Render the App component to the root element
const div = document.getElementById("root");
const root = ReactDOM.createRoot(div);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
