import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as React from 'react';
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import CategoryHomeContainer from "./components/categories/home/CategoryHomeContainer";

function App() {
    return (
        <>

            <NavBar/>
            <CategoryHomeContainer/>
            <Footer/>
        </>
    );
}

export default App;
