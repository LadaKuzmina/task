import React from 'react';
import "../index.css"

const Search = () => {
    return (
        <form className="searchName">
            <img src={require("../icons/magnifier.png")} alt="magnifier" className="imageMagnifier"/>
            <input type="text" placeholder="Поиск по имени" className="search"/>
        </form>
    );
};
export default Search;