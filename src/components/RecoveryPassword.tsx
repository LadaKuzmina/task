import * as React from 'react';
import Circle from "./Circle";
import FormField from "./FormField";
import "../index.css"
import ButtonAuthorization from "./ButtonAuthorization";

function sendingLink() {
}

const RecoveryPassword = () => {
    return (
        <div>
            <Circle/>
            <h1 className="authorization">Восстановление пароля</h1>
            {/*имя recovery заменить на formAutorization*/}
            <div className="formAutorization">
                <p className="message">Укажите вашу почту. Мы отправим на нее письмо с ссылкой на восстановление
                    пароля.</p>
                <FormField type="email" name='Email' placeholderName="Enter your email"/>
                {/*<ButtonAuthorization name="buttonRecovery" wordButton="Отправить ссылку"/>*/}
                <button type="button" className="buttonRecovery" onClick={sendingLink} >Отправить ссылку</button>
            </div>
        </div>
    );
};

export default RecoveryPassword;