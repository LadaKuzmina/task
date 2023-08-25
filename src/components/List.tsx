import React, {useEffect, useState} from 'react';
import Header from "./Header";
import "../style/index.css"
import Search from "./Search";
import TableStudents from "./TableStudents";
import Dropdown from "./Dropdown";
import type {Student} from "../type";
import {comparerAlphabetic} from "../scripts/comparers";

const List = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://front-assignment-api.2tapp.cc/api/persons")
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    let data = JSON.parse(JSON.stringify(posts, null, 2));
    const [value, setValue] = useState("");
    const filteredStudents: Student[] = data.students !== undefined ? data.students.filter(function (student: Student) {
        return student.name.toLowerCase().includes(value)
    }) : [];

    const [selected, setSelected] = useState<string>("Имя А-Я");
    const [comparer, setComparer] = useState(() => comparerAlphabetic);
    return (
        <div>
            <Header/>
            <h1 className="titlePage">Студенты</h1>
            <Search setValue={setValue}/>
            <Dropdown selected={selected} setSelected={setSelected} setComparer={setComparer}/>
            <TableStudents filteredStudents={filteredStudents.sort(comparer)}/>
        </div>
    );
};

export default List;