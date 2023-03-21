import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx";
import {HashRouter} from "react-router-dom";
import Cookies from "./components/Cookies/Cookies.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HashRouter>
            <App/>
            <Cookies/>
        </HashRouter>
    </React.StrictMode>,
)
