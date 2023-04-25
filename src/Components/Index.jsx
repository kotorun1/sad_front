import React, {useEffect} from 'react';

const Index = (props) => {
    useEffect(() => {
        props.getProducts()
    }, [])
    return (
        <>
            <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 className="display-4 fw-normal">Каталог товаров</h1>
            </div>
            <main>
                <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                    {props.products.map((item) =>
                        <div className="col" key={item.id}>
                            <div className="card mb-4 rounded-3 shadow-sm">
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">{item.name}</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title">{item.price}р.</h1>
                                    <p>{item.description}</p>
                                    <button type="button" className="w-100 btn btn-lg btn-outline-primary rotate"
                                            onClick={() => props.addProductinCart(item.id)}>Добавить в
                                        корзину
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </main>
        </>
    );
};

export default Index;