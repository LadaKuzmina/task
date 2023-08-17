import React, {useEffect, useState} from 'react';
import Row from "./Row"
import '../tableStudents.css'


const TableStudents = () => {
    function _calculateAge(birthday_string: string) {
        let birthday = new Date(birthday_string);
        let ageDifMs = Date.now() - birthday.getTime();
        let ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

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
    if (data.students !== undefined) {
        console.log((data.students)[0]);
    }
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
                    <Row data={data} count={0}/>
                    <Row data={data} count={1}/>
                    <Row data={data} count={2}/>
                    <Row data={data} count={3}/>
                    <Row data={data} count={4}/>
                    <Row data={data} count={5}/>
                    <Row data={data} count={6}/>
                    <Row data={data} count={7}/>
                    <Row data={data} count={8}/>
                    <Row data={data} count={9}/>
                    </thead>
                </table>
            </div>
        );
    } else {
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th scope="col">ФИО</th>
                        <th scope="col">Специальность</th>
                        <th scope="col">Группа</th>
                        <th scope="col">Возраст</th>
                        <th scope="col">Рейтинг</th>
                    </tr>
                    <tr>
                        <td>a</td>
                    </tr>
                    </thead>
                </table>
            </div>
        )
    }
};

export default TableStudents;