import React from 'react';
import "../index.css"

const ButtonAuthorization = ({wordButton, name}: { wordButton: string, name:string }) => {
    return (
        <div>
            <button type="button" className={name}>{wordButton}</button>
        </div>
    );
};

export default ButtonAuthorization;