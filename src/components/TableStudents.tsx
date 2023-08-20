import React, {useEffect, useState} from 'react';
import Row from "./Row"
import '../tableStudents.css'

const TableStudents = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://front-assignment-api.2tapp.cc/api/persons")
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
                console.log(data)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    let data = JSON.parse(JSON.stringify(posts, null, 2));
    if (data.students !== undefined) {
        return (
            <div className="listStudents">
                <table>
                    <thead>
                    <tr>
                        <th scope="col" colSpan={2}>ФИО</th>
                        <th scope="col">Специальность</th>
                        <th scope="col">Группа</th>
                        <th scope="col">Возраст</th>
                        <th scope="col">Рейтинг</th>
                        <th scope="col" colSpan={2}></th>
                    </tr>
                    </thead>
                    {data.students.map(function (student: any) {
                        console.log("0")
                        console.log(student)
                        return <Row student={student}/>
                    })}
                </table>
            </div>
        );
    } else {
        return (
            <>
            </>
        )
    }
};

export default TableStudents;