import React, {useEffect, useState} from 'react';
import Header from "./Header";
import "../index.css"
import Search from "./Search";
import TableStudents from "./TableStudents";
import Dropdown from "./Dropdown";

const List = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://front-assignment-api.2tapp.cc/api/persons")
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
                // console.log(data)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    let data = JSON.parse(JSON.stringify(posts, null, 2));
    const [value, setValue] = useState("");
    const filteredStudent: Array<object> = data.students !== undefined ? data.students.filter(function (student: any) {
        return student.name.toLowerCase().includes(value)
    }) : [];
    const [selected, setSelected] = useState("Имя А-Я");

    function comparerAlphabetic(student1: any, student2: any) {
        if (student1.name < student2.name) return -1;
        else if (student1.name > student2.name) return 1;
        return 0;
    }

    function comparerAlphabeticEnd(student1: any, student2: any) {
        if (student1.name > student2.name) return -1;
        else if (student1.name < student2.name) return 1;
        return 0;
    }

    const [comparer, setComparer] = useState(() => comparerAlphabetic);

    return (
        <div>
            <Header/>
            <h1 className="titlePage">Студенты</h1>
            <Search setValue={setValue}/>
            <Dropdown selected={selected} setSelected={setSelected} setComparer={setComparer}/>
            <TableStudents filteredStudent={filteredStudent.sort(comparer)}/>
        </div>
    );
};

export default List;