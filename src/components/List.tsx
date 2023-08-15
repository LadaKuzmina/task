import React from 'react';
import Header from "./Header";
import "../index.css"
import Search from "./Search";
import TableStudents from "./TableStudents";

const List = () => {
    return (
        <div>
            <Header/>
            <h1 className="titlePage">Студенты</h1>
            <Search/>
            <TableStudents/>
        </div>
    );
};

export default List;