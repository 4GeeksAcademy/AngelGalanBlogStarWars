
import React from "react";
import { createRoot } from "react-dom/client";


import "../styles/index.css";


import Layout from "./layout.js";


const rootElement = document.querySelector("#app");

if (rootElement) {
    
    const root = createRoot(rootElement);

    try {
       
        root.render(<Layout />);
    } catch (error) {
        console.error("Error rendering the application:", error);
    }
} else {
    console.error("Root element not found. Make sure there is an element with id 'app' in your HTML.");
}

