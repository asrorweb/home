import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useState } from "react";

// components
// navigation
import Nav from "./components/navigationBar/Nav";

//

// pages
import Home from "./pages/home/Home";
import Gallary from "./pages/gallary/Gallary";
import About from "./pages/about/About";
import Design from "./pages/design/Design";
import Price from "./pages/price/Price";
import Register from "./components/access/Register";
import Login from "./components/access/Login";

function App() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    console.log({ email, password });
    return (
        <div className="dark:bg-[#1A202C] duration-500">
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/gallary" element={<Gallary />} />
                    <Route path="/design" element={<Design />} />
                    <Route path="/price" element={<Price />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
