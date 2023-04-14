import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useEffect, useState } from "react";

// components
// navigation
import Nav from "./components/navigationBar/Nav";

//

// pages
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import UserSet from "./pages/user/UserSet";
import Talabaruyhati from "./pages/user/talabaruyhati/Talabaruyhati";

import Register from "./components/access/Register";
import Login from "./components/access/Login";

function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(null);
    const [test, setTest] = useState(false);

    return (
        <div className="dark:bg-[#1A202C] duration-500">
            <BrowserRouter>
                <Nav test={test} email={email} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/register"
                        element={
                            <Register
                                setEmail={setEmail}
                                email={email}
                                setTest={setTest}
                            />
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <Login
                                setEmail={setEmail}
                                setTest={setTest}
                                email={email}
                            />
                        }
                    />
                    <Route path="/user" element={<User />} />
                    <Route path="/usersetings" element={<UserSet />} />
                    <Route path="/talabaruyhati" element={<Talabaruyhati />} />
                    <Route path="*" />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
