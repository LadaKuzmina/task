import React from 'react';
import Row from "./Row"
import '../style/tableStudents.css'
import Card from "./Card";
import type {Student} from "../type";

const TableStudents = ({filteredStudents}: { filteredStudents: Student[] }) => {
    if (filteredStudents.length !== 0) {
        return (
            <>
                <div className="listStudents">
                    <div className="headingsTable">
                        <div className="fioHeading">ФИО</div>
                        <div className="specializationHeading">Специальность</div>
                        <div className="groupHeading">Группа</div>
                        <div className="ageHeading">Возраст</div>
                        <div className="ratingHeading">Рейтинг</div>
                    </div>
                    <table>
                        <thead>
                        <tr>
                            <th scope="col" colSpan={2} style={{width: "30%"}}></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col" colSpan={2} style={{width: "5%"}}></th>
                        </tr>
                        </thead>
                        {filteredStudents.map(function (student: Student) {
                            return <Row student={student}/>
                        })}
                    </table>
                </div>
                <div className="cardsStudents">
                    {filteredStudents.map(function (student: Student) {
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