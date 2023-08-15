import * as React from 'react';
import "../index.css"
import FormField from "./FormField";
import QuestionAuthorization from "./QuestionAuthorization";
import {useState} from "react";
import ButtonAuthorization from "./ButtonAuthorization";

const FormAutorization = ({question, link, wordAuthorization, wordButton}: {
    question: string,
    link: string,
    wordAuthorization: string,
    wordButton: string,
}) => {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show)
    }
    return (
        <div className="formAutorization">
            <form>
                <FormField type="email" name='Email' placeholderName="Enter your email"/>
                <FormField type={show ? "text" : "password"} name='Пароль' placeholderName="•••••••••••"/>
                <ButtonAuthorization name="enter" wordButton={wordButton}/>
                <QuestionAuthorization question={question} link={link}
                                       wordAuthorization={wordAuthorization}></QuestionAuthorization>
                <button className="eye" onClick={handleShow} type="button">
                    <img src={show ? "\"../../icons/eye_closed\"" : "\"../../icons/image_eye.png\""} alt="eye"/>
                </button>
            </form>
        </div>
    );
};

export default FormAutorization;