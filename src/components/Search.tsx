import React from 'react';

const Search = () => {
    return (
        <form className="searchName">
            <img src="../../icons/magnifier.png" alt="magnifier" className="imageMagnifier"/>
            <input type="text" placeholder="Поиск по имени"/>
            <select>
                <option value="NameSortFirst" selected>Имя А-Я</option>
                <option value="NameSortLast">Имя Я-А</option>
                <option value="Younger">Сначала моложе</option>
                <option value="Older">Сначала старше</option>
                <option value="High">Высокий рейтинг</option>
                <option value="Low">Низкий рейтинг</option>
            </select>
        </form>
    );
};

export default Search;