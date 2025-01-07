import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";
import { DetailPerson } from "./views/DetailPerson";
import { DetailStarShips } from "./views/DetailStarShips";
import { DetailSpecies } from "./views/DetailSpecies";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
   
    const basename = process.env.BASENAME || "";

    return (
        <BrowserRouter basename={basename}>
            <ScrollToTop>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/people/:id" element={<DetailPerson />} />
                    <Route path="/starship/:id" element={<DetailStarShips />} />
                    <Route path="/species/:id" element={<DetailSpecies />} />
                    <Route
                        path="*"
                        element={
                            <div className="text-center mt-5">
                                <h1>404 - Page Not Found</h1>
                                <p>The page you're looking for does not exist.</p>
                                <a href="/" className="btn btn-primary">
                                    Go Back Home
                                </a>
                            </div>
                        }
                    />
                </Routes>
                <Footer />
            </ScrollToTop>
        </BrowserRouter>
    );
};

export default injectContext(Layout);






