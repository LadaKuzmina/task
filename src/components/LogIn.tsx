import React from 'react';
import Circle from "./Circle";
import FormAutorization from "./FormAutorization";

const LogIn = () => {
    return (
        <div>
            <Circle/>
            <h1 className="authorization">LOG IN</h1>
            <FormAutorization question="Нет аккаунта?" link="/sign" wordAuthorization="Зарегистрироваться"
                              wordButton="Войти"/>
        </div>
    );
};

export default LogIn;