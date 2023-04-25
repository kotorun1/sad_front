import React, {useEffect} from 'react';
import {Link} from "react-router-dom";


const Cart = (props) => {

    useEffect(() => {
        props.getProductsInCart()
    }, [])


    return (<>
            <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 class="display-4 fw-normal">Корзина</h1>
            </div>

            <main>
                <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                    {props.productsIncart.map((item) =>
                        <div className="col" key={item.id}>
                            <div className="card mb-4 rounded-3 shadow-sm">
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">{item.name}</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title">{item.price}р.<small
                                        className="text-muted fw-light"> &times; 2
                                        шт.</small></h1>
                                    <p>{item.description}</p>

                                    <button type="button" className="btn btn-lg btn-info mb-3">+</button>
                                    <button type="button" className="btn btn-lg btn-warning mb-3">&minus;</button>
                                    <button type="button" className="btn btn-lg btn-outline-danger mb-3"
                                            onClick={() => props.deleteProductinCart(item.id)}>Удалить из
                                        корзины
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
                <div class="row justify-content-center gap-1">
                    <h2 class="mb-5">Итоговая стоимость: 600р.</h2>
                    <Link to={'/'} className="col-6  mb-3 rotate">
                        <button className='btn btn-lg btn-outline-info' type="button">Назад</button>
                    </Link>

                    <button type="button" class="col-6 btn btn-lg btn-primary mb-3" onClick={()=> props.orderPost()}>Оформить заказ</button>

                </div>
            </main>

        </>

    );
};

export default Cart;