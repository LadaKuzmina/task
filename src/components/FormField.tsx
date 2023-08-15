import * as React from 'react';
import "../index.css"

const FormField = ({name, placeholderName, type}:{name:string, placeholderName:string, type:string}) => {
    return (
        <label>
            {name}
            <input type={type} name="email-address" placeholder={placeholderName} required/>
        </label>
    );
};

export default FormField;