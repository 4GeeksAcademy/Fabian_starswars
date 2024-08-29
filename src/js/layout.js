import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Corregido: solo importamos lo necesario una vez
import ScrollToTop from "./component/ScrollToTop";
import injectContext from "./store/appContext";
import  Home  from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import  Navbar  from "./component/navbar";


//create your first component
const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <Router basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/demo" element={<Demo />} />
                        <Route path="/single/:theid" element={<Single />} />
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </Router>
        </div>
    );
};

export default injectContext(Layout);