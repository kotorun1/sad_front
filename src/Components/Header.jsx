import React from 'react';
import {Link} from "react-router-dom";

const Header = (props) => {

    return (
        <>
            <header>
                <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                    <Link to={'/'} className="d-flex align-items-center text-dark text-decoration-none">
                        <span className="fs-4 rotate">«Just buy»</span>
                    </Link>

                    <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                        {props.isAuth == true ? <>
                                <Link className="me-3 py-2 text-dark text-decoration-none rotate" to={'/order'}>Мои
                                    заказы</Link>
                                <Link className="me-3 py-2 text-dark text-decoration-none rotate"
                                      to={'/cart'}>Корзина</Link>
                                <Link className="me-3 py-2 text-dark text-decoration-none rotate"
                                      to={'/login'}><span>Выход</span></Link>
                            </> :
                            <>
                                <Link className="me-3 py-2 text-dark text-decoration-none rotate"
                                      to={'/login'}><span>Авторизация</span></Link>
                                <Link className="me-3 py-2 text-dark text-decoration-none rotate"
                                      to={'/signup'}>Регистрация</Link>
                            </>
                        }


                    </nav>
                </div>


            </header>
        </>
    );
};

export default Header;