import React, {useState} from 'react';
import Row from "./Row"
import '../tableStudents.css'
import Card from "./Card";

const TableStudents = ({filteredStudent}: any) => {
    if (filteredStudent.length !== 0) {
        return (
            <>
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
                        {filteredStudent.map(function (student: any) {
                            return <Row student={student}/>
                        })}
                    </table>
                </div>
                <div className="cardsStudents">
                    {filteredStudent.map(function (student: any) {
                        return <Card student={student}/>
                    })}
                </div>
            </>
        );
    } else {
        return (
            <>
            </>
        )
    }
};

export default TableStudents;