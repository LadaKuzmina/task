import React, {useState} from 'react';
import Row from "./Row"
import '../tableStudents.css'
import Card from "./Card";

const TableStudents = ({filteredStudent}: any) => {
    if (filteredStudent.length !== 0) {
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
                            <th scope="col" colSpan={2} style={{width:"5%"}}></th>
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