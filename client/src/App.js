import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from './component/Login';
import React from "react";
import SignUp from "./component/SignUp";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignUp/>} />
                    <Route path="/login" element={<Login/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};


export default App;