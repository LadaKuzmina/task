import React, {useState} from 'react';
import Header from "./Header";
import "../index.css"
import Search from "./Search";
import TableStudents from "./TableStudents";
import Dropdown from "./Dropdown";

const List = () => {
    const [selected, setSelected] = useState("Имя Я-А")
    return (
        <div>
            <Header/>
            <h1 className="titlePage">Студенты</h1>
            <Search/>
            <Dropdown selected={selected} setSelected={setSelected}/>
            <TableStudents/>
        </div>
    );
};

export default List;