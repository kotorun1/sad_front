import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

const Order = (props) => {
    useEffect(() => {
        props.getProductsInOrder()
        console.log(props.productsInOrder)
    }, [])
    return (
        <>
            <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 class="display-4 fw-normal">Ваши заказы</h1>
            </div>

            <main>
                <div class="row row-cols-1 row-cols-md-3 mb-3 text-center bg-light">
                    {props.productsInOrder.map((item) =>
                        <div key={item.id}>
                            <h2 className="w-100">Заказ №{item.id}</h2>
                            <div className="col">
                                {item.products.map((card)=>
                                    <>
                                    < div className="card mb-4 rounded-3 shadow-sm">
                                    <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">Название товара </h4>
                                    </div>
                                    <div className="card-body">
                                    <h1 className="card-title pricing-card-title">100 р.<small
                                    className="text-muted fw-light"> &times; 2 шт.</small></h1>
                                    <p>описание</p>
                                    </div>
                                    </div>
                                    </>
                                    )}

                            </div>
                        </div>
                    )}


                    <h2 class="w-100">Итоговая стоимость: 600р.</h2>
                </div>

                <div class="row justify-content-center gap-1">
                    <Link to={'/'} className="col-6  mb-3 rotate">
                        <button className='btn btn-lg btn-outline-info' type="button">Назад</button>
                    </Link>
                </div>
            </main>
        </>
    )
        ;
};

export default Order;