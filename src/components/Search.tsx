import React from 'react';
import "../style/index.css"

const Search = ({setValue}: { setValue: any }) => {
    return (
        <form className="searchName">
            <img src={require("../icons/magnifier.png")} alt="magnifier" className="imageMagnifier"/>
            <input type="text" placeholder="Поиск по имени" className="search"
                   onChange={(event) => {
                       setValue(event.target.value)
                   }}
            />
        </form>
    );
};
export default Search;