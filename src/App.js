import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import CartState from "./context/Cart/CartState";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Cart from "./components/cart/Cart"
import CategoryHomeContainer from "./components/categories/home/CategoryHomeContainer";

function App() {
    return (
        <>
            <CartState>
                <NavBar/>
                <CategoryHomeContainer/>
                <Footer/>
            </CartState>
        </>
    );
}

export default App;
