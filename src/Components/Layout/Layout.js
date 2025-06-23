import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.css";
function Layout(){
    return(
    <div className="layout">
        <Header/>
        <div className="main-content">
            <Outlet />
        </div>
        <Footer />
    </div>)
};

export default Layout;