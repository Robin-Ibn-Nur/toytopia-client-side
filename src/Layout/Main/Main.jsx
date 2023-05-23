import React, { useContext } from 'react';
import Header from '../../Pages/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Footer/Footer';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import PageLoader from '../../Pages/Loader/PageLoader/PageLoader';

const Main = () => {
    
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;