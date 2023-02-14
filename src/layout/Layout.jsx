import React from "react";
import Footer from "../components/shared/Footer/Footer";
import Header from "../components/shared/Header/Header";

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
