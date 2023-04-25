import React from 'react';

const Registration = () => {
    return (

        <>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center">
                <div className="col">
                    <div className="row">
                        <form>
                            <h1 className="h3 mb-3 fw-normal">Пожалуйста заполните все поля</h1>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingFio" placeholder="ФИО"/>
                                <label htmlFor="floatingFio">ФИО</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput"
                                       placeholder="name@example.com"/>
                                    <label htmlFor="floatingInput">Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword"
                                       placeholder="Password"/>
                                <label htmlFor="floatingPassword">Password</label>
                            </div>

                            <button className="w-100 btn btn-lg btn-primary mb-3" type="submit">Зарегистрироваться
                            </button>
                            <button className="w-100 btn btn-lg btn-outline-info" type="submit">Назад</button>
                        </form>
                    </div>

                </div>
            </div>
        </>

);
};

export default Registration;