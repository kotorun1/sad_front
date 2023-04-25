import React, {useState} from 'react';
import Index from "./Index";
import Header from "./Header";
import Footer from "./Footer";
import Cart from "./Cart";
import Order from "./Order";
import Registration from "./Registration";
import Login from './Login'
import {Routes, Route} from "react-router-dom";


const Core = () => {
    const API_URL = 'http://api-shop.alabuga.space/api-shop/'
    const [products, setProducts] = useState([])
    const [errors, setErrors] = useState([])
    const [productsIncart, setProductsIncart] = useState([])
    const [productsInOrder, setProductsInOrder] = useState([])
    const [token, setToken] = useState('$2y$10$8F44ziazoCFKgpZKXKK/EeU1vQ9hmMLlu10b5mt92gxf5c7jZzuui')
    const [isAuth, setIsAuth] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)


    const getProducts = () => {
        fetch(API_URL + 'products')
            .then(res => res.json())
            .then((result =>{
                        setProducts(result.data)
                        setIsLoaded(true)
            }

                ),
                (errors => setErrors(errors))
            )
    }

    const addProductinCart = (pk) => {
        fetch(API_URL + 'cart/' + pk, {
            method: 'POST',
            headers: {
                "Authorization": "Bearer " + token
            }
        })
    }
    const orderPost = () => {
        fetch(API_URL + 'order', {
            method: 'POST',
            headers: {
                "Authorization": "Bearer " + token
            }
        })
    }
    const deleteProductinCart = async (pk) => {
        fetch(API_URL + 'cart/' + pk, {
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer " + token
            }
        })
        await getProductsInCart()
    }

    const getProductsInCart = () => {
        fetch(API_URL + 'cart', {
            headers: {
                "Authorization": "Bearer " + token
            }
        })
            .then(res => res.json())
            .then((result => setProductsIncart(result.data)), (errors => setErrors(errors)))
    }
    const getProductsInOrder = () => {
        fetch(API_URL + 'order', {
            headers: {
                "Authorization": "Bearer " + token
            }
        })
            .then(res => res.json())
            .then((result => {
                setProductsInOrder(result.data)
                setIsLoaded(true)
            }), (errors => setErrors(errors)))
    }




    return (<>
        {isLoaded == false&&<div className='rotate loader'>Я ЛОАДЕР</div>}
        <Header isAuth={isAuth} setIsAuth={setIsAuth}/>
        <Routes>
            <Route element={<Index products={products} getProducts={getProducts} addProductinCart={addProductinCart}/>}
                   path={'/'}/>
            <Route element={<Cart productsIncart={productsIncart} getProductsInCart={getProductsInCart} deleteProductinCart ={deleteProductinCart} orderPost ={orderPost}/>}
                   path={'/cart'}/>
            <Route element={<Login setToken = {setToken}/>}
                   path={'/login'}/>
            <Route element={<Order productsInOrder={productsInOrder} getProductsInOrder={getProductsInOrder} products={products} />}
                   path={'/order'}/>
            <Route element={<Registration  />}
                   path={'/signup'}/>
        </Routes>
        <Footer/>
    </>);
};

export default Core;