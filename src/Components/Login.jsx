import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState('')
    const [error, setError] = useState('')
    const [neok, setNeok] = useState(false)

    const login = () => {
        const body = {
            email: email,
            password: password
        }
        console.log(body)
        fetch('http://api-shop.alabuga.space/api-shop/login', {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                    res.json()
                    if (res.status == 200) {
                        setNeok(true)
                    }
                }
            )


            .then(
                (result) => {
                    setError(result.error.message)
                    props.setToken(result.data.user_token)
                },
                (errors) => {
                    setError(errors)
                }
            )

    }
    const navigate = useNavigate()
    const onSumbit = (e) => {
        e.preventDefault()
        login()
        navigate('/')

    }
    return (
        <div>
            <main>
                <div className="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center">
                    <div className="col">
                        <div className="row">
                            <form>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput"
                                           placeholder="name@example.com" value={email} onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}/>
                                    <label htmlFor="floatingInput">Email</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword"
                                           placeholder="Password" value={password} onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}/>
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>

                                <button className="w-100 btn btn-lg btn-primary mb-3" type="submit"
                                        onClick={(e) => onSumbit(e)}>Войти
                                </button>
                                <button className="w-100 btn btn-lg btn-outline-info" type="submit">Назад</button>
                            </form>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;