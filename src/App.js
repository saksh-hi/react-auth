import React from "react";
import { Signup } from "./components/Signup";
import Signin from "./components/Signin";
import UserDetails from "./components/UserDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
    return (
        <div className="container mt-5">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<UserDetails />}/>
                    <Route path="/signup" element={<Signup />}/>
                    <Route path="/signin" element={<Signin />}/>
                </Routes>
            </BrowserRouter>
           
        </div>
    );
};

export default App;