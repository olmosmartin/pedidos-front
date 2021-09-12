import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './home.css';
import { NavBar } from '../../components/navBar/NavBar'
import { FormHome } from '../../components/home/FormHome';
import { Footer } from '../../components/footer/Footer';


export const Home = () => {


    return (
        <>
        <NavBar/>
        <div className="fondo">
            <div className="container">
                <FormHome/>
            </div>
        </div>
               
        <div style={{margin:100}}>
            <h3>MAS CONTENIDO PROXIMAMENTE</h3>
        </div>
        
        <Footer/>
        </>
    )
}
