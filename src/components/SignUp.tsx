import * as React from 'react';
import "../index.css"
import Circle from "./Circle";
import FormAutorization from "./FormAutorization";

const SingUp = () => {
    return (
        <>
            <Circle/>
            <h1 className="authorization">SIGN UP</h1>
            <FormAutorization question="Уже есть аккаунт?" link="/" wordAuthorization="Войти"
                              wordButton="Зарегистрироваться"/>
        </>
    )
};

export default SingUp;